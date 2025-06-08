"use client";
import { useState, useTransition } from "react";
import css from "./languageSwitch.module.scss";
import { setUserLocale } from "../i18n/locale";
import Image from "next/image";
import { useLocale } from "next-intl";

export enum Locale {
  EN = "en",
  FI = "fi",
}

const LanguageSwitch = () => {
  const initialLanguage = useLocale() as Locale;
  const [isPending, startTransition] = useTransition();
  const [currentLanguage, setCurrentLanguage] =
    useState<Locale>(initialLanguage);

  const handleLanguageSwitch = (locale: Locale) => {
    if (currentLanguage === locale) return;
    setCurrentLanguage(locale);
    startTransition(() => {
      setUserLocale(locale);
    });
  };

  return (
    <div className={css.language_switch}>
      {Object.values(Locale).map((value) => (
        <button
          key={value}
          className={`${css.language_switch_button} ${
            currentLanguage === value ? css.current_language : ""
          }`}
          onClick={() => handleLanguageSwitch(value)}
          disabled={isPending}
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
              priority
              quality={50}
            />
          </div>
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitch;
