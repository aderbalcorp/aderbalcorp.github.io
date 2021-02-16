import React from "react"
import { ApolloClient, InMemoryCache, gql } from "@apollo/client"

const client = new ApolloClient({
    uri: "https://aderbal-contact.aderbal.workers.dev",
    cache: new InMemoryCache()
})

const SENDMAIL = gql`
            query sendMail($name: String!, $email: String!, $phone: String!, $message: String!) {
                sendMail(name: $name, email: $email, phone: $phone, message: $message)
            }
            `

class ContactForm extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.name = React.createRef()
        this.email = React.createRef()
        this.phone = React.createRef()
        this.message = React.createRef()
    }

    handleSubmit(event) {
        console.log(this.email.current.value)
        client.query({
            query: SENDMAIL,
            variables:
                {
                name: this.name.current.value,
                email: this.email.current.value,
                phone: this.phone.current.value,
                message: this.message.current.value
            }
        }).then(response => {
                console.log(response)
        })

        event.preventDefault()
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit} id="contactform" className="style-3">
                <div className="form-row">
                    <div className="col-12 col-sm-6">
                        <input type="text" id="name" name="name" placeholder="Name" ref={this.name} required={true} />
                    </div>
                    <div className="col-12 col-sm-6">
                        <input type="email" id="email" name="email" placeholder="E-Mail" ref={this.email} required={true} />
                    </div>
                </div>
                <input type="tel" id="phone" name="phone" placeholder="Phone" ref={this.phone} title="Enter a valid phone number" pattern="[0-9]{1,16}" required={true} />
                <textarea name="message" id="message" placeholder="Message" ref={this.message} required={true}></textarea>
                <button className="button button-lg button-rounded button-outline-white" type="submit">Send Message</button>
            </form>
        )
    }
}

export default ContactForm
