import NextImage from 'next/image';
import styled from 'styled-components';

export const Container = styled.div`
  margin: 90px 0;
`;

export const Cards = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-gap: 1rem;

  @media (max-width: 1600px) {
    justify-content: center;
  }

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  /* Screen larger than 900px? 3 columns */
  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }

  .yellow {
    background-image: ${props =>
      `linear-gradient(to right, ${props.theme.colors.alternative.yellow3}, ${props.theme.colors.alternative.yellow1})`};
    /* background: ${props =>
      `radial-gradient(${props.theme.colors.alternative.yellow1}, ${props.theme.colors.alternative.yellow3})`}; */
  }

  .pink {
    background-image: ${props =>
      `linear-gradient(to right, ${props.theme.colors.alternative.pink2}, ${props.theme.colors.alternative.pink1})`};
  }

  .blue {
    background-image: ${props =>
      `linear-gradient(to right, ${props.theme.colors.alternative.blue1}, ${props.theme.colors.alternative.blue3})`};
  }

  .green {
    background-image: ${props =>
      `linear-gradient(to right, ${props.theme.colors.primary.greenPrimary}, ${props.theme.colors.alternative.green3})`};
  }

  .greenNeon {
    background-image: ${props =>
      `linear-gradient(to right, ${props.theme.colors.alternative.green1}, ${props.theme.colors.suport.type1})`};
  }

  .orange {
    background-image: ${props =>
      `linear-gradient(to right, ${props.theme.colors.alternative.orange1}, ${props.theme.colors.alternative.orange2})`};
  }
`;

export const ContainerTitle = styled.div`
  border-radius: 50px;
  margin-top: 60px;
  text-align: center;

  h2 {
    color: ${props => props.theme.colors.alternative.blue2};
    font-family: ${props => props.theme.fonts.secundary};
    font-size: ${props => props.theme.fontsSizes['3xl']};
    font-weight: bold;
    margin-bottom: 8px;
  }
  h4 {
    color: ${props => props.theme.colors.alternative.blue2};
    font-family: ${props => props.theme.fonts.secundary};
    font-size: ${props => props.theme.fontsSizes.xl};
    font-weight: 700;
    max-height: 400px;
  }
`;
