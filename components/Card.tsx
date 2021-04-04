import {
  Card as MaterialCard,
  CardProps as MaterialCardProps,
  makeStyles,
  Typography,
  TypographyProps
} from '@material-ui/core'
import { DetailedHTMLProps, ImgHTMLAttributes } from 'react'

export interface CardProps {
  cardProps?: MaterialCardProps
  title: JSX.Element | string
  titleProps?: TypographyProps
  description: JSX.Element | string
  descriptionProps?: TypographyProps
  imageAlt: string
  imageSrc: string
  imageProps?: DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >
}

const useCardStyles = makeStyles((theme) => ({
  description: {
    [theme.breakpoints.only('xs')]: {
      margin: '25px 0'
    },
    [theme.breakpoints.only('sm')]: {
      margin: '40px 0'
    },
    margin: '50px 0 70px'
  },
  img: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: 'auto',
    verticalAlign: 'bottom',
    width: '100%'
  }
}))

function Card({
  cardProps,
  title,
  titleProps,
  description,
  descriptionProps,
  imageAlt,
  imageSrc,
  imageProps
}: CardProps) {
  const classes = useCardStyles()
  return (
    <MaterialCard {...cardProps}>
      <Typography variant='h4' {...titleProps}>
        <b>{title}</b>
      </Typography>
      <Typography
        variant='body2'
        className={classes.description}
        {...descriptionProps}>
        {description}
      </Typography>
      <img
        alt={imageAlt}
        src={imageSrc}
        className={classes.img}
        {...imageProps}
      />
    </MaterialCard>
  )
}

export default Card
