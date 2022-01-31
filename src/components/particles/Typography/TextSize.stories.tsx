import { ComponentStory, ComponentMeta } from '@storybook/react';
import {TextSize, textSizeArr} from './TextSize';

const TextSizeComponent = () => {
  return (
    <>
    {
      textSizeArr.map((item: TextSize) => (
        <div className="m-5">
          <p className={item}>{item}</p>
        </div>
      ))
    }
    </>
  )
}

export default {
  title: 'Particles/Typography',
  component: TextSizeComponent,
} as ComponentMeta<typeof TextSizeComponent>;

export const FontSize: ComponentStory<typeof TextSizeComponent> = (args) => (
  <TextSizeComponent />
);