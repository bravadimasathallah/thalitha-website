import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./KartuMenu.module.css";

export type KartuMenuType = {
  className?: string;
  fotoHidangan?: string;
  namaMenu?: string;

  /** Style props */
  kartuMenuPadding?: CSSProperties["padding"];
};

const KartuMenu: FunctionComponent<KartuMenuType> = ({
  className = "",
  kartuMenuPadding,
  fotoHidangan,
  namaMenu,
}) => {
  const kartuMenuStyle: CSSProperties = useMemo(() => {
    return {
      padding: kartuMenuPadding,
    };
  }, [kartuMenuPadding]);

  return (
    <div
      className={[styles.kartuMenu, className].join(" ")}
      style={kartuMenuStyle}
    >
      <img
        className={styles.fotoHidanganIcon}
        loading="lazy"
        alt=""
        src={fotoHidangan}
      />
      <div className={styles.detailMenu}>
        <h3 className={styles.namaMenu}>{namaMenu}</h3>
        <div className={styles.hargaDanAksi}>
          <div className={styles.harga}>Rp5.000</div>
          <button className={styles.tambahKeKeranjang}>
            <img className={styles.plusIcon} alt="" src="/assets/p5/plus.svg" />
            <b className={styles.labelAksi}>Tambah</b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default KartuMenu;
