import {TextColor, TextSize} from '../../particles';

interface TextProps {
  /**
   * Array Based on Tailwind CSS
   */
  className?: Array<TextColor | TextSize>;
  /**
   * Text contents
   */
  label: string;
  /**
   * Test Id
   */
  testId?: string;
}

const defaultClassName: Array<TextColor | TextSize> = ['text-base', 'text-black']

/**
 * Primary UI component for Text
 */
const Text = ({
  className = defaultClassName,
  label,
  testId,
}: TextProps) => {
  return (
    <p
      data-testid={testId}
      className={[...className].join(' ')}
    >
      {label}
    </p>
  );
};

export default Text;
