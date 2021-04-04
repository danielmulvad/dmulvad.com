import { createMuiTheme } from '@material-ui/core/styles'

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

const theme = createMuiTheme({
  palette: {
    background: {
      default: '#FFF',
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
      yellow: '#F2C94C',
    },
    grey: {
      100: '#333',
      200: '#4F4F4F',
      300: '#828282',
      400: '#BDBDBD',
      500: '#E0E0E0',
      600: '#F2F2F2',
    },
  },
  typography: {
    fontFamily: 'Helvetica',
    fontSize: 18,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          '&:hover': {
            background:
              'linear-gradient(0.25turn, rgb(242 153 74 / 33%) 0%, rgb(255 247 186 / 100%) 50%, rgb(242 153 74 / 33%))',
          },
          background:
            'linear-gradient(0.25turn, rgb(242 153 74 / 33%) 0%, rgb(255 247 186 / 100%) 50%, rgb(242 153 74 / 33%))',
        },
        root: {
          borderRadius: 5,
          boxShadow: 'none',
          color: '#000',
          fontSize: 18,
          fontWeight: 400,
          textTransform: 'none',
          padding: '6px 30px',
        },
      },
    },
  },
})

export default theme
