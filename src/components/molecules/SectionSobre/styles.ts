import styled from 'styled-components';
import NextImage from 'next/image';

export const SectionSobre = styled.div`
  background-color: ${props => props.theme.colors.primary.colorNeutralWhite};

  .p-tabview {
    background-color: ${props => props.theme.colors.primary.colorNeutralWhite};
  }
`;

export const ContainerInfo = styled.div`
  width: 100%;
  min-height: 600px;
  background-color: ${props => props.theme.colors.primary.colorNeutralWhite};
`;

export const Pincipal = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 0px 20px 0px 20px;
  width: 100%;
`;

export const CardImage = styled(NextImage).attrs({
  height: 400,
  loading: 'lazy',
  quality: 95,
  width: 450,
})`
  object-fit: cover;
`;

export const ContainerImg = styled.div`
  margin-left: 20px !important;
  width: 100%;
  img {
    border-radius: 10px;
    border: 4px solid #1e243a; !important;
  }
`;

export const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
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

export const ContainerTimes = styled.div`
  font-size: ${props => props.theme.fontsSizes.lg};
  margin-top: 30px;
  max-width: 60%;

  p {
    font-size: 16px;
    font-family: ${props => props.theme.fonts.primary};
    margin-top: 8px !important;
  }
`;

export const ContainerButton = styled.div`
  margin-top: 8px !important;
  display: flex;
  justify-content: right;
  align-items: center;

  button {
    width: 120px;
    height: 40px;
    background-color: #77abc1;
    border: none;
  }
`;
