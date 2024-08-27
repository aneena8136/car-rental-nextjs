import styles from './Location.module.css'

export default function Location(){
    return(
        <div className={styles.locationContainer}>
            <div className={styles.locate}>
                <div className={styles.heading}>
                    <h1>Locations</h1>
                </div>
                <div>
                    <ul>
                        {/* different locations along with the icons */}

                        <li> <img src="images/locate-red.svg" alt=""/> </li>
                        <li>Dubai</li>
                        <li>
                            <hr/>
                        </li>
                        <li> <img src="images/locate-red.svg" alt=""/> </li>
                        <li>Abu Dhabi</li>
                        <li>
                            <hr/>
                        </li>
                        <li> <img src="images/locate-red.svg" alt=""/> </li>
                        <li>Sharjah</li>
                        <li>
                            <hr/>
                        </li>
                        <li> <img src="images/locate-red.svg" alt=""/> </li>
                        <li>Fujairah</li>
                        <li>
                            <hr/>
                        </li>
                        <li><img src="images/locate-red.svg" alt=""/></li>
                        <li>Ras Al Khaimah</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}