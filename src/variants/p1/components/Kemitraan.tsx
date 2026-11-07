import { tautanWhatsApp } from "../../../config/kontak";
import { FunctionComponent } from "react";
import styles from "./Kemitraan.module.css";

export type KemitraanType = {
  className?: string;
};

const Kemitraan: FunctionComponent<KemitraanType> = ({ className = "" }) => {
  return (
    <section id="kemitraan" className={[styles.kemitraan, className].join(" ")}>
      <div className={styles.partnerHeader}>
        <div className={styles.pesanMitra}>
          <h3 className={styles.judul}>Usaha sendiri. Tumbuh bersama.</h3>
          <div className={styles.deskripsi}>
            Langkah baru dimulai dari obrolan yang tepat.
          </div>
        </div>
      </div>
      <div className={styles.partnerImages}>
        <img
          className={styles.whatsappImage20261022At0}
          loading="lazy"
          alt=""
          src="/assets/p1/WhatsApp-Image-2026-10-22-at-07-53-05-1@2x.png"
        />
        <img
          className={styles.whatsappImage20261022At02}
          loading="lazy"
          alt=""
          src="/assets/p1/WhatsApp-Image-2026-10-22-at-07-46-35-1@2x.png"
        />
      </div>
      <section className={styles.informasiKemitraan}>
        <div className={styles.labelBagian}>KEMITRAAN THALITHA</div>
        <h1 className={styles.judul2}>
          Bawa peluang renyah
          <br />
          ke kotamu.
        </h1>
        <div className={styles.deskripsi2}>
          Punya semangat berbisnis kuliner? Kenali konsep kemitraan Thalitha
          Fried Chicken dan mulai perjalanan usahamu bersama kami.
        </div>
        <div className={styles.keuntunganMitra}>
          <div className={styles.keuntungan}>
            <img
              className={styles.wadahIkonIcon}
              alt=""
              src="/assets/p1/Wadah-ikon.svg"
            />
            <div className={styles.keterangan}>
              <div className={styles.judul3}>Panduan operasional</div>
              <div className={styles.deskripsi3}>
                Alur kerja dan standar penyajian yang mudah dipelajari.
              </div>
            </div>
          </div>
          <div className={styles.keuntungan}>
            <img
              className={styles.wadahIkonIcon}
              alt=""
              src="/assets/p1/Wadah-ikon2.svg"
            />
            <div className={styles.keterangan}>
              <div className={styles.judul3}>Pelatihan tim</div>
              <div className={styles.deskripsi3}>
                Pendampingan mengenal produk dan proses di gerai.
              </div>
            </div>
          </div>
          <div className={styles.keuntungan}>
            <img
              className={styles.wadahIkonIcon}
              alt=""
              src="/assets/p1/Wadah-ikon1.svg"
            />
            <div className={styles.keterangan}>
              <div className={styles.judul3}>Dukungan pemasaran</div>
              <div className={styles.deskripsi3}>
                Konsep materi promosi untuk memperkenalkan usahamu.
              </div>
            </div>
          </div>
        </div>
        <a href={tautanWhatsApp} className={styles.tombol}>
          <b className={styles.label}>Gabung Kemitraan</b>
          <img
            className={styles.arrowUpRightIcon}
            alt=""
            src="/assets/p1/arrow-up-right.svg"
          />
        </a>
        <div className={styles.catatanKemitraan}>
          Gambaran program bersifat ilustratif. Detail fasilitas dan ketentuan
          perlu dikonfirmasi kepada tim kemitraan.
        </div>
      </section>
    </section>
  );
};

export default Kemitraan;
