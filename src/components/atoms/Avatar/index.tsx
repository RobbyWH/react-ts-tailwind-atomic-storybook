
interface AvatarProps {
  /**
   * String URL
   */
  src?: string;
}

/**
 * Primary UI component for Avatar
 */
const Avatar = ({src = 'https://via.placeholder.com/150'}: AvatarProps) => {
  return (
    <img
      className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
      src={src}
      alt="" />
  )
};

export default Avatar;
