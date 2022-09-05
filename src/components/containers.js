import clsx from 'clsx';
import PropTypes from 'prop-types';

const BoxContainer = ({ className, ...props }) => (
  <div
    className={clsx('mx-auto max-w-7xl px-2 lg:px-6 xl:px-8', className)}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  />
);

const FullContainer = ({ className, ...props }) => (
  <div
    className={clsx('mx-auto w-full px-2 lg:px-6 xl:px-8', className)}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  />
);

BoxContainer.defaultProps = {
  className: '',
};

BoxContainer.propTypes = {
  className: PropTypes.string,
};

FullContainer.defaultProps = {
  className: '',
};

FullContainer.propTypes = {
  className: PropTypes.string,
};

export { BoxContainer, FullContainer };
