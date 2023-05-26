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

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <S.Container data-testid="loaded-container">
      <HeaderGlobal sideMenu={sideNavProps.sideMenu} />
      {children}
      <FooterGlobal />
    </S.Container>
  );
};
