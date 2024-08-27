'use client';
import styles from './Headernav.module.css';
import { useState } from 'react';
import Image from 'next/image';


export default function Headernav() {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(prev => !prev);
        console.log(active)
    }


    return (
        <><div className={styles.subnav}>
            <div className={styles.mainlogo}>
                <img src="images/carrental-logo.svg" alt="" />
            </div>
            <div>


            </div>
            {/* menu icon for mobile view  */}
            <div className={styles.menu} onClick={handleClick}>
                 { 
                    active ? (<Image src='/images/xmark.svg' width={20} height={20} alt=''></Image>) :(<Image src='/images/menu-icon.svg' width={20} height={20} alt='logo' />)
                }
                
            </div>

            {/* navbar elements */}
            <div className={`${styles.navelements} ${active ? styles.active : ''}`} onClick={handleClick}>

                <div>About</div>
                <div>Offers</div>
                <div>Corporate</div>
                <div>Personal</div>
                <div>Locations</div>
                <div>contact</div>
                <div className={styles.bellIcon}><img src="images/notify.svg" alt="" /></div>
                <div className={styles.desktopUser}><img src="images/john.svg" alt="" /></div>
                <div className={styles.mobUser}>login/signup</div>


            </div>
            
        </div>
        {/* a small description in the navbar */}
        <div className={styles.description}>
                <p> Sunday Pick Up/Drop-Off only at Dubai Silicon Oasis & Habtoor Grand Sales Counters | All
                    Rates
                    inclusive of VAT. T&C&apos;s apply | Follow us on Social Media for New Offers</p>
            </div>

        </>

    );
}