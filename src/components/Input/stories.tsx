import type { Meta, Story } from '@storybook/react';

import Input from '.';
import type { InputProps } from './types';

export default {
  component: Input,
  title: 'General/Input',
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {};
