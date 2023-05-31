import styled from 'styled-components';
import NextImage from 'next/image';
import Background from '../../../../public/images/altar.png';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  /* background-image: ${props =>
    `linear-gradient(to right, ${props.theme.colors.alternative.yellow3}, ${props.theme.colors.alternative.blue4})`}; */
  align-items: center;
  justify-content: center;
  background-image: url(${Background.src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  box-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;
  filter: brightness(0.45) opacity(0.85);

  @media (max-width: 1000px) {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
  }
`;

export const ContainerInfos = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const ContainerTitle = styled.div`
  border-radius: 50px;
  text-align: center;
  :hover {
    transform: scale(1.1);
    transition: 500ms linear;
  }
  @media (max-width: 1000px) {
    margin-top: 30px;
  }

  @media (min-width: 1000px) {
    margin-top: 60px;
  }
`;

export const CardImage3 = styled(NextImage).attrs({
  loading: 'lazy',
  height: 90,
  width: 90,
})`
  object-fit: cover;
`;

export const ContainerLogoMobile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  :hover {
    transform: scale(1.2);
    transition: 800ms linear;
  }
`;

export const ContainerText = styled.div`
  width: 100%;
  margin-top: 160px;
  z-index: 96;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;

  :hover {
    transition: 800ms linear;
  }

  @media (max-width: 1000px) {
    margin-right: 0px;
  }

  h2 {
    font-family: ${props => props.theme.fonts.type6}, cursive;
    font-size: ${props => props.theme.fontsSizes['6xl']};
    font-weight: 800px;
    color: ${props => props.theme.colors.primary.colorNeutralLightest};
    text-shadow: 1px 1px 13px black;
    @media (max-width: 1242px) {
      font-size: ${props => props.theme.fontsSizes['2xl']};
    }

    @media (max-width: 700px) {
      font-size: 38px;
      margin-bottom: 0px;
    }
  }

  h5 {
    max-height: 400px;
    font-family: ${props => props.theme.fonts.secundary};
    font-size: 18px;
    text-shadow: 1px 1px 13px black;
    color: ${props => props.theme.colors.primary.colorNeutralLightest};
    @media (max-width: 1242px) {
      font-family: ${props => props.theme.fonts.type6}, cursive;
      font-size: 24px;
      margin-top: 10px;
    }
  }

  h3 {
    margin-top: 60px;
    max-height: 400px;
    font-family: ${props => props.theme.fonts.primary};
    font-size: ${props => props.theme.fontsSizes['2xl']};
    color: ${props => props.theme.colors.primary.colorNeutralLightest};
    text-shadow: 1px 1px 13px black;
    @media (max-width: 700px) {
      font-size: ${props => props.theme.fontsSizes.lg};
      margin-top: 30px;
    }
  }
`;
