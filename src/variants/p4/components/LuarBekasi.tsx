import { FunctionComponent } from "react";
import KelompokCabang1 from "./KelompokCabang1";
import styles from "./LuarBekasi.module.css";

export type LuarBekasiType = {
  className?: string;
};

const LuarBekasi: FunctionComponent<LuarBekasiType> = ({ className = "" }) => {
  return (
    <section className={[styles.luarBekasi, className].join(" ")}>
      <div className={styles.judulWilayah}>
        <div className={styles.aksenWilayah} />
        <h3 className={styles.wilayah}>LUAR BEKASI</h3>
        <div className={styles.jumlahLokasi}>
          <div className={styles.jumlah}>2 lokasi</div>
        </div>
        <div className={styles.garisPemisah} />
      </div>
      <div className={styles.kelompokArea}>
        <KelompokCabang1 namaArea="Cirebon" namaLokasi="Gintungan Gebang." />
        <KelompokCabang1
          namaArea="Jakarta"
          namaLokasi="Cawang III"
          namaLokasiMinWidth="61px"
        />
      </div>
    </section>
  );
};

export default LuarBekasi;
