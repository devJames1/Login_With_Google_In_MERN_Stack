import { Link } from "react-router-dom";
import styles from "./styles.module.css";

function Signup() {

    const googleAuth = () => {
        window.open(
            `${import.meta.env.VITE_API_URL}/auth/google/callback`, "_self"
        );
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Sign up Form</h1>
            <div className={styles.form_container}>
                <div className={styles.left}>
                    <img src="./images/signup.jpg" alt="signup" className={styles.img} />
                </div>
                <div className={styles.right}>
                    <h2 className={styles.form_heading}>Create Account</h2>
                    <input type="text" className={styles.input} placeholder="Username" />
                    <input type="text" className={styles.input} placeholder="Email" />
                    <input type="password" className={styles.input} placeholder="Password" />
                    <button className={styles.btn}>Sign up</button>
                    <p className={styles.text}>or</p>
                    <button className={styles.google_btn} onClick={googleAuth}>
                        <img src="./images/google.png" alt="google icon" />
                        <span>Sign up with Google</span>
                    </button>
                    <p className={styles.text}>
                        Already have account ? <Link to="/login">Login</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Signup;