import React from 'react';
import Logo from '../../../../public/images/logo-principal.png';
import { Icon } from '../../atoms/Icon';

import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

import * as S from './styles';

export const FooterGlobal = (): JSX.Element => {
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
                <a href="https://www.facebook.com/ParoquiaStaMaria">
                  <Icon icon={faFacebook} color="white" />
                </a>
              </S.CardIcon>
              <S.CardIcon>
                <a href="https://www.instagram.com/paroquiastamaria/">
                  <Icon icon={faInstagram} color="white" />
                </a>
              </S.CardIcon>
              <S.CardIcon>
                <a href="https://www.youtube.com/@ParoquiaStaMaria">
                  <Icon icon={faYoutube} color="white" />
                </a>
              </S.CardIcon>
            </S.ContainerIcons>
            <h3>R. Ida - Macaxeira</h3>
            <h3>Recife - PE, 52090-298</h3>
            <h3>Telefone: (81) 3037-0003</h3>
            <h5>Um Site desenvolvido por: Filipe Epifânio</h5>
          </S.ContainerAddress>
        </S.Footer>
        <S.FooterMobile>
          <S.ContainerMenu data-testid="global-header-container-menu">
            <S.CardImageMobile src={Logo} alt="logo" />
          </S.ContainerMenu>
        </S.FooterMobile>
      </S.Container>
    </>
  );
};
