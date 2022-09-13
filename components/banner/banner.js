import styles from "./banner.module.css";
import Image from "next/image";
const Banner = (props) => {
  const { title, subTitle, imagUrl } = props;
  const handleOnClick = () => {
    console.log("hi");
  };
  return (
    <div className={styles.container}>
      <div className={styles.leftWrapper}>
        <div className={styles.left}>
          <div className={styles.nseriesWrapper}>
            <p className={styles.firstLetter}>N</p>
            <p className={styles.series}>S E R I E S</p>
          </div>

          <h3 className={styles.title}>{title}</h3>

          <h3 className={styles.subTitle}>{subTitle}</h3>

          <div className={styles.playBtnWrapper}>
            <button onClick={handleOnClick} className={styles.btnWithIcon}>
              <Image
                src="/icons/play_arrow.svg"
                alt="Play arrow"
                width="32px"
                height="32px"
              />
              <span className={styles.playText}>Play</span>
            </button>
          </div>
        </div>
      </div>
      <div
        className={styles.bannerImg}
        style={{
          backgroundImage: `url(${imagUrl})`,
        }}
      ></div>
    </div>
  );
};

export default Banner;
