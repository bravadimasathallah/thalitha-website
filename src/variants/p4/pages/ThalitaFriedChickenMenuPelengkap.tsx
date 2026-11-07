import { FunctionComponent } from "react";
import NavigasiUtama from "../components/NavigasiUtama";
import Pengantar from "../components/Pengantar";
import NavigasiKategori from "../components/NavigasiKategori";
import Pelengkap from "../components/Pelengkap";
import PenutupMenu from "../components/PenutupMenu";
import styles from "./ThalitaFriedChickenMenuPelengkap.module.css";

const ThalitaFriedChickenMenuPelengkap: FunctionComponent = () => {
  return (
    <div className={styles.thalitaFriedChickenMenuP}>
      <div className={styles.pembukaMenu}>
        <NavigasiUtama
          logoThalitaRemovebgPreview="/assets/p4/Logo-Thalita-1-removebg-preview-2@2x.png"
          label="Beranda"
          showLabel={false}
          label1="Kemitraan"
          label2="Pesan Sekarang"
          label3="Lokasi"
        />
        <div className={styles.tautan}>
          <div className={styles.label}>Menu</div>
          <div className={styles.penandaAktif} />
        </div>
        <Pengantar />
        <NavigasiKategori />
      </div>
      <Pelengkap />
      <PenutupMenu />
    </div>
  );
};

export default ThalitaFriedChickenMenuPelengkap;
