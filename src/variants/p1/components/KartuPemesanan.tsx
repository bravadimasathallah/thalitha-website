import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./KartuPemesanan.module.css";

export type KartuPemesananType = {
  className?: string;
  mapPin?: string;
  judul?: string;
  deskripsi?: string;
  label?: string;
  to: string;

  /** Style props */
  tautanWidth?: CSSProperties["width"];
};

const KartuPemesanan: FunctionComponent<KartuPemesananType> = ({
  className = "",
  mapPin,
  judul,
  deskripsi,
  tautanWidth,
  label,
  to,
}) => {
  const tautanStyle: CSSProperties = useMemo(() => {
    return {
      width: tautanWidth,
    };
  }, [tautanWidth]);

  return (
    <div className={[styles.kartuPemesanan, className].join(" ")}>
      <img className={styles.mapPinIcon} alt="" src={mapPin} />
      <div className={styles.keterangan}>
        <h3 className={styles.judul}>{judul}</h3>
        <div className={styles.deskripsi}>{deskripsi}</div>
      </div>
      <a href={to} className={styles.tautan} style={tautanStyle}>
        <div className={styles.label}>{label}</div>
        <img className={styles.arrowRightIcon} alt="" src="/assets/p1/arrow-right.svg" />
      </a>
    </div>
  );
};

export default KartuPemesanan;
