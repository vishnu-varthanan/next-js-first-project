import Image from "next/image";
import styles from "./about.module.css";
const AboutPage = () => {
  return (
    <div>
      <div className={styles.imgContainer}>
        <Image src="https://images.pexels.com/photos/13172901/pexels-photo-13172901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" fill />
      </div>
    </div>
  );
};

export default AboutPage;
