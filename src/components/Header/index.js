import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import Switch from 'react-switch';
import { HeaderContainer, LogoImg } from './styles';
import Logo from '../../assets/Fundo.svg';

function Header({ toggleTheme }) {
  const { colors, title } = useContext(ThemeContext);

  return (
    <HeaderContainer >
      <LogoImg src={Logo} alt='Logo Be Mobile' />
      <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        offColor={colors.offColor}
        onColor={colors.primary}
      />
    </HeaderContainer>
  );
}

export default Header;
