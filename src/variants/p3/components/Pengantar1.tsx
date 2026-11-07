import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Pengantar1.module.css";

export type Pengantar1Type = {
  className?: string;

  /** Style props */
  pengantarAlignSelf?: CSSProperties["alignSelf"];
  pengantarPosition?: CSSProperties["position"];
  pengantarTop?: CSSProperties["top"];
  pengantarRight?: CSSProperties["right"];
  pengantarLeft?: CSSProperties["left"];
  ajakanMemilihMinWidth?: CSSProperties["minWidth"];
  judulMenuMargin?: CSSProperties["margin"];
  sajianPilihanMinWidth?: CSSProperties["minWidth"];
  sajianPilihanBackgroundImage?: CSSProperties["backgroundImage"];
};

const Pengantar1: FunctionComponent<Pengantar1Type> = ({
  className = "",
  pengantarAlignSelf,
  pengantarPosition,
  pengantarTop,
  pengantarRight,
  pengantarLeft,
  ajakanMemilihMinWidth,
  judulMenuMargin,
  sajianPilihanMinWidth,
  sajianPilihanBackgroundImage,
}) => {
  const pengantarStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: pengantarAlignSelf,
      position: pengantarPosition,
      top: pengantarTop,
      right: pengantarRight,
      left: pengantarLeft,
    };
  }, [
    pengantarAlignSelf,
    pengantarPosition,
    pengantarTop,
    pengantarRight,
    pengantarLeft,
  ]);

  const ajakanMemilihStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: ajakanMemilihMinWidth,
    };
  }, [ajakanMemilihMinWidth]);

  const judulMenuStyle: CSSProperties = useMemo(() => {
    return {
      margin: judulMenuMargin,
    };
  }, [judulMenuMargin]);

  const sajianPilihanStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: sajianPilihanMinWidth,
      backgroundImage: sajianPilihanBackgroundImage,
    };
  }, [sajianPilihanMinWidth, sajianPilihanBackgroundImage]);

  return (
    <section
      className={[styles.pengantar, className].join(" ")}
      style={pengantarStyle}
    >
      <div className={styles.pilihanPenuhRasa}>
        <section className={styles.ajakanMemilih} style={ajakanMemilihStyle}>
          <div className={styles.tagline}>
            <div className={styles.aksen} />
            <div className={styles.selaluDicinta}>SELALU DICINTA...</div>
          </div>
          <div className={styles.judulMenu} style={judulMenuStyle}>
            Lagi lapar?
            <br />
            Pilih yang bikin happy.
          </div>
          <div className={styles.pengantarSingkat}>
            Dari kriuk original sampai sambal geprek yang nampol. Temukan ayam
            favoritmu, lalu tambah ke keranjang!
          </div>
        </section>
        <div className={styles.sajianPilihan} style={sajianPilihanStyle}>
          <div className={styles.pilihanRasa}>
            <img
              className={styles.sparklesIcon}
              loading="lazy"
              alt=""
              src="/assets/p3/sparkles.svg"
            />
            <div className={styles.empatRasa}>4 rasa, sama-sama juara!</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pengantar1;
