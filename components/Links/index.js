import Image from "next/image"
import Link from "next/link"

export const ImageLink = (params) => {

  return (
    <Link href={params.url}>
      <Image src={params.image} alt='some.png' width={350} height={233} loading='lazy' className='image' />
    </Link>


  )
}