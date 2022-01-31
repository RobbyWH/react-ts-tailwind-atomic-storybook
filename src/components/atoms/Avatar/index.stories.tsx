import { ComponentStory, ComponentMeta } from '@storybook/react';

import Avatar from './';

export default {
  title: 'Atoms/Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Regular = Template.bind({});
Regular.args = {};
