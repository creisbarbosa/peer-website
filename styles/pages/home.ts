import { styled } from "..";

import LandingImage from "../../src/assets/img/SectionImage01.png";
import DrillingImg from "../../src/assets/img/Machining01.png";
import PackageImg from "../../src/assets/img/Image02.png";
import CADImg from "../../src/assets/img/CADSection_bg.png";
import ConnectedBgImg01 from "../../src/assets/img/connected_bg_1.png";
import ConnectedBgImg02 from "../../src/assets/img/connected_bg_2.png";

export const LandingSection = styled('div', {
  backgroundImage: `url(${LandingImage.src})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '4rem 0px',
  borderBottom: '1px solid $stroke40',
  width: '100%',
});

export const ContentDiv = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '32px',
  width: '74rem',

  h1: {
    maxWidth: '40rem',
  },

  p: {
    maxWidth: '28rem',
  }
});

export const BasicForms = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: '1.5rem',

  '& svg' : {
    fill: "$slate300"
  }
});

export const ConnectedMachiningSection = styled('section', {
  padding: '4rem 0rem',
  width: '100%',
  borderBottom: '1px solid $stroke40',

  main: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    alignItems: 'center',

    '.header': {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '74rem',
    gap: 16,

    h2: {
      fontSize: '3rem',
      lineHeight: '3.75rem',
      letterSpacing: '-0.02em',
    },

    p: {
      maxWidth: '70%',
    }
  },

  '.cardsContainer': {
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '74rem',
      gap: 24,

    '.secondCardWrapper': {
      display: 'grid',
      gridTemplateColumns: '25% 75%',
      minHeight: '256px',

      '.imageCard': {
        maxHeight: '256px',
        backgroundImage: `url(${PackageImg.src})`,
        backgroundSize: 'cover',
        marginRight: 24,
        borderRadius: 20,
      },
      '.card': {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        backgroundImage: `url(${ConnectedBgImg02.src})`,
        backgroundSize: 'cover',
        backgroundColor: '$green700',
        color: '$blue50',
        padding: 32,
        borderRadius: 20,
        gap: 54,

        '.cardHeader': {
          display: 'flex',
          flexDirection: 'column',
          gap: 10,

          strong: {
            fontWeight: '500',
            fontSize: '1rem',
          },
          h2: {
            fontSize: '2.5rem',
          },
          
        },

        '.content': {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          justifyContent: 'space-between',

          p: {
            fontWeight: '400',
            fontSize: '1rem',
            lineHeight: '1.5rem',
          },
        },
      },
    },
    '.thirdCardWrapper': {
      display: 'grid',
      gridTemplateColumns: '75% 25%',
      minHeight: '256px',

      '.imageCard': {
        backgroundImage: `url(${DrillingImg.src})`,
        backgroundSize: 'cover',
        maxHeight: '256px',
        marginLeft: 24,
        borderRadius: 20,
      },
      '.card': {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        backgroundImage: `url(${ConnectedBgImg01.src})`,
        backgroundSize: 'cover',
        backgroundColor: '$blue400',
        color: '$blue50',
        padding: 32,
        borderRadius: 20,
        gap: 54,

        '.cardHeader': {
          display: 'flex',
          flexDirection: 'column',
          gap: 10,

          strong: {
            fontWeight: '500',
            fontSize: '1rem',
          },
          h2: {
            fontSize: '2.5rem',
          },
          
        },

        '.content': {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          justifyContent: 'space-between',

          p: {
            fontWeight: '400',
            fontSize: '1rem',
            lineHeight: '1.5rem',
          },
        },
      },
    },
  },
  },
  

});

export const OperationSection = styled('section',{
  padding: '6rem 0',
  borderBottom: '1px solid $stroke40',
  borderTop: '1px solid $stroke40',
  backgroundImage: 'linear-gradient(90deg, $slate200 40%, #FFFFFF 100%)',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  
  '.operationWrapper': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 40,
    maxWidth: '74rem',

    '.operationHeader': {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      maxWidth: '70%',
  
      h2: {
        fontSize: '3rem',
        lineHeight: '3.75rem',
        letterSpacing: '-0.02em',
      },
  
      hr: {
        maxWidth: '10rem',
        height: 4,
        backgroundColor: '$red600',
        border: 'none',
        borderRadius: 4,
      },

    },

  },

  '.operationCards':{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: 24,

    article: {
      display: 'flex',
      flexDirection: 'column',
      gap: 32,
      backgroundColor: '$white',
      boxShadow: '4px 4px 16px rgba(0, 67, 127, 0.15)',
      borderRadius: 20,
      padding: 32,

      div: {
        display: 'flex',
        flexDirection: 'row',
        gap: 16,
      },

      h2: {
        lineHeight: '1.25rem',
        letterSpacing: '-0.02em',
      },

      p: {
        fontWeight: '400',
        fontSize: '1rem',
        lineHeight: '1.375rem',
        letterSpacing: '-0.02em',
      },
    },
  },
});

export const CADSection = styled('section', {
  display: 'flex',
  justifyContent: 'center',
  padding: '6rem 0',
  width: '100%',
  borderBottom: '1px solid $stroke40',

  div:{
    backgroundImage: `url(${CADImg.src})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',

    borderRadius: 16,
    color: '$white',
    padding: '4rem',
    maxWidth: '67rem',

    display: 'flex',
    flexDirection: 'column',
    gap: 32,
    alignItems: 'flex-end',

    h2: {
      padding: '0 9.9rem',
      fontWeight: '700',
      fontSize: '40px',
      lineHeight: '110%',
      textAlign: 'center',
    },

    p: {
      fontWeight: '500',
      fontSize: '1rem',
      lineHeight: '1.5rem',
    }
  }
});

export const NumbersSection = styled('section', {
  padding: '6rem 0',
  borderBottom: '1px solid $stroke40',
  backgroundImage: 'linear-gradient(90deg, $slate200 40%, #FFFFFF 100%)',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',

  '.numbersWrapper': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 40,
    maxWidth: '74rem',

    '.numbersHeader': {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      maxWidth: '70%',
  
      h2: {
        fontSize: '3rem',
        lineHeight: '3.75rem',
        letterSpacing: '-0.02em',
      },
  
      hr: {
        maxWidth: '10rem',
        height: 4,
        backgroundColor: '$red600',
        border: 'none',
        borderRadius: 4,
      },

      p: {
        maxWidth: '40rem',
      },
    },

    '.numbersCards': {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 24,

      '.numbersCardsInfo': {
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        backgroundColor: '$white',
        boxShadow: '4px 4px 16px rgba(0, 67, 127, 0.15)',
        borderRadius: 20,
        padding: '2rem',
        
        div: {
          display: 'flex',
          flexDirection: 'row',
          gap: '1rem',

          h2: {
            fontSize: 64,
          },
        },

        '.numbersInfo': {
          maxWidth: '60%',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: 0,
        },
      },
    },
    '.numbersCardsMachines': {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
      gap: 24,
      
      article: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem',
        backgroundColor: '$white',
        boxShadow: '4px 4px 16px rgba(0, 67, 127, 0.15)',
        borderRadius: 20,
        padding: '2rem',

        p: {
          textAlign: 'center',
        }
      }
    },
  },
});

export const PartnerBenefits = styled('section', {
  display: 'flex',
  flexDirection: 'row',
  padding: '8rem 9rem 8rem 0',
  gap: 120,
  maxWidth: '97rem',
  borderBottom: '1px solid $stroke40',

  '.partnerBenefitsImg': {

    img: {
      border: '1px solid $stroke40',
      borderLeftWidth: 0,
      borderRadius: '0 20px 20px 0',
      boxShadow: '4px 4px 16px rgba(0, 67, 127, 0.15)',
    },
  },

  '.partnerBenefitsContent': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: '2rem',

    h2: {
      fontSize: '3rem',
      lineHeight: '3.75rem',
      letterSpacing: '-0.02em',
    },

    hr: {
      width: '10rem',
      height: 4,
      backgroundColor: '$red600',
      border: 'none',
      borderRadius: 4,
    },

    '.paragraph': {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
    },

    '.benefitsCards': {
      display: 'flex',
      flexDirection: 'row',
      gap: '1.5rem',

      article: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-end',
        cursor: 'pointer',

        backgroundColor: '$blue50',
        border: '1px solid $stroke40',
        borderRadius: 20,

        padding: '1.5rem 1rem',

        boxShadow: '4px 4px 16px rgba(0, 67, 127, 0.15)',

        width: 144,

        transition: 'all 0.4s',

        '&:hover': {
          backgroundColor: '$blue600',

          strong: {
            color: '$blue50',
          },

          h3: {
            color: '$blue50',
          },
        },

        strong: {
          color: '$blue600', 
          fontWeight: '400',
          textAlign: 'right',

          '&:first-child': {
            color: '$slate400', 
          },
        },

        h3: {
          fontFamily: 'Space Grotesk',
          fontWeight: '700',
          fontSize: '48px',
          lineHeight: '61px',
          letterSpacing: '-0.02em',
        },
      },
    },
  },
});

export const VideoSection = styled('section', {
  padding: '8rem 0',
  borderBottom: '1px solid $stroke40',
  backgroundImage: 'linear-gradient(90deg, $slate200 40%, #FFFFFF 100%)',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '2rem',

  header: {
    display: 'flex',
    flexDirection: 'column',
    padding: 32,
    gap: 16,
    maxWidth: 552,

    hr: {
      width: '10rem',
      height: 2,
      backgroundColor: '$red600',
      border: 'none',
      borderRadius: 4,
    },

    h2: {
      fontSize: '2rem'
    },

    p: {
      lineHeight: '24px',
    },

    button: {
      maxWidth: '146px',
    },
  },

  iframe: {

    width: '552px',
    height: '311px',

    border: '1px solid $stroke40',
    borderRadius: '20px',
    boxShadow: '4px 4px 16px rgba(0, 67, 127, 0.15)',
  }
})

export const BlogSection = styled('section',{
  padding: '6rem 0',
  borderTop: '1px solid $stroke40',
  backgroundImage: 'linear-gradient(90deg, $slate200 40%, #FFFFFF 100%)',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  
  '.blogWrapper': {
    display: 'flex',
    justifyContent: 'center',
    gap: 40,
    maxWidth: '74rem',

    '.blogHeader': {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      maxWidth: '70%',
  
      h2: {
        fontSize: '3rem',
        lineHeight: '3.75rem',
        letterSpacing: '-0.02em',
      },
  
      hr: {
        maxWidth: '10rem',
        height: 4,
        backgroundColor: '$red600',
        border: 'none',
        borderRadius: 4,
      },

    },

  },

  '.blogCards':{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 24,
    
    article: {
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '$white',
      boxShadow: '4px 4px 16px rgba(0, 67, 127, 0.15)',
      border: '1px solid $stroke40',
      borderRadius: 20,

      '.content': {
        display: 'flex',
        flexDirection: 'column',
        padding: '32px',
        gap: 16,
      },

      h3: {
        lineHeight: '1.5rem',
        letterSpacing: '-0.02em',
      },

      strong: {
        fontSize: '0.75rem',
        fontWeight: '400',
        color: '$blue500',
      },

      p: {
        fontWeight: '400',
        fontSize: '1rem',
        lineHeight: '1.375rem',
        letterSpacing: '-0.02em',
      },

      button: {
        maxWidth: '135px',
      }
    },
  },
});