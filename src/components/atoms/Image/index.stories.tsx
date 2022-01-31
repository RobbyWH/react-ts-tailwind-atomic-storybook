import { ComponentStory, ComponentMeta } from '@storybook/react';

import Image from './';

export default {
  title: 'Atoms/Image',
  component: Image,
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

export const Regular = Template.bind({});
Regular.args = {};
