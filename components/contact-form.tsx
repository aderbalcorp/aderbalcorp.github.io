import React from "react"

class ContactForm extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <form method="post" id="contactform" className="style-3">
                <div className="form-row">
                    <div className="col-12 col-sm-6">
                        <input type="text" id="name" name="name" placeholder="Name" required={true} />
                    </div>
                    <div className="col-12 col-sm-6">
                        <input type="email" id="email" name="email" placeholder="E-Mail" required={true} />
                    </div>
                </div>
                <input type="tel" id="phone" name="phone" placeholder="Phone"  title="Enter a valid phone number" pattern="[0-9]{16}" required={true} />
                <textarea name="message" id="message" placeholder="Message" required={true}></textarea>
                <button className="button button-lg button-rounded button-outline-white" type="submit">Send Message</button>
            </form>
        )
    }
}

export default ContactForm
