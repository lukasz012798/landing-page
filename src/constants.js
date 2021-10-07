import {
  faCreditCard,
  faHandsHelping,
  faLaptop,
} from "@fortawesome/free-solid-svg-icons";

import {
  faWordpress,
  faAmazonPay,
  faGoogle,
  faApple,
  faCcVisa,
  faApplePay,
  faEbay,
  faEdge,
} from "@fortawesome/free-brands-svg-icons";

import img1 from "./assets/reviews/1.jpg";
import img2 from "./assets/reviews/2.jpg";
import img3 from "./assets/reviews/3.jpg";

import infoCardPhoto_1 from "./assets/infoCards/infoCardPhoto_1.jpg";
import infoCardPhoto_2 from "./assets/infoCards/infoCardPhoto_2.jpg";
import infoCardPhoto_3 from "./assets/infoCards/infoCardPhoto_3.jpg";
import infoCardPhoto_4 from "./assets/infoCards/infoCardPhoto_4.jpg";
import infoCardPhoto_5 from "./assets/infoCards/infoCardPhoto_5.jpg";
import infoCardPhoto_6 from "./assets/infoCards/infoCardPhoto_6.jpg";
import infoCardPhoto_7 from "./assets/infoCards/infoCardPhoto_7.jpg";
import infoCardPhoto_8 from "./assets/infoCards/infoCardPhoto_8.jpg";
import infoCardPhoto_9 from "./assets/infoCards/infoCardPhoto_9.jpg";

export const cards = [
  {
    name: "Increase sales",
    icon: faCreditCard,
    shortDesc: "Keep the kitchen busy",
    desc: "Join a well-oiled marketing machine and watch the orders come in through your door and online.",
  },
  {
    name: "Reach more customers",
    icon: faHandsHelping,
    shortDesc: "Meet them and keep them",
    desc: "Attract new local customers and keep them coming back for more.",
  },
  {
    name: "Use our services",
    icon: faLaptop,
    shortDesc: "For businesses big and small",
    desc: "Whatever your size we have tools, business support and savings to help grow your business.",
  },
];

export const logos = [
  faWordpress,
  faAmazonPay,
  faGoogle,
  faApple,
  faCcVisa,
  faApplePay,
  faEbay,
  faEdge,
];

export const reviews = [
  {
    name: "Bone Daddies",
    review:
      "“I don’t think there’s anyone on the planet who could say they’ve mastered ramen. There’s too many different varieties. There’s no one way to do it, there’s no best way to do it. That’s why people are very regularly reinventing ramen, and surprising everyone.”",
    signature: "Ross (Bone Daddies)",
    img: img1,
  },
  {
    name: "Ceviche",
    review:
      '"We are inspired by all kinds of things around us and in our past to create a dish. In the same way that an artist is inspired to write a song by whatever is happening in their lives. It could be a love story, it could be severe politics, it could be a broken heart, it could be a fun thing that they want to selebrate."',
    signature: "Martin Morales (Andina & Ceviche)",
    img: img2,
  },
  {
    name: "Bubbledogs",
    review:
      "Why Champagne and hot dogs? Anything salty and greasy goes well with Champagne - it's the saltiness and oiliness of caviar that makes Champagne and caviar a classic. Hot dogs have all those elements: the sausage, the cheese - so it seemed like the perfect match.",
    signature: "Sandia (Bubbledogs)",
    img: img3,
  },
];

export const advListItems = [
  "24 hr tablet support",
  "Flexible payment plan",
  "Use Deliveroo's rider network or your own",
  "Marketing and promotion of your business",
  "Save on photography, websites and restaurant supplies",
  "Discounted packaging, tailored to every dish and cuisine",
  "Create loyal customers with Restaurant Hub insights and tools",
];

export const infoCards = [
  {
    title: "Contact us",
    desc: "Got more questions? Sign up for a call back, or find out where you can get an answer as a partner.",
    photo: infoCardPhoto_1,
  },
  {
    title: "Partner success tools",
    desc: "Learn with Deliveroo resources, download guides and watch videos to support your business growth.",
    photo: infoCardPhoto_2,
  },
  {
    title: "Marketing",
    desc: "Reach new customers with our in-app promotion tools - boost orders by up to 60% in a few clicks.",
    photo: infoCardPhoto_3,
  },
  {
    title: "Signature",
    desc: "Transform your website or app into a branded ordering platform and grow your sales.",
    photo: infoCardPhoto_4,
  },
  {
    title: "Editions",
    desc: "Our 'super kitchens' are one of the industry' best kept secrets, take a look inside.",
    photo: infoCardPhoto_5,
  },
  {
    title: "Packaging",
    desc: "Custom branded packaging for every cuisine type, with free next day delivery.",
    photo: infoCardPhoto_6,
  },
  {
    title: "Save on supplies",
    desc: "We find and negotiate with suppliers, passing the savings straight on to you.",
    photo: infoCardPhoto_7,
  },
  {
    title: "Restaurant Hub",
    desc: "Manage your performance and easily make changes based on Deliveroo insights.",
    photo: infoCardPhoto_8,
  },
  {
    title: "Help Centre",
    desc: "Search our directory of advice and answers from the Deliveroo team.",
    photo: infoCardPhoto_9,
  },
];

export const faq = [
  {
    q: "Do I need an FSA rating to join Deliveroo?",
    a: "Yes, we need you to provide proof that your restaurant has a minimun standard of food hygiene.<br /><br />We reserve the right to put your application on hold until you can obtain proof of your food hygiene standards.<br /><br />How to <a>find your restaurant's FSA rating.</a>",
    isActive: false,
  },
  {
    q: "New to running a delivery-only restaurant?",
    a: "Government-imposed limitations due to COVID-19 mean restaurants are likely to require more deliveries to maintain similar profits.<br /><br /><a>Read our guidance</a> for restaurants adapting to a smaller dine-in capacity and greater demand for takeaway deliveries following COVID-19.",
    isActive: false,
  },
  {
    q: "Our riders or your own deliveries?",
    a: "You can choose to use Deliveroo's world-class logistics network or your own delivery drivers.<br /><br />We extensively train our riders, who can be tracked in real time when they're carrying your orders. Your customers can also see and iteract with our riders, meaning fewer undelivered orders and more happy customers.",
    isActive: false,
  },
  {
    q: "Can I send my own menu images?",
    a: "We recommend using as many high quality images as possibleon your Deliveroo menu. That's why we offer a professional photography service as part of some of our packages.<br /><br />You can also upload your own imagery for your menu and restaurant 'shopfront' on Deliveroo. All images are reviewed against our photography guidelines.<br /><br /><a>Find out more</a> about uploading your imagery.",
    isActive: false,
  },
  {
    q: "What's the difference between Table Service, Pickup and Delivery?",
    a: "It's up to you which you choose, but we know that your customers will love having the option to get Delivery at home, or use <a>Pickup</a> to collect orders direct from you when they're out.<br /><br />Our newest product, <a>Table Service</a> allows customers to use the Deliveroo app to dine-in at your restaurant, contact-free.",
    isActive: false,
  },
];
