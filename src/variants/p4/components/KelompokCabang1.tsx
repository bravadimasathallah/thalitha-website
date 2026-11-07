import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./KelompokCabang1.module.css";

export type KelompokCabang1Type = {
  className?: string;
  namaArea?: string;
  namaLokasi?: string;

  /** Style props */
  namaLokasiMinWidth?: CSSProperties["minWidth"];
};

const KelompokCabang1: FunctionComponent<KelompokCabang1Type> = ({
  className = "",
  namaArea,
  namaLokasi,
  namaLokasiMinWidth,
}) => {
  const namaLokasi4Style: CSSProperties = useMemo(() => {
    return {
      minWidth: namaLokasiMinWidth,
    };
  }, [namaLokasiMinWidth]);

  return (
    <div className={[styles.kelompokCabang, className].join(" ")}>
      <div className={styles.kepalaKelompok}>
        <div className={styles.namaArea}>{namaArea}</div>
        <div className={styles.jumlahArea}>01</div>
      </div>
      <div className={styles.daftarLokasi}>
        <div className={styles.lokasiCabang}>
          <div className={styles.penandaLokasi}>·</div>
          <div className={styles.namaLokasi} style={namaLokasi4Style}>
            {namaLokasi}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KelompokCabang1;
