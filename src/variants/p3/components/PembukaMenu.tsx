import { FunctionComponent } from "react";
import { NavigasiKategoriMenu, NavigasiUtama } from "../../../components/NavigasiMenu";
import Pengantar1 from "./Pengantar1";
import styles from "./PembukaMenu.module.css";

export type PembukaMenuType = {
  className?: string;
};

const PembukaMenu: FunctionComponent<PembukaMenuType> = ({
  className = "",
}) => {
  return (
    <main className={[styles.pembukaMenu, className].join(" ")}>
      <NavigasiUtama />
      <Pengantar1
        ajakanMemilihMinWidth="250px"
        judulMenuMargin="0"
        sajianPilihanMinWidth="250px"
        sajianPilihanBackgroundImage="url('/assets/p3/Sajian-pilihan@3x.png')"
      />
      <NavigasiKategoriMenu />
    </main>
  );
};

export default PembukaMenu;
