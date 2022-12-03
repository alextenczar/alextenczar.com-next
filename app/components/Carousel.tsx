'use client'

import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react'

export default function Carousel(props: any) {
    const [emblaRef, emblaApi] = useEmblaCarousel()

      const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    return (
        <div className="embla">
        <div className="embla__viewport">
            <div className="embla__container">
            <div className="embla__slide">Slide 1</div>
            <div className="embla__slide">Slide 2</div>
            <div className="embla__slide">Slide 3</div>
            </div>
        </div>
        <button className="embla__prev">Prev</button>
        <button className="embla__next">Next</button>
        </div>
    );
}
