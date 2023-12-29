import "./styles/App.scss";
import Button from "./components/Button";
import { useEffect, useState } from "react";
import { getMenuElements } from "./api/apiCall";
import MenuItems from "./components/MenuItems";
import SelectLanguage from "./components/SelectLanguage";

function App() {
  const [language, setLanguage] = useState("fr");
  const [menuElement, setMenuElement] = useState<any>();

  useEffect(() => {
    const fetchMenuElements = async () => {
      let resultMenuElements = await getMenuElements({ language });
      setMenuElement(resultMenuElements);
    };
    fetchMenuElements();
  }, [language]);

  console.log("menuElement", menuElement);
  return (
    <div className="global-container">
      <header className="header">
        <div className="header-top">
          <img
            src="http://localhost:1337/uploads/roquette_logo_edeb6876e0.webp"
            className="App-logo"
            alt="logo"
          />
          <div className="right-part">
            <Button color="#2d5481" label="Moteur produit" />
            <Button color="#84b553" label="Trouver un document" />
            <SelectLanguage setLanguage={setLanguage} language={language} />
          </div>
        </div>
        <div className="header-bottom">
          {menuElement?.map((item: any) => (
            <MenuItems item={item} key={item.id} />
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
