import { ComponentStory, ComponentMeta } from '@storybook/react';

import Header from './';

export default {
  title: 'Molecules/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Regular = Template.bind({});
Regular.args = {
  title: 'Header',
};
