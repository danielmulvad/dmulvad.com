import { useRouter } from 'next/router'
import { Grid, makeStyles } from '@material-ui/core'
import clsx from 'clsx'

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
    top: 0,
    left: 0,
    zIndex: theme.zIndex.appBar
  },
  fixed: {
    position: 'fixed'
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
    [theme.breakpoints.down('md')]: {
      height: '60px'
    },
    height: '95px'
  }
}))

export interface NavbarProps {
  fixed?: boolean
  redirectHome?: boolean
}

function Navbar({ fixed = true, redirectHome }: NavbarProps) {
  const classes = useNavbarStyles()
  const router = useRouter()

  function navigateHome() {
    router.push('/')
  }

  return (
    <>
      <Grid
        className={clsx(classes.root, { [classes.fixed]: fixed })}
        container
        alignItems='center'
        justifyContent='space-between'>
        <Grid
          item
          component='img'
          className={classes.img}
          src='/svg/logo.svg'
          alt='Daniel Mulvad Logo'
          onClick={
            redirectHome
              ? navigateHome
              : () =>
                  window.scrollTo({
                    left: 0,
                    top: 0,
                    behavior: 'smooth'
                  })
          }></Grid>
        <Grid item>1</Grid>
      </Grid>
      {fixed && <div className={classes.spacer} />}
    </>
  )
}

export default Navbar
