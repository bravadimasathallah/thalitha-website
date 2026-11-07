import { Link, matchPath, useLocation } from "react-router-dom";
import { useLayoutEffect, useRef } from "react";
import styles from "./NavigasiMenu.module.css";
import { halamanKemitraan, tautanWhatsApp } from "../config/kontak";

const kategoriMenu = [
  { label: "Original", path: "/menu" },
  { label: "Hot Spicy", path: "/menu/hot-spicy" },
  { label: "Saus Keju", path: "/menu/keju" },
  { label: "Sambal Geprek", path: "/menu/geprek" },
  { label: "Paket Nasi", path: "/menu/paket-nasi" },
  { label: "Pelengkap", path: "/menu/pelengkap" },
  { label: "Minuman", path: "/menu/minuman" },
];

type NavigasiUtamaProps = {
  aksi?: { label: string; path: string };
};

export function NavigasiUtama({
  aksi = { label: "Pesan Sekarang", path: tautanWhatsApp },
}: NavigasiUtamaProps) {
  const { pathname } = useLocation();
  const nav = useRef<HTMLElement>(null);
  useLayoutEffect(() => {
    const revealActiveLink = () => {
      const container = nav.current;
      const active = container?.querySelector<HTMLElement>("[aria-current]");
      if (!container || !active || container.scrollWidth <= container.clientWidth) return;
      const bounds = container.getBoundingClientRect();
      const item = active.getBoundingClientRect();
      if (item.right > bounds.right - 4) container.scrollLeft += item.right - bounds.right + 4;
      else if (item.left < bounds.left + 4) container.scrollLeft += item.left - bounds.left - 4;
    };
    revealActiveLink();
    window.addEventListener("resize", revealActiveLink);
    return () => window.removeEventListener("resize", revealActiveLink);
  }, [pathname]);
  const diBeranda = Boolean(matchPath("/", pathname));
  const diKemitraan = Boolean(matchPath(halamanKemitraan, pathname));
  const tautanUtama = [
    { label: "Beranda", path: "/", aktif: diBeranda && !diKemitraan },
    { label: "Menu", path: "/menu", aktif: matchPath({ path: "/menu", end: false }, pathname) },
    { label: "Kemitraan", path: halamanKemitraan, aktif: diKemitraan },
    { label: "Lokasi", path: "/lokasi", aktif: matchPath("/lokasi", pathname) },
    { label: "Minigame", path: "/minigame", aktif: matchPath("/minigame", pathname) },
  ];
  const isiAksi = <>{aksi.label}<img src="/assets/p1/arrow-up-right.svg" alt="" /></>;

  return (
    <header className={styles.header}>
      <div className={styles.isiHeader}>
        <Link viewTransition className={styles.logo} to="/" aria-label="Thalita Fried Chicken – Beranda">
          <img src="/assets/p1/Logo-Thalita-1-removebg-preview-2@2x.png" alt="" />
        </Link>
        <nav ref={nav} className={styles.tautanUtama} aria-label="Navigasi utama">
          {tautanUtama.map(({ label, path, aktif }) => (
            <Link viewTransition key={path} to={path} aria-current={aktif ? "location" : undefined}>
              {label}
            </Link>
          ))}
        </nav>
        {aksi.path.startsWith("https://") ? (
          <a className={styles.pesan} href={aksi.path}>{isiAksi}</a>
        ) : (
          <Link viewTransition className={styles.pesan} to={aksi.path}>{isiAksi}</Link>
        )}
      </div>
    </header>
  );
}

export function NavigasiKategoriMenu() {
  const { pathname } = useLocation();

  return (
    <div className={styles.bilahKategori}>
      <div className={styles.isiBilah}>
        <nav className={styles.kategori} aria-label="Kategori menu">
          {kategoriMenu.map(({ label, path }) => (
            <Link viewTransition key={path} to={path} aria-current={matchPath(path, pathname) ? "page" : undefined}>
              {label}
            </Link>
          ))}
        </nav>
        <div className={styles.pencarian}>
          <img src="/assets/p1/search.svg" alt="" />
          <input type="text" aria-label="Cari menu favoritmu" placeholder="Cari menu favoritmu" />
        </div>
      </div>
    </div>
  );
}
