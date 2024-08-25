import styles from './PopularCars.module.css'

export default function PopularCars() {
    return (
        <div className={styles.mainDiv}>
            <p className={styles.carsText}>Most popular cars</p>
            <div className={styles.cars}>
                <div className={styles.carDiv}>
                    <div className={styles.carImage}>
                        <img src="images/car1.svg" alt="" />
                    </div>
                    <div className={styles.cardetails}>
                        <div className={styles.carname}>
                            <h1>Mitsubishi Eclipse</h1>
                            <p>Eclipse Cross is a fusion of sharp coupe looks and dynamic SUV mobility with signature
                                Mitsubishi
                                styling, technology and driving confidence.</p>
                        </div>
                        <div className={styles.carspec}>
                            <ul>
                                <li><img src="images/carseat.svg" alt="" /></li>
                                <li>6 people</li>
                                <li><img src="images/light.svg" alt="" /></li>
                                <li>Automatic</li>
                                <li><img src="images/cardoor.svg" alt="" /></li>
                                <li>5 Doors</li>
                                <li><img src="images/AC.svg" alt="" /></li>
                                <li>AC</li>
                            </ul>
                        </div>
                        <div className={styles.carbook}>
                            <div className={styles.carprice}>
                                <p>AED 2700/ Monthly</p>
                            </div>
                            <div className={styles.carbooknow}>
                                <button>Book Now</button>
                            </div>
                        </div>
                    </div>

                </div>
                <div>
                <div className={styles.carDiv}>
                    <div className={styles.carImage}>
                        <img src="images/car2.svg" alt=""/>
                    </div>
                    <div className={styles.cardetails}>
                        <div className={styles.carname}>
                            <h1>jac j7</h1>
                            <p>S3 Plus has been rated Five-Star in C-NCAP including front impact, side impact, frontal
                                side
                                impact & Whipping test.</p>
                        </div>
                        <div className={styles.carspec}>
                            <ul>
                                <li><img src="images/carseat.svg" alt=""/></li>
                                <li>6 people</li>
                                <li><img src="images/light.svg" alt=""/></li>
                                <li>Automatic</li>
                                <li><img src="images/cardoor.svg" alt=""/></li>
                                <li>5 Doors</li>
                                <li><img src="images/AC.svg" alt=""/></li>
                                <li>AC</li>
                            </ul>
                        </div>
                        <div className={styles.carbook}>
                            <div className={styles.carprice}>
                                <p>AED 2700/ Monthly</p>
                            </div>
                            <div className={styles.carbooknow}>
                                <button>Book Now</button>
                            </div>
                        </div>
                    </div>

                </div>
                </div>
            </div>
        </div>
    );
}