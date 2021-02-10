import Link from 'next/link'
import Layout from '../components/Layout'

import { ApolloClient, InMemoryCache, gql } from "@apollo/client"

const client = new ApolloClient({
    uri: "https://hello-world.aderbal.workers.dev/",
    cache: new InMemoryCache()
})

client
.query({
    query: gql`
    query Query {
        hello(response: "Omar")
    }
    `
}).then(result => console.log(result))

console.log(client)

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
        <form method="post" id="contactform" className="style-3">
            <div className="form-row">
                <div className="col-12 col-sm-6">
                    <input type="text" id="name" name="name" placeholder="Name" required={true} />
                </div>
                <div className="col-12 col-sm-6">
                    <input type="email" id="email" name="email" placeholder="E-Mail" required={true} />
                </div>
            </div>
            <input type="text" id="subject" name="subject" placeholder="Subject" required={true} />
            <textarea name="message" id="message" placeholder="Message"></textarea>
            <button className="button button-lg button-rounded button-outline-white" type="submit">Send Message</button>
        </form>
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
