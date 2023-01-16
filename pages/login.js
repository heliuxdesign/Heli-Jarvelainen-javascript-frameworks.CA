import Link from "next/link";
import Head from "next/head";
import Layout from "../components/layout/Layout";
import Loginform from "../components/Loginform"




export default function Login() {
 return (
    <Layout>
    <Head href="/admin"/>
     
   <Link legacyBehavior href="/">
    <a>Home</a>
   </Link>
   <div className="container">
     <h1>Login</h1>
   </div>
   <div class="messagecontainer"></div>
   <Loginform />

  </Layout>
 );
}
