import Link from "next/link"

const MobileMenuItem = (params) => {

  return (
      <li>
          <Link href={params.url}><a>{params.title}</a></Link>
      </li>
  )
}

export default MobileMenuItem