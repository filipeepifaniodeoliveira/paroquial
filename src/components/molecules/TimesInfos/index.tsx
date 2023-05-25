import React from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import Funcionamento from '../../../../public/images/agenda.png';

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
            <S.ContainerTimesDesktop>
              <TabView>
                <TabPanel header="Celebrações">
                  <S.ContainerMissas>
                    <h3 className="">Domingos</h3>
                    <p className=""> Manhã: 08:00 hs</p>
                    <p className=""> Noite: 19:00 hs</p>
                  </S.ContainerMissas>
                  <S.ContainerMissas>
                    <h3 className="">Sábados</h3>
                    <p className=""> Tarde: 17:00 hs</p>
                  </S.ContainerMissas>
                  <S.ContainerMissas>
                    <h3 className="">Quintas</h3>
                    <p className=""> Noite: 19:00 hs</p>
                  </S.ContainerMissas>
                  <S.ContainerMissas>
                    <h3 className="">Primeira sexta-feira do mês</h3>
                    <p className=""> Noite: 19:00 hs</p>
                  </S.ContainerMissas>
                </TabPanel>
                <TabPanel header="Confissões" className="confissoes">
                  <S.ContainerMissas>
                    <h3 className="">Sexta-Feira</h3>
                    <p className="">Tarde: 14:00 hs as 17:00</p>
                  </S.ContainerMissas>
                </TabPanel>
                <TabPanel header="Batizados" className="batizados">
                  <S.ContainerMissas>
                    <h3 className="">(2º e 4º) Domingos</h3>
                    <p className="">Manhã: 08:00 hs</p>
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
                <TabPanel header="Pastorais e Movimentos" className="pastorais">
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
            </S.ContainerTimesDesktop>
            <S.ContainerTimesMobile>
              <TabView>
                <TabPanel header="Celebrações">
                  <S.ContainerMissas>
                    <h3 className="">Domingos</h3>
                    <p className=""> Manhã: 08:00 hs</p>
                    <p className=""> Noite: 19:00 hs</p>
                  </S.ContainerMissas>
                  <S.ContainerMissas>
                    <h3 className="">Sábados</h3>
                    <p className=""> Tarde: 17:00 hs</p>
                  </S.ContainerMissas>
                  <S.ContainerMissas>
                    <h3 className="">Quintas</h3>
                    <p className=""> Noite: 19:00 hs</p>
                  </S.ContainerMissas>
                  <S.ContainerMissas>
                    <h3 className="">Primeira sexta-feira do mês</h3>
                    <p className=""> Noite: 19:00 hs</p>
                  </S.ContainerMissas>
                </TabPanel>
                <TabPanel header="Confissões" className="confissoes">
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
              </TabView>
            </S.ContainerTimesMobile>
          </S.Container>
        </S.ContainerInfo>
      </S.Pincipal>
      <S.Container>
        <S.ContainerInfoPhone>
          <p>Em caso de dúvidas entre em contato: (81) 3037-0003 </p>
        </S.ContainerInfoPhone>
      </S.Container>
    </>
  );
};
