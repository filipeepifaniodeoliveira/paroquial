import React from 'react';
import Logo from '../../../../public/images/logo-principal.png';
import { Icon } from '../../atoms/Icon';

import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

import * as S from './styles';

interface FooterProps {
  footerProps: Array<CategoryProps>;
}

interface CategoryProps {
  name: string;
  subItens: Array<SubItensProps>;
}

interface SubItensProps {
  link: string;
  href: string;
  name: string;
}

export const FooterGlobal = ({ footerProps }: FooterProps): JSX.Element => {
  return (
    <>
      <S.Container>
        <S.Footer>
          <S.ContainerMenu data-testid="global-header-container-menu">
            <S.CardImage src={Logo} alt="logo" />
          </S.ContainerMenu>
          <S.ContainerAddress>
            <S.ContainerIcons>
              <S.CardIcon>
                <Icon icon={faFacebook} color="white" />
              </S.CardIcon>
              <S.CardIcon>
                <Icon icon={faInstagram} color="white" />
              </S.CardIcon>
              <S.CardIcon>
                <Icon icon={faYoutube} color="white" />
              </S.CardIcon>
            </S.ContainerIcons>
            <h3>R. Ida - Macaxeira</h3>
            <h3>Recife - PE, 52090-298</h3>
            <h3>Telefone: (81) 3037-0003</h3>
          </S.ContainerAddress>
        </S.Footer>
      </S.Container>
    </>
  );
};
