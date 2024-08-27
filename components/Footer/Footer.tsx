import styles from './Footer.module.css'


export default function Footer() {
    return (
        <>
            <div className={styles.footerComponent}>
                <div className={styles.footerMain}>
                    <div className={styles.companyInfo}>
                        {/* footer logo */}
                        <ul>
                            <li><img className={styles.footerLogo} src="images/footer-logo.svg" alt="" /></li>
                            <div id="member">
                                <li>Member of the Al Habtoor Group</li>
                            </div>
                        </ul>
                    </div>
                    {/* footer main contents */}
                    <div className={styles.footerContent}>
                        <div className={styles.footerNav}>
                            <ul>
                                <li>Home</li>
                                <li>About us</li>
                                <li>Services</li>
                            </ul>

                        </div>
                        <div className={styles.footerNav}>
                            <ul>
                                <li>Offers</li>
                                <li>Location</li>
                                <li>Contact us</li>
                            </ul>
                        </div>
                        <div className={styles.footerNav}>
                            <ul>
                                <li>FAQ</li>
                                <li>Privacy Policy</li>
                                <li> Service Request</li>
                            </ul>
                        </div>
                        <div className={styles.footerNav}>
                            <ul>
                                <li>Career</li>
                                <li>Terms & Condition</li>
                            </ul>
                        </div>
                    </div>
                    {/* footer social media */}
                    <div className={styles.followUs}>
                        <div className={styles.followText}>
                            <p> FOLLOW US ON</p>
                        </div>
                        <div className={styles.footerMedia}>
                            <div>
                                <ul>
                                    <li>
                                        <a href="https://www.facebook.com/"><img src="images/footer/Social Icons.svg"
                                            alt="" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://x.com/i/flow/login"><img src="images/footer/Social Icons (1).svg"
                                            alt="" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/accounts/login/?hl=en"><img
                                            src="images/footer/Social Icons (2).svg" alt="" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/"><img src="images/footer/Social Icons (3).svg"
                                            alt="" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.youtube.com/"><img src="images/footer/Social Icons (4).svg"
                                            alt="" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li><img src="images/footer/image 270.svg" alt="" /></li>
                                    <li><img src="images/footer/image 273.svg" alt="" /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* company branches */}
                <div className={styles.companies}>
                    <div className={styles.companyTitle}>
                        <p>Al Habtoor Companies</p>
                    </div>
                    <div className={styles.services}>
                        <ul>
                            <li>Hospitality</li>
                            <li>Real Estate</li>
                            <li>Education</li>
                            <li>Publishing</li>
                            <li>Automotive</li>
                            <li>Vehicle Leasing</li>
                        </ul>
                    </div>
                </div>
                {/* copy right */}
                <hr className={styles.footerHr} />
                <div className={styles.copyRight}>
                    <p>© 2018 Diamondlease LLC - All Rights Reserved.</p>
                </div>
            </div>
            {/* // responsive footer part */}
            <div className={styles.responsiveFooter}>
                {/* resposnive footer first part */}
                <div className={styles.resFooter1}>
                    <div className={styles.row1}>
                        <div>
                            <img src="images/responsive/white-company-logo.svg" alt="" />
                        </div>
                        <div className={styles.row1Icons}>
                            <ul>
                                {/* social media icons */}
                                <li><img src="images/responsive/res fb.svg" alt="" /></li>
                                <li><img src="images/responsive/x res.svg" alt="" /></li>
                                <li><img src="images/responsive/insta res.svg" alt="" /></li>
                                <li><img src="images/responsive/linked res.svg" alt="" /></li>
                                <li><img src="images/responsive/utube res.svg" alt="" /></li>

                            </ul>
                        </div>
                    </div>
                    {/* main contents */}
                    <div className={styles.row2}>
                        <ul>
                            <li>Home</li>
                            <li>Offers</li>
                            <li>career</li>
                            <li>About us</li>
                            <li>Locations</li>

                        </ul>
                    </div>
                    <div className={styles.row2}>
                        <ul>
                            <li>Faq</li>
                            <li>Terms & conditions</li>
                            <li>service request</li>

                        </ul>
                    </div>
                    <div className={styles.row2}>
                        <ul>
                            <li>privacy policy</li>
                            <li>Services</li>
                            <li>contact us</li>

                        </ul>
                    </div>
                </div>
                <div className={styles.resFooter2}>
                    <p>Al Habtoor Companies</p>
                    <div className={styles.row3}>
                        <ul>
                            <li>Hospitality</li>
                            <li>Real Estate</li>
                            <li>Publishing</li>
                        </ul>
                    </div>
                    <div className={styles.row3}>
                        <ul>
                            <li>Automotive</li>
                            <li>Vehicle Leasing</li>
                        </ul>
                    </div>
                    <div>
                        <img src="images/responsive/image-footer.svg" alt="" className={styles.resFooter2Img} />
                    </div>
                    <div>
                        <hr />
                    </div>
                    <div className={styles.footerCopy} />
                    <p>© 2023 Car rental LLC - All Rights Reserved. </p>
                </div>
            </div>

        </>
    );
}