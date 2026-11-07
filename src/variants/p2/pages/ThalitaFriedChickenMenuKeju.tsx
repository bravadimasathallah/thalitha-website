import { FunctionComponent } from "react";
import PembukaMenu from "../components/PembukaMenu";
import HotSpicy from "../components/HotSpicy";
import KartuMenu from "../components/KartuMenu";
import PenutupMenu from "../components/PenutupMenu";
import styles from "./ThalitaFriedChickenMenuKeju.module.css";

const kartuSausKeju = [
  {
    namaMenu: "Sayap Saus Keju",
    fotoHidangan: "/assets/p2/Foto-hidangan9@2x.png",
    harga: "Rp12.000",
  },
  {
    namaMenu: "Paha Bawah Saus Keju",
    fotoHidangan: "/assets/p2/Foto-hidangan10@2x.png",
    harga: "Rp13.000",
  },
  {
    namaMenu: "Paha Atas Saus Keju",
    fotoHidangan: "/assets/p2/Foto-hidangan11@2x.png",
    harga: "Rp16.000",
  },
  {
    namaMenu: "Dada Saus Keju",
    fotoHidangan: "/assets/p2/Foto-hidangan8@2x.png",
    harga: "Rp16.000",
  },
];

const ThalitaFriedChickenMenuKeju: FunctionComponent = () => {
  return (
    <div className={styles.thalitaFriedChickenMenuK}>
      <PembukaMenu />
      <HotSpicy
        hotSpicyPadding="38px 30px 10px"
        informasiKategoriMinWidth="min(778px, 100%)"
        judulDanDeskripsiHeight="unset"
        judulDanDeskripsiFlex="1"
        judulDanDeskripsiMinWidth="0"
        namaKategori="Saus Keju"
        deskripsiKategori="Saus keju creamy, gurihnya sampai gigitan terakhir."
        simbolKategori="/assets/p2/Simbol-kategori2.svg"
        catatanNasiBorder="none"
        daftarMenuGap="var(--gap-10) var(--gap-24)"
      >
        {kartuSausKeju.map((item) => (
          <KartuMenu key={item.namaMenu} {...item} />
        ))}
      </HotSpicy>
      <PenutupMenu penutupMenuPadding="44px 0px 0px" />
    </div>
  );
};

export default ThalitaFriedChickenMenuKeju;
