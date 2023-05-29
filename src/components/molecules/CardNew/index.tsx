import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import * as S from './styles';

export const CardNew = ({
  url,
  image,
  title,
  subtitle,
  description,
}: any): JSX.Element => {
  const header = <img alt="Card" src={image} />;
  const footer = (
    <div className="flex flex-wrap justify-content-end gap-2">
      <Button label="Saber mais" />
    </div>
  );

  return (
    <S.Container>
      <div className="card flex justify-content-center">
        <Card
          title={title}
          subTitle={subtitle}
          footer={footer}
          header={header}
          className="md:w-25rem"
        >
          <p className="m-0">{description}</p>
        </Card>
      </div>
    </S.Container>
  );
};
