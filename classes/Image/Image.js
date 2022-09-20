class ImageGetter {

  getImagesList(params) {

    try {
      if (!params) {
        let images = []

        params.map((item) => {
          images.push(process.env.APIpath + item.url)
        })

        return images
      }
      else {

      }
    }
    catch (error) {
      console.error(error)
    }
  }

  imagePreview(images) {

    try {
      if (typeof images !== 'undefined') {
        return <Image alt='some' src={images} layout='fill' className="image" />
      }

      else {
        return <Image alt='some' src={'/fourthree.jpeg'} layout='fill' className="image" />
      }
    }
    catch (error) {
      console.error(error)
    }
  }
}

export default new ImageGetter