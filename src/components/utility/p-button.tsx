import { FunctionComponent } from 'react';

const PrimaryButton: FunctionComponent<{ text: string }> = ({ text }) => {
  return (
    <button className="text-white bg-green-500  hover:bg-green-700 font-semibold py-2 px-4 border border-green-500 hover:border-transparent rounded">
      {text}
    </button>
  );
};
PrimaryButton.defaultProps = {
  text: 'Submit',
};

export default PrimaryButton;
