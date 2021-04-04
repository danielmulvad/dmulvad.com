import Head from 'next/head'
import PageSpacer from 'components/PageSpacer'
import { Button, Grid, makeStyles, useMediaQuery, useTheme } from '@material-ui/core'
import clsx from 'clsx'

function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Splash />
    </>
  )
}

const useSplashStyles = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.only('xs')]: {
      minHeight: 'calc(100vh - 60px)',
    },
    [theme.breakpoints.only('sm')]: {
      minHeight: 'calc(100vh - 100px)',
    },
    minHeight: 'calc(100vh - 200px)',
  },
  dude: {
    [theme.breakpoints.only('xs')]: {
      maxHeight: 'calc(75vh - 60px)',
    },
    [theme.breakpoints.only('sm')]: {
      maxHeight: 'calc(75vh - 100px)',
    },
    maxHeight: 'calc(100vh - 210px)',
    width: '100%',
  },
  myNameIs: {
    fontVariant: 'light',
    fontSize: '25px',
    lineHeight: '27px',
  },
  name: {
    fontWeight: 700,
    fontSize: '60px',
    lineHeight: '71.5px',
  },
  title: {
    fontWeight: 300,
    fontSize: '50px',
    lineHeight: '58.9px',
  },
  svg: {
    verticalAlign: 'middle',
  },
  spacerBottom: {
    [theme.breakpoints.down('md')]: {
      marginBottom: '20px',
    },
    marginBottom: '30px',
  },
  spacerLeft: {
    marginLeft: '30px',
  },
  top: {
    [theme.breakpoints.down('md')]: {
      marginBottom: '30px',
    },
  },
}))

function Splash() {
  const classes = useSplashStyles()
  const theme = useTheme()
  const xs = useMediaQuery(theme.breakpoints.only('xs'))
  return (
    <PageSpacer>
      <Grid container className={classes.container} alignItems={xs ? 'flex-start' : 'center'}>
        <Grid item xs={12} sm={12} md className={classes.top}>
          <Grid container direction='column'>
            <Grid item className={clsx(classes.myNameIs, classes.spacerBottom)}>
              Hi, my name is
            </Grid>
            <Grid item className={classes.spacerBottom}>
              <div className={classes.name}>Daniel Mulvad.</div>
              <div className={classes.title}>
                <div>Software Engineer at</div>
                <div>AXON Networks</div>
              </div>
            </Grid>
            <Grid item className={classes.spacerBottom}>
              As a software engineer, I strive to ensure efficient, production-ready code by following proven reusable
              design patterns. I am very passionate about the future of the web and the technologies that drive it. I've
              had the opportunity to work on a wide variety of systems including full-stack apps/websites, motion
              sensors, and home Wi-Fi routers.
            </Grid>
            <Grid item className={classes.spacerBottom}>
              <Grid container spacing={3}>
                <Grid item>
                  <Button variant='contained'>Contact Me ⟶</Button>
                </Grid>
                <Grid item>
                  <Button>See my projects ⟶</Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container>
                <Grid item>
                  <img className={classes.svg} alt='GitHub' width='30' height='30' src='/svg/github.svg' />
                </Grid>
                <Grid item className={classes.spacerLeft}>
                  <img className={classes.svg} alt='LinkedIn' width='30' height='30' src='/svg/linkedin.svg' />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md>
          <img src='/svg/dude.svg' width='100%' height='auto' className={classes.dude} />
        </Grid>
      </Grid>
    </PageSpacer>
  )
}

export default Home
