import clsx from 'clsx';
import PropTypes from 'prop-types';

const Container = ({ className, ...props }) => (
  <div
    className={clsx('mx-auto max-w-7xl px-4 sm:px-6 lg:px-8', className)}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  />
);

Container.defaultProps = {
  className: '',
};

Container.propTypes = {
  className: PropTypes.string,
};

export default Container;
