import React from 'react';
import { HeaderContainer, LogoImg } from './styles';
import Logo from '../../assets/Fundo.svg';

function Header() {
  return (
    <HeaderContainer >
      <LogoImg src={Logo} alt='Logo Be Mobile' />
    </HeaderContainer>
  );
}

export default Header;
