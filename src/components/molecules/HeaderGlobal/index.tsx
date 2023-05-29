import React from 'react';

import * as S from './styles';
import { SideNavegation } from '../SideNavegation';

export const HeaderGlobal = ({ sideMenu }: any): JSX.Element => {
  return (
    <>
      <S.Container>
        <SideNavegation sideMenu={sideMenu} />
      </S.Container>
    </>
  );
};
