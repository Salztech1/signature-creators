import React from 'react';
import logo from '../Images/logo.jpg';
//import './About.css'
import './Services.css'
//import 'bootstrap/dist/css/bootstrap.min.css'
//import 'bootstrap/dist/css/bootstrap.min.css';


function Services() {
  return (
    <section id='services'>
      <div className='box'>
        <img src={logo} alt="" width='50px' />
        <h2>SERVICES</h2>
        <h2>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt consequatur porro, nobis excepturi recusandae aspernatur eaque fugit id explicabo dolores tempora eius aut iste, nam quis neque unde exercitationem tenetur.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt consequatur porro, nobis excepturi recusandae aspernatur eaque fugit id explicabo dolores tempora eius aut iste, nam quis neque unde exercitationem tenetur.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt consequatur porro, nobis excepturi recusandae aspernatur eaque fugit id explicabo dolores tempora eius aut iste, nam quis neque unde exercitationem tenetur.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt consequatur porro, nobis excepturi recusandae aspernatur eaque fugit id explicabo dolores tempora eius aut iste, nam quis neque unde exercitationem tenetur.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt consequatur porro, nobis excepturi recusandae aspernatur eaque fugit id explicabo dolores tempora eius aut iste, nam quis neque unde exercitationem tenetur.
        </h2>

      </div>
    </section>

  );
}

export default Services;


/* <div className='flex'>
                <div className='margin'>
                    <img src={logo} alt="" width='90px' />
                </div> */

{/* <div>
                        <img src={logo} alt="" width='90px' />
                            <div style={{ marginLeft:'60%'}}>
                            <Link to='/' style={padding} className='nav' >Welcome</Link>
                            <Link to='#about' smooth style={padding} className='nav' >About Us</Link>
                            <Link to='#services' smooth style={padding} className='nav' >Services</Link>
                            <Link to='#contact' smooth style={padding} className='nav' >Contact</Link>
                            </div>
                            {/* <a href="/" style={padding}>Welcome</a>
                            <a href="/about" style={padding}>About Us</a>
                            <a href="/services" style={padding}>Services</a>
                            <a href="/contact" style={padding}>Contact Us</a> */}