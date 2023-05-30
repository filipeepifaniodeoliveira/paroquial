import React from 'react';
import LinkNext from 'next/link';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import * as S from './styles';

export const CardNew = ({
  id,
  image,
  title,
  subtitle,
  description,
}: any): JSX.Element => {
  const header = <img alt="Card" src={image} />;
  const footer = (
    <div className="flex flex-wrap justify-content-end gap-2">
      <LinkNext href={`posts/${id}`}>
        <Button label="Saber mais" />
      </LinkNext>
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
