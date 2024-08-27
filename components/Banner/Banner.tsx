import styles from './Banner.module.css'
// this is the car banner 
export default function Banner() {
    return (
        <div className={styles.bannerMain}>
            
            <div className={styles.bannerContent}>
                <div className={styles.bannerText}>
                    <p>Receive guaranteed <button className={styles.bannerButton}>Gift Voucher</button> </p>
                </div>
                <p>on a monthly hire or lease</p>
            </div>
        </div>
    );
}
