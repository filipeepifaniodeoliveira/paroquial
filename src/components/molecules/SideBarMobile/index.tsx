import * as S from './styles';
import SideNavMenu from '../SideNavMenu';

export const SideNavBarMobile = (): JSX.Element => {
  return (
    <S.ContainerGlobal>
      <S.ContainerMobile>
        <SideNavMenu />
      </S.ContainerMobile>
    </S.ContainerGlobal>
  );
};

export default SideNavBarMobile;
