// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './styles.css'


function Navbar() {
    return (
        <nav className="navbar">
            <ul style={{ fontSize: 'large' }}>
                <li><Link to="/home"><strong>Home</strong></Link></li>
                <li><Link to="/dashboard"><strong>Dashboard</strong></Link></li>
                <li><Link to="/contact"><strong>Contact</strong></Link></li>
                <li><Link to="/about"><strong>About Us</strong></Link></li>
            </ul>
        </nav>
    );
}

function Home() {
    return (
        <>
            <Navbar />
        <div className='main-Home'>
            {/* Content for Home page */}
            {/* <h1>Welcome to Home Page</h1> */}
                <h2 style={{textAlign:'center',marginTop:'25px'}}>Booking for</h2>
            <div className="center-container">
                <div className="profile" data-aos="fade-right" data-aos-duration="2500">
                    <Link to={'/bikeslot'}><img src="https://img.freepik.com/free-vector/flat-design-vintage-motorcycle-illustration_23-2149449496.jpg?w=996" alt="Profile 1" />
                    <div>
                        <h2>2 Wheeler</h2>
                    </div></Link>
                </div>
                <div className="profile"  data-aos="fade-left" data-aos-duration="2500">
                    <Link to={'/slot'}><img src="https://img.freepik.com/free-vector/family-car_23-2147492087.jpg?w=740" alt="Profile 2" />
                    <div>
                        <h2>4 Wheeler</h2>
                    </div></Link>
                </div>
            </div>
            <div className='section-core' >
                <div className='section-core-d' data-aos="zoom-in-up" data-aos-duration="1500">
                    <h2>Advanced Analytics</h2>
                    <p>Delve into data-driven parking management with our comprehensive analytics suite, designed to optimize your parking operations.</p>
                    <button className='section-buttons'>Learn More</button>
                </div>
                <img data-aos="fade-left" data-aos-duration="2500" className='section-image' src='https://images.unsplash.com/photo-1542282088-fe8426682b8f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8fA%3D%3D'></img>
            </div>
            <div className='core-feature' >
                <h2>Core Features</h2>
                <p>Dive into the innovative features of ParkEase Pro that make parking management a breeze for operators and users alike.</p>
                <div className='three-container' style={{display:'flex'}}>
                <div className='feature-container' data-aos="zoom-in-up" data-aos-duration="1500">
                    <img src='src\components\Home\fire.png'></img>
                    <h3>Real-Time Data</h3>
                    <p>Stay updated with live parking information that allows efficient space utilization and enhances user experience.</p>
                    <button className='uniquebuttons'>Learn More</button>
                </div>
                <div className='feature-container'  data-aos="zoom-in-up" data-aos-duration="1500">
                <img src='src\components\Home\fire.png'></img>
                    <h3>Mobile Integration</h3>
                    <p>Harness the power of mobile technology to access and manage your parking solutions anytime, anywhere.</p>
                    <button className='uniquebuttons'>Learn More</button>
                </div>
                <div className='feature-container'  data-aos="zoom-in-up" data-aos-duration="1500">
                <img src='src\components\Home\fire.png'></img>
                    <h3>Payment System</h3>
                    <p>Our seamless payment solutions accelerate the check-out process, providing convenience and security.</p>
                    <button className='uniquebuttons'>Learn More</button>
                </div>
                </div>
                

            </div>
            <div className='FAQ' data-aos="zoom-in-up" data-aos-duration="2500">
                <h1>FAQs</h1>
                <p className='first-para'>Get answers to common questions about ParkEase Hub and how it can benefit your parking management.</p>
                <div className='question-start'>
                    <div className="que1" >
                        <h4 className='Heading-questions'>How does ParkEase Hub work?</h4>
                        <p className='paragraph-questions'>ParkEase Hub streamlines the parking process using smart technology to manage spaces and provide real-time data for users.</p>
                    </div>
                    <div className="que2">
                        <h4 className='Heading-questions'>Can I integrate ParkEase Hub with my current system?</h4>
                        <p className='paragraph-questions'>Yes, our system is built to integrate effortlessly with various existing parking infrastructures.</p>
                    </div>
                </div>
                <div className="question-end">
                    <div className="que3">
                        <h4 className='Heading-questions'>What support does ParkEase Hub offer?</h4>
                        <p className='paragraph-questions'>We offer 24/7 customer support to ensure seamless operations at all your parking facilities.</p>
                    </div>
                    <div className="que4">
                        <h4 className='Heading-questions'>Do you offer a mobile application?</h4>
                        <p className='paragraph-questions'>Absolutely, our user-friendly mobile app makes finding and booking parking spaces effortless.</p>
                    </div>
                </div>

                  {/* <section className="_99dbc12b">
                    <div className="wr">
                        <header className="_70518635">
                            <h2 className="_b6470677">FAQs</h2>
                            <p className="_f653cda2">Get answers to common questions about ParkEase Hub and how it can benefit your parking management.</p>
                            </header><div className="_64ddafb7">
                                <div className="_cc37a8ce">
                                    <div className="_6b1cc3bc">
                                        <h4 className="_7668f1e0">How does ParkEase Hub work?</h4>
                                        <div className="_634399f1">ParkEase Hub streamlines the parking process using smart technology to manage spaces and provide real-time data for users.
                                        </div>
                                        </div>
                                        <div className="_6b1cc3bc">
                                            <h4 className="_7668f1e0">Can I integrate ParkEase Hub with my current system?</h4>
                                            <div className="_634399f1">Yes, our system is built to integrate effortlessly with various existing parking infrastructures.</div>
                                            </div>
                                            <div className="_6b1cc3bc">
                                                <h4 className="_7668f1e0">What support does ParkEase Hub offer?</h4>
                                    <div className="_634399f1">We offer 24/7 customer support to ensure seamless operations at all your parking facilities.
                                    </div> 
                               </div>
                                    <div className="_6b1cc3bc">
                                        <h4 className="_7668f1e0">Do you offer a mobile application?</h4>
                                        <div className="_634399f1">Absolutely, our user-friendly mobile app makes finding and booking parking spaces effortless.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section> */}

            </div>
        </div>
        </>
    );
}

export default Home;
