type SVGImageProps = {
  children: JSX.Element | JSX.Element[];
  classNames?: string;
  w?: number;
  h?: number;
  [x: string]: any;
};

const SVGImage: React.FC<SVGImageProps> = ({ children, className, w = 6, h = 6, ...props }) => {
  return (
    <svg className={`${className} w-${w} h-${h}`} version='1.1' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' {...props} >
      {children}
    </svg>
  );
};

export default SVGImage;
