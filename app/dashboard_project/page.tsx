import Image from "next/image";
import css from "./dashboard.module.scss";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";

const Dashboard = () => {
  return (
    <div className={css.dashboard}>
      <div className={css.dashboard_project}>
        <Link href="/">
          <button className={css.dashboard_back_button}>
            <FaArrowLeft className={css.icon} /> Takaisin etusivulle
          </button>
        </Link>
        <h1>MAANG osakkeiden kojelauta ja raportti</h1>
        <p>
          Tästä projektista löytyy Excel-kojelauta, josta voi tarkastella MAANG
          osakkeiden kuukausittaisia päätöskursseja viimeisen 10+ vuoden aikana,
          kuten myös vuosituotot/tappiot. Käyttäjä voi valita haluamansa
          ajanjakson väliltä 2015 tammikuu - 2025 heinäkuu. Alta löytyy myös
          dataan perustuva raportti, jossa puhutaan tarkemmin mm. osakkeiden
          trendeistä ja dataan liittyvistä havainnoista.
        </p>
        <div className={css.dashboard_excel}>
          <Image
            className={css.dashboard_image}
            src="/excel_dashboard.PNG"
            alt="Excel dashboard"
            width={1799}
            height={649}
            priority
          />
          <Link
            href="/dashboard_images/maang_dashboard.xlsx"
            download="/dashboard_images/maang_dashboard.xlsx"
          >
            <button className={css.dashboard_button}>Lataa kojelauta</button>
          </Link>
        </div>
        <h1>Raportti</h1>
        <h2>Tausta ja yleiskatsaus</h2>
        <p>
          MAANG on lyhenne, joka viittaa viiteen maailman suurimpaan ja
          vaikutusvaltaisimpaan teknologiayritykseen. Nimi on muunnelma aiemmin
          käytetystä FAANG-lyhenteestä ja se muuttui, kun Facebookin nimi
          vaihtui Metaksi. Yritykset ovat Meta, Amazon, Apple, Netflix ja
          Google.
        </p>
        <p>
          Tässä raportissa käydään läpi tarkemmin, miten näiden yrityksien
          osakkeiden kurssit ovat muuttuneet viimeisen 10+ vuoden aikana
          (Tammikuu 2015–Heinäkuu 2025). Raportin arvot perustuvat
          kuukausittaisiin ja vuosittaisiin päätöskursseihin.
        </p>
        <p>
          Datan näkemyksiä ja havaintoja annetaan seuraavilla keskeisillä
          osa-alueilla:
        </p>
        <ul>
          <li>
            <b>Osakkeiden trendianalyysi:</b> Arvioidaan, miten osakkeiden
            kurssit ovat vaihdelleet ja miten erilaiset tapahtumat vaikuttivat
            osakkeiden hintoihin.
          </li>
          <li>
            <b>Suurin nousu ja lasku: </b>Tutkitaan, milloin osakkeiden nousu ja
            lasku ulivat kaikista suurimmat ja miksi nämä muutokset saattoivat
            tapahtua.
          </li>
          <li>
            <b>Yrityksien vertaaminen: </b>Katsotaan, onko osakkeiden välillä
            eroja tai samanlaisuuksia.
          </li>
        </ul>
        <h2>Datan rakenne</h2>
        <p>
          Alkuperäinen data on ryhmä CSV-tiedostoja, jotka on eritelty päivä-,
          viikko-, ja kuukausihintojen mukaan jokaiselle yritykselle. Datan
          otsikot ovat:
        </p>
        <ul>
          <li>Date (päivämäärä)</li>
          <li>Open (avaushinta)</li>
          <li>High (korkein hinta)</li>
          <li>Low (alin hinta)</li>
          <li>Close (päätöskurssi)</li>
          <li>Adj close (mukautettu päätöskurssi)</li>
          <li>Volume (kaupankäyntivolyymi)</li>
        </ul>
        <Image
          className={css.image}
          src="/dashboard_images/data1.PNG"
          alt="Data structure"
          width={890}
          height={360}
          quality={100}
        />
        <p>
          Pidetään kojelaudan rakenne ja raportin analyysi selkeänä siten, että
          keskitytään yrityksien kuukausittaisiin päätöskursseihin ja niistä
          saadaan myös vuosittaiset päätöskurssit.
        </p>
        <h2>Havainnot ja yhteenveto</h2>
        <h3>Havaintojen yleiskatsaus</h3>
        <p>
          Kun tarkastellaan vuosituottoja 2015–2024 välillä, jokainen
          MAANG-yhtiö on tarjonnut tuottoja sijoittajille satoja prosentteja.
          Näistä yrityksistä suurin voittaja on Netflix. Vuoden 2025
          kuukausittaiset päätöskurssit (tammikuu-heinäkuu) kertovat, että
          Amazon, Apple ja Google ovat laskussa, kun taas Meta ja Netflix ovat
          nousussa. Seuraavat kappaleet kertovat syvällisemmin kurssien
          muutoksista ja trendeistä.
        </p>
        <Image
          className={css.image}
          src="/dashboard_images/yearly_return.PNG"
          alt="Yearly return"
          width={1142}
          height={210}
          quality={100}
        />
        <h3>Kurssien trendit</h3>
        <ul>
          <li>
            Amazonilla ja Netflixillä oli suurin vuosituotto vuonna 2015,
            Applella 2019, Googlella 2021 ja Metalla 2023.
          </li>
          <li>
            Vuonna 2018 Amazon ja Netflix antoivat vuosituottoa, kun taas loput
            yritykset menivät laskuun.
          </li>
          <li>
            Maailman terveysjärjestö WHO julisti koronavirusepidemian
            pandemiaksi 11.3.2020{" "}
            <a
              href="https://www.who.int/europe/emergencies/situations/covid-19"
              target="_blank"
            >
              [1]
            </a>{" "}
            ja kansainvälisen terveysuhkatilanteen päättyneeksi 5.5.2023{" "}
            <a
              href="https://www.who.int/news/item/05-05-2023-statement-on-the-fifteenth-meeting-of-the-international-health-regulations-(2005)-emergency-committee-regarding-the-coronavirus-disease-(covid-19)-pandemic"
              target="_blank"
            >
              [2]
            </a>
            . Tällä aikavälillä vuoden 2022 osakeromahdusta lukuun ottamatta,
            yritykset jatkoivat nousua. Vuonna 2021 Amazonin vuosituotto oli
            lähellä nollaa (2,38 %).
          </li>
        </ul>
        <h3>Yrityksien vertaaminen</h3>
        <ul>
          <li>Vuonna 2016 jokaisen yrityksen vuosituotto jäi alle 13 %:iin.</li>
          <li>
            Jokaisen yrityksen osake lähti laskuun vuonna 2022. Asiantuntijoiden
            mukaan osakeromahduksen taustalla oli korkea inflaatio,
            keskuspankkien rahapolitiikan kiristäminen ja Ukrainan sota{" "}
            <a
              href="https://www.entrepreneur.com/money-finance/why-the-stock-market-has-been-so-volatile-in-2022/428890"
              target="_blank"
            >
              [3]
            </a>
            .
          </li>
          <li>
            Yrityksien osakkeet kuitenkin lähtivät takaisin nousuun vuonna 2023.
            Metalla oli myös yrityksen suurin vuosittainen päätöskurssi.
          </li>
          <li>
            Loppujen lopuksi viimeisen 10 vuoden aikana jokaisen yrityksen
            kurssi on noussut satoja prosentteja.
          </li>
        </ul>
        <h2>Lähteet</h2>
        <ol>
          <li>
            World Health Organization. Coronavirus disease (COVID-19) pandemic.
            WWW-dokumentti. Saatavissa:{" "}
            <a
              href="https://www.who.int/europe/emergencies/situations/covid-19"
              target="_blank"
            >
              Linkki
            </a>{" "}
            [viitattu 17.8.2025].
          </li>
          <li>
            World Health Organization. Statement on the fifteenth meeting of the
            IHR (2005) Emergency Committee on the COVID-19 pandemic.
            WWW-dokumentti. 2023. Saatavissa:{" "}
            <a
              href="https://www.who.int/news/item/05-05-2023-statement-on-the-fifteenth-meeting-of-the-international-health-regulations-(2005)-emergency-committee-regarding-the-coronavirus-disease-(covid-19)-pandemic"
              target="_blank"
            >
              Linkki
            </a>{" "}
            [viitattu 17.8.2025].
          </li>
          <li>
            Degalbo A., Mcintyre K. Why the Stock Market Has Been So Volatile in
            2022. WWW-dokumentti. 2022. Saatavissa:{" "}
            <a
              href="https://www.entrepreneur.com/money-finance/why-the-stock-market-has-been-so-volatile-in-2022/428890"
              target="_blank"
            >
              Linkki
            </a>{" "}
            [viitattu 17.8.2025].
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Dashboard;
