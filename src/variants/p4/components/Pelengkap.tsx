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
      namaMenu: "Pinkwin",
    },
    {
      kartuMenuPadding: "0px 0px 25px" as const,
      namaMenu: "Manggo ",
    },
    {
      kartuMenuPadding: undefined,
      namaMenu: "Lychee Tea",
    },
  ]);
  return (
    <div className={[styles.pelengkap, className].join(" ")}>
      <div className={styles.judulKategori}>
        <div className={styles.informasiKategori}>
          <img
            className={styles.simbolKategoriIcon}
            alt=""
            src="/assets/p4/Simbol-kategori4.svg"
          />
          <div className={styles.judulDanDeskripsi}>
            <div className={styles.namaDanJumlah}>
              <div className={styles.namaKategori}>Minuman</div>
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
      <div className={styles.daftarMenu}>
        {kartuMenuItems.map((item, index) => (
          <KartuMenu
            key={index}
            kartuMenuPadding={item.kartuMenuPadding}
            namaMenu={item.namaMenu}
          />
        ))}
      </div>
    </div>
  );
};

export default Pelengkap;
