import { Grid, makeStyles } from '@material-ui/core'

const useNavbarStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.only('xs')]: {
      height: '30px',
      margin: '0 30px',
    },
    [theme.breakpoints.only('sm')]: {
      height: '50px',
      margin: '0 50px',
    },
    background: 'rgb(255 255 255 / 90%)',
    height: '95px',
    margin: '0 95px',
    position: 'fixed',
    top: 0,
    left: 0,
  },
  img: {
    height: '100%',
    width: 'auto',
    verticalAlign: 'middle',
  },
  imgContainer: {
    cursor: 'pointer',
  },
}))

function Navbar() {
  const classes = useNavbarStyles()
  return (
    <Grid className={classes.root} container alignItems='center' justifyContent='space-between'>
      <Grid
        item
        className={classes.imgContainer}
        onClick={() =>
          window.scrollTo({
            left: 0,
            top: 0,
            behavior: 'smooth',
          })
        }>
        <img className={classes.img} src='/svg/logo.svg' alt='Daniel Mulvad' />
      </Grid>
      <Grid item>1</Grid>
    </Grid>
  )
}

export default Navbar
