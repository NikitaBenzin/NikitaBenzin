import { ICard } from "@/types/cards.types"
import { PiGithubLogoBold } from "react-icons/pi"
import { RiTelegram2Fill } from "react-icons/ri"

import gitHubGirl from "../public/github.png"
import telegramGirl from "../public/telegram.png"

export const benzinCards: ICard[] = [
  {
    title: "GitHub",
    Icon: PiGithubLogoBold,
    imageUrl: gitHubGirl,
    imageAlt: "GitHub anime girl",
    link: "https://github.com/NikitaBenzin",
  },
  {
    title: "Telegram",
    Icon: RiTelegram2Fill,
    imageUrl: telegramGirl,
    imageAlt: "Telegram anime girl",
    link: "https://t.me/nikitabenzin",
  },
  {
    title: "benzsquad",
    link: "https://github.com/benzsquad",
  },
]
