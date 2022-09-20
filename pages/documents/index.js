import { PageName } from "../../components/PageName/PageName";
import { DocumentCard } from "../../components/Document/Document";
import styles from './styles/document.module.scss'
import { observer } from "mobx-react-lite";
import searchDocs from "../../store/search-docs";
import { useEffect } from "react";
import SearchField from "../../components/SearchField";

const Docs = observer(() => {

  useEffect(() => {
    searchfunction()
  }, [])

  // hoisting
  const searchfunction = async () => {

    if (searchDocs.query !== undefined && searchDocs.query != '') {
      await searchDocs.fetchDocs(searchDocs.query)
    }

    else {
      await searchDocs.fetchDocsAll()
    }
  }



  const datamap = searchDocs?.result?.map((item) => {

    return (
      <DocumentCard
        key={item.id}
        id={item.id}
        name={item.title}
        date={item.publishedAt}
        url={item.file.url}
      />
    )
  })

  return (
    <>
      <PageName title='Банк документов' />

      <div className="spl" style={{ flexDirection: 'column', gap: '20px' }}>

        <div>
          <input defaultValue={searchDocs.doc_title} onChange={(e) => { searchDocs.search(e.target.value) }} className='w-75 my-4' />
          <button onClick={searchfunction} >Поиск</button>
        </div>

        {/* <SearchField /> */}

        <div className={styles.document_list}>
          {datamap}
        </div>
      </div>

    </>
  );
}
)

export default Docs