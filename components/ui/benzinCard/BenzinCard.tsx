import { ICard } from "@/types/cards.types"

import Image from "next/image"

import Link from "next/link"

import { FaQuestion } from "react-icons/fa6"

import defaultImage from "../../../public/default.png"

export function BenzinCard({ Icon, imageAlt, imageUrl, link, title }: ICard) {
  return (
    <div className="benzin-card">
      <div className="benzin-card-img-wrapper">
        <Image
          src={imageUrl ? imageUrl : defaultImage}
          alt={imageAlt ? imageAlt : "Default card"}
          width={512}
          height={512}
          className="benzin-card-img"
        />
      </div>

      <Link
        href={link ? link : "#"}
        className="benzin-card-link"
        title={title}
        aria-label={title}
      >
        {Icon ? <Icon size={28} /> : <FaQuestion size={28} />}
      </Link>

      <span className="benzin-card-title">{title}</span>
    </div>
  )
}
