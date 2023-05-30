import styled from 'styled-components';

export const Container = styled.div`
  @media (max-width: 1000px) {
    margin: 20px;
    margin-bottom: 60px;
  }

  @media (min-width: 1000px) {
    margin-top: 60px;
    margin-bottom: 60px;
  }
`;

export const ContainerInfos = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const ContainerTitle = styled.div`
  text-align: center;

  @media (max-width: 1000px) {
    margin-top: 10px;
  }

  @media (min-width: 1000px) {
    margin-bottom: 60px;
    :hover {
      transform: scale(1.1);
      transition: 500ms linear;
    }
  }

  h2 {
    color: ${props => props.theme.colors.alternative.blue2};
    color: #77abc1;
    font-family: ${props => props.theme.fonts.type6}, cursive;
    font-size: ${props => props.theme.fontsSizes['6xl']};
    font-weight: bold;
    margin-bottom: 8px;

    @media (max-width: 1000px) {
      font-size: ${props => props.theme.fontsSizes['4xl']};
    }
  }
  h4 {
    color: #77abc1;
    font-family: ${props => props.theme.fonts.primary};
    font-size: ${props => props.theme.fontsSizes.xl};
    font-weight: 700;
    max-height: 400px;

    @media (max-width: 1000px) {
      font-size: ${props => props.theme.fontsSizes.xs};
      margin-bottom: 18px;
    }
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
`;
