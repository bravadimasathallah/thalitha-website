import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./KelompokCabang.module.css";

export type KelompokCabangType = {
  className?: string;
  namaArea?: string;
  namaLokasi?: string;
  namaLokasi1?: string;
  namaLokasi2?: string;
  namaLokasi3?: string;

  /** Style props */
  kelompokCabangFlex?: CSSProperties["flex"];
  kelompokCabangMinWidth?: CSSProperties["minWidth"];
  kelompokCabangAlignSelf?: CSSProperties["alignSelf"];
  kelompokCabangPadding?: CSSProperties["padding"];
  namaAreaMinWidth?: CSSProperties["minWidth"];
  daftarLokasiPadding?: CSSProperties["padding"];
  namaLokasiMinWidth?: CSSProperties["minWidth"];
  namaLokasiMinWidth1?: CSSProperties["minWidth"];
  namaLokasiMinWidth2?: CSSProperties["minWidth"];
  namaLokasiMinWidth3?: CSSProperties["minWidth"];
};

const KelompokCabang: FunctionComponent<KelompokCabangType> = ({
  className = "",
  kelompokCabangFlex,
  kelompokCabangMinWidth,
  kelompokCabangAlignSelf,
  kelompokCabangPadding,
  namaArea,
  namaAreaMinWidth,
  daftarLokasiPadding,
  namaLokasi,
  namaLokasiMinWidth,
  namaLokasi1,
  namaLokasiMinWidth1,
  namaLokasi2,
  namaLokasiMinWidth2,
  namaLokasi3,
  namaLokasiMinWidth3,
}) => {
  const kelompokCabangStyle: CSSProperties = useMemo(() => {
    return {
      flex: kelompokCabangFlex,
      minWidth: kelompokCabangMinWidth,
      alignSelf: kelompokCabangAlignSelf,
      padding: kelompokCabangPadding,
    };
  }, [
    kelompokCabangFlex,
    kelompokCabangMinWidth,
    kelompokCabangAlignSelf,
    kelompokCabangPadding,
  ]);

  const namaAreaStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: namaAreaMinWidth,
    };
  }, [namaAreaMinWidth]);

  const daftarLokasiStyle: CSSProperties = useMemo(() => {
    return {
      padding: daftarLokasiPadding,
    };
  }, [daftarLokasiPadding]);

  const namaLokasiStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: namaLokasiMinWidth,
    };
  }, [namaLokasiMinWidth]);

  const namaLokasi1Style: CSSProperties = useMemo(() => {
    return {
      minWidth: namaLokasiMinWidth1,
    };
  }, [namaLokasiMinWidth1]);

  const namaLokasi2Style: CSSProperties = useMemo(() => {
    return {
      minWidth: namaLokasiMinWidth2,
    };
  }, [namaLokasiMinWidth2]);

  const namaLokasi3Style: CSSProperties = useMemo(() => {
    return {
      minWidth: namaLokasiMinWidth3,
    };
  }, [namaLokasiMinWidth3]);

  return (
    <div
      className={[styles.kelompokCabang, className].join(" ")}
      style={kelompokCabangStyle}
    >
      <div className={styles.kepalaKelompok}>
        <div className={styles.namaArea} style={namaAreaStyle}>
          {namaArea}
        </div>
        <div className={styles.jumlahArea}>04</div>
      </div>
      <div className={styles.daftarLokasi} style={daftarLokasiStyle}>
        <div className={styles.lokasiCabang}>
          <div className={styles.penandaLokasi}>·</div>
          <div className={styles.namaLokasi} style={namaLokasiStyle}>
            {namaLokasi}
          </div>
        </div>
        <div className={styles.lokasiCabang}>
          <div className={styles.penandaLokasi}>·</div>
          <div className={styles.namaLokasi2} style={namaLokasi1Style}>
            {namaLokasi1}
          </div>
        </div>
        <div className={styles.lokasiCabang}>
          <div className={styles.penandaLokasi}>·</div>
          <div className={styles.namaLokasi3} style={namaLokasi2Style}>
            {namaLokasi2}
          </div>
        </div>
        <div className={styles.lokasiCabang4}>
          <div className={styles.penandaLokasi}>·</div>
          <div className={styles.namaLokasi4} style={namaLokasi3Style}>
            {namaLokasi3}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KelompokCabang;
