import { FunctionComponent } from "react";
import { NavigasiKategoriMenu, NavigasiUtama } from "../../../components/NavigasiMenu";
import Pengantar from "../components/Pengantar";
import HotSpicy from "../components/HotSpicy";
import PenutupMenu from "../components/PenutupMenu";
import styles from "./ThalitaFriedChickenMenuHotSpicy.module.css";

const ThalitaFriedChickenMenuHotSpicy: FunctionComponent = () => {
  return (
    <div className={styles.thalitaFriedChickenMenuH}>
      <main className={styles.pembukaMenu}>
        <NavigasiUtama />
        <Pengantar />
        <NavigasiKategoriMenu />
      </main>
      <HotSpicy
        namaKategori="Hot Spicy"
        deskripsiKategori="Balutan saus pedas yang bikin susah berhenti."
      />
      <PenutupMenu />
    </div>
  );
};

export default ThalitaFriedChickenMenuHotSpicy;
