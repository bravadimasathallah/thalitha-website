import { FunctionComponent } from "react";
import { NavigasiUtama } from "../../../components/NavigasiMenu";
import Footer from "../components/Footer";
import styles from "./LokasiCabangThalitaFriedChicken1.module.css";

const LokasiCabangThalitaFriedChicken1: FunctionComponent = () => {
  return (
    <div className={styles.lokasiCabangThalitaFriedCh}>
      <NavigasiUtama aksi={{ label: "Info Kemitraan", path: "/lokasi/daftar" }} />
      <section className={styles.pengantarDirektori}>
        <div className={styles.judulHalaman}>
          <div className={styles.pilihanPenuhRasa}>
            <b className={styles.judul}> Info Kemitraan</b>
          </div>
        </div>
      </section>
      <img
        className={styles.rootContainerIcon}
        alt=""
        src="/assets/p4/Root-Container1@2x.png"
      />
      <img
        className={styles.rootContainerIcon2}
        alt=""
        src="/assets/p4/Root-Container@2x.png"
      />
      <Footer />
    </div>
  );
};

export default LokasiCabangThalitaFriedChicken1;
