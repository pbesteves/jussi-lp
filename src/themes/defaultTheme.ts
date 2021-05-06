export type DefaultThemeType = {
  colors: {
    white: string;
    black: string;
    jussiGreen: string;
    gray: string;
    darkGray: string;
    jussiPink: string;
  };
  fonts: Array<string>;
  fontSizes: {
    small: string;
    regular: string;
    medium: string;
    large: string;
  };
  fontWeights: {
    regular: number;
    bold: number;
  };
  borderRadius: {
    xxs: string;
    xs: string;
    small: string;
    large: string;
  };
  boxShadows: {
    large: string;
  };
};

const DefaultTheme: DefaultThemeType = {
  colors: {
    white: "hsl(100, 100%, 100%)",
    black: "hsl(0, 0%, 0%)",
    gray: "hsl(0, 0%, 95%)",
    darkGray: "hsl(0, 0%, 36%)",
    jussiGreen: "hsl(159, 100%, 51%)",
    jussiPink: "hsl(330, 89%, 49%)",
  },
  fonts: ["Barlow"],
  fontSizes: {
    small: "0.75rem",
    regular: "1rem",
    medium: "2rem",
    large: "4rem",
  },
  fontWeights: {
    regular: 500,
    bold: 700,
  },
  borderRadius: {
    xxs: "0.25rem",
    xs: "0.375rem",
    small: "0.5rem",
    large: "1.5rem",
  },
  boxShadows: {
    large: "0px 32px 32px rgba(0, 0, 0, 0.25)",
  },
};

export default DefaultTheme;
