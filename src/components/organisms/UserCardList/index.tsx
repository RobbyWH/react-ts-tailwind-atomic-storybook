import {BackgroundColor} from '../../particles';
import UserCard, {UserCardProps} from '../UserCard';

export interface UserCardListProps {
  /**
   * Data
   */
  data: Array<UserCardProps>;
}

/**
 * Primary UI component for UserCardList
 */
const UserCardList = ({
  data = [],
}: UserCardListProps) => {
  return (
    <div className="bg-gray p-5">
    {
      data.map((item: UserCardProps) => (
        <div className="mb-5">
          <UserCard name={item.name} imageSrc={item.imageSrc} />
        </div>
      ))
    }
    </div>
  )
};

export default UserCardList;
