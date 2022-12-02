import Ratio from "react-bootstrap/Ratio"

const Map = (props) => {
    const link = "https://maps.google.com/maps?q=" + props.lat + "," + props.lng + "&t=&z=15&ie=UTF8&iwloc=&output=embed"

    return (
        <div style={{width: 800, height: "auto"}}>
            <Ratio aspectRatio="16x9">
                {/* <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
                    width="600"
                    height="450"
                    frameBorder="0"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                /> */}
                <iframe 
                    width="300" 
                    height="170" 
                    frameborder="0" 
                    scrolling="no" 
                    marginheight="0" 
                    marginwidth="0" 
                    src={link}
                >
                </iframe>
            </Ratio>
        </div>
    )
}

export default Map