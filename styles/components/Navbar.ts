import { styled } from "..";

export const Container = styled('nav', {
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 64px',
  width: '100%',
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
    padding: '1rem',
    fontSize: 16,
    fontWeight: 400,
    color: '$blue500',
    textDecoration: 'none',
  }
})

export const ButtonContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: 16,
})