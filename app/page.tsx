import Image from 'next/image'
import styles from './page.module.css'
import timeStyles from './CurrentTime.module.scss'
import { DateTime, Settings } from 'luxon'
import Link from 'next/link';
import CurrentTime from './CurrentTime';
import { Roboto_Mono  } from '@next/font/google'
import Greeting from './Greeting';
import NavIcons from './NavIcons';

const robotoMono = Roboto_Mono({ subsets: ['latin'], weight: '400' });

export default function Home() {

  return (
    <div className={styles.container}>
      <main className={styles.main}>

         <div id="intro" className="snap-section">
            <div className="about-inner">
              <Greeting/> <span className="blog-title-emoji">👋</span> Feel Free to get in contact with <a href="#contact">me</a>.
           </div>
         </div>

         <div id="about" className="snap-section">
            <div className="about-inner">
              <p className={`${robotoMono.className} ${timeStyles.timeLine}`}><span className="location-pin">📍</span>&nbsp;Concord,&nbsp;NH,&nbsp;USA:&nbsp;
                <CurrentTime/>
              </p>
              <p id="bio">Hi. I&apos;m a recent MS Graduate of <a href="https://unh.edu/" target="_blank" rel="noreferrer">The University of New Hampshire</a> in Information Technology. Over the past few  years I&apos;ve become especially interested in pursuing web development. I enjoy using Python and React to make my ideas come to life.  I&apos;m currently working as a contract web developer for Tufts University.</p>
              <a id="resume" target="_blank" rel="noopener noreferrer" download="ResumeAlexTenczar">resume</a>
            </div>
          </div>
      
         <div id="contact" className="snap-section">
            <div className="about-inner">
              <div id="message">
                <p><a href="https://www.linkedin.com/in/alexander-tenczar/" target="_blank" rel="noopener noreferrer">linkedin</a>, <a href="https://github.com/alextenczar" target="_blank" rel="noopener noreferrer">github</a></p>
                <p>i would love to hear from you!</p>
              </div>

              <form id="contact-form" action="https://formspree.io/f/mvovvlro" target="_blank" rel="noopener noreferrer" method="POST">
                <div className="form-group">
                  <input type="text"  name="name" className="form-control" placeholder="name" required/>
                </div>
                <div className="form-group">
                  <input type="email" name="_replyto" className="form-control" aria-describedby="emailHelp" placeholder="email" required/>
                </div>
                <div className="form-group">
                  <textarea className="form-control" name="message" rows={10} placeholder="message" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">submit</button>
              </form>
            </div>
        </div>
      
      </main>
      <NavIcons></NavIcons>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
