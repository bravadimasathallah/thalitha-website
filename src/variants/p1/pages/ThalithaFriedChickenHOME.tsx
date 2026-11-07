import { FunctionComponent } from "react";
import { NavigasiUtama } from "../../../components/NavigasiMenu";
import KampanyeUtama from "../components/KampanyeUtama";
import PromoSpesial from "../components/PromoSpesial";
import Kemitraan from "../components/Kemitraan";
import AjakanPesan from "../components/AjakanPesan";
import Footer from "../components/Footer";
import styles from "./ThalithaFriedChickenHOME.module.css";

const ThalithaFriedChickenHOME: FunctionComponent = () => {
  return (
    <div className={styles.thalithaFriedChickenHome}>
      <main className={styles.pembuka}>
        <NavigasiUtama />
        <KampanyeUtama />
        <section className={styles.janjiRasa}>
          <div className={styles.keunggulan}>
            <img className={styles.drumstickIcon} alt="" src="/assets/p1/drumstick.svg" />
            <div className={styles.keterangan}>
              <div className={styles.judul}>Renyah sampai gigitan terakhir</div>
              <div className={styles.deskripsi}>
                Lapisan crispy, rasa istimewa.
              </div>
            </div>
          </div>
          <div className={styles.keunggulan}>
            <img className={styles.drumstickIcon} alt="" src="/assets/p1/flame.svg" />
            <div className={styles.keterangan}>
              <div className={styles.judul}>Disajikan hangat, makin nikmat</div>
              <div className={styles.deskripsi}>
                Teman pas waktu lapar datang.
              </div>
            </div>
          </div>
          <div className={styles.keunggulan}>
            <img className={styles.drumstickIcon} alt="" src="/assets/p1/smile.svg" />
            <div className={styles.keterangan}>
              <div className={styles.judul}>Porsi pas, harga bersahabat</div>
              <div className={styles.deskripsi}>Makan enak untuk semua.</div>
            </div>
          </div>
        </section>
      </main>
      <PromoSpesial />
      <Kemitraan />
      <section className={styles.lokasiDanFooter}>
        <AjakanPesan />
        <section className={styles.sloganMerek}>
          <div className={styles.slogan}>
            <h3 className={styles.slogan2}>RENYAHNYA JUARA</h3>
            <img className={styles.sparklesIcon} alt="" src="/assets/p1/sparkles.svg" />
          </div>
          <div className={styles.slogan3}>
            <h3 className={styles.slogan2}>RASANYA BIKIN NAGIH</h3>
            <img className={styles.sparklesIcon} alt="" src="/assets/p1/sparkles.svg" />
          </div>
          <div className={styles.slogan}>
            <h3 className={styles.slogan2}>MOMEN JADI MERIAH</h3>
            <img className={styles.sparklesIcon} alt="" src="/assets/p1/sparkles.svg" />
          </div>
        </section>
        <Footer />
      </section>
    </div>
  );
};

export default ThalithaFriedChickenHOME;
