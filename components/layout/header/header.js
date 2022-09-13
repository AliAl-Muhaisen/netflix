import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "./header.module.css";
import Image from "next/image";

const Header = (props) => {
  const router = useRouter();
  const { userName } = props;
  const [showDropdown, setShowDropdown] = useState(false);

  const handleShowDropdown = () => {
    e.preventDefault();
    setShowDropdown(!showDropdown);
  };

  const handleOnClickHome = (e) => {
    e.preventDefault();
    router.push("/");
  };
  const handleOnClickMyList = (e) => {
    e.preventDefault();
    router.push("/browse/my-list");
  };
  return (
    <header className={styles.container}>
      <div className={styles.wrapper}>
        <div>
          <Link href="/" className={styles.logoLink}>
            <a>
              <div className={styles.logoWrapper}>
                <Image
                  src="/icons/netflix.svg"
                  alt="Netflix Logo"
                  width="130px"
                  height="35px"
                />
              </div>
            </a>
          </Link>
        </div>

        <ul className={styles.navItems}>
          <li className={styles.navItem} onClick={handleOnClickHome}>
            Home
          </li>
          <li className={styles.navItem2} onClick={handleOnClickMyList}>
            My List
          </li>
        </ul>
        <nav className={styles.navContainer}>
          <div>
            <button
              type=""
              className={styles.usernameBtn}
              onClick={handleShowDropdown}
            >
              <p className={styles.username}>{userName}</p>
              {/* Expand  */}
              <Image
                src="/icons/expand_more.svg"
                alt="Expand dropdown"
                width="25px"
                height="25px"
              />
            </button>

            {showDropdown && (
              <div className={styles.navDropdown}>
                <div>
                  <Link href="/login">
                    <a className={styles.linkName}>Sign Out</a>
                  </Link>
                  <div className={styles.lineWrapper}></div>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};
export default Header;
