import React, { useState, useEffect, useRef } from "react";
import {settings} from "./../settings"
import logo from './../logo.svg';
import languagesIcon from "./../assets/images/languages.png"
import userIcon from "./../assets/images/user.png"
import { NAME_SPACE } from './../i18n';
import { useTranslation } from 'react-i18next';

export function AppHeader() {
  const { t } = useTranslation(NAME_SPACE.COMMON);

    return (
        <header className="App-header">
        <div className="App-head"> 
          <img src={logo} className="App-logo" alt="logo" />
          <div id="title">
            LunarTracksDB
          </div>
        </div>
        
        <div className="App-options">
          <div className="language-selector">
            <img className="icons" alt="language" src={languagesIcon}/>
            <select name="languages" onChange={(e) => console.log('langChange not implemented yet')}>
              <option value="en-US">EN</option>
              <option value="es-ES">ES</option>
            </select>
          </div>
          <div className="wrapper-user">
            <div className="user">
              <img className="icons" alt="user" src={userIcon}/>
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
