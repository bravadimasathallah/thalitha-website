import { FunctionComponent } from "react";
import KelompokCabang from "./KelompokCabang";
import styles from "./KotaBekasi.module.css";

export type KotaBekasiType = {
  className?: string;
};

const KotaBekasi: FunctionComponent<KotaBekasiType> = ({ className = "" }) => {
  return (
    <section className={[styles.kotaBekasi, className].join(" ")}>
      <div className={styles.kelompokArea}>
        <KelompokCabang
          namaArea="Bekasi Timur"
          namaLokasi="Aren Jaya Jl. Panjaitan"
          namaLokasi1="Jl. Mawar Raya"
          namaLokasi2="Perumnas 3"
          namaLokasi3="Kp. Rawa Semut."
        />
        <div className={styles.kelompokCabang}>
          <div className={styles.kepalaKelompok}>
            <div className={styles.namaArea}>Bekasi Utara</div>
            <div className={styles.jumlahArea}>02</div>
          </div>
          <div className={styles.daftarLokasi}>
            <div className={styles.lokasiCabang}>
              <div className={styles.penandaLokasi}>·</div>
              <div className={styles.namaLokasi}>Taman Wisma Asri</div>
            </div>
            <div className={styles.lokasiCabang2}>
              <div className={styles.penandaLokasi}>·</div>
              <div className={styles.namaLokasi2}>Jl. KH. Muchtar Tabrani.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KotaBekasi;
