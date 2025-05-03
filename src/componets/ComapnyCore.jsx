'use client'
import { useEffect } from 'react';
import gsap from 'gsap';
import { IoDesktopOutline } from "react-icons/io5";
import { IoHardwareChip } from "react-icons/io5";
import { FaChalkboardTeacher } from "react-icons/fa";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ComapnyCore = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    
        const featureRow = document.querySelector('.feature-row');
        if (featureRow) {
          gsap.from('.feature-item', {
            scrollTrigger: {
              trigger: featureRow,
              start: 'top 80%',
            },
            x: -100,
            opacity: 0,
            duration: 1,
            stagger: 0.5,
            ease: 'power3.out',
          });
        }
      }, []);
    
    return (
        <>
            {/* <!-- Company Core --> */}
            <section className="core">
                <div className="container">
                    <div className="row feature-row">
                        <div className="col-md-4 feature-item">
                            <div className="feature-box">
                                <div className="f-point">
                                    <h1>01</h1>
                                </div>
                                <div className="feature">
                                    <div className="f-icon">
                                        {/* <i className="fa-solid fa-desktop"></i> */}
                                        <IoDesktopOutline />
                                    </div>
                                    <div className="f-description">
                                        <h1>Software</h1>
                                        <p>Customers expect quick service and better customization as the world moves...</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 feature-item">
                            <div className="feature-box">
                                <div className="f-point">
                                    <h1>02</h1>
                                </div>
                                <div className="feature">
                                    <div className="f-icon">
                                        {/* <i className="fa-solid fa-microchip"></i> */}
                                        <IoHardwareChip />
                                    </div>
                                    <div className="f-description">
                                        <h1>Hardware</h1>
                                        <p>The front line of your company needs to be equipped with business solutions...</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 feature-item">
                            <div className="feature-box">
                                <div className="f-point">
                                    <h1>03</h1>
                                </div>
                                <div className="feature">
                                    <div className="f-icon">
                                        {/* <i className="fa-solid fa-chalkboard-user"></i> */}
                                        <FaChalkboardTeacher />
                                    </div>
                                    <div className="f-description">
                                        <h1>Support</h1>
                                        <p>Software Maintenance and Support Services Our IT support and maintenance...</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ComapnyCore