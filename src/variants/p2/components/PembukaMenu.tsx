import { FunctionComponent } from "react";
import { NavigasiKategoriMenu, NavigasiUtama } from "../../../components/NavigasiMenu";
import styles from "./PembukaMenu.module.css";

export type PembukaMenuType = {
  className?: string;
};

const PembukaMenu: FunctionComponent<PembukaMenuType> = ({
  className = "",
}) => {
  return (
    <main className={[styles.pembukaMenu, className].join(" ")}>
      <NavigasiUtama />
      <div className={styles.pengantar}>
        <div className={styles.pilihanPenuhRasa}>
          <section className={styles.ajakanMemilih}>
            <div className={styles.tagline}>
              <div className={styles.aksen} />
              <div className={styles.label}>SELALU DICINTA...</div>
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
          <div className={styles.heroImageContainer}>
            <img
              className={styles.sajianPilihanIcon}
              alt=""
              src="/assets/p2/Sajian-pilihan1@2x.png"
            />
          </div>
        </div>
      </div>
      <NavigasiKategoriMenu />
    </main>
  );
};

export default PembukaMenu;
