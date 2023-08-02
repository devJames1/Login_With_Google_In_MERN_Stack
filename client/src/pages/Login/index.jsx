import { Link } from "react-router-dom";
import styles from "./styles.module.css";

function Login() {

    const googleAuth = () => {
        window.open(
            `${import.meta.env.VITE_API_URL}/auth/google/callback`, "_self"
        );
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Log in Form</h1>
            <div className={styles.form_container}>
                <div className={styles.left}>
                    <img src="./images/login.jpg" alt="login" className={styles.img} />
                </div>
                <div className={styles.right}>
                    <h2 className={styles.form_heading}>Members Log in</h2>
                    <input type="text" className={styles.input} placeholder="Email" />
                    <input type="password" className={styles.input} placeholder="Password" />
                    <button className={styles.btn}>Log In</button>
                    <p className={styles.text}>or</p>
                    <button className={styles.google_btn} onClick={googleAuth}>
                        <img src="./images/google.png" alt="google icon" />
                        <span>Sign in with Google</span>
                    </button>
                    <p className={styles.text}>
                        New Here ? <Link to="/signup">Sign Up</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login;