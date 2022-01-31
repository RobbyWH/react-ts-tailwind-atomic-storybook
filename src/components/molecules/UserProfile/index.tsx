import {BackgroundColor} from '../../particles';
import Avatar from '../../atoms/Avatar';
import Text from '../../atoms/Text';

interface TextProps {
  /**
   * Array Based on Tailwind CSS
   */
  className?: Array<BackgroundColor>;
  /**
   * Name
   */
  name: string;
  /**
   * Name
   */
  postedAt?: string;
}

const defaultClassName: Array<BackgroundColor> = ['bg-white'];

/**
 * Primary UI component for UserProfile
 */
const UserProfile = ({
  className = defaultClassName,
  name = '',
  postedAt = ''
}: TextProps) => {
  return (
    <div className={['p-5 flex flex-row w-full', className].join(' ')}>
      <Avatar />
      <div className="flex-1 px-5">
        <Text label={name} className={['text-blue']}/>
      </div>
      <Text label={postedAt} className={['text-gray']}/>
    </div>
  );
};

export default UserProfile;
