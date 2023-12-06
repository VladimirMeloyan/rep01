import { useState } from "react";
import "./App.css";
import HeroList from "./HeroList.jsx";

const heroObjectReset = [
  {
    id: 1,
    heroName: "Miya, the Moonlight Archer",
    img: "./mobile/miya.webp",
    role: "Marksman",
  },
  {
    id: 2,
    heroName: "Balmond, the Bloody Beast",
    img: "./mobile/balmond.webp",
    role: "Fighter",
  },
  {
    id: 3,
    heroName: "Saber, the Wandering Sword",
    img: "./mobile/saber.webp",
    role: "Assassin",
  },
  {
    id: 4,
    heroName: "Alice, the Queen of Blood",
    img: "./mobile/alice.webp",
    role: "Tank",
  },
  {
    id: 5,
    heroName: "Nana, the Sweet Leonin",
    img: "./mobile/nana.webp",
    role: "Mage",
  },
  {
    id: 6,
    heroName: "Tigreal, the Warrior of Dawn",
    img: "./mobile/tigreal.webp",
    role: "Tank",
  },
  {
    id: 7,
    heroName: "Alucard, the Demon Hunter",
    img: "./mobile/alucard.webp",
    role: "Assassin",
  },
  {
    id: 8,
    heroName: "Karina, the Shadow Blade",
    img: "./mobile/karina.webp",
    role: "Assassin",
  },
  {
    id: 9,
    heroName: "Akai, the Panda Warrior",
    img: "./mobile/akai.webp",
    role: "Tank",
  },
  {
    id: 10,
    heroName: "Franco, the Frozen Warrior",
    img: "./mobile/franco.webp",
    role: "Tank",
  },
  {
    id: 11,
    heroName: "Bane, the Frozen King",
    img: "./mobile/bane.webp",
    role: "Fighter",
  },
  {
    id: 12,
    heroName: "Bruno, the Protector",
    img: "./mobile/bruno.webp",
    role: "Marksman",
  },
  {
    id: 13,
    heroName: "Clint, the West Justice",
    img: "./mobile/clint.webp",
    role: "Marksman",
  },
];

function App() {
  const [heroObject, setHeroObject] = useState(heroObjectReset);

  const addHero = (e) => {
    e.target.disabled = true;
    const heroObjectCopy = [...heroObject];
    heroObjectCopy.push({
      id: 14,
      heroName: "Rafaela, the Wings of Holiness",
      img: "./mobile/rafaela.webp",
      role: "Mage",
    });
    setHeroObject(heroObjectCopy);
  };

  const sortHeroAZ = () => {
    const result = heroObject.toSorted((a, b) =>
      a.heroName > b.heroName ? 1 : -1
    );
    setHeroObject(result);
  };

  const sortHeroZA = () => {
    const result = heroObject.toSorted((a, b) =>
      a.heroName < b.heroName ? 1 : -1
    );
    setHeroObject(result);
  };

  const sortHeroByRole = (e) => {
    e.target.disabled = true;
    const result = heroObject.toSorted((a, b) => (a.role > b.role ? 1 : -1));
    setHeroObject(result);
  };

  const clearList = () => {
    setHeroObject([]);
  };

  const resetList = () => {
    setHeroObject(heroObjectReset);
  };

  const selectByRole = (role) => {
    const heroObjectCopy = [...heroObject];
    const result = heroObjectCopy.filter((elem) => {
      return elem.role === role;
    });
    setHeroObject(result);
  };

  const deleteHeroByIndex = (index) => {
    const result = heroObject.toSpliced(index, 1);
    setHeroObject(result);
  };

  return (
    <div className="App">
      <HeroList
        heroObject={heroObject}
        addHero={addHero}
        sortHeroAZ={sortHeroAZ}
        sortHeroZA={sortHeroZA}
        sortHeroByRole={sortHeroByRole}
        clearList={clearList}
        resetList={resetList}
        selectMarksman={selectByRole}
        selectFighter={selectByRole}
        selectAssassin={selectByRole}
        selectTank={selectByRole}
        selectMage={selectByRole}
        deleteHeroByIndex={deleteHeroByIndex}
      />
    </div>
  );
}

export default App;
