import { ReactNode } from 'react';
import { HeaderGlobal } from '@components/molecules/HeaderGlobal';
import { FooterGlobal } from '@components/molecules/FooterGlobal';

import * as S from './styles';

interface LayoutProps {
  children?: ReactNode;
}
const sideNavProps = {
  sideMenu: [
    {
      name: 'Início',
      alt: 'string',
      href: '/',
    },
    {
      name: 'Paróquia',
      alt: 'string',
      href: '/paroquia',
    },
    {
      name: 'Pastorais',
      alt: 'string',
      href: 'pastorais',
    },
    {
      name: 'Capelas',
      alt: 'string',
      href: 'capelas',
    },
    {
      name: 'Notícias',
      alt: 'string',
      href: 'noticias',
    },
    {
      name: 'Contatos',
      alt: 'string',
      href: 'contatos',
    },
  ],
};

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <S.Container data-testid="loaded-container">
      <HeaderGlobal sideMenu={sideNavProps.sideMenu} />
      {children}
      <FooterGlobal />
    </S.Container>
  );
};
