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
    -webkit-animation: right 4s forwards;
    animation: right 4s forwards;

    @-webkit-keyframes right {
      from {
        right: 0px;
      }
      to {
        left: 25px;
      }
    }

    @keyframes right {
      from {
        right: 0px;
      }
      to {
        left: 25px;
      }
    }
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
    -webkit-animation: left 4s forwards;
    animation: left 4s forwards;

    @-webkit-keyframes left {
      from {
        right: 0px;
      }
      to {
        margin-right: 25px;
      }
    }

    @keyframes left {
      from {
        margin-right: 0px;
      }
      to {
        margin-right: 25px;
      }
    }
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

  :hover {
    transform: scale(1.1);
    transition: 800ms linear;
  }

  @media (max-width: 1000px) {
    margin-right: 0px;
  }

  h2 {
    font-family: ${props => props.theme.fonts.type6}, cursive;
    font-size: ${props => props.theme.fontsSizes['6xl']};
    font-weight: bold;
    color: ${props => props.theme.colors.primary.colorNeutralLightest};

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
    font-family: ${props => props.theme.fonts.type6}, cursive;
    font-size: 28px;
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

    @media (max-width: 700px) {
      font-size: ${props => props.theme.fontsSizes.lg};
      margin-top: 30px;
    }
  }
`;
