import React from 'react';
import Pitu from '../../../../public/images/cppitu.png';
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
        <S.ContainerImgMob>
          <S.CardImageMobile src={Pitu} alt="logo" />
        </S.ContainerImgMob>
        <S.ContainerInfo>
          <S.Container>
            <S.ContainerTitle>
              <h4>São José Operário</h4>
            </S.ContainerTitle>
          </S.Container>
          <S.Container>
            <S.ContainerTimes>
              <p>Localizada no Alto do Pitú / Recife</p>
              <p>
                Endereço: SN, Rua Formosa - Córrego do Jenipapo, Recife - PE,
                52091-111
              </p>
              <p>Missas: Sextas as 19:00 H</p>
            </S.ContainerTimes>
          </S.Container>
        </S.ContainerInfo>
        <S.ContainerImg>
          <S.CardImage src={Pitu} alt="logo" />
        </S.ContainerImg>
      </S.Pincipal>

      <S.Pincipal>
        <S.ContainerImgMob>
          <S.CardImageMobile src={Corrego} alt="logo" />
        </S.ContainerImgMob>
        <S.ContainerInfo>
          <S.Container>
            <S.ContainerTitle>
              <h4>São José - Esposo de Maria</h4>
            </S.ContainerTitle>
          </S.Container>
          <S.Container>
            <S.ContainerTimes>
              <p>Localizada no Corrégo do Jenipapo / Recife</p>
              <p>
                Endereço: 72, R. Adolfo Caminha, 28 - Córrego do Jenipapo,
                Recife - PE, 52091-140
              </p>
              <p>Missas: Sábados as 19:00 H</p>
            </S.ContainerTimes>
          </S.Container>
        </S.ContainerInfo>
        <S.ContainerImg>
          <S.CardImage src={Corrego} alt="logo" />
        </S.ContainerImg>
      </S.Pincipal>

      <S.Pincipal>
        <S.ContainerImgMob>
          <S.CardImageMobile src={Guadalupe} alt="logo" />
        </S.ContainerImgMob>
        <S.ContainerInfo>
          <S.Container>
            <S.ContainerTitle>
              <h4>Nossa Senhora de Guadalupe</h4>
            </S.ContainerTitle>
          </S.Container>
          <S.Container>
            <S.ContainerTimes>
              <p>Localizada na Carrapateira / Recife</p>
              <p>
                Endereço: R. Amalita, 79 - Macaxeira, Recife - PE, 52090-370
              </p>
              <p>Missas: Sábados as 17:00 H</p>
            </S.ContainerTimes>
          </S.Container>
        </S.ContainerInfo>
        <S.ContainerImg>
          <S.CardImage src={Guadalupe} alt="logo" />
        </S.ContainerImg>
      </S.Pincipal>
    </S.SectionSobre>
  );
};
