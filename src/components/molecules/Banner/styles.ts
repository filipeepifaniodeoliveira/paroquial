import styled from 'styled-components';
import NextImage from 'next/image';

export const CardImage1 = styled(NextImage).attrs({
  loading: 'lazy',
  height: 670,
  width: 400,
})`
  object-fit: cover;
`;

export const CardImage2 = styled(NextImage).attrs({
  loading: 'lazy',
})`
  object-fit: cover;
`;

export const CardImage3 = styled(NextImage).attrs({
  loading: 'lazy',
  height: 90,
  width: 90,
})`
  object-fit: cover;
`;

export const Container = styled.div`
  width: 100%;
  max-height: 590px;
  min-height: 390px;
  display: flex;
  justify-content: space-between;
  background-image: ${props =>
    `linear-gradient(to right, ${props.theme.colors.alternative.yellow3}, ${props.theme.colors.alternative.blue4})`};
  align-items: center;
  box-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;

  @media (max-width: 1000px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ContainerPadroeira = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    margin-left: 100px;
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const ContainerLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 70px;
  img {
    max-height: 400px;
    margin-left: 100px;
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const ContainerLogoMobile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;

  @media (min-width: 1000px) {
    display: none;
  }
`;

export const ContainerText = styled.div`
  text-align: center;
  margin-right: 80px;

  @media (max-width: 1000px) {
    margin-right: 0px;
  }

  h2 {
    font-family: ${props => props.theme.fonts.secundary};
    font-size: ${props => props.theme.fontsSizes['4xl']};
    font-weight: bold;
    color: ${props => props.theme.colors.primary.colorNeutralLightest};

    @media (max-width: 700px) {
      font-size: ${props => props.theme.fontsSizes.sm};
      margin-bottom: 0px;
    }

    @media (max-width: 700px) {
      font-size: ${props => props.theme.fontsSizes.xl};
      margin-bottom: 0px;
    }

    @media (max-width: 1242px) {
      font-size: ${props => props.theme.fontsSizes['2xl']};
    }
  }

  h5 {
    max-height: 400px;
    font-family: ${props => props.theme.fonts.secundary};
    font-size: ${props => props.theme.fontsSizes.md};
    color: ${props => props.theme.colors.primary.colorNeutralLightest};
    @media (max-width: 1242px) {
      font-size: ${props => props.theme.fontsSizes.xs};
      margin-top: 10px;
    }
  }

  h3 {
    margin-top: 20px;
    max-height: 400px;
    font-family: ${props => props.theme.fonts.primary};
    font-size: ${props => props.theme.fontsSizes['2xl']};
    color: ${props => props.theme.colors.primary.colorNeutralLightest};

    @media (max-width: 700px) {
      font-size: ${props => props.theme.fontsSizes.lg};
      margin-top: 40px;
    }
  }
`;
