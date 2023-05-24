import { ReactNode } from 'react';
import { HeaderGlobal } from '@components/molecules/HeaderGlobal';
import { FooterGlobal } from '@components/molecules/FooterGlobal';
import { SideNavegation } from '@components/molecules/SideNavegation';

import * as S from './styles';

interface LayoutProps {
  children?: ReactNode;
}

const footerProps = {
  footerProps: [
    {
      name: 'Comunidade',
      subItens: [
        {
          href: 'comunidade',
          link: 'https://obrademaria.com.br/',
          name: 'A Comunidade',
        },
        {
          href: 'carisma',
          link: 'https://obrademaria.com.br/carisma/',
          name: 'O Carisma',
        },
      ],
    },
    {
      name: 'Evangelização',
      subItens: [
        {
          href: 'cenaculo',
          link: 'https://obrademaria.com.br/cenaculo/',
          name: 'Cenáculo',
        },
        {
          href: 'vocacional',
          link: 'https://obrademaria.com.br/descubra-sua-vocacao/',
          name: 'Vocacional',
        },
      ],
    },
    {
      name: 'Onde Estamos',
      subItens: [
        {
          href: 'onde-estamos',
          link: 'https://obrademaria.com.br/onde-estamos/',
          name: 'Onde Estamos',
        },
        {
          href: 'África',
          link: 'https://obrademaria.com.br/africa/',
          name: 'África',
        },
      ],
    },
    {
      name: 'Obras Sociais',
      subItens: [
        {
          href: 'Brasil',
          link: 'https://obrademaria.com.br/blog/',
          name: 'Brasil',
        },
        {
          href: 'África',
          link: 'https://obrademaria.com.br/africa/',
          name: 'África',
        },
      ],
    },
  ],
};

const sideNavProps = {
  sideMenu: [
    {
      name: 'INÍCIO',
      alt: 'string',
      href: 'string',
    },
    {
      name: 'PARÓQUIA',
      alt: 'string',
      href: 'string',
    },
    {
      name: 'PASTORAIS',
      alt: 'string',
      href: 'string',
    },
    {
      name: 'CAPELAS',
      alt: 'string',
      href: 'string',
    },
    {
      name: 'NOTÍCIAS',
      alt: 'string',
      href: 'string',
    },
  ],
};

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <S.Container data-testid="loaded-container">
      <HeaderGlobal />
      <SideNavegation sideMenu={sideNavProps.sideMenu} />
      {children}
      <FooterGlobal footerProps={footerProps.footerProps} />
    </S.Container>
  );
};
