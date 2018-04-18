// Breakpoints in px
const BP_TINY = 350;
const BP_XS = 400;
const BP_TABLET = 668;
const BP_DESKTOP = 960;
const BP_WIDE = 1200;
const BP_EXTRAWIDE = 1400;

module.exports = {
  almostWhite: '#f7f1eb',
  beige: '#f2ece6',
  orange: '#ef5a47',
  orange_darken10: '#d6412e',
  navy: '#10363f',
  blue: '#35647e',
  grey: '#b2aeaa',
  lightGrey: '#d4cec9',
  lighterGrey: '#e2dcd6',
  lightestGrey: '#ede7e1',
  yellow: '#f0c26d',

  tinyUp: `all and (min-width: ${BP_TINY / 16}em)`,
  xs_small: `all and (min-width: ${BP_XS / 16}em) and (max-width: ${(BP_TABLET -
    1) /
    16}em)`,
  smallOnly: `all and (max-width: ${(BP_TABLET - 1) / 16}em)`,
  tablet: `all and (min-width: ${BP_TABLET / 16}em)`,
  tabletOnly: `all and (min-width: ${BP_TABLET /
    16}em) and (max-width: ${(BP_DESKTOP - 1) / 16}em)`,
  tabletDown: `all and (max-width: ${(BP_DESKTOP - 1) / 16}em)`,
  desktop: `all and (min-width: ${BP_DESKTOP / 16}em)`,
  wide: `all and (min-width: ${BP_WIDE / 16}em)`,
  extraWide: `all and (min-width: ${BP_EXTRAWIDE / 16}em)`,

  // Media Queries with both a MIN and a MAX width (for targeting a specific range)
  desktop_wide: `all and (min-width: ${BP_DESKTOP /
    16}em) and (max-width: ${(BP_WIDE - 1) / 16}em)`,
  wide_extraWide: `all and (min-width: ${BP_WIDE /
    16}em) and (max-width: ${(BP_EXTRAWIDE - 1) / 16}em)`,
};
