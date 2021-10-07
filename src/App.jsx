import { useState } from "react";

import "./app.scss";

import Advantages from "./components/Advantages/Advantages";
import Banner from "./components/Banner/Banner";
import Cards from "./components/Cards/Cards";
import FAQ from "./components/FAQ/FAQ";
import Freepik from "./components/Freepik/Freepik";
import H1 from "./components/H1/H1";
import InfoCards from "./components/InfoCards/InfoCards";
import Intro from "./components/Intro/Intro";
import Links from "./components/Links/Links";
import Logos from "./components/Logos/Logos";
import Reviews from "./components/Reviews/Reviews";
import Span from "./components/Span/Span";
import Stats from "./components/Stats/Stats";
import Steps from "./components/Steps/Steps";
import Topbar from "./components/Topbar/Topbar";

function App() {
  const [menu, setMenu] = useState([
    {
      name: "Get started",
      links: ["Delivery", "Pickup", "Table Service"],
      isActive: false,
    },
    {
      name: "Services",
      links: [
        "Marketing",
        "Packaging",
        "Technology",
        "Save on supplies",
        "Signature",
      ],
      isActive: false,
    },
    {
      name: "Support",
      links: ["Help", "Contact us", "Partner success tools", "COVID-19"],
      isActive: false,
    },
  ]);

  const closeMenu = () => {
    const state = menu;
    state.forEach((element, index) => {
      state[index].isActive = false;
    });
    setMenu([...state]);
  };

  return (
    <div className="App" onClick={closeMenu}>
      <Topbar menu={menu} setMenu={setMenu} />
      <Intro />
      <H1>Why partner with Deliveroo?</H1>
      <Cards />
      <Banner buttonTxt="Vote now" triangleColor="9c016d">
        Crown the winners of the Restaurant Awards 2021
      </Banner>
      <Stats />
      <H1>Join the UK's favourite delivery partner</H1>
      <Span>Trusted by restaurants and takeaways all over the world</Span>
      <Reviews />
      <Logos />
      <H1>Choose products and pricing to suit your needs</H1>
      <Advantages />
      <H1>How does Deliveroo work?</H1>
      <Span>Fire up your kitchen for Deliveroo orders in a few easy steps</Span>
      <Steps />
      <Banner buttonTxt="Sign up" triangleColor="00ccbc">
        Become a Deliveroo partner today
      </Banner>
      <H1>Grow and support your business</H1>
      <Span>Products, services and information for your success</Span>
      <InfoCards />
      <H1>Frequently asked questions</H1>
      <FAQ />
      <Links />
      <Freepik />
    </div>
  );
}

export default App;
