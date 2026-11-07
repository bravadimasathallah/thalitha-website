import { FunctionComponent } from "react";
import styles from "./Pengantar.module.css";

export type PengantarType = {
  className?: string;
};

const Pengantar: FunctionComponent<PengantarType> = ({ className = "" }) => {
  return (
    <div className={[styles.pengantar, className].join(" ")}>
      <div className={styles.pilihanPenuhRasa}>
        <section className={styles.ajakanMemilih}>
          <div className={styles.tagline}>
            <div className={styles.aksen} />
            <div className={styles.selaluDicinta}>SELALU DICINTA...</div>
          </div>
          <h1 className={styles.judulMenu}>
            Lagi lapar?
            <br />
            Pilih yang bikin happy.
          </h1>
          <div className={styles.pengantarSingkat}>
            Dari kriuk original sampai sambal geprek yang nampol. Temukan ayam
            favoritmu, lalu tambah ke keranjang!
          </div>
        </section>
        <div className={styles.sajianPilihan}>
          <img
            className={styles.mergedAsset1Icon}
            alt=""
            src="/assets/p3/merged-asset-1@2x.png"
          />
          <div className={styles.pilihanRasa}>
            <img
              className={styles.sparklesIcon}
              loading="lazy"
              alt=""
              src="/assets/p3/sparkles.svg"
            />
            <div className={styles.empatRasa}>4 rasa, sama-sama juara!</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pengantar;
