import Image from "next/image"

export default function imagePreview(upload_urls) {
  if (typeof upload_urls !== 'undefined') {
    return <Image alt='some' src={upload_urls} layout='fill' className='image'/>
  }

  else {
    return <Image alt='some' src={'/news_1.jpg'} layout='fill' className='image'/>
  }
}