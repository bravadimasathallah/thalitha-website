import { FunctionComponent } from "react";
import { NavigasiKategoriMenu, NavigasiUtama } from "../../../components/NavigasiMenu";
import Pengantar1 from "../components/Pengantar1";
import PenutupMenu from "../components/PenutupMenu";
import styles from "./ThalitaFriedChickenMenuPaketNasi.module.css";

const ThalitaFriedChickenMenuPaketNasi: FunctionComponent = () => {
  return (
    <div className={styles.thalitaFriedChickenMenuP}>
      <NavigasiUtama />
      <Pengantar1 />
      <NavigasiKategoriMenu />
      <main className={styles.menuSection}>
        <div className={styles.judulKategori}>
          <div className={styles.informasiKategori}>
            <img
              className={styles.simbolKategoriIcon}
              alt=""
              src="/assets/p3/Simbol-kategori3.svg"
            />
            <div className={styles.judulDanDeskripsi}>
              <div className={styles.namaDanJumlah}>
                <h1 className={styles.namaKategori8}>Paket Nasi</h1>
                <div className={styles.jumlahMenu}>4 menu</div>
              </div>
              <div className={styles.deskripsiKategori}>
                Ayam original dan nasi putih. Pas buat makan hari ini.
              </div>
            </div>
          </div>
          <div className={styles.catatanNasi}>
            <div className={styles.pilihanNasi}>Sudah termasuk nasi putih</div>
          </div>
        </div>
        <section className={styles.daftarMenu}>
          <div className={styles.kartuMenu}>
            <img
              className={styles.fotoHidanganIcon}
              loading="lazy"
              alt=""
              src="/assets/p3/Foto-hidangan18@2x.png"
            />
            <div className={styles.detailMenu}>
              <h3 className={styles.namaMenu}>Paket Sayap</h3>
              <div className={styles.isiMenu}>Sayap original + nasi putih</div>
              <div className={styles.hargaDanAksi}>
                <div className={styles.harga}>Rp13.000</div>
                <button className={styles.tambahKeKeranjang}>
                  <img className={styles.plusIcon} alt="" src="/assets/p3/plus.svg" />
                  <b className={styles.labelAksi}>Tambah</b>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.kartuMenu}>
            <img
              className={styles.fotoHidanganIcon}
              alt=""
              src="/assets/p3/Foto-hidangan17@2x.png"
            />
            <div className={styles.detailMenu}>
              <h3 className={styles.namaMenu}>Paket Paha Bawah</h3>
              <div className={styles.isiMenu}>
                Paha Bawah original + nasi putih
              </div>
              <div className={styles.hargaDanAksi}>
                <div className={styles.harga}>Rp14.000</div>
                <button className={styles.tambahKeKeranjang}>
                  <img className={styles.plusIcon} alt="" src="/assets/p3/plus.svg" />
                  <b className={styles.labelAksi}>Tambah</b>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.kartuMenu}>
            <img
              className={styles.fotoHidanganIcon}
              alt=""
              src="/assets/p3/Foto-hidangan16@2x.png"
            />
            <div className={styles.detailMenu}>
              <h3 className={styles.namaMenu}>Paket Paha Atas</h3>
              <div className={styles.isiMenu}>
                Paha Atas original + nasi putih
              </div>
              <div className={styles.hargaDanAksi}>
                <div className={styles.harga}>Rp17.000</div>
                <button className={styles.tambahKeKeranjang}>
                  <img className={styles.plusIcon} alt="" src="/assets/p3/plus.svg" />
                  <b className={styles.labelAksi}>Tambah</b>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.kartuMenu}>
            <img
              className={styles.fotoHidanganIcon}
              alt=""
              src="/assets/p3/Foto-hidangan19@2x.png"
            />
            <div className={styles.detailMenu}>
              <h3 className={styles.namaMenu}>Paket Dada</h3>
              <div className={styles.isiMenu}>Dada original + nasi putih</div>
              <div className={styles.hargaDanAksi}>
                <div className={styles.harga}>Rp17.000</div>
                <button className={styles.tambahKeKeranjang}>
                  <img className={styles.plusIcon} alt="" src="/assets/p3/plus.svg" />
                  <b className={styles.labelAksi}>Tambah</b>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <PenutupMenu />
    </div>
  );
};

export default ThalitaFriedChickenMenuPaketNasi;
