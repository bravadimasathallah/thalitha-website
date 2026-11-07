import { FunctionComponent } from "react";
import { NavigasiKategoriMenu, NavigasiUtama } from "../../../components/NavigasiMenu";
import Pengantar from "../components/Pengantar";
import SambalGeprek from "../components/SambalGeprek";
import styles from "./ThalitaFriedChickenMenuGeprek.module.css";

const ThalitaFriedChickenMenuGeprek: FunctionComponent = () => {
  return (
    <div className={styles.thalitaFriedChickenMenuG}>
      <main className={styles.pembukaMenu}>
        <NavigasiUtama />
        <Pengantar />
        <NavigasiKategoriMenu />
      </main>
      <SambalGeprek />
      <section className={styles.penutupMenu}>
        <footer className={styles.footer}>
          <div className={styles.identitasThalita}>
            <img className={styles.emblemIcon} alt="" src="/assets/p3/Emblem.svg" />
            <div className={styles.namaBrand}>
              <h2 className={styles.thalita}>thalita</h2>
              <b className={styles.friedChicken}>FRIED CHICKEN</b>
            </div>
          </div>
          <h3 className={styles.tagline}>Selalu dicinta...</h3>
          <div className={styles.hakCipta}>© 2026 Thalita Fried Chicken</div>
        </footer>
      </section>
    </div>
  );
};

export default ThalitaFriedChickenMenuGeprek;
