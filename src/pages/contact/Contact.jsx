import "./contact.css";
import { Form, Button } from "react-bootstrap";
// import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
function Contact() {
    return <div className="contact">
        <div className="contactItem">
            <span className="contactTitle mt-4">CONTACT WITH ME</span>

            <img
                src="https://media-exp1.licdn.com/dms/image/C5103AQHI6p8E8J-pyw/profile-displayphoto-shrink_200_200/0/1567059412900?e=1648080000&v=beta&t=GBZztxZ0Fb4yJyUwLyBlVj8oWJ8IacW9pDN_tvxcDVU"
                alt=""
            />
            <p>Hello!!
                I'm Afsana Akter Eva. I'm a React Developer. I have graduated B.Sc focused on Computer Science & Engineering from
                Southeast University. I am a
                hard-working, self-learner, and passionate about solving problems
                while working in a team.
            </p>
        </div>

        <div className="d-flex justify-content-center align-item-center pb-5 mb-5">
            <div>
                <span>Mobile: 01948949636</span>
                <br />
                <span>Email: afsanaeva05@gmail.com</span>
                <br />
                <span> Address: Uttara, Dhaka</span>
            </div>
            <div>
                {/* <Map google={this.props.google} zoom={14}>

                    <Marker onClick={this.onMarkerClick}
                        name={'Current location'} />

                    <InfoWindow onClose={this.onInfoWindowClose}>
                    </InfoWindow>
                </Map> */}
            </div>
        </div>

        <Form bg="primary">
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Enter Your Name</Form.Label>
                <Form.Control type="email" placeholder="Your Name..." />
                <Form.Text className="text-muted">
                    We'll never share your information with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Write Your Message</Form.Label>
                <Form.Control className="textArea" type="text" placeholder="Write here..." />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>

        <div className="contactItem mt-4">
            <span className="contactTitle">FOLLOW ME</span>
            <div className="sidebarSocial">
                <i className="sidebarIcon fab fa-facebook-square"></i>
                <i className="sidebarIcon fab fa-instagram-square"></i>
                <i className="sidebarIcon fab fa-pinterest-square"></i>
                <i className="sidebarIcon fab fa-twitter-square"></i>
            </div>
        </div>
    </div>
        ;
}
export default Contact;
// export default GoogleApiWrapper({
//     apiKey: ("YOUR_GOOGLE_API_KEY_GOES_HERE")
// })(Contact)

