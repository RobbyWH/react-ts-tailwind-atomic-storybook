import {BackgroundColor} from '../../particles';
import UserProfile from '../../molecules/UserProfile';
import Image from '../../atoms/Image';
import Text from '../../atoms/Text';

export interface UserCardProps {
  /**
   * Array Based on Tailwind CSS
   */
  className?: Array<BackgroundColor>;
  /**
   * Name
   */
  name: string;
  /**
   * Posted At
   */
  postedAt?: string;
  /**
   * Name
   */
  imageSrc?: string;
}

const defaultClassName: Array<BackgroundColor> = ['bg-white'];

/**
 * Primary UI component for UserCard
 */
const UserCard = ({
  className = defaultClassName,
  name = '',
  postedAt = '',
  imageSrc
}: UserCardProps) => {
  return (
    <div className={['w-full', className].join(' ')}>
      <UserProfile name={name} postedAt={postedAt} />
      <Image src={imageSrc} />
      <Text label="This is for the testing purpose" />
    </div>
  );
};

export default UserCard;
