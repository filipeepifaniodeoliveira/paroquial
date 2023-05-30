import React from 'react';
import logo from '../../../../public/images/logo-principal.png';
import * as S from './styles';

export const BannerImg = (): JSX.Element => {
  return (
    <>
      <S.ContainerText>
        <S.ContainerInfos>
          <S.ContainerTitle>
            <S.ContainerLogoMobile>
              <S.CardImage3 src={logo} alt="logo" />
            </S.ContainerLogoMobile>
            <h2>Paróquia de Santa Maria</h2>
            <h2>Mãe de Deus</h2>
            <h5>Macaxeira (Recife/PE)</h5>
            <h3>Seja bem vindo à nossa comunidade</h3>
          </S.ContainerTitle>
        </S.ContainerInfos>
      </S.ContainerText>
      <S.Container />
    </>
  );
};
