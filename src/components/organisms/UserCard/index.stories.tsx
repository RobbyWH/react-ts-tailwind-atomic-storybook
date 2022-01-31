import { ComponentStory, ComponentMeta } from '@storybook/react';

import UserCard from './';

export default {
  title: 'Organisms/UserCard',
  component: UserCard,
} as ComponentMeta<typeof UserCard>;

const Template: ComponentStory<typeof UserCard> = (args) => <UserCard {...args} />;

export const Regular = Template.bind({});
Regular.args = {
  name: 'robbywh',
  postedAt: '2h'
};
