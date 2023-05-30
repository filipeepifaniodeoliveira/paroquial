import React from 'react';
import Pregacao from '../../../../public/images/matrizOficial.png';
import Padre from '../../../../public/images/padre.png';

import * as S from './styles';

export const History = (): JSX.Element => {
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
              <p>
                História é o que também pode contar padre Rosivaldo Pontes, que
                hoje é pároco na Paróquia Nossa Senhora de Fátima, em Água
                Branca, Vitória de Santo Antão. “Tenho imenso carinho por esta
                Paróquia Santa Maria Mãe de Deus, pois aqui trabalhei como
                seminarista, como vigário paroquial e também como pároco,
                dedicando 15 anos de minha vocação”, afirmou.
              </p>
            </S.ContainerTimes>
          </S.Container>
        </S.ContainerInfo>
        <S.ContainerImg>
          <S.CardImage src={Pregacao} alt="logo" />
        </S.ContainerImg>
      </S.Pincipal>

      <S.Pincipal>
        <S.ContainerImgMob>
          <S.CardImageMobile src={Padre} alt="logo" />
        </S.ContainerImgMob>
        <S.ContainerImg>
          <S.CardImage src={Padre} alt="logo" />
        </S.ContainerImg>
        <S.ContainerInfo>
          <S.Container>
            <S.ContainerTitle>
              <h4>O Paróco</h4>
            </S.ContainerTitle>
          </S.Container>
          <S.Container>
            <S.ContainerTimes>
              <p>
                O nosso Pároco é o Padre Reginaldo Ferreira, que está na
                Paróquia Santa Maria Mãe de Deus, localizada no Bairro da
                Macaxeira dese o ano de 2021, sua paróquia anterior era a
                Paróquia de Nossa Senhora do Pilar, localizada no município de
                Itamaracá-PE.
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
            </S.ContainerTimes>
          </S.Container>
        </S.ContainerInfo>
      </S.Pincipal>
    </S.SectionSobre>
  );
};
