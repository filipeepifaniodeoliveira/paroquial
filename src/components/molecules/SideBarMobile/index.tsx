import { useState } from 'react';
import SideNav, { NavItem } from '@trendmicro/react-sidenav';
import NextLink from 'next/link';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import * as S from './styles';
import MenuLateralMobile from '../MenuLateralMobile';

export const SideNavBarMobile = (): JSX.Element => {
  const sideNavProps = {
    sideMenu: [
      {
        name: 'INÍCIO',
        alt: 'string',
        href: '/',
      },
      {
        name: 'PARÓQUIA',
        alt: 'string',
        href: '/paroquia',
      },
      {
        name: 'PASTORAIS',
        alt: 'string',
        href: 'pastorais',
      },
      {
        name: 'CAPELAS',
        alt: 'string',
        href: 'capelas',
      },
      {
        name: 'NOTÍCIAS',
        alt: 'string',
        href: 'noticias',
      },
      {
        name: 'CONTATO',
        alt: 'string',
        href: 'contatos',
      },
    ],
  };

  const [open, setOpen] = useState(true);

  const openMenu = () => {
    setOpen(!open);
  };

  return (
    <S.ContainerGlobal>
      <S.ContainerMobile>
        <SideNav onToggle={openMenu}>
          <SideNav.Toggle />
          <SideNav.Nav defaultSelected="home">
            {!open && (
              <div className="sidenav">
                <MenuLateralMobile menu={sideNavProps.sideMenu} />
              </div>
            )}
          </SideNav.Nav>
        </SideNav>
      </S.ContainerMobile>
    </S.ContainerGlobal>
  );
};

export default SideNavBarMobile;
