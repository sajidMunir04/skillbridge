import styles from './SectionHeading.module.css';


function SectionHeading()
{
    return(<div className={styles.container}>
        <h2 className={styles.heading}>Achievements</h2>
        <p className={styles.description}>Our commitment to excellence has led us to achieve significant milestones 
        along our journey. Here are some of our notable achievements</p>
    </div>);
}

export default SectionHeading;