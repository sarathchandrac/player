import { FunctionComponent } from 'react';
import PropTypes from 'prop-types';
import Button from '../utility/_button';
import PrimaryButton from '../utility/p-button';
const Header: FunctionComponent<{ title: string }> = ({ title }) => {
  return (
    <header>
      <span className="cy=2">Task Tracker </span>
      <PrimaryButton text="Sum"></PrimaryButton>
    </header>
  );
};

Header.defaultProps = {
  title: 'Task Tracker',
};
Header.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Header;
