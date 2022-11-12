'use client'

import { useEffect } from "react";

export default function Scroll(props: any) {

    function scrollEvent(this: any, e:any) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        })
    }


    useEffect(() => {

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', scrollEvent)
        })
        
        const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
            entry.target.classList.add("in-view")
            } else {
                entry.target.classList.remove("in-view")
            }
        })
        })

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
