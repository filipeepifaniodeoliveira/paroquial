import React from 'react';
import NextLink from 'next/link';
import Logo from '../../../../public/images/logo-principal.png';
import SideNavBarMobile from '../SideBarMobile';

import * as S from './styles';

interface ItensProps {
  sideMenu: Array<MenusProps>;
}

interface MenusProps {
  name: string;
  alt: string;
  href: string;
}

export const SideNavegation = (itens: ItensProps): JSX.Element => {
  return (
    <S.Containerflex>
      <S.ContainerMobile>
        <SideNavBarMobile />
      </S.ContainerMobile>
      <S.ContainerDesktop>
        <S.ContainerMenu data-testid="global-header-container-menu">
          <S.CardImage src={Logo} alt="logo" />
        </S.ContainerMenu>
        <S.Container>
          {itens &&
            itens?.sideMenu.map((item, index) => (
              <S.Item key={index}>
                <NextLink href={item.href}>
                  <S.ItemLink>{item.name}</S.ItemLink>
                </NextLink>
              </S.Item>
            ))}
        </S.Container>
      </S.ContainerDesktop>
    </S.Containerflex>
  );
};
