import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./PenutupMenu.module.css";

export type PenutupMenuType = {
  className?: string;

  /** Style props */
  penutupMenuFlexDirection?: CSSProperties["flexDirection"];
  penutupMenuPadding?: CSSProperties["padding"];
  footerAlignSelf?: CSSProperties["alignSelf"];
  footerFlex?: CSSProperties["flex"];
};

const PenutupMenu: FunctionComponent<PenutupMenuType> = ({
  className = "",
  penutupMenuFlexDirection,
  penutupMenuPadding,
  footerAlignSelf,
  footerFlex,
}) => {
  const penutupMenuStyle: CSSProperties = useMemo(() => {
    return {
      flexDirection: penutupMenuFlexDirection,
      padding: penutupMenuPadding,
    };
  }, [penutupMenuFlexDirection, penutupMenuPadding]);

  const footerStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: footerAlignSelf,
      flex: footerFlex,
    };
  }, [footerAlignSelf, footerFlex]);

  return (
    <section
      className={[styles.penutupMenu, className].join(" ")}
      style={penutupMenuStyle}
    >
      <footer className={styles.footer} style={footerStyle}>
        <div className={styles.identitasThalita}>
          <img className={styles.emblemIcon} alt="" src="/assets/p3/Emblem.svg" />
          <div className={styles.namaBrand}>
            <h2 className={styles.thalita}>thalita</h2>
            <b className={styles.friedChicken}>FRIED CHICKEN</b>
          </div>
        </div>
        <h3 className={styles.tagline}>Selalu dicinta...</h3>
        <div className={styles.hakCipta}>© 2026 Thalita Fried Chicken</div>
      </footer>
    </section>
  );
};

export default PenutupMenu;
