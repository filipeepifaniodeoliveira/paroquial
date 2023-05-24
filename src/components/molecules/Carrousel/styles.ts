import styled from 'styled-components';
import NextImage from 'next/image';

export const Container = styled.div`
  width: 100%;

  .thumbs-wrapper {
    display: none;
  }

  .slider-wrapper {
    img {
      max-height: 400px;
    }
  }
`;

export const CardImage = styled(NextImage).attrs({
  loading: 'lazy',
  height: 400,
})`
  object-fit: cover;
`;
