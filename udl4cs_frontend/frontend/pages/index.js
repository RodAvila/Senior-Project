import Image from "next/image";
import { Inter, Fira_Sans } from "next/font/google";
import Link from "next/link";
import Navbar from "/components/Navbar";
import "bootstrap-icons/font/bootstrap-icons.css";
import React from "react";
import { Figtree } from "@next/font/google";
//import About from "/public/Asset 2.svg";
//import art from "/public/Asset 16.svg";

const inter = Inter({ subsets: ["latin"] });
const figtree = Figtree({
    subsets: ['latin']

}
)



export default function Home() {


    return (

        <>

            <Navbar></Navbar>
            {/* <section>
                <div className="container-lg  align-items-center justify-content-center">
                    <div className="col-lg-6 col-sm-12 col-12 text-center">
                        <br />
                        <h1 className="primary">Welcome to UDL4CS</h1>
                        <br />
                    </div>
                    <div className="row">
                        <br />
                        <h1 className="primary">Welcome to UDL4CS</h1>
                        <br />
                    </div>
                    <div className="row">
                        <Image
                            src={About}
                            height={400}

                        />

                    </div>
                </div>
            </section> */}
            <section>
                <div className="container-lg align-items-center justify-content-center">
                    <div className="row">
                        {/* <div className="col-lg-6 col-sm-12 col-12">
                            <Image
                                src={About}
                                height={400}
                            />
                        </div> */}
                        <div className="col-lg-6 col-sm-12 col-12">
                            <h1 className="primary">About UDL4CS</h1>
                        </div>

                    </div>


                </div>


            </section>
            <div>
                {/* Other content */}
                <div className="contributors-section">
                    <h2>Contributors</h2>
                    {/* List of contributors */}
                </div>
                {/* Other content */}
                <style jsx>{`
        .contributors-section {
          background-color: #803D9B;
          padding: 20px; /* Add padding for better visualization */
        }
      `}</style>
            </div>


        </>
    );
}