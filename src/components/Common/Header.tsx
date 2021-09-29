import React, { FC } from "react";

const Header: FC = () => {
  return (
    <header className="header">
      <div className="header__logo" />
      <ul className="header__list">
        <li className="header__list-item">
          <a
            href="https://1portal.com.ua/#about"
            className="header__list-item-link"
          >
            Про нас
          </a>
        </li>
        <li className="header__list-item">
          <a
            href="https://1portal.com.ua/#insurance"
            className="header__list-item-link"
          >
            Автоцивілка
          </a>
        </li>
        <li className="header__list-item">
          <a
            href="https://1portal.com.ua/#partners"
            className="header__list-item-link"
          >
            Партнери
          </a>
        </li>
        <li className="header__list-item">
          <a
            href="https://1portal.com.ua/#contacts"
            className="header__list-item-link"
          >
            Контакти
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
