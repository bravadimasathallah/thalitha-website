import { FunctionComponent } from "react";
import styles from "./TentangMerek.module.css";

export type TentangMerekType = {
  className?: string;
};

const TentangMerek: FunctionComponent<TentangMerekType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.tentangMerek, className].join(" ")}>
      <img
        className={styles.logoThalita1RemovebgPrevIcon}
        loading="lazy"
        alt=""
        src="/assets/p4/Logo-Thalita-1-removebg-preview-3@2x.png"
      />
      <div className={styles.deskripsi}>
        Ayam crispy, rasa istimewa. Teman makan enak untuk cerita kecil dan
        momen besar bersama orang tersayang.
      </div>
      <div className={styles.mediaSosial}>
        <img
          className={styles.tautanMediaSosial}
          alt=""
          src="/assets/p4/Tautan-media-sosial2.svg"
        />
        <img
          className={styles.tautanMediaSosial}
          alt=""
          src="/assets/p4/Tautan-media-sosial1.svg"
        />
        <img
          className={styles.tautanMediaSosial}
          alt=""
          src="/assets/p4/Tautan-media-sosial.svg"
        />
      </div>
    </div>
  );
};

export default TentangMerek;
