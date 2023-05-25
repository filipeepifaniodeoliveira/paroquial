import styled from 'styled-components';
import NextImage from 'next/image';

export const SectionSobre = styled.div`
  background-color: ${props => props.theme.colors.primary.colorNeutralWhite};

  .p-tabview {
    background-color: ${props => props.theme.colors.primary.colorNeutralWhite};
  }
`;

export const Pincipal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 20px 0px 20px;
  width: 100%;

  @media (max-width: 1000px) {
    display: block;
    padding: 0px;
  }
`;

export const ContainerInfo = styled.div`
  width: 100%;
  min-height: 600px;
  background-color: ${props => props.theme.colors.primary.colorNeutralWhite};
  /* background-color: red; */
`;

export const ContainerImg = styled.div`
  margin-left: 20px !important;
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
  width: 450,
})`
  object-fit: cover;
`;

export const ContainerImgMob = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: 40px;

  img {
    border-radius: 16px;
  }

  @media (min-width: 1000px) {
    display: none;
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

export const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const ContainerTitle = styled.div`
  border-radius: 50px;
  margin-top: 60px;
  text-align: center;

  h2 {
    color: ${props => props.theme.colors.alternative.blue2};
    color: #77abc1;
    font-family: ${props => props.theme.fonts.secundary};
    font-size: ${props => props.theme.fontsSizes['3xl']};
    font-weight: bold;
    margin-bottom: 8px;
  }
  h4 {
    color: ${props => props.theme.colors.alternative.blue2};
    color: #77abc1;
    font-family: ${props => props.theme.fonts.secundary};
    font-size: ${props => props.theme.fontsSizes.xl};
    font-weight: 700;
    max-height: 400px;
  }
`;

export const ContainerTimes = styled.div`
  font-size: ${props => props.theme.fontsSizes.lg};
  margin-top: 30px;
  max-width: 60%;

  @media (max-width: 700px) {
    max-width: 80%;

    p {
      text-align: center;
      margin-bottom: 18px !important;
    }
  }

  p {
    font-size: 16px;
    font-family: ${props => props.theme.fonts.primary};
    margin-top: 18px !important;
  }
`;

export const ContainerButton = styled.div`
  margin-top: 8px !important;
  margin-bottom: 18px !important;
  display: flex;
  justify-content: right;
  align-items: center;

  button {
    width: 120px;
    height: 40px;
    background-color: #77abc1;
    border: none;
  }
`;
