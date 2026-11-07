import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./KartuMenu.module.css";

export type KartuMenuType = {
  className?: string;
  namaMenu?: string;

  /** Style props */
  kartuMenuPadding?: CSSProperties["padding"];
};

const KartuMenu: FunctionComponent<KartuMenuType> = ({
  className = "",
  kartuMenuPadding,
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
        alt=""
        src="/assets/p4/Foto-hidangan23@2x.png"
      />
      <div className={styles.detailMenu}>
        <b className={styles.namaMenu}>{namaMenu}</b>
        <div className={styles.hargaDanAksi}>
          <div className={styles.harga}>Rp5.000</div>
          <div className={styles.tambahKeKeranjang}>
            <img className={styles.plusIcon} alt="" src="/assets/p4/plus.svg" />
            <b className={styles.labelAksi}>Tambah</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KartuMenu;
