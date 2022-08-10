import icon_lactation from '../assets/images/icon_lactation.png';
import icon_baby from '../assets/images/icon_baby.png';
import icon_book from '../assets/images/icon_book.png';

let services = [
  {
    title: "Lactation Support",
    longTitle: "Continuous Lactation Support",
    caption: "lorem ipsum dolor sit amet. consectetur adipiscing elit.",
    description: "This is a great for parents who have specific challenges they would like to work on or persons who would just feel secure with long term support until they’re comfortable. It is available to prenatal and postpartum parents.",
    includes: "",
    price: "$500",
    link: 123,
    imageSrc: icon_lactation,
  },
  {
    title: "Childbirth Education",
    longTitle: "Continuous Lactation Support",
    caption: "Lorem ipsum dolor sit amet. Consectetur adipiscing elit.",
    description: "",
    includes: "",
    price: "$650",
    link: 421,
    imageSrc: icon_baby,
  },
  {
    title: "Individual Prenatal Support",
    longTitle: "Continuous Lactation Support",
    caption: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
    description: "",
    includes: "",
    price: "$1,100",
    link: 879,
    imageSrc: icon_book,
  },
];

export function getServices() {
  return services;
}

export function getService(link) {
  return services.find(
    (service) => service.link === link
  );
}