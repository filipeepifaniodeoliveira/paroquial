import React from 'react';
import imagemBanner from '../../../../public/images/imagemBanner.png';
import logo from '../../../../public/images/logo-principal.png';

import * as S from './styles';

export const Banner = (): JSX.Element => {
  return (
    <S.Container>
      <S.ContainerPadroeira>
        <S.CardImage1 src={imagemBanner} alt="logo" />
      </S.ContainerPadroeira>
      <S.ContainerText>
        <h2>Paróquia de Santa Maria</h2>
        <h2>Mãe de Deus</h2>
        <h5>Macaxeira (Recife/PE)</h5>
        <h3>Seja bem vindo à nossa comunidade</h3>
      </S.ContainerText>
      <S.ContainerLogo>
        <S.CardImage2 src={logo} alt="logo" />
      </S.ContainerLogo>
    </S.Container>
  );
};
