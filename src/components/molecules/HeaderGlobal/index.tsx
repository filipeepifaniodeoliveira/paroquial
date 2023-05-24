import React from 'react';
import Logo from '../../../../public/images/logo-principal.png';

import * as S from './styles';

export const HeaderGlobal = (): JSX.Element => {
  return (
    <>
      <S.Container>
        <S.ContainerMenu data-testid="global-header-container-menu">
          <S.CardImage src={Logo} alt="logo" />
        </S.ContainerMenu>
      </S.Container>
    </>
  );
};
