import { FunctionComponent } from "react";
import { NavigasiKategoriMenu, NavigasiUtama } from "../../../components/NavigasiMenu";
import Pengantar from "../components/Pengantar";
import Original from "../components/Original";
import PenutupMenu from "../components/PenutupMenu";
import styles from "./ThalitaFriedChickenMenu.module.css";

const ThalitaFriedChickenMenu: FunctionComponent = () => {
  return (
    <div className={styles.thalitaFriedChickenMenu}>
      <main className={styles.pembukaMenu}>
        <NavigasiUtama />
        <Pengantar />
        <NavigasiKategoriMenu />
      </main>
      <Original />
      <PenutupMenu />
    </div>
  );
};

export default ThalitaFriedChickenMenu;
