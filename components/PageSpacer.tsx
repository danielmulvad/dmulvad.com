import { makeStyles } from '@material-ui/core'
import clsx from 'clsx'
import { DetailedHTMLProps, forwardRef, HTMLAttributes } from 'react'

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down('md')]: {
      padding: '60px'
    },
    padding: '95px 95px'
  },
  maxHeight: {
    [theme.breakpoints.only('sm')]: {
      minHeight: 'calc(100vh - 60px)'
    },
    [theme.breakpoints.only('xs')]: {
      minHeight: 'calc(100vh - 30px)'
    },
    minHeight: 'calc(100vh - 95px)'
  }
}))

interface PageSpacerProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: JSX.Element | JSX.Element[]
  className?: string
  maxHeight?: boolean
}

const PageSpacer = forwardRef<HTMLDivElement, PageSpacerProps>(
  ({ className, maxHeight = true, ...props }, ref) => {
    const classes = useStyles()
    return (
      <div
        ref={ref}
        className={clsx(className, classes.root, {
          [classes.maxHeight]: maxHeight
        })}
        {...props}
      />
    )
  }
)

export default PageSpacer
