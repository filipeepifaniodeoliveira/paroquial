import Head from 'next/head';
import React from 'react';
import { useTranslation } from 'next-i18next';

import * as S from './styles';

import { Carrousel } from '@components/molecules/Carrousel';
import { BannerImg } from '@components/molecules/BannerImg';
import { TimesInfos } from '@components/molecules/TimesInfos';
import { SectionSobre } from '@components/molecules/SectionSobre';
import { News } from '@components/molecules/News';

export const Home = (): JSX.Element => {
  const { t } = useTranslation('common');

  return (
    <S.Container>
      <Head>
        <title>{t('h1')}</title>
      </Head>
      <BannerImg />
      <SectionSobre />
      <TimesInfos />
      <News />
    </S.Container>
  );
};
