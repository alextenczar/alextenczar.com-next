
'use client';

import React, { useEffect, useState, MouseEvent } from "react";
import { setInterval } from "timers";


export default function NavIcons() {

    const [progressState, setprogress] = useState([]);
    let touchstartX = 0
    let touchendX = 0
    let direction = 'forwards'

    function checkDirection(e: any) {
        if (touchendX < touchstartX) {
            scrollPrev()
        }
        if (touchendX > touchstartX) {
            scrollNext()
        }
    }

    function scrollNext(this: any) {
        setTimeout(() => {
            let nextSection = document.querySelector('.in-view')?.nextElementSibling
            if (nextSection) {
                nextSection.scrollIntoView({
                    behavior: 'smooth'
                })
            }
        }, 60);

    }

    function scrollPrev(this: any) {
        setTimeout(() => {
            let previousSection = document.querySelector('.in-view')?.previousElementSibling
            if (previousSection) {
                previousSection.scrollIntoView({
                    behavior: 'smooth'
                })
            }
        }, 60);

    }

    function progressStart(e: any) {
        if (e instanceof TouchEvent) {
            touchstartX = e.changedTouches[0].screenX
        }
    }

    function progressEnd(e: any) {
        if (e instanceof TouchEvent) {
            touchendX = e.changedTouches[0].screenX
        }
        checkDirection(e)
    }

    function progressCycle(e: any) {
        let nextSection = document.querySelector('.in-view')?.nextElementSibling
        let previousSection = document.querySelector('.in-view')?.previousElementSibling
        if (nextSection === null) {
            direction = 'backwards'
        }
        if (previousSection === null) {
            direction = 'forwards'
        }
        if (direction === 'forwards') {
            scrollNext()
        } else {
            scrollPrev()
        }
    }

    useEffect(() => {

        let totalSlides = document.querySelectorAll('.snap-section').length
        let progress: any = Array.from({ length: totalSlides }, (_, i) => <svg key={i} height="32" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="8" /><path d="m0 0h32v32h-32z" fill="none" /></svg>);

        setprogress(progress)

        let downButton = document.querySelector('.down-button')
        if (downButton) {
            downButton.addEventListener('click', scrollNext)
        }

        let upButton = document.querySelector('.up-button')
        if (upButton) {
            upButton.addEventListener('click', scrollPrev)
        }

        let navProgress = document.querySelector('.nav-progress-container')
        if (navProgress) {
            navProgress.addEventListener('touchstart', progressStart)
            navProgress.addEventListener('touchend', progressEnd)
            navProgress.addEventListener('click', progressCycle)
        }
        return () => {
            if (upButton) {
                upButton.removeEventListener('click', scrollPrev)
            }
            if (downButton) {
                downButton.removeEventListener('click', scrollNext)
            }
            if (navProgress) {
                navProgress.removeEventListener('touchstart', progressStart)
                navProgress.removeEventListener('touchend', progressEnd)
            }
        }
    }, [])

    return (
        <div className="nav-extras">
            <div className="nav-progress-container">
                {progressState}
            </div>
            <div className="nav-icons-container">
                <div className="nav-icons-inner-container">
                    <button className="up-button">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                        </svg>
                    </button>
                    <button className="down-button">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}


