import { ReactNode } from "react";

const Fritzon = () => (
  <>
    <p>
      Storbarnsmamma, småbarnsmormor och fartig ex-minister som diggar trygghet,
      hållbarhet och, om man får välja, fred på jorden 😍
    </p>
    <p>
      För mig är jämställdhet icke förhandlingsbart! Den som har köpt sex har
      köpt en annan människa - oavsett var i Europa detta sker!
    </p>
    <p>Svep höger för ett EU med mer sammahållning, och mindre splittring 🫶</p>
  </>
);
const Danielsson = () => (
  <p>Swipe right and I will give you a strong fack 😉</p>
);
const Tobe = () => (
  <>
    <p>
      Jag längtar efter att få gå mysiga kvällspromenader, hitta någon mysig
      bänk, sitta och stirra min älskling riktigt djupt i ögonen och höra ljudet
      av batongslag mot gängkriminella från den europeiska specialpolisen
      blandat med fåglarnas vårkvitter 😌
    </p>
    <p>
      Här har du en kille som gillar hårda tag! Men kan också växla om och vara
      mjuk och mysig så fort folk börjar kalla mig rasist 🐼
    </p>
  </>
);
const Polfjard = () => <p>Rösta som du sveper 😘😉</p>;
const Weimers = () => (
  <>
    <p>
      Har ett primärt förhållande med min fru Svea men söker nu mellan en och
      flera sekundära partners.
    </p>
    <p>
      Uppskattar när en man kan få vara en man och en kvinna kan få vara en
      kvinna men jag tänker inte betala någon annans middag eller statsskuld.
    </p>
    <p>Grön flagga om du har mycket skog. 🌲.</p>
  </>
);
const Timgren = () => <p>👶🐰🏃‍♀️🍷🫒👜☀️✈️✈️✈️✈️✈️🏖🇸🇪</p>;
const Kuhnke = () => (
  <>
    <p>Blickar som möts</p>
    <p>Händer som känner</p>
    <p>Sida vid sida, eoner av tida</p>
    <p>Grönt är skönt och gult är fult</p>
    <p>
      Min dröm är att bygga ett eget Eco Village, där vi odlar vår egen mat, vi
      bygger våra egna hus och alla kan jobba heltid med kultur och journalistik
      💚
    </p>
  </>
);
const Holmgren = () => (
  <p>
    Jag började tveka på global uppvärmning men sen du kom in i rummet så blev
    1.5-gradersmålet kört 🥵🥵🥵
  </p>
);
const Wiesner = () => (
  <>
    <p>Heeeej!</p>
    <p>Jag är en lagom tjej på 31 jordsnurr som vill se FÖRÄNDRING! 💪</p>
    <p>
      Tycker om att träna, laga mat, läsa böcker, vakna tidigt, spendera tid ute
      i naturen, meditera, kallduscha, hjälpa hemlösa, lära mig nya språk,
      engagera mig i ideellt arbete, lösa svåra konflikter i tredje världen,
      plocka bort luddet från tvättmaskinen, spela harpkonsert, ingripa när
      någon utsätts för fara och mysa med min katt framför ett avsnitt av
      Paradise Hotel 💞
    </p>
    <p>Gillar enbart olika ✋🏻✋🏼✋🏽✋🏾✋🏿</p>
  </>
);
const AlSahani = () => <p>Vad ska man skriva på den här appen egentligen?</p>;
const Teodorescu = () => (
  <>
    <p>Mitt namn är Alice.</p>
    <p>
      Vill du veta mer om mig kan du läsa mina krönikor i GP, följa mig på
      Substack, lyssna på mig i debatter, kolla in Teodorescu & Suhonen på SVT
      Play, lyssna på mitt Sommarprat och mitt Vinterprat från 2015, fråga Ivar
      Arpi eller läsa Moderaternas Idéprogram som jag skrivit.
    </p>
  </>
);
const Kardemark = () => <p>Som Skyttedal fast gillar piskor 😼</p>;
const Sjostedt = () => (
  <>
    <p>
      Självidentifierad mysfarbror med stort hjärta söker nu lyckan annorstädes.
    </p>
    <p>
      Ett ja kan vara ett nej och ett nej kan vara ett ja. Förut har jag sagt
      nej, men nu säger jag ja. Vad säger du?
    </p>
    <p>Våren kom nu, visst. Härligt va, kamrat.</p>
  </>
);
const Gedin = () => (
  <p>
    Rasister, antifeminister, transfober och skinnskalliga antisemiter
    undanbedes ✊
  </p>
);
const Karlsbro = () => (
  <p>
    JAG VILL LEVA I EUROPA
    <br />
    JAG VILL ÄLSKA OCH SJUNGA HÄR
    <br />
    JAG VILL SKRATTA OCH GRÅTA OCH DANSA
    <br />
    JAG ÄR YR OCH FÖRLORAD OCH KÄR
    <br />
    NÄR JAG TÄNKER PÅ HELA EUROPA
    <br />
    OCH FÖR OSS SOM HÖR HEMMA HÄR
    <br />
    -Arja Saijonmaa
  </p>
);
const Bildt = () => <p>Alla förtjänar en andra chans 🫶</p>;

const bios: Record<string, ReactNode> = {
  "helene-fritzon": <Fritzon />,
  "johan-danielsson": <Danielsson />,
  "tomas-tobe": <Tobe />,
  "jessica-polfjard": <Polfjard />,
  "charlie-weimers": <Weimers />,
  "beatrice-timgren": <Timgren />,
  "alice-bah-kuhnke": <Kuhnke />,
  "par-holmgren": <Holmgren />,
  "emma-wiesner": <Wiesner />,
  "abir-al-sahlani": <AlSahani />,
  "alice-teodorescu-mawe": <Teodorescu />,
  "ella-kardemark": <Kardemark />,
  "jonas-sjostedt": <Sjostedt />,
  "hanna-gedin": <Gedin />,
  "karin-karlsbro": <Karlsbro />,
  "anna-maria-corazza-bildt": <Bildt />,
};

export default bios;
