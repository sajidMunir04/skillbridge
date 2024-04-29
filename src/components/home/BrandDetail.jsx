

function BrandDetail(props)
{
    return (
        <div>
            <img src={process.env.PUBLIC_URL+props.imageLink} alt='informational'/>
        </div>
    );
}

export default BrandDetail;