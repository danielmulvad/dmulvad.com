import Head from 'next/head'
import PageSpacer from 'components/PageSpacer'
import {
  Button,
  Grid,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme
} from '@material-ui/core'
import Card from 'components/Card'
import projects from 'projects'
import { createContext, forwardRef, useRef } from 'react'
import Layout from 'components/Layout'

export const HomeContext = createContext({
  scrollToProjects: undefined
})

function Home() {
  const projectsRef = useRef<HTMLDivElement>(null)
  const scrollToProjects = () =>
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' })

  return (
    <HomeContext.Provider value={{ scrollToProjects }}>
      <Layout>
        <Splash />
        <Projects ref={projectsRef} />
      </Layout>
    </HomeContext.Provider>
  )
}

const useSplashStyles = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.only('xs')]: {
      minHeight: 'calc(100vh - 60px)'
    },
    [theme.breakpoints.only('sm')]: {
      minHeight: 'calc(100vh - 100px)'
    },
    minHeight: 'calc(100vh - 190px)'
  },
  dude: {
    [theme.breakpoints.only('xs')]: {
      maxHeight: 'calc(75vh - 60px)'
    },
    [theme.breakpoints.only('sm')]: {
      maxHeight: 'calc(75vh - 100px)'
    },
    maxHeight: 'calc(100vh - 200px)',
    width: '100%'
  },
  svg: {
    verticalAlign: 'middle'
  },
  spacerBottom: {
    [theme.breakpoints.down('md')]: {
      marginBottom: '20px'
    },
    marginBottom: '30px'
  },
  spacerLeft: {
    marginLeft: '30px'
  },
  top: {
    [theme.breakpoints.down('md')]: {
      marginBottom: '30px'
    }
  },
  pageSpacer: {
    paddingTop: 47.5
  }
}))

function Splash() {
  const classes = useSplashStyles()
  const theme = useTheme()
  const xs = useMediaQuery(theme.breakpoints.only('xs'))

  return (
    <PageSpacer className={classes.pageSpacer}>
      <Grid
        container
        className={classes.container}
        alignItems={xs ? 'flex-start' : 'center'}>
        <Grid item xs={12} sm={12} md className={classes.top}>
          <Grid container direction='column'>
            <Grid item className={classes.spacerBottom}>
              <Typography variant='h6'>Hi, my name is</Typography>
            </Grid>
            <Grid item className={classes.spacerBottom}>
              <Typography variant='h1'>Daniel Mulvad.</Typography>
              <Typography variant='h2'>
                <div>Software Engineer at</div>
                <div>AXON Networks</div>
              </Typography>
            </Grid>
            <Grid item className={classes.spacerBottom}>
              <Typography variant='body1'>
                As a software engineer, I strive to ensure efficient,
                production-ready code by following proven reusable design
                patterns. I am very passionate about the future of the web and
                the technologies that drive it. I've had the opportunity to work
                on a wide variety of systems including full-stack apps/websites,
                motion sensors, and home Wi-Fi routers.
              </Typography>
            </Grid>
            <Grid item className={classes.spacerBottom}>
              <Grid container spacing={3}>
                <Grid item>
                  <HomeContext.Consumer>
                    {({ scrollToProjects }) => (
                      <Button variant='contained' onClick={scrollToProjects}>
                        See my projects ⟶
                      </Button>
                    )}
                  </HomeContext.Consumer>
                </Grid>
                {/* {<Grid item>
                  <Button>Contact ⟶</Button>
                </Grid>} */}
              </Grid>
            </Grid>
            <Grid item>
              <Grid container>
                <Grid
                  item
                  component='a'
                  href='https://github.com/danielmulvad'
                  target='_blank'>
                  <img
                    className={classes.svg}
                    alt='GitHub'
                    width='30'
                    height='30'
                    src='/svg/github.svg'
                  />
                </Grid>
                <Grid
                  item
                  className={classes.spacerLeft}
                  component='a'
                  href='https://www.linkedin.com/in/dhm'
                  target='_blank'>
                  <img
                    className={classes.svg}
                    alt='LinkedIn'
                    width='30'
                    height='30'
                    src='/svg/linkedin.svg'
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md>
          <img
            src='/svg/dude.svg'
            width='100%'
            height='auto'
            className={classes.dude}
          />
        </Grid>
      </Grid>
    </PageSpacer>
  )
}

const Projects = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <PageSpacer id='section-projects' ref={ref} {...props}>
      <Grid container spacing={6}>
        {projects.map((project, pi) => (
          <Grid item xs={12} md={6} key={`${project.title}-${pi}`}>
            <Card {...project} />
          </Grid>
        ))}
      </Grid>
    </PageSpacer>
  )
})

export default Home
