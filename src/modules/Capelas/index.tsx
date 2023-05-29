import Head from 'next/head';
import React from 'react';
import { useTranslation } from 'next-i18next';

import * as S from './styles';

import { Capelas } from '@components/molecules/Capelas';

export const CapelasModel = (): JSX.Element => {
  const { t } = useTranslation('common');

  return (
    <S.Container>
      <Head>
        <title>{t('h1')}</title>
      </Head>
      <Capelas />
    </S.Container>
  );
};
