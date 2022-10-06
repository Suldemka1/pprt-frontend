import Image from "next/image"

export default function imagePreview(upload_urls) {
  if (typeof upload_urls !== 'undefined') {
    return <Image alt='some' src={upload_urls} width={600} height={400} objectFit="cover" className="dark:grayscale"/>
  }

  else {
    return <Image alt='some' src={'/news_1.jpg'} width={600} height={400} objectFit="cover" className="dark:grayscale"/>
  }
}