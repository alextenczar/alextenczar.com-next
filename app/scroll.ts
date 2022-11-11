'use client'

import { useEffect } from "react";
import React from 'react';

export default function Scroll(props: any) {

    let scrollDir = 0

    function scrollEvent(this: any, e:any) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        })
    }

    function scrollAccelerate() {
        let scrollContainer = document.querySelector('main')
        console.log(scrollContainer.scrollTop)
        let scrollVal = scrollContainer.scrollTop
        if(scrollVal > scrollDir) {
            scrollContainer?.scrollBy(0, 1)
        } else {
            scrollContainer?.scrollBy(0 , -1)
        }
        scrollDir = scrollContainer?.scrollTop
    }


    useEffect(() => {
        //let scrollDir = window.scrollY

        //document.querySelector('main').addEventListener('scroll', scrollAccelerate)

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

        let snapDivs = document.querySelectorAll('main .about-inner')
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
