import Proptypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <div>
      <h1>{title}</h1>
      {children}
    </div>
  );
};

export default Section;

Section.propTypes = {
  title: Proptypes.string.isRequired,
};
