import Navbar from 'components/Navbar'
import { Grid, makeStyles } from '@material-ui/core'

const useNotFoundStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down('md')]: {
      height: 'calc(100vh - 60px)'
    },
    height: 'calc(100vh - 95px)'
  }
}))

function NotFound() {
  const classes = useNotFoundStyles()
  return (
    <>
      <Navbar fixed={false} redirectHome />
      <Grid
        container
        alignItems='center'
        justifyContent='center'
        className={classes.root}>
        <Grid item>404 | This page could not be found.</Grid>
      </Grid>
    </>
  )
}

export default NotFound
