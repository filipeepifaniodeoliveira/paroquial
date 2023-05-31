import styled from 'styled-components';
import NextImage from 'next/image';

export const Container = styled.header`
  align-items: center;
  box-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;
  display: flex;
  justify-content: space-between;
  padding: ${props =>
    `${props.theme.spacings.sp02} ${props.theme.spacings.sp08} `};
  width: 100%;
  height: 90px;

  @media (max-width: ${props => props.theme.media.resolution.mobile.md}) {
    img {
      width: 150px;
    }
    height: 80px;
  }

  @media (max-width: 1000px) {
    padding: 0.1rem 0rem !important;
    background-image: ${props =>
      `linear-gradient(to right, ${props.theme.colors.alternative.blue2}, ${props.theme.colors.alternative.blue2})`};
  }

  @media (min-width: 1000px) {
    background-image: ${props =>
      `linear-gradient(to right, ${props.theme.colors.alternative.blue2}, ${props.theme.colors.alternative.blue1})`};
  }
`;
