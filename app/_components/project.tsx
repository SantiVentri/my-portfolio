'use client'

import styles from './project.module.css';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Project(props: { img: string, name: string, date: string, description: string, url: string }) {
    const router = useRouter();
    return (
        <div className={styles.container} onClick={() => router.push(props.url)}>
            <Image src={props.img} height={200} width={350} alt='project' draggable={false} loading='lazy' />
            <div>
                <h1>{props.name}</h1>
                <p>{props.date}</p>
            </div>
            <p>{props.description}</p>
        </div>
    )
}