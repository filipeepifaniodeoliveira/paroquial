import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Paroquia } from '@modules/Paroquia';

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

export default Paroquia;
