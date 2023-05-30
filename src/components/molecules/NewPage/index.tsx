import React from 'react';
import Pitu from '../../../../public/images/sjose.png';
import * as S from './styles';

type INew = {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  description: string;
};

export const New = (noticia: any): JSX.Element => {
  console.log(noticia.noticia, 'noticia');
  return (
    <S.SectionSobre>
      {noticia?.noticia ? (
        <S.SectionDetails>
          <S.Container>
            <S.ContainerTitle>
              <h2>{noticia.noticia.title}</h2>
            </S.ContainerTitle>
          </S.Container>
          <S.Pincipal>
            <S.Container>
              <S.ContainerTitle>
                <h4>{noticia.noticia.subtitle}</h4>
              </S.ContainerTitle>
            </S.Container>
            <S.ContainerImgMob>
              <img src={noticia.noticia.image} alt="logo" />
            </S.ContainerImgMob>
            <S.ContainerImg>
              <img src={noticia.noticia.image} alt="logo" />
            </S.ContainerImg>
            <S.ContainerInfo>
              <S.Container>
                <S.ContainerTimes>
                  <p>{noticia.noticia.description}</p>
                </S.ContainerTimes>
              </S.Container>
            </S.ContainerInfo>
          </S.Pincipal>
        </S.SectionDetails>
      ) : (
        <h2>not found</h2>
      )}
    </S.SectionSobre>
  );
};
