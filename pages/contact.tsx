import Link from "next/link"
import Layout from "../components/Layout"
import ContactForm from "../components/contact-form"

export default function Contact() {
    return (
        <Layout
            siteTitle="Contact Us"
            siteDescription="Aderbal"
        >

            <div className="section-xl">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                            <h1>Contact</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-lg-10 offset-xl-1 col-xl-8 offset-xl-2 text-lg-center">
                            <ContactForm />
                            <div className="submit-result">
                                <span id="success">Thank you! Your Message has been sent.</span>
                                <span id="error">Something went wrong, Please try again!</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Layout>
    )
}
