import React from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import Pregacao from '../../../../public/images/matrizOficial.png';

import * as S from './styles';

interface ItensProps {
  sideMenu: Array<MenusProps>;
}

interface MenusProps {
  name: string;
  alt: string;
  href: string;
}

export const TimesInfos = (): JSX.Element => {
  return (
    <>
      <S.Container>
        <S.ContainerTitle>
          <h2>Agenda Semanal</h2>
          <h3>Conheça os horários de nossas atividades</h3>
        </S.ContainerTitle>
      </S.Container>
      <S.Pincipal>
        <S.ContainerInfo>
          <S.Container>
            <S.ContainerTitle>
              <h4>Horários</h4>
            </S.ContainerTitle>
          </S.Container>
          <S.Container>
            <S.ContainerTimes>
              <TabView>
                <TabPanel header="Celebrações">
                  <S.ContainerMissas>
                    <h3 className="">Domingos</h3>
                    <p className="">Manhã: 08:00 hs</p>
                    <p className="">Noite: 19:00 hs</p>
                  </S.ContainerMissas>
                  <S.ContainerMissas>
                    <h3 className="">Sábados</h3>
                    <p className="">Tarde: 17:00 hs</p>
                  </S.ContainerMissas>
                  <S.ContainerMissas>
                    <h3 className="">Quintas</h3>
                    <p className="">Noite: 19:00 hs</p>
                  </S.ContainerMissas>
                  <S.ContainerMissas>
                    <h3 className="">Primeira sexta-feira do mês</h3>
                    <p className="">Noite: 19:00 hs</p>
                  </S.ContainerMissas>
                </TabPanel>
                <TabPanel header="Confissões">
                  <S.ContainerMissas>
                    <h3 className="">Sexta-Feira</h3>
                    <p className="">Tarde: 14:00 hs as 17:00</p>
                  </S.ContainerMissas>
                </TabPanel>
                <TabPanel header="Secretaria">
                  <S.ContainerMissas>
                    <h3 className="">Terça á Sexta-Feira</h3>
                    <p className="">09:00 hs as 12:00</p>
                    <p className="">14:00 hs as 17:00</p>
                  </S.ContainerMissas>
                  <S.ContainerMissas>
                    <h3 className="">Sábado</h3>
                    <p className="">09:00 hs as 12:00</p>
                  </S.ContainerMissas>
                </TabPanel>
                <TabPanel header="Pastorais e Movimentos">
                  {/* <S.Container> */}
                  <S.ContainerMissas>
                    <h3 className="">Terço dos Homens</h3>
                    <p className="">Segundas: 19:00 hs</p>
                  </S.ContainerMissas>
                  <S.ContainerMissas>
                    <h3 className="">Legião de Maria</h3>
                    <p className="">Terças: 19:00 hs</p>
                  </S.ContainerMissas>
                  <S.ContainerMissas>
                    <h3 className="">Grupo de Oração</h3>
                    <p className="">Quartas: 19:00 hs</p>
                  </S.ContainerMissas>
                  <S.ContainerMissas>
                    <h3 className="">Quintas de Adoração</h3>
                    <p className="">Noite: 19:00 hs</p>
                  </S.ContainerMissas>
                  <S.ContainerMissas>
                    <h3 className="">Catequese</h3>
                    <p className="">Sabados: 09:00 hs</p>
                  </S.ContainerMissas>
                  <S.ContainerMissas>
                    <h3 className="">Crisma</h3>
                    <p className="">Sabados: 17:00 hs</p>
                  </S.ContainerMissas>
                  <S.ContainerMissas>
                    <h3 className="">Grupo Jovem</h3>
                    <p className="">Sabados: 19:00 hs</p>
                  </S.ContainerMissas>
                  {/* </S.Container> */}
                </TabPanel>
              </TabView>
            </S.ContainerTimes>
          </S.Container>
        </S.ContainerInfo>
        <S.ContainerImg>
          <S.CardImage src={Pregacao} alt="logo" />
        </S.ContainerImg>
      </S.Pincipal>
    </>
  );
};
