import Image from 'next/image'
import parser from 'html-react-parser'
import {useRouter} from "next/router";
import React from "react";

export const PostPage = (params) => {
    const router = useRouter()
    if (!params) {
        return <h3>Empty post</h3>
    } else {
        return (
            <div className="py-3">
                <div className="text-2xl py-3">{params.title}</div>
                <div className='py-3 leading-8'>
                    <div>{parser(params.body)}</div>
                </div>
                {
                    //тернарный оператор если в новости одно изображение, то показывается изображение, а не слайдер
                    params.images.length < 2

                        ?
                        <Image
                            alt='some'
                            src={`${process.env.APIpath}` + params.preview_image.url}
                            width={1280}
                            height={780}
                            // layout="fill"
                            objectFit="cover"
                            className='dark:grayscale'
                        />
                        :
                        <div className="xs:w-full md:w-full">
                            <div className="flex flex-row justify-between flex-wrap">

                                {
                                    params.images.map((item) =>

                                        <div key={item.id} className="relative min-w-[300px] min-h-[calc(300px)]">
                                            <Image
                                                key={item.id}
                                                src={`${process.env.APIpath}${item.url}`}
                                                alt="First slide"
                                                width={960}
                                                height={720}
                                                layout="responsive"
                                                objectFit='cover'
                                                priority
                                                className='dark:grayscale'
                                            />
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                }

                <br/>
                <button onClick={() => router.push('/news')} className="button dark:bg-gray-500">Назад к
                    новостям
                </button>
            </div>
        );
    }
}