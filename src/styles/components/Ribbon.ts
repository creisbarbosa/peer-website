import { styled } from "..";

export const RibbonContainer = styled('a',{
  display: 'flex',
  justifyContent: 'center',
  gap: '8px',
  alignItems: 'center',
  width: '100%',

  fontFamily: 'Space Grotesk',
  fontSize: '0.875rem',
  textDecoration: 'none',
  color: '$blue600',

  padding: '0.875rem 0',
  borderBottom: '1px solid $stroke40',
  background: 'linear-gradient(90deg, #CDD5E0 0%, #FFFFFF 50%, #CDD5E0 100%)',

  transition: 'filter 0.3s',

  '&:hover': {
    filter: 'brightness(1.1)'
  }

});