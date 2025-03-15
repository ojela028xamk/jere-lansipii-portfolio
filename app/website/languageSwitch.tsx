"use client";
import { useTransition } from "react";
import css from "./languageSwitch.module.scss";
import { setUserLocale } from "../i18n/locale";

export enum Locale {
  EN = "en",
  FI = "fi",
}

const LanguageSwitch = () => {
  const [isPending, startTransition] = useTransition();

  console.log(isPending);

  const handleLanguageSwitch = (locale: Locale) => {
    startTransition(() => {
      setUserLocale(locale);
    });
  };

  return (
    <div className={css.language_switch}>
      <button onClick={() => handleLanguageSwitch(Locale.EN)}>English</button>
      <button onClick={() => handleLanguageSwitch(Locale.FI)}>Finland</button>
    </div>
  );
};

export default LanguageSwitch;
