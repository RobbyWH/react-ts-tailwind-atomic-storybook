import { ComponentStory, ComponentMeta } from '@storybook/react';
import {BackgroundColor, backgroundColorArr} from './BackgroundColor';

const BgColorComponent = () => {
  return (
    <div className="flex flex-row space-x-5">
    {
      backgroundColorArr.map((item: BackgroundColor) => (
        <div>
          <p>{item}</p>
          <div className={[item, 'border-r-2 w-20 h-20 border-2'].join(' ')} />
        </div>
      ))
    }
    </div>
  )
}

export default {
  title: 'Particles/Color',
  component: BgColorComponent,
} as ComponentMeta<typeof BgColorComponent>;

export const Background: ComponentStory<typeof BgColorComponent> = (args) => (
  <BgColorComponent />
);