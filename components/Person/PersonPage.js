import {PageName} from "../PageName/PageName";
import Image from "next/image";
import parser from "html-react-parser";
import ImageViewer from "react-simple-image-viewer";
import {useCallback, useState} from "react";
import Head from "next/head";

export const PersonPage = (params) => {
    const [currentImage, setCurrentImage] = useState(0)
    const [isViewerOpen, setIsViewerOpen] = useState(false)

    const openImageViewer = useCallback((index) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);

    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };

    return (
        <div>
            <Head>
                <title>
                    {params.position}
                </title>
            </Head>

            <PageName title={params.position}/>

            <div className="border border-black rounded-md">
                <div className="flex xs:flex-col md:flex-row gap-5">

                    <div className="min-w-fit max-w-full">
                        <Image alt='some' src={`${process.env.APIpath}` + params.preview_image} width={400} height={400}
                               objectFit="cover" className="dark:grayscale"/>
                    </div>

                    <div className="p-3">
                        <div className="text-2xl font-normal">
                            <h4>{params.surname}</h4>
                            <h4>{params.name}</h4>
                            <h4>{params.patronymic}</h4>
                        </div>

                        <div className="text-xl font-normal">
                            <h4>Образование</h4>
                            <div className="text-xl font-light">
                                {parser(params.education)}
                            </div>
                        </div>

                        <div className="text-xl font-normal">
                            <h4>Биография</h4>
                            <div className="text-xl font-light">{parser(params.biography)}</div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col bg-gray-100 border rounded-b-lg p-3 text-2xl gap-3">
                    <div className="font-normal">Контактные данные</div>
                    <div className="flex flex-col gap-2">
                        <div className="text-xl">{params.email}</div>
                        <div className="text-xl">{params.phone}</div>
                    </div>
                </div>
            </div>

            <div>
                {params.images.map((item, index) =>

                    <Image
                        alt="some"
                        src={item}
                        width={350}
                        height={233}
                        objectFit='contain'
                        key={index}
                        onClick={() => openImageViewer(index)}
                        className="dark:grayscale"/>
                )}
            </div>

            {
                isViewerOpen && (<ImageViewer
                    src={params.images}
                    currentIndex={currentImage}
                    disableScroll={false}
                    closeOnClickOutside={true}
                    onClose={closeImageViewer}
                />)
            }
        </div>
    )

}