import styled from 'styled-components';
import NextImage from 'next/image';

export const SectionSobre = styled.div`
  background-color: ${props => props.theme.colors.primary.colorNeutralWhite};

  .p-tabview {
    background-color: ${props => props.theme.colors.primary.colorNeutralWhite};
  }

  margin-bottom: 30px;
`;

export const Pincipal = styled.div`
  padding: 0px 20px 0px 20px;
  width: 100%;
  margin-bottom: 0px;

  @media (max-width: 1000px) {
    display: block;
    padding: 0px;
  }
`;

export const ContainerInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  background-color: ${props => props.theme.colors.primary.colorNeutralWhite};
`;

export const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const ContainerTimes = styled.div`
  font-size: ${props => props.theme.fontsSizes.lg};
  margin-top: 30px;

  @media (max-width: 700px) {
    p {
      margin-bottom: 18px !important;
    }
  }

  p {
    font-size: 16px;
    font-family: ${props => props.theme.fonts.secundary};
    max-width: 100%;
    margin-top: 18px !important;
  }
`;

export const ContainerImg = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    border-radius: 10px;
    border: 4px solid #1e243a; !important;
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const CardImage = styled(NextImage).attrs({
  height: 400,
  loading: 'lazy',
  quality: 95,
  width: 600,
})`
  object-fit: cover;
`;

export const ContainerImgMob = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: 20px;

  img {
    border-radius: 16px;
  }

  @media (min-width: 1000px) {
    display: none;
    margin-top: 20px;
  }
`;

export const CardImageMobile = styled(NextImage).attrs({
  height: 300,
  loading: 'lazy',
  quality: 95,
  width: 350,
})`
  object-fit: cover;
`;

export const ContainerTitle = styled.div`
  border-radius: 50px;
  margin-top: 60px;
  text-align: center;
  margin-bottom: 5px;

  @media (max-width: 700px) {
    margin-bottom: 0px;
  }

  h2 {
    color: #77abc1;
    font-family: ${props => props.theme.fonts.type6}, cursive;
    font-size: ${props => props.theme.fontsSizes['6xl']};
    font-weight: bold;
    margin-bottom: 8px;
  }
  h4 {
    color: #77abc1;
    font-family: ${props => props.theme.fonts.type6}, cursive;
    font-size: ${props => props.theme.fontsSizes['4xl']};
    font-weight: 700;
    max-height: 400px;
    margin-bottom: 8px;

    @media (max-width: 700px) {
      font-size: ${props => props.theme.fontsSizes['4xl']};
      max-width: 250px;
    }
  }
`;
