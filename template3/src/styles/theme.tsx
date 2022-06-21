export const color = {
  // gray-scales
  black: '#000',
  dark: '#010606',
  light: '#eee',

  primary: '#4284ff',
  secondary: '#8c8d96',
  tertiary: '#757575',
  placeholder: '#BDBDBD',
  border: '#e0e2e7',
  background: '#f7f8fa',
  white: '#fff',

  // theme-colors
  blue: '#33C5EF',
  darkBlue: '#06ADDA',
  lightBlue: '#92DDF6',

  // other-colors
  red: '#FF617A',
};

export const mixins = {
  // flex
  flexBox: (direction = 'row', align = 'center', justify = 'center') => `
    display: flex;
    flex-direction: ${direction};
    align-items: ${align};
    justify-content: ${justify};
  `,

  // positions
  positionCenterX: (type = 'absolute') => {
    if (type === 'absolute' || type === 'fixed')
      return `
        position: ${type};
        left: 50%;
        transform: translateX(-50%);
      `;
    return;
  },

  positionCenterY: (type = 'absolute') => {
    if (type === 'absolute' || type === 'fixed')
      return `
        position: ${type};
        top: 50%;
        transform: translateY(-50%);
      `;
    return;
  },

  positionCenter: (type = 'absolute') => {
    if (type === 'absolute' || type === 'fixed')
      return `
        position: ${type};
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      `;
    return;
  },

  visuallyHidden: () => `
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    padding: 0 !important;
    margin: -1px !important;
    overflow: hidden !important;
    clip: rect(0, 0, 0, 0) !important;
    white-space: nowrap !important;
    border: 0 !important;
  `,
};

export const zIndex = {
  nav: 1,
  navComponent: 10,
  sidebarContainer: 999,
};

const maxWidth = {
  xs: '375px',
  sm: '768px',
  md: '960px',
  lg: '1024px',
};

export const breakpoint = {
  xs: `screen and (max-width: ${maxWidth.xs})`,
  sm: `screen and (max-width: ${maxWidth.sm})`,
  md: `screen and (max-width: ${maxWidth.md})`,
  lg: `screen and (max-width: ${maxWidth.lg})`,
};

