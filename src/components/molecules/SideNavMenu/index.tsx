import { useState } from 'react';
import * as S from './styles';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';

import MenuLateralMobile from '../MenuLateralMobile';
import { Icon } from '@components/atoms/Icon';

export const SideNavMenu = (): JSX.Element => {
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
    console.log(!open);
    setOpen(!open);
  };

  return (
    <S.ContainerGlobal>
      <S.ContainerMobile>
        {open ? (
          <button onClick={openMenu}>
            <Icon icon={faBars} color="white" />
          </button>
        ) : (
          <button onClick={openMenu}>
            <p>X</p>
          </button>
        )}
        {!open && (
          <div className="sidenav">
            <MenuLateralMobile
              menu={sideNavProps.sideMenu}
              openMenu={openMenu}
            />
          </div>
        )}
      </S.ContainerMobile>
    </S.ContainerGlobal>
  );
};

export default SideNavMenu;
