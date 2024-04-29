

function BrandDetail(props)
{
    return (
        <div>
            <img src={process.env.PUBLIC_URL+props.imageLink} alt='an image'/>
        </div>
    );
}

export default BrandDetail;