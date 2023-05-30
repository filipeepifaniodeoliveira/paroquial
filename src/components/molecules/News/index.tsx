import React from 'react';
import * as S from './styles';
import { CardNew } from '../CardNew';

export const News = (): JSX.Element => {
  const cards = {
    sideMenu: [
      {
        url: '/',
        image:
          'https://www.arquidioceseolindarecife.org/wp-content/uploads/2021/01/WhatsApp-Image-2021-01-02-at-21.05.55-1024x768.jpeg',
        title: 'title',
        subtitle: 'subtitle',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!',
      },
      {
        url: '/',
        image:
          'https://www.arquidioceseolindarecife.org/wp-content/uploads/2021/01/WhatsApp-Image-2021-01-02-at-21.17.21-3-1024x768.jpeg',
        title: 'title',
        subtitle: 'subtitle',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!',
      },
      {
        url: '/',
        image:
          'https://www.arquidioceseolindarecife.org/wp-content/uploads/2018/01/IMG_3718-Medium.jpg',
        title: 'title',
        subtitle: 'subtitle',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!',
      },
    ],
  };
  return (
    <>
      <S.Container>
        <S.ContainerInfos>
          <S.ContainerTitle>
            <h2>Notícias</h2>
            <h4>Fique por dentro das notícias paróquiais</h4>
          </S.ContainerTitle>
        </S.ContainerInfos>
        <S.Cards>
          {cards.sideMenu.map((item, index) => (
            <div key={index}>
              <CardNew
                url={item.url}
                image={item.image}
                title={item.title}
                subtitle={item.subtitle}
                description={item.description}
              />
            </div>
          ))}
        </S.Cards>
      </S.Container>
    </>
  );
};
