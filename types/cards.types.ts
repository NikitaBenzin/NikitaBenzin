import { StaticImageData } from "next/image"
import { IconType } from "react-icons"

export interface ICard {
  title: string
  link?: string | undefined
  imageUrl?: string | StaticImageData | undefined
  imageAlt?: string | undefined
  Icon?: IconType | undefined
}
