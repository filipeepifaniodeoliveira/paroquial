import styled from 'styled-components';
import NextImage from 'next/image';

export const CardImage = styled(NextImage).attrs({
  loading: 'lazy',
  quality: 85,
  width: 180,
  height: 170,
})`
  object-fit: cover;
`;

export const ContainerGlobal = styled.div`
  z-index: 99;
`;

export const Item = styled.div`
  font-family: ${props => props.theme.fonts.type5}, sans-serif;
  font-size: ${props => props.theme.fontsSizes['6xl']};
  text-align: center;
  margin-top: 16px;
  p {
    border: 1px solid #000;
    border-radius: 10px;
    padding: 16px;
    width: 90%;
  }
`;

export const ContainerMobile = styled.div`
  margin-top: 20px;
  z-index: 1;
`;

export const ContainerAvatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    cursor: pointer;
  }
`;
