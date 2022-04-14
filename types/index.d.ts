// Form type definitions
//
type RegFormUserData = {
  name: string;
  email: string;
  password: string;
  passwordR: string;
};
type LoginFormUserData = {
  email: string;
  password: string;
};
interface IFormProps {
  className?: string;
  buttonText?: string;
  redirectButton?: Button;
  onSubmit: (input: any) => Promise<void>;
}
interface IFormWrapperProps {
  children?: JSX.Element[];
  className?: string;
  buttonText?: string;
  redirectButton?: Button;
  onSubmit: (e: React.FormEvent) => Promise<void>;
}

// Head type definitions
//
interface IHeadMeta {
  /**
   * Page title meta tag
   */
  title: string;
  meta: [
    {
      name: 'keywords';
      content: string;
    },
    {
      name: 'description';
      content: string;
    }
  ];
}

// Menu type definitions
//
interface IMenu extends Array<string[]> {}

// Theme type definitions
//
interface ITheme {
  /**
   * top panel in Safari mobile
   */
  metaThemeColor: string;
  /**
   * Logo color in tailwind notation
   */
  logo: string;
  bg: {
    header: string;
    headerHoverLink: string;
  };
  text: {
    header: {
      color: string;
      hover: string;
      active: string;
      buttons: string;
    };
  };
}

// app.json type definitions
//
type Address = {
  title: string | string[];
  value: string;
  iframe: string;
};

type Button = {
  link: string;
  buttonText: string;
};

interface IButtons extends Array<Button> {}

type SectionBlock = {
  title?: string | string[];
  text?: string | string[];
  flag?: string;
  buttons?: Array<IButtons>;
};

type Section = {
  model: string;
  id?: string;
  title?: string | string[];
  blocks?: Array<SectionBlock>;
  text?: string | string[];
  images?: string[];
};
interface IApp {
  url: string;
  /**
   * User logo component
   */
  logo?: string;
  /**
   * User logo component sizes
   */
  logoUserSizes?: {
    w: number;
    h: number;
  };
  contacts: {
    phones: string[];
    addresses: Array<Address>;
  };
  menu: Imenu;
  content: {
    template: Array<Section>;
  };
}

// missing declarations
//
declare module 'react-scroll';
