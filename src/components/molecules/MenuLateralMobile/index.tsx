import Logo from '../../../../public/images/logo-principal.png';

import NextLink from 'next/link';
import * as S from './styles';

type Menu = {
  menu: Array<Item>;
  openMenu: any;
};

type Item = {
  name: string;
  alt: string;
  href: string;
};

export const MenuLateralMobile = ({ menu, openMenu }: Menu): JSX.Element => {
  return (
    <S.ContainerGlobal>
      <S.ContainerAvatar>
        <S.CardImage src={Logo} alt="logo" />
      </S.ContainerAvatar>
      <S.ContainerMobile>
        {menu &&
          menu.map((item, index) => (
            <S.Item key={index} onClick={openMenu}>
              <NextLink href={item.href}>
                <p>{item.name}</p>
              </NextLink>
            </S.Item>
          ))}
      </S.ContainerMobile>
    </S.ContainerGlobal>
  );
};

export default MenuLateralMobile;
