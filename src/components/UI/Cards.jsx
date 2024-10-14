import PropTypes from "prop-types";

export const Cards = ({ className, children, label }) => {
  return (
    <div
      className={`grid-container grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-4 ${className}`}
      aria-label={label}
    >
      {children}
    </div>
  );
};

Cards.propTypes = {
  className: PropTypes.string,
  children: PropTypes.element,
  label: PropTypes.string,
};
