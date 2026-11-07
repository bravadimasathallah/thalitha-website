import { FunctionComponent } from "react";
import KartuMenu1 from "./KartuMenu1";
import styles from "./Pelengkap.module.css";

export type PelengkapType = {
  className?: string;
};

const Pelengkap: FunctionComponent<PelengkapType> = ({ className = "" }) => {
  return (
    <section className={[styles.pelengkap, className].join(" ")}>
      <div className={styles.judulKategori}>
        <div className={styles.informasiKategori}>
          <img
            className={styles.simbolKategoriIcon}
            alt=""
            src="/assets/p3/Simbol-kategori4.svg"
          />
          <div className={styles.judulDanDeskripsi}>
            <div className={styles.namaDanJumlah}>
              <h1 className={styles.namaKategori}>Pelengkap</h1>
              <div className={styles.jumlahMenu}>2 menu</div>
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
        <KartuMenu1
          fotoHidangan="/assets/p3/Foto-hidangan21@2x.png"
          namaMenu="Nasi Putih"
          isiMenu="Nasi putih • 1 porsi"
          harga="Rp5.000"
        />
        <KartuMenu1
          fotoHidangan="/assets/p3/Foto-hidangan20@2x.png"
          namaMenu="Kentang Goreng"
          isiMenu="Kentang goreng • 1 pack"
          harga="Rp8.000"
          hargaDisplay="block"
          hargaMinWidth="77px"
        />
        <div className={styles.petunjukPelengkap}>
          <img
            className={styles.utensilsCrossedIcon}
            loading="lazy"
            alt=""
            src="/assets/p3/utensils-crossed.svg"
          />
          <h1 className={styles.judulPelengkap}>
            Lebih lengkap,
            <br />
            lebih nikmat.
          </h1>
          <div className={styles.saranPenyajian}>
            Pasangkan ayam favoritmu dengan nasi putih atau kentang goreng.
            Tinggal pilih sesuai selera!
          </div>
        </div>
      </section>
    </section>
  );
};

export default Pelengkap;
