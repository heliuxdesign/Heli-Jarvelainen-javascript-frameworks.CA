import Link from "next/link";
import Head from "next/head";
import Layout from "../components/layout/Layout";


export default function Admin() {
  return (
    <Layout>
    <Head />
    
 
    <Link legacyBehavior href="/">
     <a>Home</a>
    </Link>
    <h1>Admin</h1>
   </Layout>
  );
 }