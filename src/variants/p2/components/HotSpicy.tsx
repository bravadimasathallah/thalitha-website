import {
  FunctionComponent,
  useMemo,
  type CSSProperties,
  type ReactNode,
} from "react";
import KartuMenu1 from "./KartuMenu1";
import styles from "./HotSpicy.module.css";

export type HotSpicyType = {
  className?: string;
  namaKategori?: string;
  deskripsiKategori?: string;
  simbolKategori?: string;
  children?: ReactNode;

  /** Style props */
  hotSpicyPadding?: CSSProperties["padding"];
  informasiKategoriMinWidth?: CSSProperties["minWidth"];
  judulDanDeskripsiHeight?: CSSProperties["height"];
  judulDanDeskripsiFlex?: CSSProperties["flex"];
  judulDanDeskripsiMinWidth?: CSSProperties["minWidth"];
  catatanNasiBorder?: CSSProperties["border"];
  daftarMenuGap?: CSSProperties["gap"];
};

const kartuHotSpicy = [
  { namaMenu: "Sayap Hot Spicy", harga: "Rp12.000", fotoHidangan: "/assets/p2/Foto-hidangan4@2x.png" },
  { namaMenu: "Paha Bawah Hot Spicy", harga: "Rp13.000", fotoHidangan: "/assets/p2/Foto-hidangan6@2x.png" },
  { namaMenu: "Paha Atas Hot Spicy", harga: "Rp16.000", fotoHidangan: "/assets/p2/Foto-hidangan5@2x.png" },
  { namaMenu: "Dada Hot Spicy", harga: "Rp16.000", fotoHidangan: "/assets/p2/Foto-hidangan7@2x.png" },
];

const HotSpicy: FunctionComponent<HotSpicyType> = ({
  className = "",
  hotSpicyPadding,
  informasiKategoriMinWidth,
  judulDanDeskripsiHeight,
  judulDanDeskripsiFlex,
  judulDanDeskripsiMinWidth,
  namaKategori,
  deskripsiKategori,
  catatanNasiBorder,
  daftarMenuGap,
  simbolKategori = "/assets/p2/Simbol-kategori1.svg",
  children,
}) => {
  const hotSpicyStyle: CSSProperties = useMemo(() => {
    return {
      padding: hotSpicyPadding,
    };
  }, [hotSpicyPadding]);

  const informasiKategoriStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: informasiKategoriMinWidth,
    };
  }, [informasiKategoriMinWidth]);

  const judulDanDeskripsiStyle: CSSProperties = useMemo(() => {
    return {
      height: judulDanDeskripsiHeight,
      flex: judulDanDeskripsiFlex,
      minWidth: judulDanDeskripsiMinWidth,
    };
  }, [
    judulDanDeskripsiHeight,
    judulDanDeskripsiFlex,
    judulDanDeskripsiMinWidth,
  ]);

  const catatanNasiStyle: CSSProperties = useMemo(() => {
    return {
      border: catatanNasiBorder,
    };
  }, [catatanNasiBorder]);

  const daftarMenuStyle: CSSProperties = useMemo(() => {
    return {
      gap: daftarMenuGap,
    };
  }, [daftarMenuGap]);

  return (
    <section
      className={[styles.hotSpicy, className].join(" ")}
      style={hotSpicyStyle}
    >
      <div className={styles.judulKategori}>
        <div
          className={styles.informasiKategori}
          style={informasiKategoriStyle}
        >
          <img
            className={styles.simbolKategoriIcon}
            alt=""
            src={simbolKategori}
          />
          <div
            className={styles.judulDanDeskripsi}
            style={judulDanDeskripsiStyle}
          >
            <div className={styles.namaDanJumlah}>
              <h1 className={styles.namaKategori}>{namaKategori}</h1>
              <div className={styles.jumlahMenu}>4 menu</div>
            </div>
            <div className={styles.deskripsiKategori}>{deskripsiKategori}</div>
          </div>
        </div>
        <div className={styles.catatanNasi} style={catatanNasiStyle}>
          <img
            className={styles.circlePlusIcon}
            loading="lazy"
            alt=""
            src="/assets/p2/circle-plus.svg"
          />
          <div className={styles.pilihanNasi}>Tambah nasi +Rp5.000</div>
        </div>
      </div>
      <section className={styles.daftarMenu} style={daftarMenuStyle}>
        {children ?? kartuHotSpicy.map((item) => (
          <KartuMenu1 key={item.namaMenu} {...item} />
        ))}
      </section>
    </section>
  );
};

export default HotSpicy;
