import { ComponentStory, ComponentMeta } from '@storybook/react';

import Text from './';

export default {
  title: 'Atoms/Text',
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Paragraph = Template.bind({});
Paragraph.args = {
  label: 'Paragraph',
};

export const Heading = Template.bind({});
Heading.args = {
  className: ['text-lg', 'text-blue'],
  label: 'Heading',
};

export const Caption = Template.bind({});
Caption.args = {
  className: ['text-sm', 'text-blue'],
  label: 'Caption',
};
