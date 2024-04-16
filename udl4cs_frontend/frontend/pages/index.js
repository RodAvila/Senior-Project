import Image from "next/image";
import { Inter, Fira_Sans } from "next/font/google";
import Link from "next/link";
import Navbar from "/components/Navbar";
import "bootstrap-icons/font/bootstrap-icons.css";
import React from "react";
import { Figtree } from "@next/font/google";
import About from "/public/Asset 2.svg";
import NFS from "/public/NFS.png";
import google from "/public/Google_2015_logo.svg.webp";

const inter = Inter({ subsets: ["latin"] });
export const firaSans = Fira_Sans({ subsets: ["latin"], weight: ['700', '900'] });



export default function Home() {


    return (

        <>

            <Navbar></Navbar>
            <section>
                <div className="container-lg align-items-center justify-content-center">
                    <div className="row">
                        <div className="col-lg-6 col-sm-12 col-12">
                            <Image
                                src={About}
                                height={400}
                            />
                        </div>
                        <div className="col-lg-6 col-sm-12 col-12">
                            <h1 className="primary">Welcome</h1>
                            <h2 className="subheader">About UDL4CS</h2>
                            <p className="double-space">Universal Design for Learning in Computer Science (UDL4CS) is a Research-Practice Partnership that brings together researchers and practitioners around the shared problem of practice to provide teachers with the tools necessary to meaningfully include students with disabilities in computer science education. Through building trust and setting priorities between the researchers and the practitioner partners, UDL4CS seeks to leverage resources to focus on the professional development of teachers who are “twice new” (new to CS education and new to inclusive strategies).</p>
                            <p className="double-space">
                                As part of our initiative, we have developed a user-friendly website. This platform serves as a valuable tool for educators, researchers, and other stakeholders in the field. The centerpiece of our website is the Resources page, where users can discover a comprehensive list of resources tailored to their specific needs when working with students with disabilities learning computer science.
                            </p>
                            <p>Key features of our website include:</p>

                            <ul className="double-space bullet-list">
                                <li className="double-space">
                                    <strong>Resource Repository:</strong> Our Resources page offers a curated list of resources designed to support educators in their journey towards inclusive CS education.

                                </li>
                                <li>
                                    <strong>Interactive Engagement:</strong> Users have the opportunity to engage with resources by leaving positive comments and feedback. Additionally, they can express their appreciation by liking a resource.

                                </li>
                                <li>
                                    <strong>Community Building:</strong> By facilitating interactions and discussions, our platform fosters a vibrant community of educators and researchers committed to finding the best resources for inclusive CS education.

                                </li>
                                <li>
                                    <strong>Tag-Based Navigation:</strong> Resources on our website are categorized with a variety of tags to help users easily discover content tailored to their specific needs. These tags encompass a wide range of topics, including accessibility features, symbol-based learning, comprehension strategies, and interactive activities.
                                </li>
                            </ul>
                            <p className="double-space">

                                At UDL4CS, we are dedicated to advancing the field of inclusive CS education through collaboration, research, and the development of practical tools. Join us in our journey towards creating a more inclusive and equitable learning environment for all students.</p>
                        </div>
                    </div>
                </div>

            </section>
            <div className="footer">
                <div className="image-container">
                    <Image
                        src={NFS}
                        alt="Image 1"

                    />
                    <Image
                        src={google}
                        height={100}
                        alt="Image 2"
                    />
                </div>
                <style jsx>{`
                    .footer {
                    background-color: #0B1873;
                    padding: 20px;
                    }
                    .image-container {
                    display: flex;
                    justify-content: center; 
                    align-items: center; 
                    }
                    .spacer {
                        margin-right: 5px
                    }
      `}</style>
            </div>
        </>
    );
}