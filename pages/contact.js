import Link from "next/link";
import Head from "next/head";
import Layout from "../components/layout/Layout";
import ContactForm from "../components/Contactform";

export default function Contact() {
 return (
    <Layout>
   <Head />
   
   <Link legacyBehavior href="/">
    <a>Home</a>
   </Link>

   <div className="container">
     <h1>Contact us</h1>
    </div>

    <ContactForm />
   
  </Layout>
 );
}

