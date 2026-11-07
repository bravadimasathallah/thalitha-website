import { FunctionComponent } from "react";
import { NavigasiKategoriMenu, NavigasiUtama } from "../../../components/NavigasiMenu";
import Pengantar from "../components/Pengantar";
import Pelengkap from "../components/Pelengkap";
import PenutupMenu from "../components/PenutupMenu";
import styles from "./ThalitaFriedChickenMenuMinuman.module.css";

const ThalitaFriedChickenMenuMinuman: FunctionComponent = () => {
  return (
    <div className={styles.thalitaFriedChickenMenuM}>
      <main className={styles.pembukaMenu}>
        <NavigasiUtama />
        <Pengantar />
        <NavigasiKategoriMenu />
      </main>
      <Pelengkap />
      <PenutupMenu />
    </div>
  );
};

export default ThalitaFriedChickenMenuMinuman;
