import { FunctionComponent } from "react";
import styles from "./Pengantar.module.css";

export type PengantarType = {
  className?: string;
};

const Pengantar: FunctionComponent<PengantarType> = ({ className = "" }) => {
  return (
    <div className={[styles.pengantar, className].join(" ")}>
      <div className={styles.pilihanPenuhRasa}>
        <div className={styles.ajakanMemilih}>
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
        </div>
      </div>
    </div>
  );
};

export default Pengantar;
