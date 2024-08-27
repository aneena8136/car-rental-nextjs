import styles from './Headericons.module.css'

export default function Headericons() {
    return (
        <main className={styles.headericons}>
            {/* social media icons for header */}
            <div className={styles.media}>
                <ul>
                    <li>
                        <a href="https://www.facebook.com/"><img id="fb" src="images/fb.svg" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/accounts/login/?hl=en"><img id="insta"
                            src="images/insta.svg" alt="" />
                        </a>
                    </li>
                    <li><a href="https://x.com/i/flow/login"><img id="x" src="images/x.svg" alt="" />
                    </a></li>
                    <li><a href="https://www.linkedin.com/"><img id="in" src="images/in.svg" alt="" />
                    </a></li>

                </ul>
            </div>
        </main>
    );
}