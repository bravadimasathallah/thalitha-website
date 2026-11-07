import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./NavigasiUtama.module.css";

export type NavigasiUtamaType = {
  className?: string;
  logoThalitaRemovebgPreview?: string;
  label?: string;
  showLabel?: boolean;
  label1?: string;
  label2?: string;
  label3?: string;

  /** Style props */
  navigasiUtamaWidth?: CSSProperties["width"];
  navigasiUtamaPosition?: CSSProperties["position"];
  navigasiUtamaAlignSelf?: CSSProperties["alignSelf"];
  navigasiUtamaTop?: CSSProperties["top"];
  logoThalitaRemovebgPrevIconHeight?: CSSProperties["height"];
  logoThalitaRemovebgPrevIconBottom?: CSSProperties["bottom"];
  logoThalitaRemovebgPrevIconMaxHeight?: CSSProperties["maxHeight"];
  tautanNavigasiMargin?: CSSProperties["margin"];
  tautanHeight?: CSSProperties["height"];
  labelColor?: CSSProperties["color"];
  tautanWidth?: CSSProperties["width"];
  tautanHeight1?: CSSProperties["height"];
  labelColor1?: CSSProperties["color"];
  labelFontWeight?: CSSProperties["fontWeight"];
  tautanHeight2?: CSSProperties["height"];
  labelColor2?: CSSProperties["color"];
  tombolBorder?: CSSProperties["border"];
  navigasiUtamaLeft?: CSSProperties["left"];
  labelFontWeight1?: CSSProperties["fontWeight"];
};

const NavigasiUtama: FunctionComponent<NavigasiUtamaType> = ({
  className = "",
  navigasiUtamaWidth,
  navigasiUtamaPosition,
  navigasiUtamaAlignSelf,
  navigasiUtamaTop,
  logoThalitaRemovebgPreview,
  logoThalitaRemovebgPrevIconHeight,
  logoThalitaRemovebgPrevIconBottom,
  logoThalitaRemovebgPrevIconMaxHeight,
  tautanNavigasiMargin,
  tautanHeight,
  labelColor,
  tautanWidth,
  label,
  showLabel,
  tautanHeight1,
  label1,
  labelColor1,
  labelFontWeight,
  tautanHeight2,
  labelColor2,
  tombolBorder,
  label2,
  navigasiUtamaLeft,
  label3,
  labelFontWeight1,
}) => {
  const navigasiUtamaStyle: CSSProperties = useMemo(() => {
    return {
      width: navigasiUtamaWidth,
      position: navigasiUtamaPosition,
      alignSelf: navigasiUtamaAlignSelf,
      top: navigasiUtamaTop,
      left: navigasiUtamaLeft,
    };
  }, [
    navigasiUtamaWidth,
    navigasiUtamaPosition,
    navigasiUtamaAlignSelf,
    navigasiUtamaTop,
    navigasiUtamaLeft,
  ]);

  const logoThalita1RemovebgPrevIconStyle: CSSProperties = useMemo(() => {
    return {
      height: logoThalitaRemovebgPrevIconHeight,
      bottom: logoThalitaRemovebgPrevIconBottom,
      maxHeight: logoThalitaRemovebgPrevIconMaxHeight,
    };
  }, [
    logoThalitaRemovebgPrevIconHeight,
    logoThalitaRemovebgPrevIconBottom,
    logoThalitaRemovebgPrevIconMaxHeight,
  ]);

  const tautanNavigasiStyle: CSSProperties = useMemo(() => {
    return {
      margin: tautanNavigasiMargin,
    };
  }, [tautanNavigasiMargin]);

  const tautanStyle: CSSProperties = useMemo(() => {
    return {
      height: tautanHeight,
    };
  }, [tautanHeight]);

  const labelStyle: CSSProperties = useMemo(() => {
    return {
      color: labelColor,
    };
  }, [labelColor]);

  const tautan1Style: CSSProperties = useMemo(() => {
    return {
      width: tautanWidth,
    };
  }, [tautanWidth]);

  const tautan2Style: CSSProperties = useMemo(() => {
    return {
      height: tautanHeight1,
    };
  }, [tautanHeight1]);

  const label1Style: CSSProperties = useMemo(() => {
    return {
      color: labelColor1,
      fontWeight: labelFontWeight,
    };
  }, [labelColor1, labelFontWeight]);

  const tautan3Style: CSSProperties = useMemo(() => {
    return {
      height: tautanHeight2,
    };
  }, [tautanHeight2]);

  const label2Style: CSSProperties = useMemo(() => {
    return {
      color: labelColor2,
      fontWeight: labelFontWeight1,
    };
  }, [labelColor2, labelFontWeight1]);

  const tombolStyle: CSSProperties = useMemo(() => {
    return {
      border: tombolBorder,
    };
  }, [tombolBorder]);

  return (
    <div
      className={[styles.navigasiUtama, className].join(" ")}
      style={navigasiUtamaStyle}
    >
      <img
        className={styles.logoThalita1RemovebgPrevIcon}
        alt=""
        src={logoThalitaRemovebgPreview}
        style={logoThalita1RemovebgPrevIconStyle}
      />
      <div className={styles.tautanNavigasi} style={tautanNavigasiStyle}>
        <div className={styles.tautan} style={tautanStyle}>
          <div className={styles.label} style={labelStyle} data-route="/">
            Beranda
          </div>
          <div className={styles.penandaAktif} />
        </div>
        <div className={styles.tautan2} style={tautan1Style}>
          <div className={styles.label2} data-route="/menu" style={{cursor:"pointer",color:"#06452d",fontWeight:700}}>Menu</div>
        </div>
        <div className={styles.tautan3} style={tautan2Style}>
          <div className={styles.label3} style={label1Style}>
            {label1}
          </div>
        </div>
        <div className={styles.tautan3} style={tautan3Style}>
          <div className={styles.label3} style={label2Style}>
            {label3}
          </div>
        </div>
      </div>
      <div className={styles.tombol} style={tombolStyle} data-route="/lokasi/daftar">
        <b className={styles.label3}>{label2}</b>
        <img
          className={styles.arrowUpRightIcon}
          alt=""
          src="/assets/p4/arrow-up-right.svg"
        />
      </div>
    </div>
  );
};

export default NavigasiUtama;
