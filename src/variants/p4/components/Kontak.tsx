import { alamatGerai, nomorTelepon } from "../../../config/kontak";
import { FunctionComponent } from "react";
import styles from "./Kontak.module.css";

export type KontakType = {
  className?: string;
};

const Kontak: FunctionComponent<KontakType> = ({ className = "" }) => {
  return (
    <div className={[styles.kontak, className].join(" ")}>
      <div className={styles.judul}>Hubungi Kami</div>
      <b className={styles.statusKontak}>PLACEHOLDER KONTAK</b>
      <div className={styles.detailKontak}>
        <img
          className={styles.mapPinIcon}
          loading="lazy"
          alt=""
          src="/assets/p4/map-pin.svg"
        />
        <div className={styles.kontak2}>
          {alamatGerai}
        </div>
      </div>
      <div className={styles.detailKontak2}>
        <img
          className={styles.mapPinIcon}
          loading="lazy"
          alt=""
          src="/assets/p4/phone.svg"
        />
        <div className={styles.kontak3}>{nomorTelepon}</div>
      </div>
      <div className={styles.detailKontak2}>
        <img
          className={styles.mapPinIcon}
          loading="lazy"
          alt=""
          src="/assets/p4/mail.svg"
        />
        <div className={styles.kontak3}>thalita.pusat@gmail.com</div>
      </div>
    </div>
  );
};

export default Kontak;
