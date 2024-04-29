import styles from './ExternalLinkButtonColored.module.css';


function ExternalLinkButtonColored(props)
{

    return (
        <>
         <a href='#' className={styles.container}>{props.buttonText}</a>   
        </>
    );
}

export default ExternalLinkButtonColored;