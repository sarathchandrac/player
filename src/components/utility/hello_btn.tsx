import PropTypes from 'prop-types';
import { FunctionComponent, MouseEventHandler } from 'react';

const HelloButton: FunctionComponent<{
  text: string;
  alrt?: MouseEventHandler<HTMLButtonElement>;
}> = ({ text, alrt }) => {
  return (
    <button onClick={alrt} className="inline px-1 m-5 bg-red-400  ">
      {text}
    </button>

    // <button
    //   onClick={alrt}
    //   className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
    // >
    //   {text}
    // </button>
  );
};
HelloButton.defaultProps = {
  text: 'Submit',
};
HelloButton.propTypes = {
  text: PropTypes.string.isRequired,
  alrt: PropTypes.func,
};

export default HelloButton;
