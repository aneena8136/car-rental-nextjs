import styles from "./Accordion.module.css";
import Accordion from "@/components/Questions/Accordion";

export default function Questions() {
    return (
        <>
            <div className={styles.faqContainer}>
                <div className={styles.faq}>
                    <h1>Frequently asked questions</h1>
                </div>
                <div className={styles.questionsAndContent}>
                    <Accordion
                        title="What is my eligibility to book a car?"
                        content="You should be of 18 years old or above and you must possess a valid driving license."
                    />
                    <hr className={styles.hrLine} />
                    <Accordion title="Can i book for any period of time?" content="Yes, you can book for any period of time; just specify your desired rental duration." />
                    <hr className={styles.hrLine} />
                    <Accordion title="Can i opt car for a longer period?" content="Yes, you can opt for a car rental for a longer period; just select the duration you need." />
                    <hr className={styles.hrLine} />
                    <Accordion title="Can i book one-way trip?" content="Yes, you can book a one-way trip; choose the option during the booking process." />
                    <hr className={styles.hrLine} />
                    <Accordion
                        title="Is there home delivery option available?"
                        content="Yes, home delivery options are available; check the specific service or store for details."
                    />
                    <hr className={styles.hrLine} />
                    <Accordion title="How can i make the payment?" content="You can make the payment through online banking, credit card, or digital wallet services." />
                </div>
            </div>
        </>
    );
}