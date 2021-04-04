import { makeStyles } from '@material-ui/core'
import clsx from 'clsx'

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.only('xs')]: {
      margin: '30px'
    },
    [theme.breakpoints.only('sm')]: {
      margin: '50px'
    },
    margin: '95px'
  }
}))

interface PageSpacerProps {
  children?: JSX.Element | JSX.Element[]
  className?: string
}

function PageSpacer({ children, className, ...props }: PageSpacerProps) {
  const classes = useStyles()
  return (
    <div className={clsx(className, classes.root)} {...props}>
      {children}
    </div>
  )
}

export default PageSpacer
