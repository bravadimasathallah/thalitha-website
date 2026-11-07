import { FunctionComponent } from "react";
import styles from "./NavigasiKategori.module.css";

export type NavigasiKategoriType = {
  className?: string;
};

const NavigasiKategori: FunctionComponent<NavigasiKategoriType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.navigasiKategori, className].join(" ")}>
      <div className={styles.kategoriMenu}>
        <div className={styles.pilihanKategori}>
          <div className={styles.namaKategori}>Original</div>
        </div>
        <div className={styles.pilihanKategori}>
          <div className={styles.namaKategori}>Hot Spicy</div>
        </div>
        <div className={styles.pilihanKategori}>
          <div className={styles.namaKategori}>Saus Keju</div>
        </div>
        <div className={styles.pilihanKategori}>
          <div className={styles.namaKategori}>Sambal Geprek</div>
        </div>
        <div className={styles.pilihanKategori}>
          <div className={styles.namaKategori}>Paket Nasi</div>
        </div>
        <div className={styles.namaKategori6}>
          <div className={styles.namaKategori}>Pelengkap</div>
        </div>
        <div className={styles.pilihanKategori6} data-route="/menu/minuman" style={{cursor:"pointer"}}>
          <b className={styles.namaKategori8}>Minuman</b>
        </div>
      </div>
      <div className={styles.cariMenu}>
        <img className={styles.searchIcon} alt="" src="/assets/p4/search.svg" />
        <div className={styles.namaKategori}>Cari menu favoritmu</div>
      </div>
    </div>
  );
};

export default NavigasiKategori;
