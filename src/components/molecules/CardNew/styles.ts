import styled from 'styled-components';

export const Container = styled.div`
  img {
    max-height: 260px;
    min-height: 260px;
  }

  .card {
    max-width: 350px;

    @media (max-width: 1000px) {
      margin-top: 10px;
    }
  }

  .p-card {
    min-height: 540px;
  }

  button {
    background-color: #77abc1;
    border-color: #77abc1;
    font-size: 14px;
    width: 100px;
    height: 46px;

    :enabled:hover {
      background-color: white;
      color: #77abc1;
      border-color: #77abc1;
    }
  }
  .p-card-title {
    color: #77abc1;
    font-size: 16px;
    font-family: ${props => props.theme.fonts.secundary};
  }

  .p-card-subtitle {
    font-size: 14px;
    color: ${props => props.theme.colors.alternative.blue2};
    font-family: ${props => props.theme.fonts.primary};
  }

  .p-card-content {
    font-size: 14px;
    color: ${props => props.theme.colors.alternative.blue2};
    font-family: ${props => props.theme.fonts.primary};
  }
`;
