import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'

declare module '@material-ui/core/styles/createPalette' {
  interface CommonColors {
    darkGreen: string
    green: string
    lightGreen: string
    darkBlue: string
    blue: string
    lightBlue: string
    purple: string
    lightPurple: string
    red: string
    orange: string
    yellow: string
  }
}

const referenceTheme = createMuiTheme()

const theme = createMuiTheme({
  palette: {
    background: {
      default: '#FFF'
    },
    common: {
      darkGreen: '#219653',
      green: '#27AE60',
      lightGreen: '#6FCF97',
      darkBlue: '#2F80ED',
      blue: '#2D9CDB',
      lightBlue: '#56CCF2',
      purple: '#9B51E0',
      lightPurple: '#BB6BD9',
      red: '#EB5757',
      orange: '#F2994A',
      yellow: '#F2C94C'
    },
    grey: {
      100: '#333',
      200: '#4F4F4F',
      300: '#828282',
      400: '#BDBDBD',
      500: '#E0E0E0',
      600: '#F2F2F2'
    }
  },
  typography: {
    body1: {},
    body2: {},
    h1: {
      fontSize: '60px',
      fontWeight: 700,
      lineHeight: 1.1916666667
    },
    h2: {
      fontSize: '50px',
      fontWeight: 300,
      lineHeight: 1.178
    },
    h3: {
      fontWeight: 300,
      fontSize: '40px'
    },
    h4: {
      fontSize: '35px'
    },
    h5: {
      fontSize: '30px'
    },
    h6: {
      fontVariant: 'light',
      fontSize: '25px',
      lineHeight: 1.08
    },
    fontFamily: 'Helvetica',
    fontSize: 18
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          '&:hover': {
            background:
              'linear-gradient(0.25turn, rgb(242 153 74 / 33%) 0%, rgb(255 247 186 / 100%) 50%, rgb(242 153 74 / 33%))'
          },
          background:
            'linear-gradient(0.25turn, rgb(242 153 74 / 33%) 0%, rgb(255 247 186 / 100%) 50%, rgb(242 153 74 / 33%))'
        },
        root: {
          [referenceTheme.breakpoints.down('md')]: {
            fontSize: 16
          },
          borderRadius: 5,
          boxShadow: 'none',
          color: '#000',
          fontSize: 18,
          fontWeight: 400,
          textTransform: 'none',
          padding: '6px 30px'
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          [referenceTheme.breakpoints.only('xs')]: {
            padding: '26px 29px 0px'
          },
          [referenceTheme.breakpoints.only('sm')]: {
            padding: '36px 39px 0px'
          },
          borderRadius: 10,
          padding: '42px 45px 0px'
        }
      }
    }
  }
})

export default responsiveFontSizes(theme)
