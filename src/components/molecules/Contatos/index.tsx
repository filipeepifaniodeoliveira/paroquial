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
              <h4>Fale conosco através de nossos canais de comunicação</h4>
            </S.ContainerTitle>
          </S.Container>
          <S.DisplayFlex>
            <S.ContainerAddress>
              <h3>Telefone: (81) 3037-0003</h3>
            </S.ContainerAddress>
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
            </S.ContainerAddress>
          </S.DisplayFlex>
        </S.ContainerInfo>
      </S.Pincipal>
    </S.SectionSobre>
  );
};
