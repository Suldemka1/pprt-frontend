import { PageName } from '../components/PageName/PageName'
import parser from 'html-react-parser'
import Head from 'next/head'
import { useState } from "react";
import suggested_news from "../store/suggested-news";
import MainPageLayout from '../layouts/MainPageLayout';
import StandartLayout from '../layouts/StandartLayout';

export async function getServerSideProps() {
    const res = await fetch(`${process.env.APIpath}/api/press-service`)
    const press = await res.json()

    return {
        props: {
            press: press.data
        }
    }
}

export default function Press({ press }) {
    const [open, setOpen] = useState(false)

    const handleModalOpen = () => {
        setOpen(!open)
    }

    return (
        <StandartLayout>
            <MainPageLayout>
                <Head>
                    <title>Пресс служба</title>
                </Head>
                <PageName title='Пресс-служба' />

                <div className='text-xl'>
                    {parser(press.content)}

                    <div>
                        <button className="bg-blue-900 text-white border rounded py-2 px-3" onClick={() => {
                            handleModalOpen()
                        }}>
                            Предложить новость
                        </button>

                        <dialog open={open}
                            className="fixed top-0 left-0 right-0 bottom-0 w-screen h-screen bg-black bg-opacity-50">
                            <div className="w-full h-full flex justify-center items-center">
                                <form method="dialog"
                                    className="flex flex-col gap-5 md:w-5/12 bg-white border rounded p-10">
                                    <div className="text-2xl font-normal">
                                        <h1 className="">Предложить новость</h1>
                                    </div>

                                    <input type='text' placeholder="Заголовок новости" className="border-2 p-2"
                                        onChange={(e) => {
                                            suggested_news.setTitle(e.target.value)
                                        }} />

                                    <textarea rows={10} placeholder="Текст новости"
                                        className="border-2 resize-none z-50 p-2"
                                        onChange={(e) => {
                                            suggested_news.setBody(e.target.value)
                                        }} />
                                    <div>
                                        <label htmlFor="files"
                                            className="bg-blue-900 text-white border rounded py-2 px-3 cursor-pointer">Загрузите
                                            файлы</label>
                                        <input id="files" type='file' multiple className="hidden"
                                            onChange={(e) => {
                                                suggested_news.setFiles(e.target.files)
                                            }} />
                                    </div>

                                    <input type='text' placeholder="Ссылка на источник" className="border-2 p-2"
                                        onChange={(e) => {
                                            suggested_news.setLink(e.target.value)
                                        }} />

                                    <div className="flex justify-between">
                                        <button onClick={() => handleModalOpen()}
                                            className="bg-blue-900 text-white border rounded py-2 px-3">Отменить
                                        </button>
                                        <button type="submit"
                                            onClick={() => {
                                                suggested_news.postSuggestedNews()
                                            }}
                                            className="bg-blue-900 text-white border rounded py-2 px-3">Предложить
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </dialog>
                    </div>
                </div>
            </MainPageLayout>
        </StandartLayout>


    )
}