import { ComponentStory, ComponentMeta } from '@storybook/react';
import Icon, {IconName, iconNameArr} from './';

const IconComponent = () => {
  return (
    <div>
    {
      iconNameArr.map((item: IconName) => (
        <Icon name={item} />
      ))
    }
    </div>
  )
}

export default {
  title: 'Atoms/Icon',
  component: IconComponent,
} as ComponentMeta<typeof IconComponent>;

export const List: ComponentStory<typeof IconComponent> = (args) => (
  <IconComponent />
);