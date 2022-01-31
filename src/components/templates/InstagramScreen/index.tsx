import {UserCardProps} from '../../organisms/UserCard';
import UserCardList from '../../organisms/UserCardList';
import Header from '../../molecules/Header';

interface InstagramScreenProps {
  /**
   * Data
   */
  data: Array<UserCardProps>;

  headerTitle: string;
}

/**
 * Primary UI component for UserCardList
 */
const InstagramScreen = ({
  data = [],
  headerTitle,
}: InstagramScreenProps) => {
  return (
    <div>
      <Header title={headerTitle} />
      <UserCardList data={data} />
    </div>
  )
};

export default InstagramScreen;
