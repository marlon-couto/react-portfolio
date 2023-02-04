import PropTypes from 'prop-types';
import React from 'react';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';

export default function Navbar({ setDarkMode, darkMode }) {
  return (
    <nav className="py-10 mb-12 flex justify-between">
      <h1 className="text-xl font-jetBrainsMono">marlon-couto-dev</h1>
      <ul className="flex items-center">
        <li>
          {darkMode ? (
            <BsFillMoonStarsFill
              className="cursor-pointer text-2xl"
              onClick={() => setDarkMode(false)}
            />
          ) : (
            <BsFillSunFill
              className="cursor-pointer text-2xl"
              onClick={() => setDarkMode(true)}
            />
          )}
        </li>
        <li>
          <a
            href="#"
            className="bg-gradient-to-r from-blue-500 to-blue-700 text-neutral-100 px-4 py-2 rounded-md ml-8"
          >
            Resumo
          </a>
        </li>
      </ul>
    </nav>
  );
}

Navbar.propTypes = {
  darkMode: PropTypes.bool,
  setDarkMode: PropTypes.func,
}.isRequired;
