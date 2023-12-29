import { useState } from "react";
import "./../styles/App.scss";

interface ISelectLanguageProps {
  language: any;
  setLanguage: (locale: string) => void;
  allLanguage: any[];
}

function SelectLanguage({
  setLanguage,
  language,
  allLanguage,
}: ISelectLanguageProps) {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  return (
    <>
      <button
        className="locale-button"
        onClick={() => setIsDropDownOpen(!isDropDownOpen)}
      >
        <img
          src={`http://localhost:1337${language.flag.data.attributes.url}`}
          className="locale-flag"
          alt={language.locale}
        />
        {language.code.toUpperCase()}
      </button>
      {isDropDownOpen ? (
        <ul className="dropdown-language">
          {allLanguage.map((langue) => (
            <li
              onClick={() => {
                setLanguage(langue);
                setIsDropDownOpen(false);
              }}
            >
              <img
                src={`http://localhost:1337${langue.flag.data.attributes.url}`}
                className="locale-flag"
                alt={langue.locale}
              />
              <p className="locale-label">{langue.locale}</p>
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
}

export default SelectLanguage;
