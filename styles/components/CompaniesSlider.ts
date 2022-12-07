import { styled } from "..";

export const SliderContainer = styled('main', {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  minHeight: '156px',
  marginLeft: 'auto',
  
  a : {
    height: '84px',
    
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    
    backgroundColor: '$white',
    borderRadius: '8px',
    boxShadow: '4px 4px 16px rgba(0, 67, 127, 0.15)',
    
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '0.75rem',
    lineHeight: '1rem',
    letterSpacing: '-0.02em',
    textDecoration: 'none',
    color: '$slate500',

    transition: 'filter 0.3s ease-in-out',

    '&:hover': {
      filter: 'brightness(1.4)',
    },
  },

  '@md': {
    maxWidth: 'calc(100vw - ((100vw - 56rem)/2))',
  },

  '@lg': {
    maxWidth: 'calc(100vw - ((100vw - 69rem)/2))',
  },

  '@xl': {
    maxWidth: 'calc(100vw - ((100vw - 74rem)/2))',
    a: {
      fontSize: '0.875rem',
      lineHeight: '1.135rem',
    },
  },

})