import './About.css';

const About = () => {
    return (

        <main>
            <section className='about'>
           
          <figure className='main-car'>

            <img src="./img/main-car.png" alt="foto de um carro"/>
            
        </figure > 

            <div className='about_us'>
            <img className='component' src="./img/component.svg" alt="foto de um carro"/>
            <small>About us</small>
            <h2>Our Company Overview</h2>
            <p>
                   Carlio brand is one of the most reliable
                   motor oil manufacturers, which is engaged
                   in the production of high quality products with 
                   a history of more than decades in the industry. 
                   In order to get more information about other aspects
                   and products of the Carlio brand,
                   you can use the following buttons:
                 </p>
            

            <div className='links'>
            <a href="#">Company</a>  
            <a href="#">Products</a>
            <a href="#">Our team</a>
            </div>

          
                <p>
                    The meaning of production in Carlio is the creation, development,
                     and the path to progress, and the starting point to achieve the 
                     goals that we all have the Petroforce brand, with over 20 years
                      of experience in the oil and petrochemical industry, we officially
                       started our activities in the field of design, engineering, construction
                        of refinery equipment, and the production of various motor and industrial
                         lubricants in the year 1390 (2011)
                    </p>

                    <div className='learn'>

                    <a className='learn_btn' href="#">Learn More</a>  

                    </div>
           
                    </div>
            

            </section>
        </main>
        
    
    )
}

export default About;
  