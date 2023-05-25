import React from 'react';

import { ComponentMeta } from '@storybook/react';

import { FooterGlobal } from './index';

export default {
  title: 'Global/FooterGlobal',
  component: FooterGlobal,
} as ComponentMeta<typeof FooterGlobal>;

export const footerGlobal = (): JSX.Element => <FooterGlobal />;
