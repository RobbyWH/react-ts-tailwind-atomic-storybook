import { ComponentStory, ComponentMeta } from '@storybook/react';

import InstagramScreen from '.';

export default {
  title: 'Templates/InstagramScreen',
  component: InstagramScreen,
} as ComponentMeta<typeof InstagramScreen>;

const Template: ComponentStory<typeof InstagramScreen> = (args) => <InstagramScreen {...args} />;

export const Regular = Template.bind({});
Regular.args = {
  headerTitle: 'Lorem',
  data: [{ 
    name: 'robbywh',
    postedAt: '2h'
  },{ 
    name: 'bradfrost',
    postedAt: '3h'
  }]
};
