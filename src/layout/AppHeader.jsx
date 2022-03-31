import React from "react";
import { settings } from "./../settings"
import logo from './../logo.svg';
import languagesIcon from "./../assets/images/languages.png"
import userIcon from "./../assets/images/user.png"
import { getLanguage, NAME_SPACE } from './../i18n';
import { useTranslation } from 'react-i18next';
import i18n from "i18n/i18n";
import i18next from "i18next";

export function AppHeader() {
  const { t } = useTranslation(NAME_SPACE.COMMON);

  function changeLanguage(value) {
    i18next.changeLanguage(value)
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  }

  return (
    <header className="App-header">
      <div className="App-head">
        <img src={logo} className="App-logo" alt="logo" />
        <div id="title">
          {settings.APP_NAME}
        </div>
      </div>

      <div className="App-options">
        <div className="language-selector">
          <img className="icons" alt="language" src={languagesIcon} />
          <select value={getLanguage()} name="languages" onChange={(e) => changeLanguage(e.target.value)}>
            <option value="en">EN</option>
            <option value="es">ES</option>
          </select>
        </div>
        <div className="wrapper-user">
          <div className="user">
            <img className="icons" alt="user" src={userIcon} />
            <span className="logged-username">{t('username')}</span>
          </div>
          <div className="user-options">
            <span>{t('login')}</span>
            <span>{t('logout')}</span>
          </div>
        </div>
      </div>
    </header>
  )
}
