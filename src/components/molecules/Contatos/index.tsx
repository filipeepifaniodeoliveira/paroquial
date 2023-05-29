import React from 'react';
import LegioMarie from '../../../../public/images/img02.png';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Icon } from '../../atoms/Icon';
import * as S from './styles';

export const Contatos = (): JSX.Element => {
  return (
    <S.SectionSobre>
      <S.Container>
        <S.ContainerTitle>
          <h2>Contatos</h2>
        </S.ContainerTitle>
      </S.Container>
      <S.Pincipal>
        <S.ContainerImgMob>
          <S.CardImageMobile src={LegioMarie} alt="logo" />
        </S.ContainerImgMob>
        <S.ContainerImg>
          <S.CardImage src={LegioMarie} alt="logo" />
        </S.ContainerImg>
        <S.ContainerInfo>
          <S.Container>
            <S.ContainerTitle>
              <h4>Fale Conosco</h4>
            </S.ContainerTitle>
          </S.Container>
          <S.Container>
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
          </S.Container>
        </S.ContainerInfo>
      </S.Pincipal>
    </S.SectionSobre>
  );
};
