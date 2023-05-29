import React from 'react';
import imagemBanner from '../../../../public/images/imagemBanner.png';
import Background from '../../../../public/images/altar.png';
import logo from '../../../../public/images/logo-principal.png';

import * as S from './styles';

export const BannerImg = (): JSX.Element => {
  return (
    <>
      <S.ContainerText>
        <div>
          <S.ContainerLogoMobile>
            <S.CardImage3 src={logo} alt="logo" />
          </S.ContainerLogoMobile>
          <h2>Paróquia de Santa Maria</h2>
          <h2>Mãe de Deus</h2>
          <h5>Macaxeira (Recife/PE)</h5>
          <h3>Seja bem vindo à nossa comunidade</h3>
        </div>
      </S.ContainerText>
      <S.Container />
    </>
  );
};
