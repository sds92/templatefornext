import { SVGImage } from './Svg';
export const Roboweb = ({ w = 6, h = 6, ...props }) => {
  return (
    <SVGImage
      viewBox='0 0 512 512'
      fill={props.fill || 'white'}
      stroke={props.stroke || 'currentColor'}
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d='M64.18 393.85V207.14c0-36.87 26.41-65.65 62.73-65.65h256.72c34.23 0 62.51 26.38 62.51 60.45-.09 93.85 0 189.02 0 282.86-6.51-3.44-11.39-7.58-17.9-11.57-6.79-4.15-11.26-7.65-17.65-11.52-7.75-4.69-48.06-2.22-57.59-2.22-17.78 0-223.88 1.34-235.76-.55-30.29-4.82-53.06-30.29-53.06-65.09zm403.72-38.24v-89.75h19.04v95.19h-14.96c-2.72 0-4.08-2.72-4.08-5.44zm-444.56-94.5H42.3v94.81H23.34v-94.81zM256.73 21.88c26.8 0 25.93 37.93 0 37.93-23.75 0-23.75-37.93 0-37.93zm-40.85 18.96c0 18.36 14.4 38.04 30.64 39.39v39.38H121.07c-40.27 0-78.77 38.05-78.77 80.23v39.38H20.42c-8.94 0-18.96 10.02-18.96 18.97v100.65c0 21.86 28.51 18.96 40.84 18.96v21.88c0 37.9 25.34 65.8 53.08 76.74 21.01 8.29 97.12 4.95 124.88 4.95h161.92c23.45-.07 19.61 2.35 46.39 19.25 11.16 7.04 15.73 11.38 26.54 11.38 7.87 0 12.79-7.59 12.79-14.96V381.45c15.53 0 42.64 4.17 42.64-24.07v-90.44c0-27.71-27.34-24.2-42.64-24.2 0-38.08 5.28-70.89-23.31-99.48-11.11-11.11-33.3-23.65-55.12-23.65H268.4V80.23c23.86-1.99 43.99-42.77 20.09-66.78C275.8.7 270.74.03 256.25 0h-3.9c-19.4 0-36.47 20.65-36.47 40.84zm110.86 256.73c0-30.47 30.87-21.31 31.66-4.2.35 7.55-5.89 15.02-13.47 16.48-3.4.65-8.59-.43-11.81-2.58-2.14-1.42-6.38-6.98-6.38-9.7zm-23.33-4.37c0 52.07 77.31 52.3 77.31 0 0-51.41-77.31-49-77.31 0zm-185.26 11.67c0 8.19 5.03 11.67 11.67 11.67 9.91 0 8.98-5.49 11.11-13.69 4.09-15.72 19.98-14.96 27.15-8.53 2.83 2.54 3.4 4.26 4.4 8.74 2.36 10.54.87 13.48 14.23 13.48 17.37 0 8.6-49.6-29.17-49.6-21.73 0-39.39 16.64-39.39 37.93zm97.73 86.06c0 53.5 75.86 50.19 75.86 1.46 0-7.06-4.62-11.67-11.67-11.67-18.01 0-5.03 27.1-26.26 27.1-20.87 0-9.53-27.1-26.26-27.1-6.24 0-11.67 4.49-11.67 10.21z' />
    </SVGImage>
  );
};
export const Belplit24 = ({ w = 6, h = 6, ...props }) => {
  return (
    <SVGImage
      viewBox='0 0 512 512'
      fill={props.fill || 'red'}
      stroke={props.stroke || 'currentColor'}
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
       <path
        d="M0 256l256 256 28.44-28.44L56.89 256 284.44 28.44 256 0 0 256zM284.44 85.33l85.34 85.34 28.44-28.45-85.33-85.33-28.45 28.44zm-56.88 56.89l85.33 85.34 28.44-28.45L256 113.78l-28.44 28.44zm-56.89 56.89l199.11 199.11 28.44-28.44-199.11-199.11-28.44 28.44zM113.78 256l199.11 199.11 28.44-28.44-199.11-199.11L113.78 256zm227.55 0l85.34 85.33L512 256l-85.33-85.33L341.33 256z"
        fill="red"
      />
    </SVGImage>
  );
};
export const ChevronDown = ({ w = 6, h = 6, ...props }) => {
  return (
    <SVGImage
      viewBox='0 0 24 24'
      fill='none'
      stroke={props.stroke || 'currentColor'}
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />;
    </SVGImage>
  );
};
export const Menu = ({ w = 6, h = 6, ...props }) => {
  return (
    <SVGImage
      viewBox='0 0 24 24'
      fill='none'
      stroke={props.stroke || 'currentColor'}
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      {/* <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /> */}

      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
    </SVGImage>
  );
};

export const Close = ({ w = 6, h = 6, ...props }) => {
  return (
    <SVGImage
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke={props.stroke || 'currentColor'}
      {...props}
    >
      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
    </SVGImage>
  );
};

export const ChevronUp = ({ w = 6, h = 6, ...props }) => {
  return (
    <SVGImage
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke={props.stroke || 'currentColor'}
      {...props}
    >
      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 15l7-7 7 7' />
    </SVGImage>
  );
};

export const Location = ({ w = 6, h = 6, ...props }) => {
  return (
    <SVGImage
      xmlns='http://www.w3.org/2000/svg'
      fill={props.fill || 'currentColor'}
      viewBox='0 0 24 24'
      stroke={props.stroke || 'currentColor'}
      {...props}
    >
      <path
        fillRule='evenodd'
        d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
        clipRule='evenodd'
      />
    </SVGImage>
  );
};

export const Phone = ({ w = 6, h = 6, ...props }) => {
  return (
    <SVGImage
      xmlns='http://www.w3.org/2000/svg'
      fill={props.fill || 'currentColor'}
      viewBox='0 0 24 24'
      stroke={props.stroke || 'currentColor'}
      {...props}
    >
      <path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z' />
    </SVGImage>
  );
};

export const Mail = ({ w = 6, h = 6, ...props }) => {
  return (
    <SVGImage
      xmlns='http://www.w3.org/2000/svg'
      fill={props.fill || 'currentColor'}
      viewBox='0 0 24 24'
      stroke={props.stroke || 'currentColor'}
      {...props}
    >
      <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
      <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
    </SVGImage>
  );
};
export const Plus = ({ w = 6, h = 6, ...props }) => {
  return (
    <SVGImage
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke={props.stroke || 'currentColor'}
      {...props}
    >
      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 4v16m8-8H4' />
    </SVGImage>
  );
};
export const Minus = ({ w = 6, h = 6, ...props }) => {
  return (
    <SVGImage
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke={props.stroke || 'currentColor'}
      {...props}
    >
      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M20 12H4' />
    </SVGImage>
  );
};
export const Clock = ({ w = 6, h = 6, ...props }) => {
  return (
    <SVGImage
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke={props.stroke || 'currentColor'}
      {...props}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
      />
    </SVGImage>
  );
};

const Icons = {
  Clock,
  Minus,
  Plus,
  Mail,
  Phone,
  ChevronUp,
  ChevronDown,
  Menu,
  Close,
  Location,
  Belplit24,
  Roboweb
};

export default Icons;
