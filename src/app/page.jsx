import Image from "next/image";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative thought agency</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
          pariatur reprehenderit cumque voluptate. Doloremque facere ad velit
          molestiae iusto cum, magni saepe quos. Neque consequuntur repellat
          tempora quam eaque nostrum. Impedit maiores iusto, fuga.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" alt="" fill className={styles.branding} />
        </div>
      </div>
      <div className={styles.imgContainer}>
          <Image src="/hero.gif" alt="" fill className={styles.heroImg} />
        </div>
    </div>
  );
};

export default Home;
