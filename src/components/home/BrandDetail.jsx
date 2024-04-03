

function BrandDetail(props)
{
    return (
        <div>
            <img src={process.env.PUBLIC_URL+props.imageLink}/>
        </div>
    );
}

export default BrandDetail;