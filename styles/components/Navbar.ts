import { styled } from "..";

export const Container = styled('nav', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  boxSizing: 'border-box',
  width: '100%',
  padding: '0 4rem',
  minHeight: '80px',

  borderBottom: '1px solid $stroke40',
  backgroundColor: '$slate200',

  ul: {
    display: 'flex',
  },

  li: {
    listStyle: 'none',

    transition: 'all 0.3s',

    '&:hover': {
      backgroundColor: '$white20',
    },
  },

  a: {
    display: 'flex',
    alignItems: 'center',
    height: '48px',
    padding: '0.75rem',
    fontWeight: 400,
    fontSize: '0.75rem',
    color: '$blue500',
    textDecoration: 'none',
  },

  '@lg': {
    padding: '0 3rem',
    a: {
      fontSize: '0.875rem',
    },
  },

  '@xl': {
    padding: '0 3rem',
    a: {
      fontSize: '1rem',
      padding: '0.75rem',
    },
  },
})

export const ButtonContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: 16,
})