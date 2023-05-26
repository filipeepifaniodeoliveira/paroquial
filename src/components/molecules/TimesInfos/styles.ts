import styled from 'styled-components';

export const Pincipal = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 0px 20px 0px 20px;
  width: 100%;
  background-color: #77abc1;
  border: 10px solid #77abc1;
  @media (max-width: 600px) {
    padding: 0px;
  }
`;

export const ContainerImg = styled.div`
  margin-left: 20px !important;
  margin-top: 70px !important;
  width: 100%;
  img {
    border-radius: 20px;
    border: 3px solid rgb(244, 244, 246) !important;
  }
`;

export const ContainerInfo = styled.div`
  width: 100%;
  min-height: 460px;
  background-color: #77abc1;
  margin-bottom: 20px;
`;

export const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  background-color: #77abc1;
  border: 10px solid #77abc1;
`;

export const ContainerTitle = styled.div`
  border-radius: 50px;
  text-align: center;

  @media (max-width: 1000px) {
    margin-top: 30px;
  }

  @media (min-width: 1000px) {
    margin-top: 60px;
  }

  h2 {
    color: rgb(244, 244, 246);
    font-family: ${props => props.theme.fonts.secundary};
    font-size: ${props => props.theme.fontsSizes['3xl']};
    font-weight: bold;
    margin-bottom: 8px;

    @media (max-width: 600px) {
      font-size: 24px;
    }
  }

  h3 {
    color: rgb(244, 244, 246);
    font-family: ${props => props.theme.fonts.primary};
    font-size: ${props => props.theme.fontsSizes.lg};
    font-weight: 600;
    max-height: 400px;

    @media (max-width: 600px) {
      font-size: 16px;
    }
  }

  h4 {
    color: ${props => props.theme.colors.alternative.blue3};
    color: rgb(244, 244, 246);
    font-family: ${props => props.theme.fonts.secundary};
    font-size: ${props => props.theme.fontsSizes.xl};
    font-weight: 700;
    max-height: 400px;

    @media (max-width: 600px) {
      font-size: 14px;
    }
  }
`;

export const ContainerInfoPhone = styled.div`
  p {
    color: rgb(244, 244, 246);
    font-family: ${props => props.theme.fonts.secundary};
    font-size: ${props => props.theme.fontsSizes.xs};
    font-weight: 700;
    max-height: 400px;
    text-align: center;
    border: none;

    @media (max-width: 600px) {
      font-size: 14px;
    }

    @media (max-width: 1000px) {
      margin-bottom: 20px;
    }

    @media (min-width: 1000px) {
      margin-bottom: 40px;
    }
  }
`;

export const ContainerTimesDesktop = styled.div`
  font-size: ${props => props.theme.fontsSizes.lg};
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: 30px;

  @media (max-width: 600px) {
    display: none;
  }

  .p-tabview-title {
    font-size: 14px;
    font-family: ${props => props.theme.fonts.primary};

    @media (max-width: 600px) {
      font-size: 12px;
    }
  }

  .p-tabview-panels {
    background-color: #77abc1;
  }

  .p-tabview-nav-link {
    transition: none !important;
    box-shadow: none !important;
  }

  .p-tabview .p-tabview-nav li.p-highlight .p-tabview-nav-link {
    :focus {
      color: #77abc1 !important;
      border-color: #77abc1 !important;
    }
  }
`;

export const ContainerTimesMobile = styled.div`
  font-size: ${props => props.theme.fontsSizes.lg};
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: 30px;

  @media (min-width: 600px) {
    display: none;
  }

  .p-tabview-title {
    font-size: 16px;
    font-family: ${props => props.theme.fonts.primary};

    @media (max-width: 600px) {
      font-size: 14px;
    }
  }

  .p-tabview-panels {
    background-color: #77abc1;
  }

  .p-tabview-nav-link {
    transition: none !important;
    box-shadow: none !important;
  }

  .p-tabview .p-tabview-nav li.p-highlight .p-tabview-nav-link {
    :focus {
      color: #77abc1 !important;
      border-color: #77abc1 !important;
    }
  }
`;

export const ContainerMissas = styled.div`
  margin-top: 30px !important;
  h3 {
    font-family: ${props => props.theme.fonts.primary};
    font-size: ${props => props.theme.fontsSizes.xs};
    color: white;
    margin-bottom: 6px !important;

    @media (max-width: 600px) {
      font-size: 16px;
    }
  }

  p {
    font-family: ${props => props.theme.fonts.primary};
    font-size: ${props => props.theme.fontsSizes.md};
    margin-top: 3px !important;
    color: ${props => props.theme.colors.primary.colorNeutralWhite};
    @media (max-width: 600px) {
      font-size: 14px;
    }
  }

  .pastorais {
    @media (max-width: 600px) {
      display: none;
    }
  }

  .batizados {
    @media (max-width: 600px) {
      display: none;
    }
  }
`;

export const Dias = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;
