import styles from './Rent.module.css'

export default function Rent() {
    return (
        <div className={styles.rentMain}>
            {/* main heading of the section */}
            <div className={styles.rentHeading}>
                <p>Rent/Lease In three easy steps</p>
            </div>
            <div className={styles.rentSteps}>
                <div className={styles.step1}>
                    <div className={styles.one}>
                        <p>01</p>
                    </div>
                    <div className={styles.selectLocation}>
                        <div className={styles.redIcons}>
                            <img src="images/redlocation.svg" alt="" />
                        </div>
                        <div className={styles.rentDetails}>
                            <p>Select the location. Browse through our available options and find the perfect car to
                                suit your
                                needs</p>
                        </div>

                    </div>
                </div>
                <div className={styles.step1}>
                    <div className={styles.one}>
                        <p>02</p>
                    </div>
                    <div className={styles.selectLocation}>
                        <div className={styles.redIcons}>
                            <img src="images/redcalender.svg" alt=""/>
                        </div>
                        <div className={styles.rentDetails}>
                            <p>Choose your desired Pick-Up date and time.</p>
                        </div>
                    </div>
                </div>
                <div className={styles.step1}>
                    <div className={styles.one}>
                        <p>03</p>
                    </div>
                    <div className={styles.selectLocation}>
                        <div className={styles.redIcons}>
                            <img src="images/redcar.svg" alt=""/>
                        </div>
                        <div className={styles.rentDetails}>
                            <p>Make payment and book the car. Select an option to either have the car delivered to your
                                location or pick it up directly from us.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}