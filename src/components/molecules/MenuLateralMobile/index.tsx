import { useState } from 'react';
import { NavItem } from '@trendmicro/react-sidenav';
import Logo from '../../../../public/images/logo-principal.png';

import NextLink from 'next/link';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import * as S from './styles';

type Menu = {
  menu: Array<Item>;
};

type Item = {
  name: string;
  alt: string;
  href: string;
};

export const MenuLateralMobile = ({ menu }: Menu): JSX.Element => {
  const [open, setOpen] = useState(true);

  const openMenu = () => {
    setOpen(!open);
  };

  return (
    <S.ContainerGlobal>
      <S.ContainerAvatar>
        <S.CardImage src={Logo} alt="logo" />
      </S.ContainerAvatar>
      <S.ContainerMobile>
        {menu &&
          menu.map((item, index) => (
            <S.Item key={index}>
              <NextLink href={item.href}>
                <NavItem eventKey=".,">{item.name}</NavItem>
              </NextLink>
            </S.Item>
          ))}
      </S.ContainerMobile>
    </S.ContainerGlobal>
  );
};

export default MenuLateralMobile;
