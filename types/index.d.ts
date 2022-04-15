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
  userSbmtButton?: boolean;
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

/************************
 * Theme type definitions
 *
 */
interface ITheme {
  /**
   * top panel in Safari mobile use #color
   */
  metaThemeColor: string;
  logoRoboWebColor?: string;
  /**
   * Logo color in tailwind notation
   */
  logo: string;
  styles: {
    buttons: string;
  };

  bg: ThemeSection;
  text: ThemeSection;
  borders: ThemeSection;
}

type Color = {
  main?: string;
  s1?: string;
  s2?: string;
  hover?: string;
  active?: string;
  buttons?: string;
};
type ThemeSection = {
  header: {
    color: Color;
  };
  sections: {
    [key: string]: {
      color: Color;
    };
  };
  contacts: {
    color: Color;
  };
  footer: {
    color: Color;
  };
};

/**
 * App type definitions
 */
interface IApp {
  url: string;
  /**
   * User logo component name
   */
  logo?: string;
  /**
   * User logo component sizes
   */
  logoUserSizes?: {
    w: number;
    h: number;
  };
  api: {
    email: string;
  };
  contacts: {
    phones: string[];
    emails: string[];
    addresses: Address[];
    workingHoars: string[];
  };
  menu: Imenu;
  content: {
    template: Section[];
  };
}
type Address = {
  title: string | string[];
  value: string;
  iframe: string;
};

type Button = {
  link: string;
  buttonText: string;
  pseudo?: boolean;
};

type SectionBlock = {
  title?: string | string[];
  text?: string | string[];
  flag?: string;
  buttons?: Button[];
};

type Section = {
  model: string;
  id?: string;
  title?: string | string[];
  subTitle?: string | string[];
  text?: string | string[];
  price?: string | string[];
  blocks?: SectionBlock[];
  images?: string[] | string;
  buttons?: Button[];
  // [Symbol.iterator]();
};

// missing declarations
//
declare module 'react-scroll';
