import './Banner.css';

const Banner = () => {
    return (
        <header className='banner'>
            <nav>
            <img className='logo'  src="./img/logo.png" alt="foto de um carro"/>
            <div className='links'>
                <ul>
                    <li>Blog</li>
                    <li>Contact</li>
                    <li>Pictures & stories</li>
                    <li>About us</li>
                    <li>Products</li>
                    
                    
                </ul>
            </div>
            </nav>

            <section className='container_text'>

                

            <div className='text'>           
            <h1>
                What is Carlio and <br/>
                how valid is it ?
            </h1>            
            <p>
            The meaning of production in Carlio is the creation, development, 
            and the path to progress, and the starting point to achieve
             the goals that we all have the Petroforce brand, with over 20 years 
             of experience in the oil and petrochemical industry.
            </p>

            </div>

            <div className='btn'>

            <a className='buy-btn' href="#">Buy Products</a>
            <a className='contact-btn' href="#">Contact Us</a>

            </div>
            

            </section>
            
        </header>
    
    )
}

export default Banner;
  