import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./PenutupMenu.module.css";

export type PenutupMenuType = {
  className?: string;

  /** Style props */
  penutupMenuPadding?: CSSProperties["padding"];
};

const PenutupMenu: FunctionComponent<PenutupMenuType> = ({
  className = "",
  penutupMenuPadding,
}) => {
  const penutupMenuStyle: CSSProperties = useMemo(() => {
    return {
      padding: penutupMenuPadding,
    };
  }, [penutupMenuPadding]);

  return (
    <section
      className={[styles.penutupMenu, className].join(" ")}
      style={penutupMenuStyle}
    >
      <footer className={styles.footer}>
        <div className={styles.identitasThalita}>
          <img className={styles.emblemIcon} alt="" src="/assets/p2/Emblem.svg" />
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
