import React from 'react';
import LinkNext from 'next/link';
import Pregacao from '../../../../public/images/matrizOficial.png';
import { Button } from 'primereact/button';

import * as S from './styles';

export const SectionSobre = (): JSX.Element => {
  return (
    <S.SectionSobre>
      <S.Container>
        <S.ContainerTitle>
          <h2>Paróquia</h2>
        </S.ContainerTitle>
      </S.Container>
      <S.Pincipal>
        <S.ContainerImgMob>
          <S.CardImageMobile src={Pregacao} alt="logo" />
        </S.ContainerImgMob>
        <S.ContainerInfo>
          <S.Container>
            <S.ContainerTitle>
              <h4>História</h4>
            </S.ContainerTitle>
          </S.Container>
          <S.Container>
            <S.ContainerTimes>
              <p>
                A Paróquia Santa Maria Mãe de Deus, localizada no Bairro da
                Macaxeira. A Igreja foi fundada por Othon Lynch e sua esposa Mª
                Amália, em 1945. Com a finalidade de ministrar aos seus
                operários os sacramentos da Santa Igreja Católica.
              </p>
              <p>
                O título de Santa Maria Mãe de Deus é o primeiro dogma mariano
                (Theotokos), proclamado no Concílio de Éfeso no ano de 431. O
                dogma diz que, em Jesus, há duas naturezas: humana e divina. Em
                outras palavras, Jesus é verdadeiro Deus e verdadeiro homem e
                essas duas naturezas são inseparáveis. Sendo Maria mãe da pessoa
                de Jesus, cujas naturezas divina e humana não se separam, ela é,
                portanto, Mãe de Deus.
              </p>
              <S.ContainerButton>
                <LinkNext href="paroquia">
                  <Button label="Saiba Mais" />
                </LinkNext>
              </S.ContainerButton>
            </S.ContainerTimes>
          </S.Container>
        </S.ContainerInfo>
        <S.ContainerImg>
          <S.CardImage src={Pregacao} alt="logo" />
        </S.ContainerImg>
      </S.Pincipal>
    </S.SectionSobre>
  );
};
