import styled from 'styled-components';

export const ContainerGlobal = styled.div``;

export const ContainerMobile = styled.div`
  button {
    border: none;
    background: transparent;
  }
  svg {
    font-size: 24px;
    margin-left: 26px;
  }
  z-index: 99;

  p {
    font-size: 24px;
    font-weight: bold;
    margin-left: 26px;
    color: white;
  }

  .sidenav {
    z-index: 98;
    position: absolute;
    width: 100vw;
    background-color: ${props => props.theme.colors.alternative.blue2};

    z-index: 99;
    height: 200vh;
    border-bottom-right-radius: 30px;
    background-color: ${props => props.theme.colors.alternative.blue2};

    @media (max-width: 1000px) {
      height: 230vh;
      min-width: 416px !important;
    }

    @media (max-width: 700px) {
      height: 480vh;
      min-width: 100% !important;
    }
  }
`;
