import styled from 'styled-components';
import NextImage from 'next/image';

export const Pincipal = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px 0px 20px;
`;

export const CardImage = styled(NextImage).attrs({
  loading: 'lazy',
  quality: 95,
  width: 500,
  height: 400,
})`
  object-fit: cover;
`;

export const ContainerImg = styled.div`
  width: 100%;
  margin-left: 20px !important;
  margin-top: 70px !important;
  img {
    border-radius: 10px;
    border: 6px solid rgb(244, 244, 246) !important;
  }
`;

export const ContainerInfo = styled.div`
  width: 100%;
  min-height: 600px;
  background-color: ${props => props.theme.colors.natural.type1};
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerTitle = styled.div`
  text-align: center;
  margin-top: 60px;
  border-radius: 50px;

  h2 {
    font-family: ${props => props.theme.fonts.secundary};
    font-size: ${props => props.theme.fontsSizes['3xl']};
    font-weight: bold;
    margin-bottom: 20px;
    color: ${props => props.theme.colors.alternative.blue3};
  }
  h3 {
    font-family: ${props => props.theme.fonts.primary};
    max-height: 400px;
    font-size: ${props => props.theme.fontsSizes.lg};
    font-weight: 600;
    color: ${props => props.theme.colors.alternative.blue3};
  }
  h4 {
    font-family: ${props => props.theme.fonts.secundary};
    max-height: 400px;
    font-size: ${props => props.theme.fontsSizes.xl};
    font-weight: 700;
    color: ${props => props.theme.colors.alternative.blue3};
  }
`;

export const ContainerTimes = styled.div`
  min-width: 100%;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${props => props.theme.fontsSizes.lg};

  .p-tabview-title {
    font-size: 14px;
    font-family: ${props => props.theme.fonts.primary};
  }
`;

export const ContainerMissas = styled.div`
  margin-top: 10px !important;
  h3 {
    font-size: ${props => props.theme.fontsSizes.md};
  }

  p {
    font-family: ${props => props.theme.fonts.primary};
    margin-top: 6px !important;
    font-size: ${props => props.theme.fontsSizes.sm};
  }
`;

export const Dias = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
