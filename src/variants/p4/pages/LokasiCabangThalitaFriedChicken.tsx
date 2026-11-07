import { halamanKemitraan } from "../../../config/kontak";
import { Link } from "react-router-dom";
import { FunctionComponent } from "react";
import { NavigasiUtama } from "../../../components/NavigasiMenu";
import KotaBekasi from "../components/KotaBekasi";
import KabupatenBekasi from "../components/KabupatenBekasi";
import LuarBekasi from "../components/LuarBekasi";
import TentangMerek from "../components/TentangMerek";
import Kontak from "../components/Kontak";
import styles from "./LokasiCabangThalitaFriedChicken.module.css";

const LokasiCabangThalitaFriedChicken: FunctionComponent = () => {
  return (
    <div className={styles.lokasiCabangThalitaFriedCh}>
      <NavigasiUtama aksi={{ label: "Daftar cabang", path: "/lokasi/daftar" }} />
      <div className={styles.isiLokasi}>
        <section className={styles.pengantarDirektori}>
          <div className={styles.judulHalaman}>
            <div className={styles.pilihanPenuhRasa}>
              <b className={styles.judul}> Lokasi Cabang Thalita Fried Chicken</b>
            </div>
            <div className={styles.ringkasanDirektori}>
              <h3 className={styles.subjudul}>Temukan gerai kami</h3>
              <div className={styles.cakupanDirektori}>
                55 lokasi di 3 wilayah
              </div>
            </div>
          </div>
        </section>
        <main className={styles.direktoriCabang}>
          <div className={styles.judulWilayah}>
            <div className={styles.aksenWilayah} />
            <h3 className={styles.wilayah}>KOTA BEKASI</h3>
            <div className={styles.jumlahLokasi}>
              <div className={styles.jumlah}>6 lokasi</div>
            </div>
            <div className={styles.garisPemisah} />
          </div>
          <KotaBekasi />
          <KabupatenBekasi />
          <LuarBekasi />
        </main>
        <div className={styles.penutupDirektori}>
          <b className={styles.namaMerek}>Thalita Fried Chicken</b>
          <div className={styles.keteranganHalaman}>Direktori lokasi cabang</div>
        </div>
        <footer className={styles.footer}>
          <div className={styles.informasiFooter}>
            <TentangMerek />
            <div className={styles.tautanCepat}>
              <div className={styles.judul2}>Jelajahi</div>
              <Link viewTransition className={styles.namaMerek} to="/">Beranda</Link>
              <Link viewTransition className={styles.namaMerek} to="/menu">Menu</Link>
              <Link viewTransition className={styles.namaMerek} to="/#promo">Promo</Link>
              <Link viewTransition className={styles.namaMerek} to="/lokasi">Lokasi Gerai</Link>
            </div>
            <div className={styles.informasiBisnis}>
              <div className={styles.judul2}>Bersama Thalitha</div>
              <div className={styles.namaMerek}>Tentang Kami</div>
              <Link viewTransition className={styles.namaMerek} to={halamanKemitraan}>Kemitraan</Link>
              <div className={styles.tautan7}>Hubungi Kami</div>
            </div>
            <Kontak />
          </div>
          <div className={styles.pemisah} />
          <div className={styles.catatanFooter}>
            <div className={styles.namaMerek}>© 2026 Thalitha Fried Chicken.</div>
            <div className={styles.tautanLegal}>
              <div className={styles.privasi}>Kebijakan Privasi</div>
              <div className={styles.namaMerek}>{`Syarat & Ketentuan`}</div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LokasiCabangThalitaFriedChicken;
