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
                <div className="profile">
                    <Link to={'/bikeslot'}><img src="https://img.freepik.com/free-vector/flat-design-vintage-motorcycle-illustration_23-2149449496.jpg?w=996" alt="Profile 1" />
                    <div>
                        <h2>2 Wheeler</h2>
                    </div></Link>
                </div>
                <div className="profile">
                    <Link to={'/slot'}><img src="https://img.freepik.com/free-vector/family-car_23-2147492087.jpg?w=740" alt="Profile 2" />
                    <div>
                        <h2>4 Wheeler</h2>
                    </div></Link>
                </div>
            </div>
            <div className='section-core'>
                <div className='section-core-d'>
                    <h2>Advanced Analytics</h2>
                    <p>Delve into data-driven parking management with our comprehensive analytics suite, designed to optimize your parking operations.</p>
                    <button className='section-buttons'>Learn More</button>
                </div>
                <img className='section-image' src='https://images.unsplash.com/photo-1542282088-fe8426682b8f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8fA%3D%3D'></img>
            </div>
            <div className='core-feature'>
                <h2>Core Features</h2>
                <p>Dive into the innovative features of ParkEase Pro that make parking management a breeze for operators and users alike.</p>
                <div className='three-container' style={{display:'flex'}}>
                <div className='feature-container'>
                    <img src='src\components\Home\fire.png'></img>
                    <h3>Real-Time Data</h3>
                    <p>Stay updated with live parking information that allows efficient space utilization and enhances user experience.</p>
                    <button className='uniquebuttons'>Learn More</button>
                </div>
                <div className='feature-container'>
                <img src='src\components\Home\fire.png'></img>
                    <h3>Mobile Integration</h3>
                    <p>Harness the power of mobile technology to access and manage your parking solutions anytime, anywhere.</p>
                    <button className='uniquebuttons'>Learn More</button>
                </div>
                <div className='feature-container'>
                <img src='src\components\Home\fire.png'></img>
                    <h3>Payment System</h3>
                    <p>Our seamless payment solutions accelerate the check-out process, providing convenience and security.</p>
                    <button className='uniquebuttons'>Learn More</button>
                </div>
                </div>
                

            </div>
        </div></>
    );
}

export default Home;
