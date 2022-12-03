'use client'

import { useEffect } from "react";

export default function Scroll(props: any) {

    function scrollEvent(this: any, e: any) {
        e.preventDefault();
        let scrollElement = document.querySelector(this.getAttribute('href'))
        scrollElement.scrollIntoView({
            block: "nearest",
            behavior: 'smooth'
        },
            {
                duration: 250 // aprox. the duration that chrome uses,
            }
        )
    }


    useEffect(() => {

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', scrollEvent)
        })

        let slides = document.querySelectorAll('.snap-section')
        for (let i = 0; i < slides.length; i++) {
            slides[i].querySelector('.section-inner').setAttribute("data-position", i.toString());
        }

        let options = {
            rootMargin: '0px 0px -50% 0px',
        }

        const observer = new IntersectionObserver((entries, observer,) => {
            entries.forEach(entry => {
                let entryRelativeProgress = document.querySelectorAll('.nav-progress-container svg')[entry.target.getAttribute('data-position')];
                if (entry.isIntersecting) {
                    entry.target.classList.add("in-view")
                    entryRelativeProgress.classList.add("progress-in-view")

                } else {
                    entry.target.classList.remove("in-view")
                    entryRelativeProgress.classList.remove("progress-in-view")
                }
            })
        }, options)

        let snapDivs = document.querySelectorAll('main .section-inner')
        snapDivs.forEach((div) => {
            observer.observe(div)
        })

        return () => {
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.removeEventListener('click', scrollEvent);
            });
        }
    }, [])


    return (
        null
    );
}