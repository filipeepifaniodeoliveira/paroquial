import styled from 'styled-components';
import NextImage from 'next/image';

export const Footer = styled.div`
  width: 100%;
  position: relative;
  height: 300px;
  background-image: ${props =>
    `linear-gradient(to right, ${props.theme.colors.alternative.blue2}, ${props.theme.colors.alternative.blue1})`};
  padding: 10px 60px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .clearfix {
    clear: both;
  }

  @media only screen and (max-width: 700px) {
    display: none;
  }
`;

export const ContainerMenu = styled.div`
  font-size: ${props => props.theme.fontsSizes['2xl']};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.natural.type1};

  @media (max-width: ${props => props.theme.media.resolution.mobile.md}) {
    font-size: ${props => props.theme.fontsSizes.lg};
  }
  svg {
    cursor: pointer;
  }
`;

export const ContainerAddress = styled.div`
  text-align: right;
  font-weight: 600;
  color: ${props => props.theme.colors.natural.type1};
  font-size: ${props => props.theme.fontsSizes.md};
  font-family: ${props => props.theme.fonts.primary};

  @media (max-width: ${props => props.theme.media.resolution.mobile.md}) {
    font-size: ${props => props.theme.fontsSizes.lg};
  }
  svg {
    cursor: pointer;
  }
`;

export const CardImage = styled(NextImage).attrs({
  loading: 'lazy',
  quality: 85,
  width: 180,
  height: 170,
})`
  object-fit: cover;
`;

export const ContainerIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  gap: 10px;
  svg {
    cursor: pointer;
  }
`;

export const CardIcon = styled.p`
  /* grid-row: 2/3; */
  font-size: 20px;
  justify-self: end;
`;

export const Container = styled.div``;

export const TitleMobile = styled.div`
  margin: 0;
  padding: 0;
  font-size: ${props => props.theme.fontsSizes.sm};
  font-weight: ${props => props.theme.fontsWeight.medium};
  color: ${props => props.theme.colors.secondary.type2};
  padding: 20px 0px 5px 0px;
  color: ${props => props.theme.colors.primary.colorNeutralWhite};
  letter-spacing: 0.22em;
  font-weight: normal;
  text-transform: uppercase;

  @media only screen and (max-width: 700px) {
    font-size: 8px;
  }
`;

export const CardImageMobile = styled(NextImage).attrs({
  loading: 'lazy',
  quality: 85,
  width: 70,
  height: 60,
})`
  object-fit: cover;
`;

export const FooterMobile = styled.div`
  width: 100%;
  bottom: 0;
  height: 70px;
  background-image: ${props =>
    `linear-gradient(to right, ${props.theme.colors.alternative.blue2}, ${props.theme.colors.alternative.blue1})`};
  border-bottom: 1px solid ${props => props.theme.colors.alternative.blue2};

  padding: 10px 60px;
  align-items: center;
  display: flex;
  justify-content: Center;

  @media (min-width: 700px) {
    display: none;
  }
`;
