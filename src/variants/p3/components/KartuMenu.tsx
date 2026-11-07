import { FunctionComponent } from "react";
import styles from "./KartuMenu.module.css";

export type KartuMenuType = {
  className?: string;
  fotoHidangan?: string;
  namaMenu?: string;
  harga?: string;
};

const KartuMenu: FunctionComponent<KartuMenuType> = ({
  className = "",
  fotoHidangan,
  namaMenu,
  harga,
}) => {
  return (
    <div className={[styles.kartuMenu, className].join(" ")}>
      <img
        className={styles.fotoHidanganIcon}
        loading="lazy"
        alt=""
        src={fotoHidangan}
      />
      <div className={styles.detailMenu}>
        <h3 className={styles.namaMenu}>{namaMenu}</h3>
        <div className={styles.isiMenu}>Ayam geprek + sambal cabai</div>
        <div className={styles.hargaDanAksi}>
          <div className={styles.harga}>{harga}</div>
          <button className={styles.tambahKeKeranjang}>
            <img className={styles.plusIcon} alt="" src="/assets/p3/plus.svg" />
            <b className={styles.labelAksi}>Tambah</b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default KartuMenu;
