import { Grid, makeStyles } from '@material-ui/core'

const useNavbarStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down('md')]: {
      height: '60px',
      margin: '0 60px',
      padding: '.5rem 0'
    },
    background: 'rgb(255 255 255 / 90%)',
    height: '95px',
    margin: '0 95px',
    padding: '1rem 0',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: theme.zIndex.appBar
  },
  img: {
    cursor: 'pointer',
    height: '100%',
    width: 'auto',
    verticalAlign: 'middle'
  },
  imgContainer: {
    cursor: 'pointer',
    verticalAlign: 'middle'
  },
  spacer: {
    [theme.breakpoints.only('sm')]: {
      height: '60px'
    },
    [theme.breakpoints.only('xs')]: {
      height: '30px'
    },
    height: '95px'
  }
}))

function Navbar() {
  const classes = useNavbarStyles()
  return (
    <>
      <Grid
        className={classes.root}
        container
        alignItems='center'
        justifyContent='space-between'>
        <Grid
          item
          component='img'
          className={classes.img}
          src='/svg/logo.svg'
          alt='Daniel Mulvad Logo'
          onClick={() =>
            window.scrollTo({
              left: 0,
              top: 0,
              behavior: 'smooth'
            })
          }></Grid>
        <Grid item>1</Grid>
      </Grid>
      <div className={classes.spacer} />
    </>
  )
}

export default Navbar
