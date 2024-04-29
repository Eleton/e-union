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
// const AlSahani = () => <p>Vet inte riktigt vad man ska skriva här?</p>;

const bios: Record<string, ReactNode> = {
  "helene-fritzon": <Fritzon />,
  "johan-danielsson": <Danielsson />,
  "tomas-tobe": <Tobe />,
  "jessica-polfjard": <Polfjard />,
  "charlie-weimers": <Weimers />,
  "beatrice-timgren": <Timgren />,
  "alice-bah-kuhnke": <Kuhnke />,
  "par-holmgren": <Holmgren />,
};

export default bios;
