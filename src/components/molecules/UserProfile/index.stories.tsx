import { ComponentStory, ComponentMeta } from '@storybook/react';

import UserProfile from './';

export default {
  title: 'Molecules/UserProfile',
  component: UserProfile,
} as ComponentMeta<typeof UserProfile>;

const Template: ComponentStory<typeof UserProfile> = (args) => <UserProfile {...args} />;

export const Regular = Template.bind({});
Regular.args = {
  name: 'robbywh',
  postedAt: '2h'
};
