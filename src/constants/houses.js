import houseOne from "../assets/images/houses/house-1.svg";
import houseTwo from "../assets/images/houses/house-2.svg";
import houseThree from "../assets/images/houses/house-3.svg";
import houseFour from "../assets/images/houses/house-4.svg";
import houseFive from "../assets/images/houses/house-5.svg";
import houseSix from "../assets/images/houses/house-6.svg";
import houseSeven from "../assets/images/houses/house-7.svg";
import houseEight from "../assets/images/houses/house-8.svg";
import houseNine from "../assets/images/houses/house-9.svg";

export const houses = [
  {
    id: 1,
    name: "Astina",
    image: houseOne,
    spec: {
      bedroom: 3,
      bathroom: 2,
      sqft: "1,800",
    },

    address: "Tangerang Selatan, Pondok Aren",
    amenities: [
      {
        title: "Furnished",
        value: true,
      },
      {
        title: "Pet Allowed",
        value: true,
      },
      {
        title: "Shared Accomodation",
        value: true,
      },
    ],
    price: {
      day: {
        title: "Day",
        value: "25.000",
      },
      month: {
        title: "Month",
        value: "750.000",
      },
      year: {
        title: "Year",
        value: "9.000.000",
      },
    },
  },
  {
    id: 2,
    name: "Earth",
    image: houseTwo,
    spec: {
      bedroom: 2,
      bathroom: 1,
      sqft: "1,800",
    },
    address: "Bogor",
    amenities: [
      {
        title: "Furnished",
        value: true,
      },
      {
        title: "Pet Allowed",
        value: false,
      },
      {
        title: "Shared Accomodation",
        value: true,
      },
    ],
    price: {
      day: {
        title: "Day",
        value: "25.000",
      },
      month: {
        title: "Month",
        value: "750.000",
      },
      year: {
        title: "Year",
        value: "9.000.000",
      },
    },
  },
  {
    id: 3,
    name: "Sea",
    image: houseThree,
    spec: {
      bedroom: 2,
      bathroom: 2,
      sqft: "2,400",
    },
    address: "Jakarta Barat, Tambora",
    amenities: [
      {
        title: "Furnished",
        value: false,
      },
      {
        title: "Pet Allowed",
        value: true,
      },
      {
        title: "Shared Accomodation",
        value: false,
      },
    ],
    price: {
      day: {
        title: "Day",
        value: "17.000",
      },
      month: {
        title: "Month",
        value: "500.000",
      },
      year: {
        title: "Year",
        value: "6.000.000",
      },
    },
  },
  {
    id: 4,
    name: "Mountain",
    image: houseFour,
    spec: {
      bedroom: 3,
      bathroom: 2,
      sqft: "1,800",
    },

    address: "Tangerang",
    amenities: [
      {
        title: "Furnished",
        value: false,
      },
      {
        title: "Pet Allowed",
        value: true,
      },
      {
        title: "Shared Accomodation",
        value: true,
      },
    ],
    price: {
      day: {
        title: "Day",
        value: "25.000",
      },
      month: {
        title: "Month",
        value: "750.000",
      },
      year: {
        title: "Year",
        value: "9.000.000",
      },
    },
  },
  {
    id: 5,
    name: "Fire",
    image: houseFive,
    spec: {
      bedroom: 2,
      bathroom: 1,
      sqft: "1,800",
    },
    address: "Jakarta Utara, Pluit",
    amenities: [
      {
        title: "Furnished",
        value: true,
      },
      {
        title: "Pet Allowed",
        value: false,
      },
      {
        title: "Shared Accomodation",
        value: true,
      },
    ],
    price: {
      day: {
        title: "Day",
        value: "25.000",
      },
      month: {
        title: "Month",
        value: "750.000",
      },
      year: {
        title: "Year",
        value: "9.000.000",
      },
    },
  },
  {
    id: 6,
    name: "Water",
    image: houseSix,
    spec: {
      bedroom: 2,
      bathroom: 2,
      sqft: "2,400",
    },
    address: "Jakarta Selatan, Kemang",
    amenities: [
      {
        title: "Furnished",
        value: false,
      },
      {
        title: "Pet Allowed",
        value: true,
      },
      {
        title: "Shared Accomodation",
        value: true,
      },
    ],
    price: {
      day: {
        title: "Day",
        value: "25.000",
      },
      month: {
        title: "Month",
        value: "750.000",
      },
      year: {
        title: "Year",
        value: "9.000.000",
      },
    },
  },
  {
    id: 7,
    name: "Road",
    image: houseSeven,
    spec: {
      bedroom: 2,
      bathroom: 1,
      sqft: "1,800",
    },
    address: "Jakarta Timur, Kampung Melayu",
    amenities: [
      {
        title: "Furnished",
        value: false,
      },
      {
        title: "Pet Allowed",
        value: false,
      },
      {
        title: "Shared Accomodation",
        value: true,
      },
    ],
    price: {
      day: {
        title: "Day",
        value: "17.000",
      },
      month: {
        title: "Month",
        value: "500.000",
      },
      year: {
        title: "Year",
        value: "6.000.000",
      },
    },
  },
  {
    id: 8,
    name: "Resistance",
    image: houseEight,
    spec: {
      bedroom: 2,
      bathroom: 2,
      sqft: "2,400",
    },
    address: "Jakarta Pusat, Kemayoran",
    amenities: [
      {
        title: "Furnished",
        value: true,
      },
      {
        title: "Pet Allowed",
        value: false,
      },
      {
        title: "Shared Accomodation",
        value: false,
      },
    ],
    price: {
      day: {
        title: "Day",
        value: "25.000",
      },
      month: {
        title: "Month",
        value: "750.000",
      },
      year: {
        title: "Year",
        value: "9.000.000",
      },
    },
  },
  {
    id: 9,
    name: "Green",
    image: houseNine,
    spec: {
      bedroom: 3,
      bathroom: 2,
      sqft: "1,800",
    },

    address: "Bekasi",
    amenities: [
      {
        title: "Furnished",
        value: true,
      },
      {
        title: "Pet Allowed",
        value: true,
      },
      {
        title: "Shared Accomodation",
        value: false,
      },
    ],
    price: {
      day: {
        title: "Day",
        value: "25.000",
      },
      month: {
        title: "Month",
        value: "750.000",
      },
      year: {
        title: "Year",
        value: "9.000.000",
      },
    },
  },
  {
    id: 10,
    name: "Grove",
    image: houseFive,
    spec: {
      bedroom: 2,
      bathroom: 1,
      sqft: "1,800",
    },
    address: "Jakarta Selatan, Pondok Indah",
    amenities: [
      {
        title: "Furnished",
        value: true,
      },
      {
        title: "Pet Allowed",
        value: true,
      },
      {
        title: "Shared Accomodation",
        value: true,
      },
    ],
    price: {
      day: {
        title: "Day",
        value: "25.000",
      },
      month: {
        title: "Month",
        value: "750.000",
      },
      year: {
        title: "Year",
        value: "9.000.000",
      },
    },
  },
  {
    id: 11,
    name: "Libra",
    image: houseSeven,
    spec: {
      bedroom: 2,
      bathroom: 1,
      sqft: "1,800",
    },
    address: "Tangerang Selatan, Pondok Aren",
    amenities: [
      {
        title: "Furnished",
        value: false,
      },
      {
        title: "Pet Allowed",
        value: false,
      },
      {
        title: "Shared Accomodation",
        value: true,
      },
    ],
    price: {
      day: {
        title: "Day",
        value: "25.000",
      },
      month: {
        title: "Month",
        value: "750.000",
      },
      year: {
        title: "Year",
        value: "9.000.000",
      },
    },
  },
  {
    id: 12,
    name: "Zeus",
    image: houseSeven,
    spec: {
      bedroom: 3,
      bathroom: 3,
      sqft: "2,800",
    },
    address: "Tangerang Selatan, Pondok Aren",
    amenities: [
      {
        title: "Furnished",
        value: false,
      },
      {
        title: "Pet Allowed",
        value: false,
      },
      {
        title: "Shared Accomodation",
        value: true,
      },
    ],
    price: {
      day: {
        title: "Day",
        value: "17.000",
      },
      month: {
        title: "Month",
        value: "500.000",
      },
      year: {
        title: "Year",
        value: "6.000.000",
      },
    },
  },
  {
    id: 13,
    name: "Atlas",
    image: houseSeven,
    spec: {
      bedroom: 4,
      bathroom: 4,
      sqft: "1,800",
    },
    address: "Tangerang Selatan, Pondok Aren",
    amenities: [
      {
        title: "Furnished",
        value: true,
      },
      {
        title: "Pet Allowed",
        value: true,
      },
      {
        title: "Shared Accomodation",
        value: true,
      },
    ],
    price: {
      day: {
        title: "Day",
        value: "25.000",
      },
      month: {
        title: "Month",
        value: "750.000",
      },
      year: {
        title: "Year",
        value: "9.000.000",
      },
    },
  },
  {
    id: 14,
    name: "Gaia",
    image: houseSeven,
    spec: {
      bedroom: 5,
      bathroom: 5,
      sqft: "1,800",
    },
    address: "Tangerang Selatan, Pondok Aren",
    amenities: [
      {
        title: "Furnished",
        value: false,
      },
      {
        title: "Pet Allowed",
        value: false,
      },
      {
        title: "Shared Accomodation",
        value: true,
      },
    ],
    price: {
      day: {
        title: "Day",
        value: "17.000",
      },
      month: {
        title: "Month",
        value: "500.000",
      },
      year: {
        title: "Year",
        value: "6.000.000",
      },
    },
  },
  {
    id: 15,
    name: "Odin",
    image: houseSeven,
    spec: {
      bedroom: 2,
      bathroom: 1,
      sqft: "1,800",
    },
    address: "Tangerang Selatan, Pondok Aren",
    amenities: [
      {
        title: "Furnished",
        value: true,
      },
      {
        title: "Pet Allowed",
        value: true,
      },
      {
        title: "Shared Accomodation",
        value: true,
      },
    ],
    price: {
      day: {
        title: "Day",
        value: "17.000",
      },
      month: {
        title: "Month",
        value: "500.000",
      },
      year: {
        title: "Year",
        value: "6.000.000",
      },
    },
  },
  {
    id: 16,
    name: "Astina",
    image: houseOne,
    spec: {
      bedroom: 3,
      bathroom: 2,
      sqft: "1,800",
    },

    address: "Tangerang Selatan, Pondok Aren",
    amenities: [
      {
        title: "Furnished",
        value: true,
      },
      {
        title: "Pet Allowed",
        value: true,
      },
      {
        title: "Shared Accomodation",
        value: true,
      },
    ],
    price: {
      day: {
        title: "Day",
        value: "25.000",
      },
      month: {
        title: "Month",
        value: "750.000",
      },
      year: {
        title: "Year",
        value: "9.000.000",
      },
    },
  },
  {
    id: 17,
    name: "Earth",
    image: houseTwo,
    spec: {
      bedroom: 2,
      bathroom: 1,
      sqft: "1,800",
    },
    address: "Bogor",
    amenities: [
      {
        title: "Furnished",
        value: true,
      },
      {
        title: "Pet Allowed",
        value: false,
      },
      {
        title: "Shared Accomodation",
        value: true,
      },
    ],
    price: {
      day: {
        title: "Day",
        value: "25.000",
      },
      month: {
        title: "Month",
        value: "750.000",
      },
      year: {
        title: "Year",
        value: "9.000.000",
      },
    },
  },
  {
    id: 18,
    name: "Sea",
    image: houseThree,
    spec: {
      bedroom: 2,
      bathroom: 7,
      sqft: "2,400",
    },
    address: "Jakarta Barat, Tambora",
    amenities: [
      {
        title: "Furnished",
        value: false,
      },
      {
        title: "Pet Allowed",
        value: true,
      },
      {
        title: "Shared Accomodation",
        value: false,
      },
    ],
    price: {
      day: {
        title: "Day",
        value: "17.000",
      },
      month: {
        title: "Month",
        value: "500.000",
      },
      year: {
        title: "Year",
        value: "6.000.000",
      },
    },
  },
  {
    id: 19,
    name: "Mountain",
    image: houseFour,
    spec: {
      bedroom: 3,
      bathroom: 2,
      sqft: "1,800",
    },

    address: "Tangerang",
    amenities: [
      {
        title: "Furnished",
        value: false,
      },
      {
        title: "Pet Allowed",
        value: true,
      },
      {
        title: "Shared Accomodation",
        value: true,
      },
    ],
    price: {
      day: {
        title: "Day",
        value: "25.000",
      },
      month: {
        title: "Month",
        value: "750.000",
      },
      year: {
        title: "Year",
        value: "9.000.000",
      },
    },
  },
  {
    id: 20,
    name: "Fire",
    image: houseFive,
    spec: {
      bedroom: 2,
      bathroom: 1,
      sqft: "1,800",
    },
    address: "Jakarta Utara, Pluit",
    amenities: [
      {
        title: "Furnished",
        value: true,
      },
      {
        title: "Pet Allowed",
        value: false,
      },
      {
        title: "Shared Accomodation",
        value: true,
      },
    ],
    price: {
      day: {
        title: "Day",
        value: "25.000",
      },
      month: {
        title: "Month",
        value: "750.000",
      },
      year: {
        title: "Year",
        value: "9.000.000",
      },
    },
  },
  {
    id: 21,
    name: "Water",
    image: houseSix,
    spec: {
      bedroom: 2,
      bathroom: 2,
      sqft: "2,400",
    },
    address: "Jakarta Selatan, Kemang",
    amenities: [
      {
        title: "Furnished",
        value: false,
      },
      {
        title: "Pet Allowed",
        value: true,
      },
      {
        title: "Shared Accomodation",
        value: true,
      },
    ],
    price: {
      day: {
        title: "Day",
        value: "25.000",
      },
      month: {
        title: "Month",
        value: "750.000",
      },
      year: {
        title: "Year",
        value: "9.000.000",
      },
    },
  },
  {
    id: 22,
    name: "Road",
    image: houseSeven,
    spec: {
      bedroom: 2,
      bathroom: 1,
      sqft: "1,800",
    },
    address: "Jakarta Timur, Kampung Melayu",
    amenities: [
      {
        title: "Furnished",
        value: false,
      },
      {
        title: "Pet Allowed",
        value: false,
      },
      {
        title: "Shared Accomodation",
        value: true,
      },
    ],
    price: {
      day: {
        title: "Day",
        value: "25.000",
      },
      month: {
        title: "Month",
        value: "750.000",
      },
      year: {
        title: "Year",
        value: "9.000.000",
      },
    },
  },
  {
    id: 23,
    name: "Resistance",
    image: houseEight,
    spec: {
      bedroom: 7,
      bathroom: 4,
      sqft: "2,400",
    },
    address: "Jakarta Pusat, Kemayoran",
    amenities: [
      {
        title: "Furnished",
        value: true,
      },
      {
        title: "Pet Allowed",
        value: false,
      },
      {
        title: "Shared Accomodation",
        value: false,
      },
    ],
    price: {
      day: {
        title: "Day",
        value: "25.000",
      },
      month: {
        title: "Month",
        value: "750.000",
      },
      year: {
        title: "Year",
        value: "9.000.000",
      },
    },
  },
  {
    id: 24,
    name: "Green",
    image: houseNine,
    spec: {
      bedroom: 3,
      bathroom: 2,
      sqft: "1,800",
    },

    address: "Bekasi",
    amenities: [
      {
        title: "Furnished",
        value: true,
      },
      {
        title: "Pet Allowed",
        value: true,
      },
      {
        title: "Shared Accomodation",
        value: false,
      },
    ],
    price: {
      day: {
        title: "Day",
        value: "25.000",
      },
      month: {
        title: "Month",
        value: "750.000",
      },
      year: {
        title: "Year",
        value: "9.000.000",
      },
    },
  },
];
