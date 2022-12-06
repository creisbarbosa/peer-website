import { styled } from "..";

import Background from "../../assets/img/Footer_bg.png"

export const FooterContainer = styled('footer', {
  display: 'flex',
  flexDirection: 'column',
  backgroundImage: `url(${Background.src})`,
  backgroundSize: 'cover',
  backgroundColor: '$blue700',
  width: '100%',

  '.header': {
    display: 'flex',
    flexDirection: 'row',
    gap: 24,
    borderBottom: '1px solid $white10',
    justifyContent: 'space-between',
    padding: '4rem 20rem',

    div: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem',
      padding: '0 5rem',
      maxWidth: '36rem',

      h2: {
        fontSize: '3rem',
        lineHeight: '3.25rem',
        color: '$blue50',
      },
      
      form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',

        input : {
          background: '$blue700',
          padding: '0.75rem 1rem',
          border: '1px solid $stroke40',
          borderRadius: 8,
          color: '$slate100',
        },

        button: {
          background: '$blue700',
          padding: '0.75rem 1rem',
          border: '1px solid $stroke40',
          borderRadius: 8,
          color: '$slate100',
          fontWeight: '700',
          cursor: 'pointer',

          '&:hover': {
            filter: 'brightness(1.2)',
          },
        },
      },
    },
  },

  '.links': {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '2rem',
    padding: '4rem 20rem',
    maxWidth: '74rem',
    borderBottom: '1px solid $white10',

    ul: {
      color: '$slate100',
      listStyleType: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',

      h3: {
        fontFamily: 'Inter, sans-serif',
      },

      li: {
        a: {
          textDecoration: 'none',
          color: '$slate100',
          fontWeight: '300',
        },
        '&:hover': {
          a: {
            color: '$blue300',
          },
        },
      },
    },
  },

  '.copyright': {
    display: 'flex',
    justifyContent: 'center',
    padding: '2rem 0',
    color: '$slate100',

    strong: {
      fontSize: '0.875rem',
      fontWeight: '400',

    },
  },

})