import { FunctionComponent, useState } from "react";
import KartuMenu from "./KartuMenu";
import styles from "./SambalGeprek.module.css";

export type SambalGeprekType = {
  className?: string;
};

const SambalGeprek: FunctionComponent<SambalGeprekType> = ({
  className = "",
}) => {
  const [kartuMenuItems] = useState([
    {
      fotoHidangan: "/assets/p3/Foto-hidangan14@2x.png",
      namaMenu: "Sayap Geprek",
      harga: "Rp12.000",
    },
    {
      fotoHidangan: "/assets/p3/Foto-hidangan15@2x.png",
      namaMenu: "Paha Bawah Geprek",
      harga: "Rp13.000",
    },
    {
      fotoHidangan: "/assets/p3/Foto-hidangan12@2x.png",
      namaMenu: "Paha Atas Geprek",
      harga: "Rp16.000",
    },
    {
      fotoHidangan: "/assets/p3/Foto-hidangan13@2x.png",
      namaMenu: "Dada Geprek",
      harga: "Rp16.000",
    },
  ]);
  return (
    <section className={[styles.sambalGeprek, className].join(" ")}>
      <div className={styles.judulKategori}>
        <div className={styles.informasiKategori}>
          <img
            className={styles.simbolKategoriIcon}
            alt=""
            src="/assets/p3/Simbol-kategori1.svg"
          />
          <div className={styles.judulDanDeskripsi}>
            <div className={styles.namaDanJumlah}>
              <h1 className={styles.namaKategori}>Sambal Geprek</h1>
              <div className={styles.jumlahMenu}>4 menu</div>
            </div>
            <div className={styles.deskripsiKategori}>
              Ayam kriuk ketemu sambal cabai yang nampol.
            </div>
          </div>
        </div>
        <button className={styles.catatanNasi}>
          <img
            className={styles.circlePlusIcon}
            alt=""
            src="/assets/p3/circle-plus.svg"
          />
          <div className={styles.pilihanNasi}>Tambah nasi +Rp5.000</div>
        </button>
      </div>
      <section className={styles.daftarMenu}>
        {kartuMenuItems.map((item, index) => (
          <KartuMenu
            key={index}
            fotoHidangan={item.fotoHidangan}
            namaMenu={item.namaMenu}
            harga={item.harga}
          />
        ))}
      </section>
    </section>
  );
};

export default SambalGeprek;
