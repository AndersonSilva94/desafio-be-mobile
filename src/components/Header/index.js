import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import Switch from 'react-switch';
import { HeaderContainer, IconsImg, LogoImg } from './styles';
import Logo from '../../assets/Fundo.svg';
import Moon from '../../assets/moon.svg';
import Sun from '../../assets/sun.svg';

function Header({ toggleTheme }) {
  const { colors, title } = useContext(ThemeContext);

  const moonImg = () => {
    return <IconsImg src={Moon} alt='moon' />;
  }

  const sunImg = () => {
    return <IconsImg src={Sun} alt='sun' />;
  }

  return (
    <HeaderContainer >
      <LogoImg src={Logo} alt='Logo Be Mobile' />
      <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={sunImg()}
        uncheckedIcon={moonImg()}
        offColor={colors.offColor}
        onColor={colors.primary}
      />

    </HeaderContainer>
  );
}

export default Header;
