import styles from './ExternalLinkButtonColored.module.css';


function ExternalLinkButtonColored(props)
{

    return (
        <>
         <a className={styles.container}>{props.buttonText}</a>   
        </>
    );
}

export default ExternalLinkButtonColored;