import './SaleLinkTemplate.css'


function SaleLinkTemplate(props)
{
    return(<div className="sale-link">
        <a href="#">{props.linkText}</a>
    </div>);
}

export default SaleLinkTemplate;