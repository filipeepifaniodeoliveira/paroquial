import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
`;

export const ContainerMobile = styled.div`
  @media (min-width: 600px) {
    display: none;
  }
`;

export const ContainerDesktop = styled.div`
  @media (max-width: 601px) {
    display: none;
  }
`;
