import React from 'react'
import aboutLogo from '../images/about1.jpeg'

const About=()=> {
  return (
    <div>
        <section id='about'>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-md-6">
                        <img src={aboutLogo} alt="About" className='w-75 mt-5' />
                    </div>
                    <div className="col-md-6">
                        <h3 className="fs-5 mb-0">About Us</h3>
                        <h1 className="display-6 mb-2">Who <b>We</b> <b>Are</b></h1>
                        <hr className='w-50' />
                        <p className="lead mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores totam suscipit repellendus illum 
                            itaque a iste excepturi natus provident nemo. Vitae asperiores et animi at sed sequi rem, odit deleniti 
                            expedita fugit unde, cumque aspernatur amet, corporis esse ullam nihil. Lorem ipsum dolor sit amet
                             consectetur adipisicing elit. Corporis, illum!</p>
                         <button className='btn btn-primary rounded-pill px-4 py-2'>Get Started</button>
                         <button className='btn btn-outline-primary rounded-pill px-4 py-2 ms-2'>Contact Us</button>        
                    </div>
                </div>
            </div>
        </section>

    </div>
  )
}
export default About;