import { useState } from "react";
import "./app.scss";
import Banner from "./components/Banner/Banner";
import Cards from "./components/Cards/Cards";
import Intro from "./components/Intro/Intro";
import Reviews from "./components/Reviews/Reviews";
import Stats from "./components/Stats/Stats";
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
      <h1>Why partner with Deliveroo?</h1>
      <Cards />
      <Banner />
      <Stats />
      <hr />
      <h1>Join the UK's favourite delivery partner</h1>
      <span>Trusted by restaurants and takeaways all over the world</span>
      <Reviews />
      <div>
        Icons made by{" "}
        <a href="https://www.freepik.com" title="Freepik">
          Freepik
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </div>
  );
}

export default App;
