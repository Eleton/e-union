import { Candidate } from "./types";

const candidates: Candidate[] = [
  {
    id: "helene-fritzon",
    name: "Heléne Fritzon",
    district: "Kristianstad",
    party: "S",
    age: 63,
    occupation: "Lågstadielärare",
    description:
      "Odio morbi quis commodo odio aenean sed adipiscing. Aliquam ultrices sagittis orci a scelerisque purus semper eget duis. Magna sit amet purus gravida quis blandit turpis cursus. Condimentum lacinia quis vel eros donec.",
    swiped: "NONE",
  },
  {
    id: "johan-danielsson",
    name: "Johan Danielsson",
    district: "Stockholm",
    party: "S",
    age: 41,
    occupation: "Fackpamp",
    description:
      "Odio morbi quis commodo odio aenean sed adipiscing. Aliquam ultrices sagittis orci a scelerisque purus semper eget duis. Magna sit amet purus gravida quis blandit turpis cursus. Condimentum lacinia quis vel eros donec.",
    swiped: "NONE",
  },
  {
    id: "tomas-tobe",
    name: "Tomas Tobé",
    district: "Stockholms län",
    party: "M",
    age: 46,
    occupation: "Inget riktigt jobb",
    description:
      "Odio morbi quis commodo odio aenean sed adipiscing. Aliquam ultrices sagittis orci a scelerisque purus semper eget duis. Magna sit amet purus gravida quis blandit turpis cursus. Condimentum lacinia quis vel eros donec.",
    swiped: "NONE",
  },
  {
    id: "jessica-polfjard",
    name: "Jessica Polfjärd",
    district: "Västmanland",
    party: "M",
    age: 52,
    occupation: "Inget riktigt jobb",
    description:
      "Odio morbi quis commodo odio aenean sed adipiscing. Aliquam ultrices sagittis orci a scelerisque purus semper eget duis. Magna sit amet purus gravida quis blandit turpis cursus. Condimentum lacinia quis vel eros donec.",
    swiped: "NONE",
  },
  {
    id: "charlie-weimers",
    name: "Charlie Weimers",
    district: "Hammarö",
    party: "SD",
    age: 41,
    occupation: "Inget riktigt jobb",
    description:
      "Odio morbi quis commodo odio aenean sed adipiscing. Aliquam ultrices sagittis orci a scelerisque purus semper eget duis. Magna sit amet purus gravida quis blandit turpis cursus. Condimentum lacinia quis vel eros donec.",
    swiped: "NONE",
  },
  {
    id: "beatrice-timgren",
    name: "Beatrice Timgren",
    district: "Ekerö",
    party: "SD",
    age: 35,
    occupation: "Civilingenjör",
    description:
      "Odio morbi quis commodo odio aenean sed adipiscing. Aliquam ultrices sagittis orci a scelerisque purus semper eget duis. Magna sit amet purus gravida quis blandit turpis cursus. Condimentum lacinia quis vel eros donec.",
    swiped: "NONE",
  },
  {
    id: "alice-bah-kuhnke",
    name: "Alice Bah Kuhnke",
    district: "",
    party: "MP",
    age: 52,
    occupation: "Mediaprofil",
    description:
      "Orci sagittis eu volutpat odio facilisis mauris sit. Aliquet porttitor lacus luctus accumsan tortor posuere ac. Sapien faucibus et molestie ac feugiat sed lectus vestibulum mattis. In ornare quam viverra orci sagittis eu volutpat odio. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. In hac habitasse platea dictumst vestibulum. In tellus integer feugiat scelerisque varius morbi.",
    swiped: "NONE",
  },
  {
    id: "par-holmgren",
    name: "Pär Holmgren",
    district: "",
    party: "MP",
    age: 59,
    occupation: "Meteorolog",
    description:
      "Orci sagittis eu volutpat odio facilisis mauris sit. Aliquet porttitor lacus luctus accumsan tortor posuere ac. Sapien faucibus et molestie ac feugiat sed lectus vestibulum mattis. In ornare quam viverra orci sagittis eu volutpat odio. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. In hac habitasse platea dictumst vestibulum. In tellus integer feugiat scelerisque varius morbi.",
    swiped: "NONE",
  },
  // {
  //   id: "emma-wiesner",
  //   name: "Emma Wiesner",
  //   district: "",
  //   party: "C",
  //   age: 31,
  //   occupation: "Civilingenjör",
  //   description:
  //     "Orci sagittis eu volutpat odio facilisis mauris sit. Aliquet porttitor lacus luctus accumsan tortor posuere ac. Sapien faucibus et molestie ac feugiat sed lectus vestibulum mattis. In ornare quam viverra orci sagittis eu volutpat odio. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. In hac habitasse platea dictumst vestibulum. In tellus integer feugiat scelerisque varius morbi.",
  //   swiped: "NONE",
  // },
  // {
  //   id: "alice-teodorescu-mawe",
  //   name: "Alice Teodorescu Måwe LOL",
  //   district: "",
  //   party: "KD",
  //   age: 39,
  //   occupation: "Jurist",
  //   description:
  //     "Orci sagittis eu volutpat odio facilisis mauris sit. Aliquet porttitor lacus luctus accumsan tortor posuere ac. Sapien faucibus et molestie ac feugiat sed lectus vestibulum mattis. In ornare quam viverra orci sagittis eu volutpat odio. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. In hac habitasse platea dictumst vestibulum. In tellus integer feugiat scelerisque varius morbi.",
  //   swiped: "NONE",
  // },
  // {
  //   id: "jonas-sjostedt",
  //   name: "Jonas Sjöstedt",
  //   district: "Umeå",
  //   party: "V",
  //   age: 59,
  //   occupation: "Författare",
  //   description:
  //     "Orci sagittis eu volutpat odio facilisis mauris sit. Aliquet porttitor lacus luctus accumsan tortor posuere ac. Sapien faucibus et molestie ac feugiat sed lectus vestibulum mattis. In ornare quam viverra orci sagittis eu volutpat odio. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. In hac habitasse platea dictumst vestibulum. In tellus integer feugiat scelerisque varius morbi.",
  //   swiped: "NONE",
  // },
  // {
  //   id: "karin-karlsbro",
  //   name: "Karin Karlsbro",
  //   district: "Stockholm",
  //   party: "L",
  //   age: 53,
  //   occupation: "Hållbarhetschef",
  //   description:
  //     "Orci sagittis eu volutpat odio facilisis mauris sit. Aliquet porttitor lacus luctus accumsan tortor posuere ac. Sapien faucibus et molestie ac feugiat sed lectus vestibulum mattis. In ornare quam viverra orci sagittis eu volutpat odio. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. In hac habitasse platea dictumst vestibulum. In tellus integer feugiat scelerisque varius morbi.",
  //   swiped: "NONE",
  // },
];

export default candidates;

/*
S
Heléne Fritzon, Kristianstad
Johan Danielsson, Stockholm
M
Tomas Tobé, Stockholms län
Jessica Polfjärd, Västmanland
SD
Charlie Weimers, Hammarö
Beatrice Timgren, Ekerö
MP
Alice Bah Kuhnke
Pär Holmgren
C
Emma Wiesner
Abir Al-Sahlani
KD
Alice Teodorescu Måwe
Ella Kardemark, Kommunalråd, Halmstad
V
Jonas Sjöstedt, Umeå
Hanna Gedin, Malmö
L
Karin Karlsbro, Stockholm 
Anna Maria Corazza Bildt, Stockholm
PP
Katarina Stensson
Mattias Bjärnemalm
MED
Pia Rundkvist
Liselott Martynenko Agerlid
*/
