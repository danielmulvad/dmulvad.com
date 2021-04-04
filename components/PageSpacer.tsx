import { makeStyles } from '@material-ui/core'
import clsx from 'clsx'

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.only('xs')]: {
      padding: '30px',
    },
    [theme.breakpoints.only('sm')]: {
      padding: '50px',
    },
    padding: '100px',
  },
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
