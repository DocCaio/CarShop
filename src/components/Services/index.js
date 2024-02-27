import './Services.css';

const Services = () => {
    return (

      
            <section className='services'>
                <div>
                <img className='box' src="./img/box.svg" alt="foto de um carro"/>
                 <small>Products features</small>
                

                
                    <h2>The feature of Carlio engine oil that you will benefit from</h2>
                    <a className='visit-btn' href="#">Visit shop page</a>
                </div>

                <div className='cards'>

                <div  className='cards_benefit'>
                <img src="./img/star.svg" alt="star"/>
                <h3>High QualityProduct</h3>
                </div>
                <div  className='cards_benefit'> 
                <img  src="./img/broom.svg" alt="broom"/>
                <h3>Cleaning of deposits</h3>
                </div>

                <div  className='cards_benefit'>
                <img src="./img/security.svg" alt="security shild"/>
                <h3>Engine protection</h3>
                </div>

                </div>
               
            </section>
        
        
    
    )
}

export default Services ;
  