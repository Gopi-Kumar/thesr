import './Service.css'
import Service from './Service'

function Services(){
    return (
        <div className="Services">
            <h1>Services that we offer</h1>
            <Service 
                name="Web, Mobile, Desktop Application Development"
                info="We provide attractive cross-platform apps with high label security facilities at a very genuine price."
            />
            <Service 
                name="School Management System"
                info="A great school management system tool that provides digital solutions for all the hurdles you face in day-to-day school activities and save precious time to
                deal with real challenges of your core business area which is Education..."
            />
            <Service 
                name="Identity Card Service"
                info="We provide beautifully designed school id card, employee id card in very low time at a very cheap price"
            />
            <Service 
                name="Graphics Desinging"
                info="Graphic design services like logo, banner, poster, template, calendar etc designed by expert and experienced designers"
            />
            <Service 
                name="YouTube Channel Managment"
                info="In this service, we provide channel logo, channel cover photo, video editing, marketing for videos that you can only focus on your content"
            />
            <Service 
                name="Photo and Video Editing"
                info="Stunning photo and video editing for your social media accounts like Facebook, Youtube, Instagram"
            />

        </div>
    )
}


export default Services;