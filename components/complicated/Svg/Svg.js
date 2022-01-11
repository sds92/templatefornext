export const SVGImage = ({ children, extraClasses, ...props }) => {
  return (
    <svg className={`${extraClasses}`} {...props}>
      {children}
    </svg>
  );
};
