import React, { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Swipe from "react-easy-swipe";
import Image from "next/image";


const MyCarousel = (params) => {
    const [currentSlide, setCurrentSlide] = useState(0)

    const nextSlide = () => {
        let newSlide =
            currentSlide === params.content.length - 1
                ? 0
                : currentSlide + 1;
        setCurrentSlide(newSlide);
    };

    const prevSlide = () => {
        let newSlide =
            currentSlide === 0
                ? params.content.length - 1
                : currentSlide - 1;
        setCurrentSlide(newSlide);
    };

    return (

        <>
            <AiOutlineLeft
                onClick={() => {
                    prevSlide()
                }}
                className="absolute left-0 text-3xl inset-y-1/2 text-white cursor-pointer z-10"
            />

            <Swipe onSwipeLeft={nextSlide} onSwipeRight={prevSlide}>
                {
                    params.content.map((slide, index) => {
                        return (
                            <div key={index} className={
                                index === currentSlide
                                    ? "block min-w-full h-full"
                                    : "hidden"
                            }>
                                <Image
                                    src={`${process.env.APIpath}${slide.image.url}`}
                                    alt="This is a carousel slide"
                                    layout={"responsive"}
                                    width={300}
                                    height={200}
                                    objectFit={"cover"}
                                />
                            </div>
                        );
                    })
                }
            </Swipe>

            <AiOutlineRight
                onClick={() => {
                    nextSlide()
                }}
                className="absolute right-0 text-3xl inset-y-1/2 text-white cursor-pointer z-10"
            />
        </>
    );
}

export default MyCarousel;