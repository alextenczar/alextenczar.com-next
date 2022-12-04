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
            //let slide = slides[i].querySelector('.section-inner')
            if (slides[i]) {
                slides[i].setAttribute("data-position", i.toString())!
            }
        }

        let options = {
            threshold: "0.5",
        }

        const observer = new IntersectionObserver((entries, observer,) => {
            entries.forEach(entry => {
                console.log(entry)
                let getPosition: any = entry.target.getAttribute('data-position')
                if (getPosition) {
                    let entryRelativeProgress = document?.querySelectorAll('.nav-progress-container svg')[getPosition];
                    if (entry.isIntersecting) {
                        entry.target.classList.add("in-view")
                        entryRelativeProgress.classList.add("progress-in-view")
                    } else {
                        entry.target.classList.remove("in-view")
                        entryRelativeProgress.classList.remove("progress-in-view")
                    }
                }
            })
        }, options)

        let snapDivs = document.querySelectorAll('main .snap-section')
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
