import { Link } from "react-router-dom";
import { FunctionComponent } from "react";
import styles from "./KampanyeUtama.module.css";

export type KampanyeUtamaType = {
  className?: string;
};

const KampanyeUtama: FunctionComponent<KampanyeUtamaType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.kampanyeUtama, className].join(" ")}>
      <section className={styles.pesanKampanye}>
        <div className={styles.labelKampanye}>
          <div className={styles.label}>Selalu Dicinta</div>
        </div>
        <h1 className={styles.headline}>
          <span className={styles.renyahnyaBikin}>
            {`Renyahnya`}
            <br />
            {`Bikin `}
          </span>
          <span className={styles.nagih}>Nagih!</span>
        </h1>
        <div className={styles.deskripsi}>
          Garing di luar, juicy di dalam. Nikmati ayam goreng berbumbu spesial
          untuk setiap momen seru kamu.
        </div>
        <div className={styles.aksiKampanye}>
          <Link viewTransition to="/menu" className={styles.tombol}>
            <b className={styles.label2}>Lihat Menu</b>
            <img
              className={styles.arrowUpRightIcon}
              alt=""
              src="/assets/p1/arrow-up-right.svg"
            />
          </Link>
          <div className={styles.pesanPendamping}>
            <img className={styles.heartIcon} alt="" src="/assets/p1/heart.svg" />
            <div className={styles.pesan}>Sekali coba, jatuh cinta.</div>
          </div>
        </div>
      </section>
      <img
        className={styles.ayamCrispyUnggulan}
        alt=""
        src="/assets/p1/Ayam-crispy-unggulan@2x.png"
      />
      <h1 className={styles.tipografiLatar}>CRISPY!</h1>
      <div className={styles.lingkaranLatar} />
      <div className={styles.panggungAyam} />
      <img
        className={styles.stikerRasaIcon}
        loading="lazy"
        alt=""
        src="/assets/p1/Stiker-rasa@2x.png"
      />
    </div>
  );
};

export default KampanyeUtama;
