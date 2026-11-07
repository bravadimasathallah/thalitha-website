import { alamatGerai, nomorTelepon, halamanKemitraan } from "../../../config/kontak";
import { Link } from "react-router-dom";
import { FunctionComponent } from "react";
import styles from "./Footer.module.css";

export type FooterType = {
  className?: string;
};

const Footer: FunctionComponent<FooterType> = ({ className = "" }) => {
  return (
    <footer className={[styles.footer, className].join(" ")}>
      <div className={styles.informasiFooter}>
        <div className={styles.tentangMerek}>
          <img
            className={styles.logoThalita1RemovebgPrevIcon}
            loading="lazy"
            alt=""
            src="/assets/p1/Logo-Thalita-1-removebg-preview-3@2x.png"
          />
          <div className={styles.deskripsi}>
            Ayam crispy, rasa istimewa. Teman makan enak untuk cerita kecil dan
            momen besar bersama orang tersayang.
          </div>
          <div className={styles.mediaSosial}>
            <img
              className={styles.tautanMediaSosial}
              alt=""
              src="/assets/p1/Tautan-media-sosial2.svg"
            />
            <img
              className={styles.tautanMediaSosial}
              alt=""
              src="/assets/p1/Tautan-media-sosial1.svg"
            />
            <img
              className={styles.tautanMediaSosial}
              alt=""
              src="/assets/p1/Tautan-media-sosial.svg"
            />
          </div>
        </div>
        <div className={styles.tautanCepat}>
          <div className={styles.judul}>Jelajahi</div>
          <Link viewTransition className={styles.tautan} to="/">Beranda</Link>
          <Link viewTransition className={styles.tautan} to="/menu">Menu</Link>
          <Link viewTransition className={styles.tautan} to="/#promo">Promo</Link>
          <Link viewTransition className={styles.tautan} to="/lokasi">Lokasi Gerai</Link>
        </div>
        <div className={styles.informasiBisnis}>
          <div className={styles.judul}>Bersama Thalitha</div>
          <div className={styles.tautan}>Tentang Kami</div>
          <Link viewTransition className={styles.tautan} to={halamanKemitraan}>Kemitraan</Link>
          <div className={styles.tautan7}>Hubungi Kami</div>
        </div>
        <div className={styles.kontak}>
          <div className={styles.judul}>Hubungi Kami</div>
          <b className={styles.statusKontak}>PLACEHOLDER KONTAK</b>
          <div className={styles.detailKontak}>
            <img className={styles.mapPinIcon} alt="" src="/assets/p1/map-pin.svg" />
            <div className={styles.kontak2}>
              {alamatGerai}
            </div>
          </div>
          <div className={styles.detailKontak2}>
            <img className={styles.mapPinIcon} alt="" src="/assets/p1/phone.svg" />
            <div className={styles.kontak3}>{nomorTelepon}</div>
          </div>
          <div className={styles.detailKontak2}>
            <img className={styles.mapPinIcon} alt="" src="/assets/p1/mail.svg" />
            <div className={styles.kontak3}>thalita.pusat@gmail.com</div>
          </div>
        </div>
      </div>
      <div className={styles.pemisah} />
      <div className={styles.catatanFooter}>
        <div className={styles.hakCipta}>
          © 2026 Thalitha Fried Chicken. Konsep desain untuk ilustrasi.
        </div>
        <div className={styles.tautanLegal}>
          <div className={styles.privasi}>Kebijakan Privasi</div>
          <div className={styles.tautan}>{`Syarat & Ketentuan`}</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
