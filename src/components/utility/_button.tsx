import { FunctionComponent } from 'react';
import PropTypes from 'prop-types';
const tasks = [
  { id: 1, text: 'One', day: 'Mar 12 at 1:30pm', remainder: true },
  { id: 2, text: 'Two', day: 'Mar 13 at 1:30pm', remainder: false },
  { id: 3, text: 'Three', day: 'Mar 14 at 1:30pm', remainder: false },
];
const Button: FunctionComponent<{ text: string; onClick: any }> = ({
  text,
  onClick,
}) => {
  return (
    <button
      className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      onClick={onClick}
    >
      {text}
    </button>
  );
};
Button.defaultProps = {
  text: 'Submit',
};
Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
