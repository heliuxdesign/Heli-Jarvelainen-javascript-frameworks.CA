import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout/Layout";
import axios from "axios";
import { BASE_URL } from "../constants/api";
import React from 'react';
import { Button } from "reactstrap";




export default function Home(props) {
    console.log(props)

 return (
  <Layout>
   <Head />

    <div className="container">
     <h1>Home page</h1>
    </div>

    {props.flowers.map((flower) => {
        return (
            <div className="card">
              <a key={flower.id} href={`flower/${flower.name}`}>
                <h2>{flower.name}</h2></a>
                <h3>{flower.nextapp}</h3>
                <h3>{flower.id}</h3> 
            </div>
        );
    })}
  </Layout>
 );
}

export async function getStaticProps() {

    let flowers = [];
    try {
        const response = await axios.get(BASE_URL);
        flowers = response.data;
    } catch (error) {
       console.log(error);
    }

    return {
        props: {
            flowers: flowers,
        },
    };
}


