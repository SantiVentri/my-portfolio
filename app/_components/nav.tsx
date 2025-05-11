'use client'
import Link from 'next/link';
import styles from './nav.module.css';
import { useState } from 'react';

export default function Nav() {
    const [open, setOpen] = useState(false);

    function toggleMenu() {
        setOpen(!open);
    }

    return (
        <div>
            <button
                className={styles.menu_btn}
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
            <aside className={`${styles.navContainer} ${open ? styles.open : ''}`}>
                <a href="/"><h1>Ventrice</h1></a>
                <nav>
                    <Link href="#about">About me</Link>
                    <Link href="#services">Services</Link>
                    <Link href="#projects">Projects</Link>
                    <Link href="#testimonies">Testimonies</Link>
                    <Link href="#contact">Contact me</Link>
                </nav>
            </aside>
        </div>
    );
}
