import { FunctionComponent } from "react";
import KelompokCabang from "./KelompokCabang";
import styles from "./KabupatenBekasi.module.css";

export type KabupatenBekasiType = {
  className?: string;
};

const KabupatenBekasi: FunctionComponent<KabupatenBekasiType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.kabupatenBekasi, className].join(" ")}>
      <div className={styles.judulWilayah}>
        <div className={styles.aksenWilayah} />
        <h3 className={styles.wilayah}>KABUPATEN BEKASI</h3>
        <div className={styles.jumlahLokasi}>
          <div className={styles.jumlah}>45 lokasi</div>
        </div>
        <div className={styles.garisPemisah} />
      </div>
      <div className={styles.kelompokArea}>
        <section className={styles.kelompokCabang}>
          <div className={styles.kepalaKelompok}>
            <div className={styles.namaArea}>Tambun</div>
            <div className={styles.jumlahArea}>15</div>
          </div>
          <div className={styles.daftarLokasi}>
            <div className={styles.lokasiCabang}>
              <div className={styles.penandaLokasi}>·</div>
              <div className={styles.namaLokasi}>Jl. Mekar Sari</div>
            </div>
            <div className={styles.lokasiCabang2}>
              <div className={styles.penandaLokasi}>·</div>
              <div className={styles.namaLokasi2}>Graha Melasti</div>
            </div>
            <div className={styles.lokasiCabang3}>
              <div className={styles.penandaLokasi}>·</div>
              <div className={styles.namaLokasi3}>Citravila</div>
            </div>
            <div className={styles.lokasiCabang4}>
              <div className={styles.penandaLokasi}>·</div>
              <div className={styles.namaLokasi}>Grand Wisata</div>
            </div>
            <div className={styles.lokasiCabang5}>
              <div className={styles.penandaLokasi}>·</div>
              <div className={styles.namaLokasi5}>Inkopol</div>
            </div>
            <div className={styles.lokasiCabang6}>
              <div className={styles.penandaLokasi}>·</div>
              <div className={styles.namaLokasi6}>Mahkota Indah</div>
            </div>
            <div className={styles.lokasiCabang7}>
              <div className={styles.penandaLokasi}>·</div>
              <div className={styles.namaLokasi7}>Taman Tridaya Indah</div>
            </div>
            <div className={styles.lokasiCabang8}>
              <div className={styles.penandaLokasi}>·</div>
              <div className={styles.namaLokasi8}>Bunderan SMK PGRI</div>
            </div>
            <div className={styles.lokasiCabang9}>
              <div className={styles.penandaLokasi}>·</div>
              <div className={styles.namaLokasi9}>Griya Asri 2</div>
            </div>
            <div className={styles.lokasiCabang10}>
              <div className={styles.penandaLokasi}>·</div>
              <div className={styles.namaLokasi10}>Mekarsari</div>
            </div>
            <div className={styles.lokasiCabang11}>
              <div className={styles.penandaLokasi}>·</div>
              <div className={styles.namaLokasi11}>Mitra Setia Eka Permai</div>
            </div>
            <div className={styles.lokasiCabang12}>
              <div className={styles.penandaLokasi}>·</div>
              <div className={styles.namaLokasi12}>Kp. Sasak 3</div>
            </div>
            <div className={styles.lokasiCabang13}>
              <div className={styles.penandaLokasi}>·</div>
              <div className={styles.namaLokasi13}>Kp. Pekopen</div>
            </div>
            <div className={styles.lokasiCabang14}>
              <div className={styles.penandaLokasi}>·</div>
              <div className={styles.namaLokasi14}>Jati Kubang</div>
            </div>
            <div className={styles.lokasiCabang15}>
              <div className={styles.penandaLokasi}>·</div>
              <div className={styles.namaLokasi15}>Taman Puri Cendana.</div>
            </div>
            <div className={styles.lokasiCabang16}>
              <div className={styles.penandaLokasi}>·</div>
              <div className={styles.namaLokasi16}>Perum Dukuh Jamrud</div>
            </div>
          </div>
        </section>
        <section className={styles.kelompokCabang2}>
          <div className={styles.kepalaKelompok2}>
            <div className={styles.namaArea2}>Cibitung</div>
            <div className={styles.jumlahArea}>16</div>
          </div>
          <div className={styles.daftarLokasi2}>
            <div className={styles.namaLokasi17}>Jl. Trias Raya</div>
            <div className={styles.lokasiCabang17}>
              <div className={styles.penandaLokasi}>·</div>
              <div className={styles.namaLokasi18}>Pesona Gading</div>
            </div>
            <div className={styles.lokasiCabang18}>
              <div className={styles.penandaLokasi}>·</div>
              <div className={styles.namaLokasi19}>Alam Pesona Wanajaya</div>
            </div>
            <div className={styles.lokasiCabang19}>
              <div className={styles.penandaLokasi}>·</div>
              <div className={styles.namaLokasi15}>Gramapuri Tamansari</div>
            </div>
            <div className={styles.lokasiCabang20}>
              <div className={styles.penandaLokasi}>·</div>
              <div className={styles.namaLokasi14}>Perum Trias</div>
            </div>
            <div className={styles.lokasiCabang21}>
              <div className={styles.penandaLokasi}>·</div>
              <div className={styles.namaLokasi22}>Gg. Darussalam</div>
            </div>
            <div className={styles.lokasiCabang22}>
              <div className={styles.penandaLokasi}>·</div>
              <div className={styles.namaLokasi23}>Grama Puri Taman Sari</div>
            </div>
            <div className={styles.lokasiCabang23}>
              <div className={styles.penandaLokasi}>·</div>
              <div className={styles.namaLokasi24}>Villa Mutiara Jaya</div>
            </div>
            <div className={styles.lokasiCabang24}>
              <div className={styles.penandaLokasi}>·</div>
              <div className={styles.namaLokasi25}>Perum TWI</div>
            </div>
            <div className={styles.lokasiCabang25}>
              <div className={styles.penandaLokasi}>·</div>
              <div className={styles.namaLokasi26}>Metland Cibitung</div>
            </div>
            <div className={styles.lokasiCabang26}>
              <div className={styles.penandaLokasi}>·</div>
              <div className={styles.namaLokasi27}>Griya Sasapa</div>
            </div>
            <div className={styles.lokasiCabang27}>
              <div className={styles.penandaLokasi}>·</div>
              <div className={styles.namaLokasi28}>Kp. Selang Tengah</div>
            </div>
            <div className={styles.lokasiCabang28}>
              <div className={styles.penandaLokasi}>·</div>
              <div className={styles.namaLokasi29}>Jl. Sentosa</div>
            </div>
            <div className={styles.lokasiCabang29}>
              <div className={styles.penandaLokasi}>·</div>
              <div className={styles.namaLokasi30}>Bizhaus Metland</div>
            </div>
            <div className={styles.lokasiCabang30}>
              <div className={styles.penandaLokasi}>·</div>
              <div className={styles.namaLokasi31}>Taman Wanasari Indah</div>
            </div>
            <div className={styles.lokasiCabang31}>
              <div className={styles.penandaLokasi}>·</div>
              <div className={styles.namaLokasi32}>Puri Lestari Utama.</div>
            </div>
          </div>
        </section>
        <section className={styles.areaKabupatenLainnya}>
          <div className={styles.kelompokCabang3}>
            <div className={styles.kepalaKelompok3}>
              <div className={styles.namaArea3}>Cikarang</div>
              <div className={styles.jumlahArea}>07</div>
            </div>
            <div className={styles.daftarLokasi3}>
              <div className={styles.lokasiCabang32}>
                <div className={styles.penandaLokasi32}>·</div>
                <div className={styles.namaLokasi33}>Graha Asri</div>
              </div>
              <div className={styles.lokasiCabang32}>
                <div className={styles.penandaLokasi32}>·</div>
                <div className={styles.namaLokasi34}>Komp Densos</div>
              </div>
              <div className={styles.lokasiCabang32}>
                <div className={styles.penandaLokasi32}>·</div>
                <div className={styles.namaLokasi35}>Karang Asih</div>
              </div>
              <div className={styles.lokasiCabang32}>
                <div className={styles.penandaLokasi32}>·</div>
                <div className={styles.namaLokasi36}>Taman Aster</div>
              </div>
              <div className={styles.lokasiCabang32}>
                <div className={styles.penandaLokasi32}>·</div>
                <div className={styles.namaLokasi37}>Telaga Murni</div>
              </div>
              <div className={styles.lokasiCabang32}>
                <div className={styles.penandaLokasi32}>·</div>
                <div className={styles.namaLokasi38}>Wahana Cikarang</div>
              </div>
              <div className={styles.lokasiCabang38}>
                <div className={styles.penandaLokasi32}>·</div>
                <div className={styles.namaLokasi39}>Grama Puri Persada.</div>
              </div>
            </div>
          </div>
          <KelompokCabang
            kelompokCabangFlex="unset"
            kelompokCabangMinWidth="unset"
            kelompokCabangAlignSelf="stretch"
            kelompokCabangPadding="0px 1px"
            namaArea="Setu/Babelan/Karang Bahagia"
            namaAreaMinWidth="212px"
            daftarLokasiPadding="2px 23px 4px"
            namaLokasi="Jl. Raya Setu"
            namaLokasiMinWidth="76px"
            namaLokasi1="Kavling Tandang Mandiri"
            namaLokasiMinWidth1="146px"
            namaLokasi2="Penggilingan Tengah"
            namaLokasiMinWidth2="124px"
            namaLokasi3="Sukaraya Indah."
            namaLokasiMinWidth3="95px"
          />
          <div className={styles.kelompokCabang4}>
            <div className={styles.kepalaKelompok4}>
              <div className={styles.namaArea4}>Kab. Lainnya</div>
              <div className={styles.jumlahArea4}>03</div>
            </div>
            <div className={styles.daftarLokasi4}>
              <div className={styles.lokasiCabang32}>
                <div className={styles.penandaLokasi32}>·</div>
                <div className={styles.namaLokasi40}>Taman Puri Kencana</div>
              </div>
              <div className={styles.lokasiCabang32}>
                <div className={styles.penandaLokasi32}>·</div>
                <div className={styles.namaLokasi41}>Griya Family 4</div>
              </div>
              <div className={styles.lokasiCabang41}>
                <div className={styles.penandaLokasi32}>·</div>
                <div className={styles.namaLokasi42}>Regensi 1.</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default KabupatenBekasi;
