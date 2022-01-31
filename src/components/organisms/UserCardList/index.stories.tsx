import { ComponentStory, ComponentMeta } from '@storybook/react';

import UserCardList from './';

export default {
  title: 'Organisms/UserCardList',
  component: UserCardList,
} as ComponentMeta<typeof UserCardList>;

const Template: ComponentStory<typeof UserCardList> = (args) => <UserCardList {...args} />;

export const Regular = Template.bind({});
Regular.args = {
  data: [{ 
    name: 'robbywh',
    postedAt: '2h'
  },{ 
    name: 'bradfrost',
    postedAt: '3h'
  }]
};
