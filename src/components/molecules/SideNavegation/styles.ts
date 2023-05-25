import styled from 'styled-components';
import NextImage from 'next/image';

export const ContainerMenu = styled.div`
  font-size: ${props => props.theme.fontsSizes['2xl']};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.natural.type1};

  @media (max-width: ${props => props.theme.media.resolution.mobile.md}) {
    font-size: ${props => props.theme.fontsSizes.lg};
  }

  @media (max-width: 700px) {
    display: none;
  }

  svg {
    cursor: pointer;
  }
`;

export const CardImage = styled(NextImage).attrs({
  loading: 'lazy',
  quality: 85,
  width: 80,
  height: 70,
})`
  object-fit: cover;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${props =>
    `${props.theme.spacings.sp02} ${props.theme.spacings.sp08} `};
  height: 50px;

  @media (max-width: 700px) {
    display: none;
  }
`;

export const Item = styled.div`
  padding: ${props =>
    `${props.theme.spacings.sp02} ${props.theme.spacings.sp08} `};
`;

export const ItemLink = styled.h2`
  font-family: ${props => props.theme.fonts.secundary};
  font-size: ${props => props.theme.fontsSizes.xs};
  font-weight: ${props => props.theme.fontsWeight.semibold};
  color: ${props => props.theme.colors.natural.type1};
  cursor: pointer;

  :hover {
    color: ${props => props.theme.colors.alternative.yellow3};
    transition: all 0.2s;
  }
`;

export const Containerflex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
