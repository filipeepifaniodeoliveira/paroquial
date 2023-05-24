import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import * as S from './styles';
import { Banner } from '../Banner';

export const Carrousel = (): JSX.Element => {
  return (
    <S.Container>
      <Banner />
    </S.Container>
  );
};
