import React from 'react';
import Pitu from '../../../../public/images/sjose.png';
import Corrego from '../../../../public/images/cpcorrego.png';
import Guadalupe from '../../../../public/images/cpguadalupe.png';

import * as S from './styles';

export const Capelas = (): JSX.Element => {
  return (
    <S.SectionSobre>
      <S.Container>
        <S.ContainerTitle>
          <h2>Capelas</h2>
        </S.ContainerTitle>
      </S.Container>

      <S.Pincipal>
        <S.Container>
          <S.ContainerTitle>
            <h4>Capela de São José Operário</h4>
          </S.ContainerTitle>
        </S.Container>
        <S.ContainerImgMob>
          <S.CardImageMobile src={Pitu} alt="logo" />
        </S.ContainerImgMob>
        <S.ContainerImg>
          <S.CardImage src={Pitu} alt="logo" />
        </S.ContainerImg>
        <S.ContainerInfo>
          <S.Container>
            <S.ContainerTimes>
              <p>Endereço: SN, Rua Formosa</p>
              <p>Bairro: - Alto do Pitu</p>
              <p>Recife - PE, 52091-111</p>
              <p>Missas: Sextas as 19:00 H</p>
            </S.ContainerTimes>
          </S.Container>
        </S.ContainerInfo>
      </S.Pincipal>

      <S.Pincipal>
        <S.Container>
          <S.ContainerTitle>
            <h4>Capela de São José Esposo de Maria</h4>
          </S.ContainerTitle>
        </S.Container>
        <S.ContainerImgMob>
          <S.CardImageMobile src={Corrego} alt="logo" />
        </S.ContainerImgMob>
        <S.ContainerImg>
          <S.CardImage src={Corrego} alt="logo" />
        </S.ContainerImg>
        <S.ContainerInfo>
          <S.Container>
            <S.ContainerTimes>
              <p>Endereço: 72, R. Adolfo Caminha, 28 </p>
              <p>Bairro: - Córrego do Jenipapo</p>
              <p>Recife - PE, 52091-140</p>
              <p>Missas: Sábados as 19:00 H</p>
            </S.ContainerTimes>
          </S.Container>
        </S.ContainerInfo>
      </S.Pincipal>

      <S.Pincipal>
        <S.Container>
          <S.ContainerTitle>
            <h4> Capela de Nossa Senhora de Guadalupe</h4>
          </S.ContainerTitle>
        </S.Container>
        <S.ContainerImg>
          <S.CardImage src={Guadalupe} alt="logo" />
        </S.ContainerImg>
        <S.ContainerImgMob>
          <S.CardImageMobile src={Guadalupe} alt="logo" />
        </S.ContainerImgMob>
        <S.ContainerInfo>
          <S.Container>
            <S.ContainerTimes>
              <p>Endereço: R. Amalita, 79 </p>
              <p>Bairro: - Carrapateira / Burity </p>
              <p> Recife - PE, 52090-370</p>
              <p>Missas: Sábados as 17:00 H</p>
            </S.ContainerTimes>
          </S.Container>
        </S.ContainerInfo>
      </S.Pincipal>
    </S.SectionSobre>
  );
};
