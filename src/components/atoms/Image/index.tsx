
interface ImageProps {
  /**
   * String URL
   */
  src?: string;
}

/**
 * Primary UI component for Avatar
 */
const Image = ({src = 'https://via.placeholder.com/50'}: ImageProps) => {
  return (
    <img
      className="w-full object-contain"
      src={src}
      alt="" />
  )
};

export default Image;
