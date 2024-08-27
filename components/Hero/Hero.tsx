import styles from './Hero.module.css'
export default function Hero() {
    return (
        <div className={styles.hero}>
            {/* This is the first row of the hero section */}
            <div className={styles.sectionOne}>
                {/* pickup button */}
                <div>
                    <div className={styles.pickup}>
                        Same as Pick-Up
                    </div>
                    <div className={styles.line}>
                        <hr />

                    </div>
                </div>
                {/* dropp off button */}
                <div className={styles.dropoff}>
                    <p>Different Drop-Off</p>
                </div>
                {/* select vehicle type button */}
                <div className={styles.vehicletype}>
                    <button className={styles.vehicle}>

                        <select name="" id="">
                            <option value="">Select Vehicle type</option>
                            <option value="">Sedan</option>
                            <option value="">Suv</option>
                            <option value="">Luxury</option>
                        </select>

                    </button>

                </div>
            </div>
            {/* Second row of the Hero section */}
            <div className={styles.sectionTwo}>
                {/* Button to choose location */}
                <button className={styles.location}>
                    <img src="images/location.svg" alt="" />

                    <select name="" id="" className={styles.locationSelect}>
                        <option value="">Al quoz</option>
                        <option value="">Al Nazar</option>
                        <option value="">Al Bilal</option>
                    </select>
                </button>
                {/* input box to choose date */}
                <input type="datetime-local" className={styles.chooseDate} />
                <input type="datetime-local" className={styles.chooseDate} />
                {/* Search Button */}
                <button className={styles.search}>
                    <img src="images/search.svg" alt="" />
                </button>
                <hr className={styles.sectionTwoHr} />
                {/* Quick Book Button */}
                <button className={styles.quick}>
                    <p>Quick Book</p>
                </button>
            </div>
            {/* last row of the hero section */}
            <div className={styles.lastSection}>
                <div>
                    <p className={styles.downloadParagraph}>Download our App for easy accessibility anytime, anywhere!</p>
                </div>
                {/* download-appstore and playstore */}
                <div className={styles.downloadStore}>
                    <div >
                        <img src="images/app.svg" alt="" />
                    </div>
                    <div>
                        <img src="images/play.svg" alt="" />
                    </div>
                </div>
            </div>
            {/* Responsive Hero code  */}
            <div className={styles.responsiveBooking}>
                <div className={styles.responsiveBookCar}>
                    <p>Book a car</p>
                </div>
              
                <div className={styles.responsiveQuickBook}>
                    <p>Quick Book</p>
                </div>
            </div>
        </div>
    );
}