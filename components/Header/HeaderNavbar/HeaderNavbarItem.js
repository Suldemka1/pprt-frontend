import Link from "next/link"

const HeaderNavbarItem = ({ children, href }) => {
  return (
    <Link href={href}>
      <a className="h-full min-h-[50px] hover:border-white border-r-2 border-transparent flex items-center text-lg font-normal cursor-pointer px-1">
        {children}
      </a>
    </Link>
  )
}

export default HeaderNavbarItem