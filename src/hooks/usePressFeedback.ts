import { useEffect } from "react";

const controls = 'a[href], button, [role="button"], [role="tab"]';

/** Consistent touch/pen/mouse feedback, including browsers with delayed :active. */
export function usePressFeedback() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let pressed: HTMLElement | null = null;
    let pointerId: number | null = null;
    let originX = 0;
    let originY = 0;
    let startedAt = 0;
    let releaseTimer: ReturnType<typeof setTimeout> | undefined;

    const clear = () => {
      clearTimeout(releaseTimer);
      pressed?.removeAttribute("data-pressed");
      pressed = null;
      pointerId = null;
    };

    const press = (target: EventTarget | null) => {
      clear();
      if (reducedMotion.matches || !(target instanceof Element)) return;
      const control = target.closest<HTMLElement>(controls);
      if (!control || control.matches(':disabled, [aria-disabled="true"]')) return;
      pressed = control;
      startedAt = performance.now();
      control.setAttribute("data-pressed", "true");
    };

    const release = () => {
      if (!pressed) return;
      clearTimeout(releaseTimer);
      // Even a quick tap gets one short press before the soft release transition.
      releaseTimer = setTimeout(clear, Math.max(0, 90 - (performance.now() - startedAt)));
    };

    const onPointerDown = (event: PointerEvent) => {
      if (!event.isPrimary || event.button !== 0) return;
      press(event.target);
      pointerId = event.pointerId;
      originX = event.clientX;
      originY = event.clientY;
    };
    const onPointerMove = (event: PointerEvent) => {
      if (!pressed || event.pointerId !== pointerId) return;
      if (Math.hypot(event.clientX - originX, event.clientY - originY) > 10) clear();
    };
    const onPointerUp = (event: PointerEvent) => {
      if (event.pointerId === pointerId) release();
    };
    const onPointerCancel = (event: PointerEvent) => {
      if (event.pointerId === pointerId) clear();
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.repeat || !(event.target instanceof Element)) return;
      if (event.key === "Enter" || (event.key === " " && event.target.matches('button, [role="button"], [role="tab"]'))) {
        press(event.target);
      }
    };
    const onKeyUp = (event: KeyboardEvent) => {
      if (pointerId === null && (event.key === "Enter" || event.key === " ")) release();
    };

    document.addEventListener("pointerdown", onPointerDown, { passive: true });
    document.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("pointerup", onPointerUp, { passive: true });
    document.addEventListener("pointercancel", onPointerCancel, { passive: true });
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("keyup", onKeyUp);
    document.addEventListener("scroll", clear, { passive: true, capture: true });
    window.addEventListener("blur", clear);
    reducedMotion.addEventListener("change", clear);
    return () => {
      clear();
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerup", onPointerUp);
      document.removeEventListener("pointercancel", onPointerCancel);
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("keyup", onKeyUp);
      document.removeEventListener("scroll", clear, true);
      window.removeEventListener("blur", clear);
      reducedMotion.removeEventListener("change", clear);
    };
  }, []);
}
