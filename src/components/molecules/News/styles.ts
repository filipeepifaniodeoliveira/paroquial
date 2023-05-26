import styled from 'styled-components';

export const Container = styled.div`
  @media (max-width: 1000px) {
    margin: 20px;
    margin-bottom: 60px;
  }

  @media (min-width: 1000px) {
    margin: 90px 0;
    margin-bottom: 60px;
  }
`;

export const ContainerTitles = styled.div`
  @media (max-width: 1000px) {
    margin: 30px 0;
  }

  @media (min-width: 1000px) {
    margin: 50px 0;
  }
`;

export const Cards = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-gap: 1rem;

  @media (max-width: 1000px) {
    margin-bottom: 60px;
  }

  @media (max-width: 1600px) {
    justify-content: center;
  }

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }

  .yellow {
    background-image: ${props =>
      `linear-gradient(to right, ${props.theme.colors.alternative.yellow3}, ${props.theme.colors.alternative.yellow1})`};
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
  text-align: center;

  @media (max-width: 1000px) {
    margin-top: 10px;
  }

  @media (min-width: 1000px) {
    margin-top: 60px;
  }

  h2 {
    color: ${props => props.theme.colors.alternative.blue2};
    color: #77abc1;
    font-family: ${props => props.theme.fonts.secundary};
    font-family: ${props => props.theme.fonts.type5}, sans-serif;
    font-size: ${props => props.theme.fontsSizes['4xl']};
    font-weight: bold;
    margin-bottom: 8px;

    @media (max-width: 900px) {
      font-size: ${props => props.theme.fontsSizes['2xl']};
    }
  }
  h4 {
    color: ${props => props.theme.colors.alternative.blue2};
    color: #77abc1;
    font-family: ${props => props.theme.fonts.primary};
    font-size: ${props => props.theme.fontsSizes.xl};
    font-weight: 700;
    max-height: 400px;

    @media (max-width: 600px) {
      font-size: ${props => props.theme.fontsSizes.sm};
    }
  }
`;
