import styles from "./Navigation.module.css";

const Navigation = () => {

  return (
    <nav className={`${styles.navigation} container`}>
        <div className="Logo">
            <img src="./image/logo.png" alt="Logo" />
        </div>

        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
  )
}

export default Navigation