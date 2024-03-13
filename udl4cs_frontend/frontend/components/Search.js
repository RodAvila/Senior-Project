import React, { useRef } from 'react'


export default function Search() {


    return (
        // <div class="input-group mb-3">
        //   <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
        //   <div class="input-group-append">
        //     <span class="input-group-text" id="basic-addon2">Search Resource</span>
        //   </div>
        // </div>

        // <div class="d-flex form-inputs my-5 px-3">

        //   <input
        //     className="form-control"
        //     type="text"
        //     placeholder="Search any product..."

        //   />





        // </div>
        // <section>


        // </section>
        <div className=" py-5 border-bottom">
            <div class="row align-items-center justify-content-center">
                <div class="col-md-5 ">
                    <div class="input-group">
                        <input class="form-control border-end-0 border" type="search" placeholder="Search resource" aria-label="Search resource" id="example-search-input" />
                        <button class="btn btn-outline-secondary border-spacing-0.5" type="button" id="button-addon2"><i class="bi bi-search"></i></button>
                    </div>
                </div>
            </div>
        </div>

    )
};