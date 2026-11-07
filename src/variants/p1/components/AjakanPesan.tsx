import { FunctionComponent } from "react";
import KartuPemesanan from "./KartuPemesanan";
import { tautanGoogleMaps, tautanWhatsApp } from "../../../config/kontak";
import styles from "./AjakanPesan.module.css";

export type AjakanPesanType = {
  className?: string;
};

const AjakanPesan: FunctionComponent<AjakanPesanType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.ajakanPesan, className].join(" ")}>
      <div className={styles.ajakan}>
        <div className={styles.label}>LAPAR? JANGAN DITUNDA.</div>
        <h1 className={styles.judul}>
          Kriuk favoritmu,
          <br />
          lebih dekat dari yang kamu kira.
        </h1>
        <div className={styles.deskripsi}>
          Cari gerai dan cek pilihan pesan antar yang tersedia di lokasimu.
        </div>
      </div>
      <div className={styles.pilihanPemesanan}>
        <KartuPemesanan
          mapPin="/assets/p1/map-pin.svg"
          judul="Mampir ke gerai"
          deskripsi="Temukan lokasi terdekat."
          label="Cari Lokasi"
          to={tautanGoogleMaps}
        />
        <KartuPemesanan
          mapPin="/assets/p1/shopping-bag.svg"
          judul="Nikmati di rumah"
          deskripsi="Cek cara pesan dari gerai."
          tautanWidth="134px"
          label="Pesan Sekarang"
          to={tautanWhatsApp}
        />
      </div>
    </section>
  );
};

export default AjakanPesan;
