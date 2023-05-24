import Head from 'next/head';
import React from 'react';
import { useTranslation } from 'next-i18next';

import * as S from './styles';
import { CardsMicro } from '@components/molecules/MicroCards';

import { faChurch } from '@fortawesome/free-solid-svg-icons/faChurch';
import { faHandHoldingMedical } from '@fortawesome/free-solid-svg-icons/faHandHoldingMedical';
import { faCross } from '@fortawesome/free-solid-svg-icons/faCross';
import { faPrayingHands } from '@fortawesome/free-solid-svg-icons/faPrayingHands';
import { faPray } from '@fortawesome/free-solid-svg-icons/faPray';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons/faInfoCircle';
import { faChild } from '@fortawesome/free-solid-svg-icons/faChild';
import { faPeopleCarry } from '@fortawesome/free-solid-svg-icons/faPeopleCarry';
import { faBookMedical } from '@fortawesome/free-solid-svg-icons/faBookMedical';

import { CardsMicroMobile } from '@components/molecules/MicroCardsMobile';
import { Card } from '@components/atoms/Card';
import { Carrousel } from '@components/molecules/Carrousel';
import { TimesInfos } from '@components/molecules/TimesInfos';

export const Home = (): JSX.Element => {
  const { t } = useTranslation('common');

  const mockConfig = {
    cards: [
      {
        icon: faPrayingHands,
        text: 'O Cenáculo',
        title: 'Cenáculo',
        link: 'string',
        class: 'blue',
      },
      {
        icon: faCross,
        text: 'Orações Comuns',
        title: 'Orações',
        link: 'string',
        class: 'yellow',
      },
      {
        icon: faChurch,
        text: 'Nossos Baluartes',
        title: 'Baluartes',
        link: 'string',
        class: 'green',
      },
      // {
      //   icon: faPray,
      //   text: 'Novenas de Nossos Baluartes',
      //   title: 'Novenas',
      //   link: 'string',
      //   class: 'greenNeon',
      // },
      // {
      //   icon: faHandHoldingMedical,
      //   text: 'Pedidos de Oração',
      //   title: 'Pedidos',
      //   link: 'string',
      //   class: 'pink',
      // },
      // {
      //   icon: faInfoCircle,
      //   text: 'Sobre Nós',
      //   title: 'Sobre',
      //   link: 'string',
      //   class: 'orange',
      // },
      // {
      //   icon: faChild,
      //   text: 'Nossos Fundadores',
      //   title: 'Fundadores',
      //   link: 'string',
      //   class: 'blue',
      // },
      // {
      //   icon: faBookMedical,
      //   text: 'Formação',
      //   title: 'Formação',
      //   link: 'string',
      //   class: 'blue',
      // },
      // {
      //   icon: faPeopleCarry,
      //   text: 'Comunidade',
      //   title: 'Comunidade',
      //   link: 'string',
      //   class: 'blue',
      // },
    ],
    card: {
      icon: faPrayingHands,
      text: 'Seja Braço Forte',
      link: 'string',
      classe: 'blue',
    },
  };

  return (
    <S.Container>
      <Head>
        <title>{t('h1')}</title>
      </Head>
      <Carrousel />
      <TimesInfos />
    </S.Container>
  );
};
