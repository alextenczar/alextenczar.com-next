
'use client';

import { useEffect } from "react";


export default function NavIcons() {

  function scrollNext(this: any, e:any) {
      e.preventDefault();
      let nextSection = document.querySelector('.in-view')?.parentElement?.nextElementSibling
      if(nextSection) {
          nextSection.scrollIntoView({
              behavior: 'smooth'
          })
      }
  }

  function scrollPrev(this: any, e:any) {
      e.preventDefault();
      let previousSection = document.querySelector('.in-view')?.parentElement?.previousElementSibling
      if(previousSection) {
          previousSection.scrollIntoView({
              behavior: 'smooth'
          })
      }
  }

  useEffect(() => {
        let downButton = document.querySelector('.down-button')
        if(downButton){
            downButton.addEventListener('click', scrollNext)
        }

        let upButton = document.querySelector('.up-button')
        if(upButton) {
            upButton.addEventListener('click', scrollPrev)
        }

        return () => {
          if(upButton) {
              upButton.removeEventListener('click', scrollPrev)
          }
          if(downButton){
            downButton.removeEventListener('click', scrollNext)
          }
        }
  }, [])

  return (
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
  );
}


