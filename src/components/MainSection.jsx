import PropTypes from 'prop-types';
import React from 'react';

import Navbar from './main/Navbar';
import Description from './main/Description';
import SocialMedia from './main/SocialMedia';
import Avatar from './main/Avatar';

export default function MainSection({ darkMode, setDarkMode }) {
  return (
    <section className="min-h-screen">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Description />
      <SocialMedia />
      <Avatar />
    </section>
  );
}

MainSection.propTypes = {
  darkMode: PropTypes.bool,
  setDarkMode: PropTypes.func,
}.isRequired;
