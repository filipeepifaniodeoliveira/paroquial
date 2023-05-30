import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/dist/client/router';
import { useTranslation } from 'next-i18next';
import * as S from './styles';
import { New } from '@components/molecules/NewPage';

type INew = {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  description: string;
};

export const NewModel = (): JSX.Element => {
  const { t } = useTranslation('common');
  const [noticia, setNoticia] = useState<any>(null);
  const router = useRouter();
  const parametro = router.query.id;

  const itens = {
    news: [
      {
        id: '1',
        image:
          'https://www.arquidioceseolindarecife.org/wp-content/uploads/2021/01/WhatsApp-Image-2021-01-02-at-21.05.55-1024x768.jpeg',
        title: 'Visita Pastoral',
        subtitle:
          'Visita Pastoral do Arcebispo Dom Fernando Saburido à Paróquia São José Operário',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!',
      },
      {
        id: '2',
        image:
          'https://www.arquidioceseolindarecife.org/wp-content/uploads/2021/01/WhatsApp-Image-2021-01-02-at-21.17.21-3-1024x768.jpeg',
        title: 'title',
        subtitle: 'subtitle',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!',
      },
      {
        id: '3',
        image:
          'https://www.arquidioceseolindarecife.org/wp-content/uploads/2018/01/IMG_3718-Medium.jpg',
        title: 'title',
        subtitle: 'subtitle',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!',
      },
    ],
  };

  useEffect(() => {
    if (parametro) {
      itens?.news.forEach(element => {
        if (element.id === parametro) {
          setNoticia(element);
        }
      });
    }
  }, [parametro]);

  return (
    <S.Container>
      <Head>
        <title>{t('h1')}</title>
      </Head>
      {noticia && <New noticia={noticia} />}
    </S.Container>
  );
};
