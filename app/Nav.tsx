import React from 'react';
import styles from './Nav.module.scss'
import Link from 'next/link'


export default function Nav(props: any) {
    return (
        <nav className={styles['nav-container']}>
            <div className={styles['nav-inner']}>
                <div className={styles['nav-title-container']}>
                    <span className={styles['nav-title']}><a className={styles['nav-title']} href='#intro'>Alex Tenczar</a></span>
                    <div className={styles['nav-right']}>
                        <span className={styles['nav-sub-title']}><a className={styles['nav-title']} href='#about'>About</a></span>
                        <span className={styles['nav-sub-title']}><Link className={styles['nav-title']} href='/'>Projects</Link></span>
                        <span className={styles['nav-sub-title']}><a className={styles['nav-title']} href='#contact'>Contact</a></span>
                    </div>
                </div>
            </div>
        </nav>
    );
}
