import { CSSProperties, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { NavigasiUtama } from "../components/NavigasiMenu";
import Footer from "../variants/p1/components/Footer";
import { tautanWhatsApp } from "../config/kontak";
import { createGame, flap, Game, Phase, stepGame, WORLD } from "../game/flappy";
import { GameAudio } from "../game/audio";
import styles from "./Minigame.module.css";

const logo = "/assets/p1/Logo-Thalita-1-removebg-preview-2@2x.png";
const rewardKey = "thalitha-flappy-10-pipes-reward";
const claimLink = `${tautanWhatsApp}?text=${encodeURIComponent("Halo Thalitha! Saya berhasil melewati 10 pipa di minigame dan mendapatkan potongan Rp5.000. Saya ingin menukarkannya untuk pesanan saya. Mohon konfirmasi penukarannya ya!")}`;

function draw(ctx: CanvasRenderingContext2D, game: Game, chicken: HTMLCanvasElement | null) {
  const { width, height, floor } = WORLD;
  ctx.clearRect(0, 0, width, height);
  const sky = ctx.createLinearGradient(0, 0, 0, height);
  sky.addColorStop(0, "#dff4ec"); sky.addColorStop(1, "#fff9dc");
  ctx.fillStyle = sky; ctx.fillRect(0, 0, width, height);
  ctx.fillStyle = "rgba(255,255,255,.8)";
  for (const [x, y] of [[48, 95], [260, 62], [205, 340]]) {
    ctx.beginPath(); ctx.ellipse(x, y, 40, 13, 0, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(x - 5, y - 10, 18, 0, Math.PI * 2); ctx.fill();
  }
  ctx.fillStyle = "#c8dfb7";
  ctx.beginPath(); ctx.ellipse(70, floor + 30, 200, 85, 0, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = "#b5d49d";
  ctx.beginPath(); ctx.ellipse(330, floor + 25, 180, 90, 0, 0, Math.PI * 2); ctx.fill();
  for (const pipe of game.pipes) {
    const top = pipe.center - WORLD.gap / 2;
    const bottom = pipe.center + WORLD.gap / 2;
    ctx.fillStyle = "#386e57";
    ctx.fillRect(pipe.x, 0, WORLD.pipeWidth, top);
    ctx.fillRect(pipe.x, bottom, WORLD.pipeWidth, floor - bottom);
    ctx.fillStyle = "#4c8965";
    ctx.fillRect(pipe.x + 7, 0, 10, top);
    ctx.fillRect(pipe.x + 7, bottom, 10, floor - bottom);
    ctx.fillStyle = "#063a23";
    ctx.fillRect(pipe.x - 3, top - 16, WORLD.pipeWidth + 6, 16);
    ctx.fillRect(pipe.x - 3, bottom, WORLD.pipeWidth + 6, 16);
    ctx.fillStyle = "#ffd447";
    ctx.fillRect(pipe.x - 3, top - 5, WORLD.pipeWidth + 6, 5);
    ctx.fillRect(pipe.x - 3, bottom, WORLD.pipeWidth + 6, 5);
  }
  ctx.fillStyle = "#8eaf75"; ctx.fillRect(0, floor, width, 5);
  ctx.fillStyle = "#ede5cf"; ctx.fillRect(0, floor + 5, width, height - floor);
  if (chicken) {
    ctx.save(); ctx.translate(WORLD.x, game.y);
    ctx.rotate(Math.max(-.3, Math.min(.55, game.velocity / 850)));
    ctx.scale(-1, 1); // The original mascot faces left; face the upcoming obstacles.
    ctx.drawImage(chicken, -27, -23, 54, 46); ctx.restore();
  }
}

function Fireworks() {
  const colors = ["#ffd447", "#ff5364", "#18c987", "#fff", "#ff9a3c"];
  return createPortal(<div className={styles.celebration} data-celebration="true">
    <div className={styles.fireworks} aria-hidden="true">
      {[[12, 24], [85, 18], [20, 74], [78, 80], [50, 10], [8, 49], [93, 48], [45, 90]].map(([x, y], burst) =>
        <div className={styles.burst} key={burst} style={{ left: `${x}%`, top: `${y}%`, "--delay": `${burst * .17}s` } as CSSProperties}>
          {Array.from({ length: 28 }, (_, i) => <i key={i} style={{ "--angle": `${i * 360 / 28}deg`, "--color": colors[i % colors.length], "--distance": `${130 + (i % 3) * 35}px` } as CSSProperties} />)}
        </div>)}
      {Array.from({ length: 60 }, (_, i) => <span className={styles.confetti} key={i} style={{ left: `${i * 100 / 60}%`, "--delay": `${(i % 12) * .12}s`, "--color": colors[i % colors.length], "--drift": `${(i % 2 ? 1 : -1) * (30 + i % 5 * 15)}px` } as CSSProperties} />)}
    </div>
    <div className={styles.surprise} role="status"><b>✦ KEJUTAN! Potongan Rp5.000 ✦</b><span>10 pipa terlewati! Hadiah tersimpan. Terus terbang!</span></div>
  </div>, document.body);
}

export default function Minigame() {
  const canvas = useRef<HTMLCanvasElement>(null);
  const game = useRef(createGame());
  const sprite = useRef<HTMLCanvasElement | null>(null);
  const [phase, setPhase] = useState<Phase>("ready");
  const [elapsed, setElapsed] = useState(0);
  const [score, setScore] = useState(0);
  const [asset, setAsset] = useState<"loading" | "ready" | "error">("loading");
  const [celebrating, setCelebrating] = useState(false);
  const sound = useRef<GameAudio | null>(null);
  const [muted, setMuted] = useState(() => {
    try { return localStorage.getItem("thalitha-game-muted") === "true"; } catch { return false; }
  });
  const [expanded, setExpanded] = useState(false);
  const [reward, setReward] = useState(() => {
    try { return sessionStorage.getItem(rewardKey) === "earned"; } catch { return false; }
  });
  const actionButton = useRef<HTMLButtonElement>(null);
  const previousPhase = useRef<Phase>("ready");

  useEffect(() => {
    const audio = new GameAudio(); sound.current = audio;
    return () => { audio.dispose(); sound.current = null; };
  }, []);
  useEffect(() => { sound.current?.setMuted(muted); }, [muted]);
  useEffect(() => { sound.current?.setPlaying(phase === "playing"); }, [phase]);
  useEffect(() => {
    if (!celebrating) return;
    const timer = window.setTimeout(() => setCelebrating(false), 5500);
    return () => window.clearTimeout(timer);
  }, [celebrating]);

  useEffect(() => {
    if (!expanded) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    if (game.current.phase === "playing") canvas.current?.focus({ preventScroll: true });
    else actionButton.current?.focus({ preventScroll: true });
    return () => { document.body.style.overflow = previousOverflow; };
  }, [expanded]);

  function render() {
    const ctx = canvas.current?.getContext("2d");
    if (ctx) draw(ctx, game.current, sprite.current);
  }

  useEffect(() => {
    let active = true;
    const img = new Image();
    img.onload = () => {
      if (!active) return;
      // Clip the actual chicken from the existing logo, preserving its original artwork.
      const cutout = document.createElement("canvas");
      cutout.width = 168; cutout.height = 128;
      const ctx = cutout.getContext("2d");
      if (!ctx) { setAsset("error"); return; }
      ctx.scale(2, 2); ctx.translate(-28, -29);
      ctx.beginPath();
      ctx.moveTo(28, 61); ctx.lineTo(37, 53); ctx.lineTo(40, 45);
      ctx.bezierCurveTo(30, 35, 48, 26, 52, 33);
      ctx.bezierCurveTo(61, 26, 66, 35, 59, 42);
      ctx.lineTo(76, 58); ctx.bezierCurveTo(87, 49, 102, 49, 105, 59);
      ctx.bezierCurveTo(113, 60, 113, 74, 105, 88);
      ctx.lineTo(44, 91); ctx.lineTo(38, 64); ctx.closePath(); ctx.clip();
      ctx.drawImage(img, 0, 0, 148, 148);
      sprite.current = cutout; setAsset("ready"); render();
    };
    img.onerror = () => { if (active) setAsset("error"); };
    img.src = logo;
    const resize = () => {
      if (!canvas.current) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.current.width = WORLD.width * dpr;
      canvas.current.height = WORLD.height * dpr;
      canvas.current.getContext("2d")?.setTransform(dpr, 0, 0, dpr, 0, 0);
      render();
    };
    resize(); window.addEventListener("resize", resize);
    return () => { active = false; window.removeEventListener("resize", resize); };
  }, []);

  useEffect(() => {
    if (phase !== "playing") return;
    let frame = 0, last = performance.now(), accumulator = 0, lastTick = -1, lastScore = -1;
    const pause = () => {
      if (game.current.phase === "playing") { game.current.phase = "paused"; setPhase("paused"); }
    };
    const visibility = () => { if (document.hidden) pause(); };
    const tick = (now: number) => {
      if (game.current.phase !== "playing") return;
      const delta = (now - last) / 1000; last = now;
      if (delta > .5) { pause(); return; }
      accumulator += Math.min(delta, .1);
      const hadReward = game.current.rewardEarned;
      while (accumulator >= 1 / 120 && game.current.phase === "playing") {
        stepGame(game.current, 1 / 120); accumulator -= 1 / 120;
      }
      render();
      const tenth = Math.floor(game.current.elapsed * 10);
      if (tenth !== lastTick) { setElapsed(game.current.elapsed); lastTick = tenth; }
      if (game.current.score !== lastScore) { setScore(game.current.score); lastScore = game.current.score; }
      if (!hadReward && game.current.rewardEarned) {
        setReward(true); setCelebrating(true); sound.current?.celebrate();
        try { sessionStorage.setItem(rewardKey, "earned"); } catch { /* Play still works without storage. */ }
      }
      if (game.current.phase !== "playing") {
        setElapsed(game.current.elapsed); setPhase(game.current.phase);
        return;
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    window.addEventListener("blur", pause); document.addEventListener("visibilitychange", visibility);
    return () => { cancelAnimationFrame(frame); window.removeEventListener("blur", pause); document.removeEventListener("visibilitychange", visibility); };
  }, [phase]);

  useEffect(() => {
    if (previousPhase.current === "playing" && phase !== "playing") actionButton.current?.focus({ preventScroll: true });
    previousPhase.current = phase;
  }, [phase]);

  function start() {
    if (asset !== "ready") return;
    if (window.matchMedia("(max-width: 700px), (max-height: 600px)").matches) setExpanded(true);
    sound.current?.setPlaying(true);
    game.current = createGame(); game.current.phase = "playing"; fly();
    setElapsed(0); setScore(0); setCelebrating(false); setPhase("playing");
    canvas.current?.focus({ preventScroll: true }); render();
  }
  function resume() {
    sound.current?.setPlaying(true);
    game.current.phase = "playing"; fly(); setPhase("playing");
    canvas.current?.focus({ preventScroll: true });
  }
  function pause() { game.current.phase = "paused"; setPhase("paused"); }
  function fly() {
    if (game.current.phase !== "playing") return;
    flap(game.current); sound.current?.flap();
  }
  function toggleSound() {
    const next = !muted;
    sound.current?.setMuted(next); setMuted(next);
    try { localStorage.setItem("thalitha-game-muted", String(next)); } catch { /* Optional preference. */ }
    if (game.current.phase === "playing") canvas.current?.focus({ preventScroll: true });
  }

  return <div className={styles.page}>
    <NavigasiUtama />
    <main className={styles.main}>
      <section className={styles.intro} inert={expanded}>
        <span className={styles.eyebrow}>MAIN SEBENTAR, SENYUM LEBIH LEBAR</span>
        <h1>Ayamnya terbang.<br /><span>Serunya kebangetan!</span></h1>
        <p>Bantu si ayam Thalitha melewati rintangan. Jaga ritme kepakanmu, lewati sebanyak mungkin pipa, dan raih skor tertinggi!</p>
        <ol className={styles.instructions}>
          <li><span>01</span><div><b>Tap untuk terbang</b><p>Sentuh layar, klik arena, atau tekan Spasi / ↑.</p></div></li>
          <li><span>02</span><div><b>Cari celahnya</b><p>Hindari pipa, tanah, dan batas atas arena.</p></div></li>
          <li><span>03</span><div><b>Kejar skor tertinggi</b><p>Satu pasang pipa terlewati, satu poin. Terus terbang sejauh mungkin!</p></div></li>
        </ol>
        {reward && <aside className={styles.reward} aria-label="Hadiah minigame">
          <span>KEJUTAN UNTUKMU</span><h2>Potongan Rp5.000!</h2>
          <p>Kamu berhasil! Hubungi admin untuk menukarkan hadiah saat memesan.</p>
          <a href={claimLink} target="_blank" rel="noopener noreferrer">Tukarkan via WhatsApp ↗</a>
          <small>Konfirmasi penukaran melalui admin. Hadiah tidak bertambah saat bermain ulang.</small>
        </aside>}
      </section>
      <section className={`${styles.gameCard} ${expanded ? styles.expanded : ""}`} aria-label="Minigame Ayam Terbang"
        role={expanded ? "dialog" : undefined} aria-modal={expanded || undefined}
        onKeyDown={event => {
          if (!expanded || event.key !== "Tab") return;
          const controls = [...event.currentTarget.querySelectorAll<HTMLElement>('button:not(:disabled), a[href], canvas')];
          const first = controls[0], last = controls[controls.length - 1];
          if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
          else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
        }}>
        <div className={styles.gameHeader}><b>THALITHA <span>FLY!</span></b>
          <button type="button" onClick={() => {
            if (expanded && game.current.phase === "playing") pause();
            setExpanded(value => !value);
          }}>{expanded ? "✕ Tutup arena" : "⛶ Perbesar"}</button>
        </div>
        <div className={styles.hud}>
          <span>Skor <strong data-score={score}>{score} <small>pipa</small></strong><small className={styles.elapsed}>{elapsed.toFixed(1)} detik</small></span>
          <button type="button" data-game-control="sound" aria-label="Suara permainan" aria-pressed={!muted}
            onPointerDown={event => event.preventDefault()} onClick={toggleSound}
            onBlur={event => { if (game.current.phase === "playing" && event.relatedTarget !== canvas.current) pause(); }}>
            {muted ? "Suara mati" : "Suara aktif"}
          </button>
          <button type="button" onClick={pause} disabled={phase !== "playing"}>Ⅱ Jeda</button>
        </div>
        <div className={styles.arena} data-phase={phase}>
          <canvas ref={canvas} width={360} height={480} tabIndex={0} role="application"
            aria-label="Arena Ayam Terbang. Tekan Spasi atau panah atas untuk terbang, Escape untuk jeda."
            aria-describedby="game-help"
            onPointerDown={event => {
              if (!event.isPrimary || event.button !== 0 || game.current.phase !== "playing") return;
              event.preventDefault(); canvas.current?.focus({ preventScroll: true }); fly();
            }}
            onKeyDown={event => {
              if (["Space", "ArrowUp"].includes(event.code)) {
                event.preventDefault(); if (!event.repeat) fly();
              } else if (event.code === "Escape" && game.current.phase === "playing") { event.preventDefault(); pause(); }
            }}
            onBlur={event => { if (game.current.phase === "playing" && !(event.relatedTarget instanceof HTMLElement && event.relatedTarget.dataset.gameControl === "sound")) pause(); }}>
            Browser Anda perlu mendukung Canvas untuk memainkan minigame.
          </canvas>
          {phase !== "playing" && <div className={styles.overlay}>
            <div className={styles.dialog}>
              <span className={styles.badge}>{phase === "paused" ? "TARIK NAPAS DULU" : phase === "lost" ? "TERBANG LAGI, YUK!" : "SIAP TERBANG?"}</span>
              <h2>{phase === "paused" ? "Permainan dijeda" : phase === "lost" ? `${score} pipa terlewati!` : "Kecil ayamnya, besar serunya."}</h2>
              <p>{phase === "paused" ? "Skor tersimpan. Lanjutkan saat kamu siap." : phase === "lost" ? `Kamu terbang selama ${elapsed.toFixed(1)} detik. Coba lagi dan lampaui skormu!` : "Satu tap untuk mengepak. Lewati pipa dan terus terbang!"}</p>
              {reward && <><p className={styles.earned}>✦ Hadiah Rp5.000 sudah tersimpan!</p><a className={styles.claim} href={claimLink} target="_blank" rel="noopener noreferrer">Tukarkan via WhatsApp ↗</a></>}
              <button ref={actionButton} type="button" onClick={phase === "paused" ? resume : start} disabled={asset !== "ready"}>
                {asset === "loading" ? "Menyiapkan ayam…" : asset === "error" ? "Gambar gagal dimuat" : phase === "paused" ? "Lanjut bermain" : phase === "ready" ? "Mulai main" : "Main lagi"}
              </button>
              {asset === "error" && <p>Muat ulang halaman untuk mencoba lagi.</p>}
            </div>
          </div>}
        </div>
        <p id="game-help" className={styles.hint}>Tap / klik arena · Spasi / ↑ untuk terbang · Esc untuk jeda</p>
        <span className={styles.srOnly} role="status" aria-live="polite">{phase === "lost" ? `Permainan berakhir. Skor ${score} pipa. Silakan coba lagi.` : phase === "paused" ? "Permainan dijeda." : phase === "playing" ? "Permainan dimulai." : "Permainan siap."}</span>
      </section>
    </main>
    <Footer />
    {celebrating && <Fireworks />}
  </div>;
}
