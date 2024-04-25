import Image from "next/image";
import { Inter, Fira_Sans } from "next/font/google";
import Navbar from "/components/Navbar";
import "bootstrap-icons/font/bootstrap-icons.css";
import React from "react";
import About from "/public/Asset 2.svg";
import NFS from "/public/NSF_Official_logo_High_Res_1200ppi.png";
import google from "/public/Google_2015_logo.svg.webp";
import me from "/public/IMG_6224 (1).JPG";
import rod from "/public/Rod.jpg"
import max from "/public/max.jpg"
import michael from "/public/michael.jpg"
import jack from "/public/jack.jpg"
import jon from "/public/jon.png"

// about page displayes description of website, as well as a section of the developer team.
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
                <div className="container">
                    <div className="row">
                        <div className="col  d-flex justify-content-center align-items-center">
                            <div>
                                <h2 className="aboutext">Click below to learn more about UDL4CS</h2>

                            </div>


                        </div>
                    </div>
                    <div className="row">
                        <div className="col  d-flex justify-content-center align-items-center">
                            <a href="https://udl4cs.education.ufl.edu/about/" className="btn btn-primary border-spacing-0.5" role="button" style={{ backgroundColor: "white", borderColor: "#0576B8", color: '#0B1873' }}>UDL4CS</a>



                        </div>
                    </div>
                </div>
                <style jsx>{`
                    .footer {
                    background-color: #0B1873;
                    padding: 20px;
                    }
                    
      `}</style>
            </div>

            <div className="container py-5">
                <div className="row">
                    <div className="col-md-4 d-flex flex-column align-items-center">
                        <div className="">
                            <Image
                                src={rod}
                                height={200}

                            />

                        </div>

                        <div className="mt-3">
                            <p>Rodrigo Avila Merchan is a computer science major with an interest in the world of technological innovation, constantly seeking new avenues to integrate cutting-edge solutions into everyday life. Upon graduation, he will be focusing on pursuing a career in software engineering and cybersecurity. Rodrigo's personal interests include gaming, spending time with loved ones, and Formula One.</p>

                        </div>


                    </div>
                    <div className="col-md-4 d-flex flex-column align-items-center">
                        <div className=" ">
                            <Image
                                src={michael}
                                height={200}
                            />

                        </div>


                        <div className="mt-3">
                            <p>Michael Liamkin is a computer science major passionate about learning new technologies as well as developing and designing new software solutions. Upon graduation, he will pursue a full-time software engineering position at Lockheed Martin. While employed, he aims to attain a master’s degree in computer science. Michael's personal interests involve making music with his brother, attending live concerts, and going on nature trails.</p>

                        </div>


                    </div>
                    <div className="col-md-4 d-flex flex-column align-items-center">
                        <Image
                            src={jon}
                            height={200}
                        />
                        <div className="mt-3">
                            <p>Jonathan is a post-baccalaureate student majoring in computer science through the UF Online program. He is currently working in computational neuroimaging research at Massachusetts General Hospital, focusing on projects that utilize machine learning for multimodal registration and automatic segmentation in both in vivo and ex vivo MRI data. In the future, Jonathan aspires to continue learning about computer vision and applying it to the healthcare field.</p>

                        </div>

                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 d-flex flex-column align-items-center">
                        <Image
                            src={me}
                            height={200}
                        />
                        <div className="mt-3">
                            <p>Andrea Moreno is a computer science major with an interest in the intersection of technology and design. Having interned at Accenture last summer, Andrea gained valuable experience in software development and project management. Upon graduation, she will be returning to Accenture for a full-time position, where she aims to further explore her passion for innovative tech solutions. Andrea’s personal interests include reading, spending time at the beach, and journaling.</p>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex flex-column align-items-center">
                        <Image
                            src={max}
                            height={200}
                        />
                        <div className="mt-3 ">
                            <p>Max Phillips is a computer science major who has specialized in database management and data analysis through his course work and professional experience while at UF. Upon graduation he will continue his work with a research team at the UF and pursue a career in software development with an emphasis on data analysis. Max’s personal interests include playing sports, such as golf and basketball, video games, and watching movies.</p>
                        </div>

                    </div>
                    <div className="col-md-4 d-flex flex-column align-items-center">
                        <Image
                            src={jack}
                            height={200}
                        />
                        <div className="mt-3">
                            <p>Jack Tobin is a computer science major minoring in educational technology. From his experience in working with children, Jack is passionate about eduaction and furthering its reach through online resources. Jack's personal interests include baking, drawing, and watching movies.</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mr-3  d-flex justify-content-center align-items-center">
                            {/* <Image
                                src={NFS}
                                alt="Image 1"
                                height={200}

                            /> */}
                            <div className="image-container">
                                <Image
                                    src={NFS}
                                    alt="Image 1"
                                    height={200}
                                />
                            </div>
                            <div className="image-number">#123234</div>

                        </div>
                        <div className="col-md-6 ml-3  d-flex justify-content-center align-items-center">
                            <Image
                                src={google}
                                height={100}
                                alt="Image 2"
                            />

                        </div>

                    </div>



                </div>
                <style jsx>{`
                    .footer {
                    background-color: #0B1873;
                    padding: 20px;
                    }
                    .image-container {
                    row
                    d-flex
                    justify-content: center; 
                    align-items: center; 
                    }
                    .image-number {
                        color: white;
                        font-size: 16px;
                        margin-top: 10px; 
                    }
                   
      `}</style>
            </div>
        </>
    );
}