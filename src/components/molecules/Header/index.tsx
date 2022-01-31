import {BackgroundColor} from '../../particles';
import Icon from '../../atoms/Icon';
import Text from '../../atoms/Text';

interface TextProps {
  /**
   * Array Based on Tailwind CSS
   */
  className?: Array<BackgroundColor>;
  /**
   * Header Title
   */
  title: string;
}

const defaultClassName: Array<BackgroundColor> = ['bg-blue'];

/**
 * Primary UI component for Text
 */
const Header = ({
  className = defaultClassName,
  title,
}: TextProps) => {
  return (
    <div className={['p-5 flex flex-row w-full', className].join(' ')}>
      <div>
        <Icon name="MdKeyboardBackspace" className={'text-white'}/>
      </div>
      <div className="flex-1 text-center">
        <Text label={title} className={['text-lg', 'text-white']}/>
      </div>
    </div>
  );
};

export default Header;
