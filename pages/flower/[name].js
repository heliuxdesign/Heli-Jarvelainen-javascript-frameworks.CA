import axios from 'axios';
import Link from "next/link";
import Head from 'next/head';
import Layout from '../../components/layout/Layout';
import { BASE_URL } from '../../constants/api';


export default function Flower({ flower }) {
    console.log(flower)
    const my_flower = flower[0];
  
    return (
     <Layout>
      <Link legacyBehavior href="/">
        <a>Home</a>
      </Link>
      <h1>Details</h1>
      <Head title={my_flower.name} />
      <h1>{my_flower.name}</h1>
      <h2>{my_flower.nextapp}</h2>
      <h3>{my_flower.description}</h3>
      
     </Layout>
    );
}

export async function getStaticPaths() {
    try {
     // the same API call we used in `index.js`
     // we want to get all the slugs from the array of games
     // so first we need to fetch the games
     const response = await axios.get(BASE_URL);
     // the log here will happen on the server, you can check the console in your editor
     console.log(response.data);
     // the array is on the response.data.results property
     const props = response.data;
        console.log(props)
     // Get the paths we want to pre-render based on the flowers 
     const paths = props.map((flower) => ({
      params: { name: flower.name },
     }));
   
     console.log(paths);
   
     return { paths: paths, fallback: false };
    } catch (error) {
     console.log(error);
    }
   }

export async function getStaticProps({ params }) {
    const url = `${BASE_URL}/?name=${params.name}`;
    console.log(url);
   
    let flower = null;
   
    try {
     const response = await axios.get(url);
     // the value we want is on response.data here, not response.data
     flower = response.data;
    } catch (error) {
     console.log(error);
    }
   
    // we are sending a prop called flower in to the Flower component up above
    return {
     props: { flower: flower },
    };
   }