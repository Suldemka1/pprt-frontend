import { observer } from "mobx-react-lite"
import { PostCard } from "../components/PostInfo/PostInfo"
import Link from "next/link"
import searchQuery from "../store/search-query"
import { useEffect } from "react"

const SearchPage = observer(() => {

  useEffect(() => {
    searchfunction()
  }, [])

  const searchfunction = async () => {

    if (searchQuery.query != 'undefined') {
      searchQuery.fetchPosts(searchQuery.query)
    }

    else {
      searchQuery.fetchPostsAll()
    }
  }

  const datamap = searchQuery?.result?.map((item) => {

    return (
      <Link href={`/news/${item.id}`} key={item.id} className={'news'}>
        <PostCard
          id={item.id}
          title={item.title}
          preview_image={`${process.env.APIpath}` + item.preview_image.url}
          body={item.body}
          // tags={item.tags.data}
          createdAt={item.createdAt}
        />
      </Link>
    )
  })

  return (
    <>
      <div className="spl" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div>
          <input defaultValue={searchQuery.query} onChange={(e) => { searchQuery.search(e.target.value) }} className='w-75 my-4' />
          <button onClick={searchfunction} >Поиск</button>
        </div>
        <div>
          {datamap}
        </div>
      </div>
    </>
  )

})

export default SearchPage