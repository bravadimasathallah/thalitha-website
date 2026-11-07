import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./KartuMenu1.module.css";

export type KartuMenu1Type = {
  className?: string;
  fotoHidangan?: string;
  namaMenu?: string;
  isiMenu?: string;
  harga?: string;

  /** Style props */
  hargaDisplay?: CSSProperties["display"];
  hargaMinWidth?: CSSProperties["minWidth"];
};

const KartuMenu1: FunctionComponent<KartuMenu1Type> = ({
  className = "",
  fotoHidangan,
  namaMenu,
  isiMenu,
  harga,
  hargaDisplay,
  hargaMinWidth,
}) => {
  const hargaStyle: CSSProperties = useMemo(() => {
    return {
      display: hargaDisplay,
      minWidth: hargaMinWidth,
    };
  }, [hargaDisplay, hargaMinWidth]);

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
        <div className={styles.isiMenu}>{isiMenu}</div>
        <div className={styles.hargaDanAksi}>
          <div className={styles.harga} style={hargaStyle}>
            {harga}
          </div>
          <button className={styles.tambahKeKeranjang}>
            <img className={styles.plusIcon} alt="" src="/assets/p3/plus.svg" />
            <b className={styles.labelAksi}>Tambah</b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default KartuMenu1;
