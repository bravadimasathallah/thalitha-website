import { FunctionComponent } from "react";
import styles from "./PromoSpesial.module.css";

export type PromoSpesialType = {
  className?: string;
};

const PromoSpesial: FunctionComponent<PromoSpesialType> = ({
  className = "",
}) => {
  return (
    <section id="promo" className={[styles.promoSpesial, className].join(" ")}>
      <div className={styles.pengantarPromo}>
        <div className={styles.judulBagian}>
          <div className={styles.labelBagian}>HEMATNYA BIKIN SENYUM</div>
          <h2 className={styles.judul}>Promo spesial, buat kamu.</h2>
        </div>
      </div>
      <div className={styles.promoGrid}>
        <div className={styles.promoCard}>
          <img
            className={styles.cardImageIcon}
            loading="lazy"
            alt=""
            src="/assets/p1/Card-Image@2x.png"
          />
        </div>
        <img
          className={styles.promoItemsIcon}
          alt=""
          src="/assets/p1/Promo-Items2@2x.png"
        />
        <img
          className={styles.promoItemsIcon}
          loading="lazy"
          alt=""
          src="/assets/p1/Promo-Items1@2x.png"
        />
        <img
          className={styles.promoItemsIcon3}
          loading="lazy"
          alt=""
          src="/assets/p1/Promo-Items@2x.png"
        />
      </div>
    </section>
  );
};

export default PromoSpesial;
