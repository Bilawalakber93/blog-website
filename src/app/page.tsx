'use client'
import Image from "next/image";
import Header from "./components/Header";
import Blogitem from "./components/blogitem";
import Footer from "./components/Footer";



export default function Home() {
  return (
    <div>
      <Header />
      <Blogitem />
      <Footer />
      

    </div>
  );
}
