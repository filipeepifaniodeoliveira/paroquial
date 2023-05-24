import styled from 'styled-components';
import NextImage from 'next/image';

export const Pincipal = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 0px 20px 0px 20px;
  width: 100%;
  background-color: #77abc1;
`;

export const CardImage = styled(NextImage).attrs({
  height: 400,
  loading: 'lazy',
  quality: 95,
  width: 500,
})`
  object-fit: cover;
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
  width: 100%;
  background-color: #77abc1;
`;

export const ContainerTitle = styled.div`
  border-radius: 50px;
  margin-top: 60px;
  text-align: center;

  h2 {
    color: ${props => props.theme.colors.alternative.blue3};
    color: rgb(244, 244, 246);
    font-family: ${props => props.theme.fonts.secundary};
    font-size: ${props => props.theme.fontsSizes['3xl']};
    font-weight: bold;
    margin-bottom: 8px;
  }
  h3 {
    color: ${props => props.theme.colors.primary.colorNeutralMedium};
    color: rgb(244, 244, 246);
    font-family: ${props => props.theme.fonts.primary};
    font-size: ${props => props.theme.fontsSizes.lg};
    font-weight: 600;
    max-height: 400px;
  }
  h4 {
    color: ${props => props.theme.colors.alternative.blue3};
    color: rgb(244, 244, 246);
    font-family: ${props => props.theme.fonts.secundary};
    font-size: ${props => props.theme.fontsSizes.xl};
    font-weight: 700;
    max-height: 400px;
  }
`;

export const ContainerInfoPhone = styled.div`
  p {
    color: ${props => props.theme.colors.alternative.blue3};
    color: rgb(244, 244, 246);
    font-family: ${props => props.theme.fonts.secundary};
    font-size: ${props => props.theme.fontsSizes.xs};
    font-weight: 700;
    max-height: 400px;
    margin-bottom: 40px;
  }
`;

export const ContainerTimes = styled.div`
  font-size: ${props => props.theme.fontsSizes.lg};
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: 30px;
  min-width: 100%;

  .p-tabview-title {
    font-size: 14px;
    font-family: ${props => props.theme.fonts.primary};
  }

  .p-tabview-panels {
    background-color: #77abc1;
  }
`;

export const ContainerMissas = styled.div`
  margin-top: 30px !important;
  h3 {
    font-family: ${props => props.theme.fonts.primary};
    font-size: ${props => props.theme.fontsSizes.xs};
    color: white;
    margin-bottom: 6px !important;
  }

  p {
    font-family: ${props => props.theme.fonts.primary};
    font-size: ${props => props.theme.fontsSizes.md};
    /* font-weight: bold; */
    margin-top: 3px !important;
    color: ${props => props.theme.colors.primary.colorNeutralWhite};
  }
`;

export const Dias = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;
