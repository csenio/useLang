import { useState } from "react";

const useLang = () => {
  const [lang, changeLang] = useState(document.documentElement.lang);
  const setLang = lang => {
    if (typeof lang === "string") {
      document.documentElement.lang = lang;
      changeLang(lang);
    }
  };
  return { lang, setLang };
};

export default useLang;
