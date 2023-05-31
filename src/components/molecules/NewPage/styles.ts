import styled from 'styled-components';
import NextImage from 'next/image';

export const SectionSobre = styled.div`
  background-color: ${props => props.theme.colors.primary.colorNeutralWhite};

  .p-tabview {
    background-color: ${props => props.theme.colors.primary.colorNeutralWhite};
  }

  margin-bottom: 30px;
`;

export const SectionDetails = styled.div`
  background-color: ${props => props.theme.colors.primary.colorNeutralLightest};
  margin: 40px 160px;

  @media (max-width: 1000px) {
    margin: 40px 16px;
  }
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
`;

export const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0px 10px;
`;

export const ContainerTimes = styled.div`
  font-size: ${props => props.theme.fontsSizes.lg};
  margin-top: 30px;
  height: 400px;
  width: 600px;

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
    height: 400px;
    width: 600px;
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const ContainerImgMob = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: 20px;

  img {
    border-radius: 16px;
    max-height: 400px;
    max-width: 400px;
    padding: 0 10px;
  }

  @media (min-width: 1000px) {
    display: none;
    margin-top: 20px;
  }
`;

export const ContainerTitle = styled.div`
  border-radius: 50px;
  margin-top: 60px;
  text-align: center;
  margin-bottom: 5px;

  h2 {
    color: #77abc1;
    font-family: ${props => props.theme.fonts.type6}, cursive;
    font-size: ${props => props.theme.fontsSizes['6xl']};
    font-weight: bold;
    margin-bottom: 8px;

    @media (max-width: 700px) {
      font-size: ${props => props.theme.fontsSizes['4xl']};
    }
  }
  h4 {
    color: #77abc1;
    font-family: ${props => props.theme.fonts.primary};
    font-size: ${props => props.theme.fontsSizes.xs};
    max-height: 400px;
    margin-bottom: 48px;

    @media (max-width: 700px) {
      font-size: 16px;
      font-family: ${props => props.theme.fonts.secundary};
      max-width: 100%;
    }

    /* @media (max-width: 700px) {
      font-size: ${props => props.theme.fontsSizes['4xl']};
      max-width: 250px;
    } */
  }
`;
