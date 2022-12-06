import { globalCss } from ".";

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSixing: 'border-box',
  },

  body: {
    backgroundColor: '$blue50',
    '-webkit-font-smoothing': 'antialiased',
  },

  'body, input, button, textarea': {
    fontFamily: 'Inter',
    color: '$blue600',
    fontWeight: 400,
  },

  h1: {
    fontWeight: 700,
    fontSize: 68,
    lineHeight: '100%',
    letterSpacing: '-0.02em',
    color: '$blue600',
  },

  'h1, h2, h3': {
    fontFamily: 'Space Grotesk',
  },
})