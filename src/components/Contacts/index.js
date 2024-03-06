import './Contacts.css';


const Contacts = () => {
    return (
        <footer className='footer'> 
        <section>   
            <div>
            <img  src="./img/logo.png" alt="foto de um carro"/>
                <p>
                Our activities in the oil and petrochemical sector,
                 engineering, construction, and production of 
                 lubricants date back to 25 years ago An activity 
                 that continues to grow and develop through the 
                 design and implementation of various projects
                </p>                
                <img  src="./img/social-media/instagram.svg" alt="foto de um carro"/>
                <img  src="./img/social-media/whatsapp.svg" alt="foto de um carro"/>
                <img  src="./img/social-media/x.svg" alt="foto de um carro"/>
            </div>
            <div className='sms'>
            <img  src="./img/footer/sms.svg" alt="foto de um carro"/>
            <span className='sms_email'>
                <h3>Enter Your Email</h3>
                <span>Our colleagues will contact you soon</span>
            </span>
            <input className='submit' type="text"></input>
            </div>
            </section>    
        </footer>
    )

        
        
    
    
}

export default Contacts;
