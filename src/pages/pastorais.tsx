import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { PastoraisModel } from '@modules/Pastorais';

export const getServerSideProps: GetServerSideProps = async ({
  locale = '',
  req,
  res,
}) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
};

export default PastoraisModel;
