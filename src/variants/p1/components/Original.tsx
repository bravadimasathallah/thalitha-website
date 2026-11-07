import { FunctionComponent } from "react";
import styles from "./Original.module.css";

export type OriginalType = {
  className?: string;
};

const Original: FunctionComponent<OriginalType> = ({ className = "" }) => {
  return (
    <section className={[styles.original, className].join(" ")}>
      <div className={styles.judulKategori}>
        <div className={styles.informasiKategori}>
          <img
            className={styles.simbolKategoriIcon}
            alt=""
            src="/assets/p1/Simbol-kategori.svg"
          />
          <div className={styles.judulDanDeskripsi}>
            <div className={styles.namaDanJumlah}>
              <h1 className={styles.namaKategori}>Original</h1>
              <div className={styles.jumlahMenu}>4 menu</div>
            </div>
            <div className={styles.deskripsiKategori}>
              Kriuk keemasan di luar, juicy di setiap gigitan.
            </div>
          </div>
        </div>
        <div className={styles.catatanNasi}>
          <div className={styles.pilihanNasi}>Ayam tanpa nasi</div>
        </div>
      </div>
      <section className={styles.daftarMenu}>
        <div className={styles.kartuMenu}>
          <img
            className={styles.fotoHidanganIcon}
            loading="lazy"
            alt=""
            src="/assets/p1/Foto-hidangan3@2x.png"
          />
          <div className={styles.detailMenu}>
            <h3 className={styles.namaMenu}>Sayap Original</h3>
            <div className={styles.isiMenu}>
              Ayam crispy original • 1 potong
            </div>
            <div className={styles.hargaDanAksi}>
              <div className={styles.harga}>Rp8.000</div>
              <button className={styles.tambahKeKeranjang}>
                <img className={styles.plusIcon} alt="" src="/assets/p1/plus.svg" />
                <b className={styles.labelAksi}>Tambah</b>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.kartuMenu2}>
          <img
            className={styles.fotoHidanganIcon2}
            alt=""
            src="/assets/p1/Foto-hidangan1@2x.png"
          />
          <div className={styles.detailMenu2}>
            <h3 className={styles.namaMenu}>Paha Bawah Original</h3>
            <div className={styles.isiMenu}>
              Ayam crispy original • 1 potong
            </div>
            <div className={styles.hargaDanAksi}>
              <div className={styles.harga}>Rp9.000</div>
              <button className={styles.tambahKeKeranjang}>
                <img className={styles.plusIcon} alt="" src="/assets/p1/plus.svg" />
                <b className={styles.labelAksi}>Tambah</b>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.kartuMenu2}>
          <img
            className={styles.fotoHidanganIcon2}
            alt=""
            src="/assets/p1/Foto-hidangan@2x.png"
          />
          <div className={styles.detailMenu2}>
            <h3 className={styles.namaMenu}>Paha Atas Original</h3>
            <div className={styles.isiMenu}>
              Ayam crispy original • 1 potong
            </div>
            <div className={styles.hargaDanAksi}>
              <div className={styles.pilihanNasi}>Rp12.000</div>
              <button className={styles.tambahKeKeranjang}>
                <img className={styles.plusIcon} alt="" src="/assets/p1/plus.svg" />
                <b className={styles.labelAksi}>Tambah</b>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.kartuMenu4}>
          <img
            className={styles.fotoHidanganIcon4}
            alt=""
            src="/assets/p1/Foto-hidangan2@2x.png"
          />
          <div className={styles.detailMenu4}>
            <h3 className={styles.namaMenu}>Dada Original</h3>
            <div className={styles.isiMenu}>
              Ayam crispy original • 1 potong
            </div>
            <div className={styles.hargaDanAksi4}>
              <div className={styles.pilihanNasi}>Rp12.000</div>
              <button className={styles.tambahKeKeranjang}>
                <img className={styles.plusIcon} alt="" src="/assets/p1/plus.svg" />
                <b className={styles.labelAksi}>Tambah</b>
              </button>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Original;
