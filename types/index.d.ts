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
  bg: {
    header: {
      color: Color;
    };
    sections: {
      [key: string]: {
        color: Color;
      };
    };
    footer: {
      color: Color;
    }
  };
  text: {
    header: {
      color: Color;
    };
    sections: {
      [key: string]: {
        color: Color;
      };
    };
    footer: {
      color: Color;
    }
  };
  borders: {
    header: {
      color: Color;
    };
    sections: {
      [key: string]: {
        color: Color;
      };
    };
    footer: {
      color: Color;
    }
  };
}

type Color = {
  main?: string;
  s1?: string;
  s2?: string;
  hover?: string;
  active?: string;
  buttons?: string;
};

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
  
  contacts: {
    phones: string[];
    addresses: Address[];
  };
  menu: Imenu;
  content: {
    template: Section[];
  };
}


// missing declarations
//
declare module 'react-scroll';
