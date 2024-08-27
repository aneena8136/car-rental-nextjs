import styles from './Subscribe.module.css'
import Image from 'next/image';


export default function Subscribe() {
    return (

        <div className={styles.subscribeMain}>
            {/* subscription part */}
            <div className={styles.subscription}>
                <div className={styles.subscribeHeading}>
                    <p>Subscribe here for exclusive offers and updates!</p>
                    <div className={styles.subscribeInput}>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email"  className={styles.email}/>
                        <div className={styles.subscribeParagraph}>
                            <p>Don&apos;t miss out! enter your email and your name, then hit subscribe to unlock a world of
                                special offers and details.</p>
                        </div>
                        <button className={styles.subscribeButton}>Subscribe</button>
                    </div>
                </div>
                {/* part with thw mobile image */}
                <div className={styles.mobile}>
                    <div className={styles.mobileImage}>
                        <img src="images/mobile.svg" alt="" />
                    </div>
                    <div className={styles.mobileDetails}>
                        <div className={styles.mobileNumber}>
                            <p>Enter your number and receive
                                a direct link to download the app</p>
                        </div>
                        <input type="text" placeholder="Enter phone Number" />
                        <br />
                        <button>Get the link</button>
                        <p className={styles.getin}>Get in on</p>
                        <div className={styles.mobileDownload}>
                            <Image src={'/images/appstore-white.svg'} alt='' width={103} height={30}></Image>
                            <Image src={'/images/playstore-white.svg'} alt='' width={103} height={30} className={styles.mobileDownloadImage}></Image>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}