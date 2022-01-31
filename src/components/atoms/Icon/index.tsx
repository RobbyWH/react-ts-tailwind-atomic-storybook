import { MdKeyboardBackspace, MdRefresh, MdOutlineFavoriteBorder, MdOutlineChatBubbleOutline } from "react-icons/md";
import {TextColor} from '../../particles/Color/TextColor';
export const iconNameArr = ['MdKeyboardBackspace', 'MdRefresh', 'MdOutlineFavoriteBorder', 'MdOutlineChatBubbleOutline'] as const;
export type IconName =  typeof iconNameArr[number];

interface IconProps {
  /**
   * Icon Name
   */
  name: IconName;
  /**
   * Based on Tailwind CSS
   */
  className?: TextColor;
}

/**
 * Primary UI component for Icon
 */
const Icon = ({name, className = 'text-black'}: IconProps) => {
  const classNames = ["h-5 w-5 align-middle inline-block", className].join(' ');
  const icon = {
    ['MdKeyboardBackspace']: <MdKeyboardBackspace className={classNames} />,
    ['MdRefresh']: <MdRefresh className={classNames} />,
    ['MdOutlineFavoriteBorder']: <MdOutlineFavoriteBorder className={classNames} />,
    ['MdOutlineChatBubbleOutline']: <MdOutlineChatBubbleOutline className={classNames} />,
  }
  return icon[name];
};

export default Icon;
