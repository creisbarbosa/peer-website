import { styled } from "..";

export const SliderContainer = styled('main', {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  minHeight: '156px',
  maxWidth: 'calc(100vw - ((100vw - 1170px)/2))',
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
    fontSize: '14px',
    lineHeight: '18px',
    letterSpacing: '-0.02em',
    textDecoration: 'none',
    color: '$slate500',

    transition: 'filter 0.3s ease-in-out',

    '&:hover': {
      filter: 'brightness(1.4)',
    }
  }
})