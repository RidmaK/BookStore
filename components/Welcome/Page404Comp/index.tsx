import styles from "./index.module.css";
import Image from "next/image";
import Link from "next/link";

const Page404Comp = () => {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.innerDiv}>
        <Image
          className={styles.image}
          src="/404_nobackground.png.webp"
          alt="404_image"
          width={620}
          height={260}
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
          blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
          priority={true}
        />
        <div className={styles.descDiv}>
          <div className={styles.titleDiv}>
            <h1>Page Not Found</h1>
          </div>
          <div className={styles.description}>
            <p>
              Oh Dear, we can{"’"}t find that page. Perhaps you would like to{" "}
              <Link href="/">visit our homepage</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page404Comp;
