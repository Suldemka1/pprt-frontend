import {PageName} from "../../components/PageName/PageName";
import {DocumentCard} from "../../components/Document/Document";
import {observer} from "mobx-react-lite";
import searchDocs from "../../store/search-docs";
import {useEffect} from "react";

export const getServerSideProps = async () => {
    const res = await fetch(`${process.env.APIpath}/api/document-types`)
    const types = await res.json()
    console.log(types)

    return {
        props: {
            types: types.data
        }
    }
}

//короче, тут будет пиздец, да, опять

const Docs = observer(({types}) => {

        //вызываем функцию чтобы при переходе на эту страницу загрузить все документы
        useEffect(() => {
            searchfunction()
        }, [])

        //hoisting функция вызывается до ее объявления, это не ошибка
        const searchfunction = async () => {

            if (searchDocs.query !== undefined && searchDocs.query !== '') {
                await searchDocs.fetchDocs(searchDocs.query)
            } else {
                await searchDocs.fetchDocsAll()
            }
        }

        //функция которая рисует нам документы
        const datamap = searchDocs?.result?.map((item) => {

            return (
                <DocumentCard
                    key={item.id}
                    id={item.id}
                    name={item.title}
                    date={item.signing_date}
                    url={item.file.url}
                    types={item.document_types}
                />
            )
        })

        return (
            <>
                <PageName title='Банк документов'/>

                <div className="flex xs:flex-col gap-5">

                    <div className="flex flex-row gap-5 md:w-8/12">
                        <input defaultValue={searchDocs.doc_title} placeholder="Поиск по заголовку" value={searchDocs.query}
                               onChange={(e) => {
                                   searchDocs.search(e.target.value)
                                   searchDocs.fetchDocs(searchDocs.query)
                               }} className='w-6/12 border rounded px-2 outline-0 px-2 py-3'/>

                        <div className="flex flex-row items-center gap-3">
                            <p>Поиск по типу</p>

                            <select onChange={(e) => {
                                if (e.target.value !== 'все') {
                                    searchDocs.query = ''
                                    searchDocs.setType(e.target.value)
                                    searchDocs.fetchDocsByTypes(searchDocs.type)
                                } else {
                                    searchDocs.query = ''
                                    searchDocs.fetchDocsAll()
                                }
                            }}
                            className="border py-3 px-2"
                            >
                                <option key="все" value="все">Все</option>
                                {types.map(item => {
                                        return <option key={item.id} value={item.title}>{item.title}</option>
                                    }
                                )}
                            </select>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 xs:w-full min-h-[25vh] md:w-8/12">
                        {datamap}
                    </div>
                </div>

            </>
        );
    }
)

export default Docs