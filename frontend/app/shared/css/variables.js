// Breakpoints in px
const BP_TABLET = 768;
const BP_DESKTOP = 1400;

module.exports = {
  almostWhite: '#f2ece6',
  orange: '#ef5a47',
  navy: '#10363f',
  grey: '#b2aeaa',
  lightGrey: '#d4cec9',
  lighterGrey: '#e2dcd6',
  yellow: '#f0c26d',

  mobileOnly: `all and (max-width: ${(BP_TABLET - 1) / 16}em)`,
  tablet: `all and (min-width: ${BP_TABLET / 16}em)`,
  tabletOnly: `all and (min-width: ${BP_TABLET /
    16}em) and (max-width: ${(BP_DESKTOP - 1) / 16}em)`,
  tabletDown: `all and (max-width: ${(BP_DESKTOP - 1) / 16}em)`,
  desktop: `all and (min-width: ${BP_DESKTOP / 16}em)`,
};
