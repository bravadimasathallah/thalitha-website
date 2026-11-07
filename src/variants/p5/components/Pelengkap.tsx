import { FunctionComponent, useState } from "react";
import KartuMenu from "./KartuMenu";
import styles from "./Pelengkap.module.css";

export type PelengkapType = {
  className?: string;
};

const Pelengkap: FunctionComponent<PelengkapType> = ({ className = "" }) => {
  const [kartuMenuItems] = useState([
    {
      kartuMenuPadding: undefined,
      fotoHidangan: "/assets/p5/Foto-hidangan23@2x.png",
      namaMenu: "Pinkwin",
    },
    {
      kartuMenuPadding: "0px 0px 25px" as const,
      fotoHidangan: "/assets/p5/Foto-hidangan24@2x.png",
      namaMenu: "Manggo ",
    },
    {
      kartuMenuPadding: undefined,
      fotoHidangan: "/assets/p5/Foto-hidangan22@2x.png",
      namaMenu: "Lychee Tea",
    },
  ]);
  return (
    <section className={[styles.pelengkap, className].join(" ")}>
      <div className={styles.judulKategori}>
        <div className={styles.informasiKategori}>
          <img
            className={styles.simbolKategoriIcon}
            alt=""
            src="/assets/p5/Simbol-kategori4.svg"
          />
          <div className={styles.judulDanDeskripsi}>
            <div className={styles.namaDanJumlah}>
              <h1 className={styles.namaKategori}>Minuman</h1>
              <div className={styles.jumlahMenu}>3 menu</div>
            </div>
            <div className={styles.deskripsiKategori}>
              Tambah teman makan biar makin lengkap.
            </div>
          </div>
        </div>
        <div className={styles.catatanNasi}>
          <div className={styles.pilihanNasi}>Pilihan tambahan</div>
        </div>
      </div>
      <section className={styles.daftarMenu}>
        {kartuMenuItems.map((item, index) => (
          <KartuMenu
            key={index}
            kartuMenuPadding={item.kartuMenuPadding}
            fotoHidangan={item.fotoHidangan}
            namaMenu={item.namaMenu}
          />
        ))}
      </section>
    </section>
  );
};

export default Pelengkap;
