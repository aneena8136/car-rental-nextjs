"use client";

import React, { useState } from 'react';
import styles from './BookingOptions.module.css';

const BookingOptions: React.FC = () => {
    const [showOptions, setShowOptions] = useState(false);

    const toggleOptions = () => {
        setShowOptions(!showOptions);
    };

    return (
        <div className={styles.responsiveBooking}>
            <div 
                className={styles.responsiveBookCar} 
                onClick={toggleOptions}
            >
                <p>Book a car</p>
            </div>
            <div className={styles.responsiveQuickBook}>
                <p>Quick Book</p>
            </div>
            {showOptions && (
                <div className={styles.bookingOptions}>
                    <div className={styles.option}>
                        <label htmlFor="pickup">Select Pickup</label>
                        <select id="pickup">
                            <option value="">Choose pickup location</option>
                            {/* Add more options as needed */}
                        </select>
                    </div>
                    <div className={styles.option}>
                        <label htmlFor="dropoff">Select Dropoff</label>
                        <select id="dropoff">
                            <option value="">Choose dropoff location</option>
                            {/* Add more options as needed */}
                        </select>
                    </div>
                    <div className={styles.option}>
                        <label htmlFor="vehicleType">Vehicle Type</label>
                        <select id="vehicleType">
                            <option value="">Choose vehicle type</option>
                            {/* Add more options as needed */}
                        </select>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BookingOptions;