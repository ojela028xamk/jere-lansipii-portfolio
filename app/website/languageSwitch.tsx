"use client";
import { useTransition } from "react";
import css from "./languageSwitch.module.scss";
import { setUserLocale } from "../i18n/locale";
import Image from "next/image";

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
      {Object.values(Locale).map((value) => (
        <button
          key={value}
          className={css.language_switch_button}
          onClick={() => handleLanguageSwitch(value)}
        >
          <span className={css.language_value}>
            {value.toLocaleUpperCase()}
          </span>
          <div className={css.image_container}>
            <Image
              className={css.image}
              src={`/${value}.png`}
              alt={"Flag icon"}
              fill
            />
          </div>
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitch;
