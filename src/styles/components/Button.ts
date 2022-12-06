import { styled } from "..";

export const Button = styled('button', {
  boxSizing: "border-box",
  borderRadius: 8,
  fontWeight: 700,
  fontSize: 14,
  lineHeight: '16px',
  padding: "12px 24px",
  maxWidth: '16rem',
  cursor: 'pointer',

  variants: {
    color: {
      red: {
        backgroundColor: '$red700',
        border: '1px solid $white20',
        color: '$red50',
      },
      blue: {
        backgroundColor: "$blue500",
        border: '1px solid $white40',
        color: "$blue50",
      },
      white: {
        backgroundColor: "$blue50",
        border: '1px solid $stroke40',
        color: "$blue500",
      }
    },
  },

  transition: 'all 0.3s',

  '&:hover': {
    filter: 'brightness(1.2)'
  }
})

export const IconButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',

  backgroundColor: "$blue50",
  border: '1px solid $stroke40',
  color: "$blue500",
  
  fontWeight: 700,
  fontSize: 14,
  lineHeight: 0,

  borderRadius: 8,
  padding: "11px 12px",
  marginLeft: '1rem',
  cursor: 'pointer',

  transition: 'all 0.3s',

  '&:hover': {
    filter: 'brightness(1.1)'
  }
})