import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.page}>
      <Image src={"/gradients/bigGradient.png"} className={styles.bigGradient} height={1000} width={1000} alt="Big gradient" priority />
      <Image src={"/gradients/smallGradient.png"} className={styles.smallGradient} height={400} width={400} alt="Big gradient" priority />
      <section className={styles.welcome} id="welcome">
        <div className={styles.titles}>
          <h1>Ventrice</h1>
          <h2>Santino</h2>
        </div>
      </section>
      <section className={styles.about} id="about">
        <article>
          <h1>Hello there! I´m Santino</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo commodi enim tempore, voluptatum expedita excepturi rerum? Corrupti dolorem earum consequatur alias, ea non tenetur cumque, rem, optio veniam facilis modi?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo commodi enim tempore, voluptatum expedita excepturi rerum? Corrupti dolorem earum consequatur alias, ea non tenetur cumque, rem, optio veniam facilis modi?</p>
        </article>
        <aside>
          <Image src={"/me.png"} className={styles.me} height={450} width={380} alt="Me" />
        </aside>
      </section>
      </section>
      <section className={styles.contact} id="contact">
        <div className={styles.titles}>
          <h1>Have a project in mind and want to make it real?</h1>
          <Link href={"/contact"}>Contact me</Link>
        </div>
        <aside>
          <Link href={"https://www.linkedin.com/in/santinoventrice/"} target="_blank"><Image src={"/icons/LinkedIn.png"} height={35} width={35} alt="aa" /></Link>
          <Link href={"https://github.com/SantiVentri"} target="_blank"><Image src={"/icons/GitHub.png"} height={35} width={35} alt="aa" /></Link>
        </aside>
      </section>
    </div>
  );
}
