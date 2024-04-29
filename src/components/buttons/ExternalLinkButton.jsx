import styles from './ExternalLinkButton.module.css'

function ExternalLinkButton(props)
{
    return (<>
        <a href='#' className={`${styles.link}  ${props.bg === 'white' ? styles.whiteBackground : styles.grayBackground}`}>{props.buttonText}</a>
    </>);
}

export default ExternalLinkButton;
