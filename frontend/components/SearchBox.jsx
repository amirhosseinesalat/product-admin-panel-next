import { AiOutlineSearch } from "react-icons/ai";
import styles from "./SearchBox.module.css";
import Image from "next/image";

function SearchBox({ onSearch }) {
  return (
    <div className={styles.header}>
      <div className={styles.searchBox}>
        <AiOutlineSearch size={20} color="#777" />
        <input
          type="text"
          placeholder="جستجو کالا..."
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>

      <div className={styles.rightSection}>
        <div className={styles.divider}></div>

        <Image
          className={styles.avatar}
          src="/images/profile.png"
          width={500}
          height={500}
          alt="Picture of the author"
        />

        <div className={styles.userInfo}>
          <p className={styles.name}>امیرحسین اصالت</p>
          <span className={styles.role} style={{ marginTop: "10px" }}>
            مدیر
          </span>
        </div>
      </div>
    </div>
  );
}

export default SearchBox;
