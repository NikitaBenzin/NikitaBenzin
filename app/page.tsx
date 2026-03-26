import Image from "next/image"
import { Octokit } from "octokit"

import Link from "next/link"
import bgImage from "../public/hero-bg.jpg"

const octokit = new Octokit({
  auth: process.env.GITHUB_API_KEY,
})

export default async function Home() {
  const { data } = await octokit.request("GET /user", {
    owner: "nikitabenzin",
  })

  return (
    <div className="flex flex-col sm:flex-row mx-auto my-0 w-full space-x-4 max-w-7xl p-6">
      <aside className="min-w-32 space-y-4">
        {data != undefined && (
          <Image
            src={data?.avatar_url}
            alt="nikitabenzin profile"
            width={128}
            height={128}
            className="w-32 h-32"
          />
        )}
        <nav className="flex flex-col">
          <Link href={"/"}>home</Link>
          <Link href={"/"}>squad</Link>
        </nav>
      </aside>
      <main className="w-full">
        <Image
          src={bgImage}
          alt="moment from blade runner 2049"
          className="h-48 object-cover"
        />
      </main>
    </div>
  )
}
