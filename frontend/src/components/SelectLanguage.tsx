import { useEffect, useState } from "react";
import "./../styles/App.scss";
import { getLocaleAvailable } from "../api/apiCall";

interface ISelectLanguageProps {
  language: string;
  setLanguage: (locale: string) => void;
}

function SelectLanguage({ setLanguage, language }: ISelectLanguageProps) {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [allLanguage, setAllLanguage] = useState<any[]>([]);
  useEffect(() => {
    const fetchAvailableLanguage = async () => {
      let resultLocales = await getLocaleAvailable({ language });
      setAllLanguage(resultLocales);
    };
    fetchAvailableLanguage();
  }, [language]);
  return (
    <>
      <button
        onClick={() => setIsDropDownOpen(!isDropDownOpen)}
        className="button"
      >
        {language}
      </button>
      {isDropDownOpen ? (
        <ul className="dropdown-language">
          {allLanguage.map((locale) => (
            <li onClick={() => setLanguage(locale.code)}>
              <img
                src={`http://localhost:1337${locale.flag.data.attributes.url}`}
                className="locale-flag"
                alt={locale.label}
              />
              <p className="locale-label">{locale.label}</p>
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
}

export default SelectLanguage;
