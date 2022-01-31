import { ComponentStory, ComponentMeta } from '@storybook/react';
import {TextColor, textColorArr} from './TextColor';

const TextColorComponent = () => {
  return (
    <>
    {
      textColorArr.map((item: TextColor) => (
        <div className="m-5">
          <p className={item}>{item}</p>
        </div>
      ))
    }
    </>
  )
}

export default {
  title: 'Particles/Color',
  component: TextColorComponent,
} as ComponentMeta<typeof TextColorComponent>;

export const Text: ComponentStory<typeof TextColorComponent> = (args) => (
  <TextColorComponent />
);