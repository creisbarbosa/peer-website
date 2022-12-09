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
  justifyContent: 'center',
  borderBottom: '1px solid $stroke40',
  width: '100%',
  
  '.contentDiv': {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    
    padding: '2rem',
    width: '100%',
    
    backdropFilter: 'blur(px) brightness(1.2)',

    h1: {
      fontSize: '2.5rem'
    },

    h2: {
      color: '$red800',
      lineHeight: '1.75rem',
    },
    
    p: {
      fontSize: '1rem',
      lineHeight: '1.4rem',
    },

  },

  '.basicForms': {
    display: 'flex',
    flexDirection: 'row',
    gap: '1rem',
  
    img : {
      height: '24px',
      width: '62px',

      '&:first-child': {
        width: '24px'
      },
    },
  },

  '@sm': {
    '.contentDiv': {
      padding: '2rem',
      width: '100%',
      backdropFilter: 'blur(0px) brightness(1.1)',

      h1: {
        maxWidth: '25rem',
      },

      p: {
        maxWidth: '30rem',
      },

    },
  },

  '@md': {
    
    '.contentDiv': {
      padding: '4rem',
      width: '85%',
      backdropFilter: 'blur(0px)',

      h1: {
        fontSize: '4rem',
        maxWidth: '37rem',
      },

      p: {
        maxWidth: '30rem',
      },

    },

    '.basicForms': {
      gap: '2rem',
      
      img : {
        height: '42px',
        width: '116px',
  
        '&:first-child': {
          width: '42px'
        },
      },
    },
  },

  '@lg': {
    '.contentDiv': {
      padding: '6rem 9rem',
      width: '80%',
      backdropFilter: 'blur(0px) brightness(1)',
    },
  },

  '@xl': {
    '.contentDiv': {
      padding: '6rem 9.74rem',
      width: '78%',
      maxWidth: '75rem',
    },
  },
});

export const OperationSection = styled('section',{
  display: 'flex',
  justifyContent: 'center',

  borderBottom: '1px solid $stroke40',
  borderTop: '1px solid $stroke40',

  backgroundImage: 'linear-gradient(90deg, $slate200 40%, #FFFFFF 100%)',
  width: '100%',
  
  '.operationWrapper': {
    display: 'flex',
    flexDirection: 'column',
    padding: '2rem',
    gap: 40,

    '.operationHeader': {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
  
      h2: {
        fontSize: '1.875rem',
        lineHeight: '2.375rem',
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
        fontSize: '0.875rem',
        lineHeight: '1.375rem',
        letterSpacing: '-0.02em',
      },
    },

    '.operationCards':{
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
  
      article: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1.25rem',
        backgroundColor: '$white',
        boxShadow: '4px 4px 16px rgba(0, 67, 127, 0.15)',
        borderRadius: 20,
        padding: '1.25rem',
  
        div: {
          display: 'flex',
          flexDirection: 'row',
          gap: '1rem',
        },
  
        h2: {
          lineHeight: '1.25rem',
          letterSpacing: '-0.02em',
        },
  
        p: {
          fontWeight: '400',
          fontSize: '0.875rem',
          lineHeight: '1.35rem',
          letterSpacing: '-0.02em',
        },
      },
    },
  },


  '@md': {
    '.operationWrapper': {
      padding: '4rem',
      width: '85%',

      '.operationHeader': {
        maxWidth: '70%',
      },

      '.operationCards': {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr', 
        gap: '1.5rem',

      },
    },
  },

  '@lg': {
    '.operationWrapper': {
      width: '78%',

      '.operationHeader':{
        h2: {
          fontSize: '3rem',
        },
  
        p: {
          fontSize: '1rem',
          lineHeight: '1.5rem',
        },
      },

      '.operationCards': {
        article: {
          padding: '2rem',
          gap: '1.5rem',
          p: {
            fontSize: '1rem',
            lineHeight: '1.5rem',
          },
      },
      },
    },
  },

  '@xl': {
    '.operationWrapper': {
      padding: '6rem',
      width: '78%',
      maxWidth: '75rem',

      article: {
        p: {
          fontSize: '1rem',
          lineHeight: '1.375rem',
        },
      },
    },
  },

});

export const ConnectedMachiningSection = styled('section', {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  borderBottom: '1px solid $stroke40',

  main: {
    display: 'flex',
    flexDirection: 'column',
    padding: '2rem',
    gap: '2rem',

    '.header': {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',

      h2: {
        fontSize: '1.75rem',
      },

      p: {
        fontSize: '0.875rem',
        lineHeight: '1.375rem',
      },

      '.basicForms': {
        display: 'flex',
        flexDirection: 'row',
        gap: '1rem',
      
        '& svg' : {
          fill: "$slate300",
          height: '24px',
          width: '24px',

          '&:nth-child(2)': {
            width: '65px',
          },
        },
      },
    },

    '.cardsContainer': {
        display: 'flex',
        flexDirection: 'column',
        gap: 24,

      '.secondCardWrapper': {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',

        '.imageCard': {
          backgroundImage: `url(${PackageImg.src})`,
          backgroundSize: 'cover',

          width: '100%',
          height: '156px',

          borderRadius: 20,
        },
        '.card': {
          display: 'flex',
          flexDirection: 'column',
          
          backgroundImage: `url(${ConnectedBgImg02.src})`,
          backgroundSize: 'cover',
          backgroundColor: '$green700',

          color: '$green50',
          padding: 32,
          borderRadius: 20,
          gap: '1rem',

          '.cardHeader': {
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',

            strong: {
              fontWeight: '500',
              fontSize: '1rem',
            },
            h2: {
              fontSize: '1.65rem',
            },
          },

          '.content': {
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
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
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',

        '.imageCard': {
          backgroundImage: `url(${DrillingImg.src})`,
          backgroundSize: 'cover',

          width: '100%',
          height: '156px',

          borderRadius: 20,
        },
        '.card': {
          display: 'flex',
          flexDirection: 'column',

          backgroundImage: `url(${ConnectedBgImg01.src})`,
          backgroundSize: 'cover',
          backgroundColor: '$blue400',

          color: '$blue50',

          padding: 32,
          borderRadius: 20,
          gap: '1rem',

          '.cardHeader': {
            display: 'flex',
            flexDirection: 'column',
            gap: 10,

            strong: {
              fontWeight: '500',
              fontSize: '1rem',
            },
            h2: {
              fontSize: '1.65rem',
            },
            
          },

          '.content': {
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
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

  '@sm': {
    main: {
      '.cardsContainer': {
        '.secondCardWrapper': {
          '.imageCard': {
            width: '70%',
          },
        },
        '.thirdCardWrapper': {
          '.imageCard': {
            width: '70%',
          },
        },
      },
    },
  },

  '@md': {
    main: {
      width: '85%',
      padding: '4rem',
      
      '.header': {
        maxWidth: '90%',

        h2: {
          fontSize: '3rem',
        },
  
        p: {
          fontSize: '1rem',
          fontWeight: '500',
          lineHeight: '1.375rem',
        },

        '.basicForms': {
          gap: '1rem',
        
          '& svg' : {
            height: '42px',
            width: '42px',
  
            '&:nth-child(2)': {
              width: '116px',
            },
          },
        },
      },
      '.cardsContainer': {
        '.secondCardWrapper': {
          display: 'grid',
          gridTemplateColumns: '1fr 2fr',
          gap: '1.5rem',

          '.imageCard': {
            width: '100%',
            height: '100%',
          },

        },
        '.thirdCardWrapper': {
          display: 'grid',
          gridTemplateColumns: '2fr 1fr',
          gap: '1.5rem',

          '.imageCard': {
            width: '100%',
            height: '100%',
          },
        },
      },
    },
  },

  '@lg': {
    main: {
      width: '78%',
      padding: '4rem',
      '.header': {
        maxWidth: '90%',

        h2: {
          fontSize: '3rem',
        },
  
        p: {
          fontSize: '1rem',
          fontWeight: '500',
          lineHeight: '1.375rem',
        },

        '.basicForms': {
          gap: '1rem',
        
          '& svg' : {
            height: '42px',
            width: '42px',
  
            '&:nth-child(2)': {
              width: '116px',
            },
          },
        },
      },
      '.cardsContainer': {
        '.secondCardWrapper': {
          display: 'grid',
          gridTemplateColumns: '1fr 3fr',
          gap: '1.5rem',

          '.imageCard': {
            width: '100%',
            height: '100%',
          },

          '.card': {
            display: 'grid',
            gridTemplateColumns: '3fr 4fr',

            '.cardHeader': {
              gap: '1rem',
  
              h2: {
                fontSize: '2rem',
              },
            },
          },

        },
        '.thirdCardWrapper': {
          display: 'grid',
          gridTemplateColumns: '3fr 1fr',
          gap: '1.5rem',

          '.imageCard': {
            width: '100%',
            height: '100%',
          },

          '.card': {
            display: 'grid',
            gridTemplateColumns: '3fr 4fr',
            gap: '4rem',

            '.cardHeader': {
              gap: '1rem',
  
              h2: {
                fontSize: '2rem',
              },
            },
          },
        },
      },
    },
  },
  '@xl': {
    main: {
      maxWidth: '75rem',
    },
  },
});

export const CADSection = styled('section', {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  borderBottom: '1px solid $stroke40',
  
  div:{
    margin: '2rem',
    backgroundImage: `url(${CADImg.src})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',

    borderRadius: 16,
    color: '$white',
    padding: '2rem',


    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    alignItems: 'flex-end',

    h2: {
      fontSize: '1.25rem',
    },

    p: {
      fontSize: '0.875rem',
      lineHeight: '1.5rem',
    },
  },

  '@sm': {
    div: {
      h2: {
        fontSize: '2rem',
      },
      p: {
        fontSize: '1rem',
        lineHeight: '1.5rem',
      },
    },
  },

  '@md': {
    div: {
      width: '85%',
      maxWidth: '51rem',
      margin: '4rem',
      h2: {
        fontSize: '2rem',
      },
      p: {
        fontSize: '1rem',
        lineHeight: '1.5rem',
      },
    },
  },

  '@lg': {
    div: {
      width: '80%',
      maxWidth: '60rem',
      margin: '4rem',
      padding: '4rem',
      gap: '2rem',
      alignItems: 'center',
      h2: {
        fontSize: '2.5rem',
        textAlign: 'center',
        maxWidth: '78%',
      },
      p: {
        fontSize: '1rem',
        lineHeight: '1.5rem',
        maxWidth: '70%',
      },
    },
  },

  '@xl': {
    div: {
      width: '78%',
      maxWidth: '67rem',
    },
  },

});

export const NumbersSection = styled('section', {
  borderBottom: '1px solid $stroke40',
  backgroundImage: 'linear-gradient(90deg, $slate200 40%, #FFFFFF 100%)',
  display: 'flex',
  justifyContent: 'center',
  width: '100%',

  '.numbersWrapper': {
    display: 'flex',
    flexDirection: 'column',
    padding: '2rem',
    gap: '2.5rem',

    '.numbersHeader': {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
  
      h2: {
        fontSize: '1.875rem',
      },
  
      hr: {
        maxWidth: '10rem',
        height: 4,
        backgroundColor: '$red600',
        border: 'none',
        borderRadius: 4,
      },
    },

    '.numbersCards': {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',

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
          gap: '0.75rem',

          svg: {
            height: '24px',
            width: '24px',
  
            '&:nth-child(2)': {
              width: '64px',
            },
          },
        },
        
        '.numbersInfo': {
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: 0,
          
          h2: {
            fontSize: '2.625rem',
          },

        },

        p: {
          fontSize: '0.875rem',
          lineHeight: '1.25rem',
        },
      },
    },

    '.numbersCardsMachines': {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',

      div: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',

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
          },
        },
      },
    },
  },

/**

  '@sm': {
    '.numbersWrapper': {
      '.numbersHeader': {
        h2: {},
        hr: {},
        p: {},
      },
      '.numbersCards': {
        '.numbersCardsInfo': {
          div: {
            svg: {
              '&:nth-child(2)':{},
            },
          },
          '.numbersInfo': {
            h2: {},
          },
          p: {},
        },
      },
      '.numbersCardsMachines': {
        div: {
          article: {
            p: {},
          },
        },
      },
    },
  },
  
  **/

  '@sm': {
    '.numbersWrapper': {
      '.numbersCards': {
        '.numbersCardsInfo': {
          div: {
            svg: {
              height: '32px',
              width: '32px',
              '&:nth-child(2)':{
                width: '86px',
              },
            },
          },
          '.numbersInfo': {
            h2: {
              fontSize: '4rem',
            },
          },
          p: {
            fontSize: '1rem',
            lineHeight: '1.5rem',
          },
        },
      },
      '.numbersCardsMachines': {
        width: '100%',
        div: {
          flexDirection: 'row',
          article: {
            width: '100%',
          }
        },
      },
    },
  },

  '@md': {
    '.numbersWrapper': {
      maxWidth: '85%',
      padding: '4rem',
      '.numbersHeader': {
        h2: {
          fontSize: '3rem',
        },
        p: {
          maxWidth: '35rem',
        },
      },
      '.numbersCards': {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        '.numbersCardsInfo': {
          div: {
            svg: {
              '&:nth-child(2)':{},
            },
          },
          '.numbersInfo': {
            h2: {},
          },
          p: {},
        },
      },
      '.numbersCardsMachines': {
        div: {
          gap: '1.5rem',
          article: {
            p: {},
          },
        },
      },
    },
  },

  '@lg': {
    '.numbersWrapper': {
      maxWidth: '78%',
      '.numbersCards': {
        '.numbersCardsInfo': {
          div: {
            svg: {
              width: '42px',
              height: '42px',
              '&:nth-child(2)':{
                width: '116px',
              },
            },
          },
          '.numbersInfo': {
            h2: {
              fontSize: '5rem',
            },
          },
        },
      },
      '.numbersCardsMachines': {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
      },
    },
  },

  '@xl': {
    '.numbersWrapper': {
      width: '78%',
      maxWidth: '75rem',
    },
  },

});

export const PartnerBenefits = styled('section', {
  display: 'flex',
  justifyContent: 'center',
  padding: '6rem 0',
  borderBottom: '1px solid $stroke40',
  width: '100%',

  '.partnerBenefitsWrapper': {
    display: 'flex',
    flexDirection: 'row',
    maxWidth: '74rem',
    gap: '4rem',


  '.partnerBenefitsImg': {
    maxWidth: '50%',
    img: {
      width: '100%',
      objectFit: 'cover',
      border: '1px solid $stroke40',
      borderRadius: '20px',
      boxShadow: '4px 4px 16px rgba(0, 67, 127, 0.15)',
    },
  },

  '.partnerBenefitsContent': {
    maxWidth: '50%',
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
  
  },
});

export const VideoSection = styled('section', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',

  backgroundImage: 'linear-gradient(90deg, $slate200 40%, #FFFFFF 100%)',
  borderBottom: '1px solid $stroke40',

  div: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '2rem',
    padding: '2rem',

    header: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
  
      hr: {
        width: '10rem',
        height: 2,
        backgroundColor: '$red600',
        border: 'none',
        borderRadius: 4,
      },
  
      h2: {
        fontSize: '2rem',
        lineHeight: '2.125rem',
      },
  
      p: {
        lineHeight: '24px',
      },
  
      button: {
        maxWidth: '100%',
      },
    },
  
    iframe: {
  
      width: '100%',
      height: 'auto',
  
      border: '1px solid $stroke40',
      borderRadius: '12px',
      boxShadow: '4px 4px 16px rgba(0, 67, 127, 0.15)',
    },
  },

  '@sm': {
    div:{
      iframe: {
        width: '100%',
        height: '18rem',
      },
    },
  },

  '@md': {
    div: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      padding: '4rem',

      width: '85%',
      maxWidth: '48.5rem',

      header: {
        padding: '1rem',
        h2: {
          fontSize: '1.5rem',
        },
        p: {
          fontSize: '0.875rem',
          lineHeight: '1.25rem',
        },
        button: {
          maxWidth: '10rem',
        },
      },
      iframe: {
        width: '24rem',
        height: '13rem',
      },
    },
  },

  '@lg': {
    div: {
      width: '80%',
      maxWidth: '64rem',

      iframe: {
        width: '32rem',
        height: '18rem',
      },
    },
  },

  '@xl': {
    div: {
      width: '78%',
      maxWidth: '77rem',
    },
  },

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