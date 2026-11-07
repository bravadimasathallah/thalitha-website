import { FunctionComponent } from "react";
import styles from "./KartuMenu1.module.css";

export type KartuMenu1Type = {
  className?: string;
  namaMenu?: string;
  harga?: string;
  fotoHidangan: string;
};

const KartuMenu1: FunctionComponent<KartuMenu1Type> = ({
  className = "",
  namaMenu,
  harga,
  fotoHidangan,
}) => {
  return (
    <div className={[styles.kartuMenu, className].join(" ")}>
      <img
        className={styles.fotoHidanganIcon}
        loading="lazy"
        alt={namaMenu}
        src={fotoHidangan}
      />
      <div className={styles.detailMenu}>
        <h3 className={styles.namaMenu}>{namaMenu}</h3>
        <div className={styles.isiMenu}>Ayam crispy + saus pedas</div>
        <div className={styles.hargaDanAksi}>
          <div className={styles.harga}>{harga}</div>
          <button className={styles.tambahKeKeranjang}>
            <img className={styles.plusIcon} alt="" src="/assets/p2/plus.svg" />
            <b className={styles.labelAksi}>Tambah</b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default KartuMenu1;
