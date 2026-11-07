import { FunctionComponent } from "react";
import PembukaMenu from "../components/PembukaMenu";
import Pelengkap from "../components/Pelengkap";
import PenutupMenu from "../components/PenutupMenu";
import styles from "./ThalitaFriedChickenMenuPelengkap.module.css";

const ThalitaFriedChickenMenuPelengkap: FunctionComponent = () => {
  return (
    <div className={styles.thalitaFriedChickenMenuP}>
      <PembukaMenu />
      <Pelengkap />
      <PenutupMenu
        penutupMenuFlexDirection="column"
        penutupMenuPadding="44px 0px 0px"
        footerAlignSelf="stretch"
        footerFlex="unset"
      />
    </div>
  );
};

export default ThalitaFriedChickenMenuPelengkap;
