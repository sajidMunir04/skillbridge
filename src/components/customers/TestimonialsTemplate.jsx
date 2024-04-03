import CustomerTestimonial from "./CustomerTestimonial";
import styles from "./TestimonialsTemplate.module.css";
import LayoutHeader from "../home/LayoutHeader";

function TestimonialsTemplate(props)
{
    return (<div className={styles.container}>
        <div className={styles.containerHeader}>
            <LayoutHeader heading="Our Testimonials" description="Lorem ipsum dolor sit amet consectetur. 
                Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. 
            Ac cum eget habitasse in velit fringilla feugiat senectus in." buttonText="View All"/>
        </div>
        <div className={styles.content}>
            <CustomerTestimonial reviewContent="The web design course provided a solid foundation for me. 
            The instructors were knowledgeable and supportive, and the interactive 
            learning environment was engaging. I highly recommend it!" customerName="Sarah L" customerImage='/images/Image(2).png'/>
            <CustomerTestimonial reviewContent="The web design course provided a solid foundation for me. 
            The instructors were knowledgeable and supportive, and the interactive 
            learning environment was engaging. I highly recommend it!" customerName="Sarah L" customerImage='/images/Image(2).png'/>
            <CustomerTestimonial reviewContent="The web design course provided a solid foundation for me. 
            The instructors were knowledgeable and supportive, and the interactive 
            learning environment was engaging. I highly recommend it!" customerName="Sarah L" customerImage='/images/Image(2).png'/>
            <CustomerTestimonial reviewContent="The web design course provided a solid foundation for me. 
            The instructors were knowledgeable and supportive, and the interactive 
            learning environment was engaging. I highly recommend it!" customerName="Sarah L" customerImage='/images/Image(2).png'/>
        </div>
    </div>);
}

export default TestimonialsTemplate;