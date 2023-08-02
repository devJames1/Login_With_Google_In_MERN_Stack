import styles from "./styles.module.css";

function Home({ user }) {
    // const user = userDetails.user;

    const logout = () => {
        window.open(
            `${import.meta.env.VITE_API_URL}/auth/logout`, "_self"
        );
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Home</h1>
            <div className={styles.form_container}>
                <div className={styles.left}>
                    <img src="./images/profile.jpg" alt="profile" className={styles.img} />
                </div>
                <div className={styles.right}>
                    <h2 className={styles.form_heading}>profile</h2>
                    <img src={user.picture} alt="profile" className={styles.profile_img} />
                    <input type="text" defaultValue={user.name} className={styles.input} placeholder="Username" />
                    <input type="text" defaultValue={user.email} className={styles.input} placeholder="Email" />
                    <button className={styles.btn} onClick={logout}>Log Out</button>
                </div>
            </div>
        </div>
    )
}

export default Home;