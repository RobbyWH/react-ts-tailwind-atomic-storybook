import {UserCardProps} from '../../organisms/UserCard';
import InstagramScreen from '../../templates/InstagramScreen';

interface InstagramScreenProps {
  /**
   * Data
   */
  data: Array<UserCardProps>;

  headerTitle: string;
}

/**
 * Primary UI component for InstagramPage
 */
const InstagramPage = ({
  data = [],
  headerTitle,
}: InstagramScreenProps) => {
  return (
    <InstagramScreen data={data} headerTitle={headerTitle} />
  )
};

export default InstagramPage;
