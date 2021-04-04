import { makeStyles } from '@material-ui/core'
import clsx from 'clsx'
import { DetailedHTMLProps, forwardRef, HTMLAttributes } from 'react'

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.only('xs')]: {
      padding: '30px',
    },
    [theme.breakpoints.only('sm')]: {
      padding: '50px',
    },
    padding: '95px',
  },
}))

interface PageSpacerProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: JSX.Element | JSX.Element[]
  className?: string
}

const PageSpacer = forwardRef<HTMLDivElement, PageSpacerProps>(({ className, ...props }, ref) => {
  const classes = useStyles()
  return <div ref={ref} className={clsx(className, classes.root)} {...props} />
})

export default PageSpacer
