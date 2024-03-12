import './Questions.css';


const questAndAnswers = document.querySelectorAll(".item");

questAndAnswers.forEach(function(item){
    item.addEventListener("click", function(){
        const activeItem = document.querySelector(".active");

        if(activeItem) {
            activeItem.classList.remove("active");
        };

        this.classList.add("active");
    });
});




const Questions = () => {
    return (

            <section className='container'>

                <div className='container_main'>
                <div>
                 <img className='large' src="./img/LargePhoto.png" alt="foto de um carro"/>
              
                 </div>

                 <div className='card'>

                 <div className='title'>
                 <img  src="./img/message-question.svg" alt="foto de um carro"/>
                 <span>FAQ Question</span>
               
               

                 </div>
                 <h2>Frequently asked questions</h2>

                 <div class="item active">
            <h3 class="question">Where I can buy?</h3>

            <p class="answer">
                Alura é uma escola online onde podermos mergulhe em conteúdo com a maior 
            comunidade de tecnologia do país e aprender muitas coissa novas.
            </p>
        </div>

        <div class="item">
            <h3 class="question">Posso usar o que aprendi na Alura para fazer meus portifilio ?</h3>

            <p class="answer">
                Sim, você pode usar projetos concluídos ou modoficados em seu portfólio. É um
            excelente
            maneira de mostrar suas habilidades para potenciais empregadores!
            </p>
        </div>

        <div class="item">
            <h3 class="question">Como eu consigo ajuda caso eu tenha duvidas ?</h3>

            <p class="answer">
                O melhor lugar para obter ajuda é na comunidade do  Discord da Alura. Há varios canais
            de ajuda onde você pode fazer perguntas e buscar apoio de outros membros da comunidade.
            </p>
        </div>

        <div class="item">
            <h3 class="question">Onde eu consigo desafios para treinar</h3>

            <p class="answer">
                Existem varios lugares como front mentor , alura challenger, curso em video ,etc
            </p>
        </div>

        </div>

        </div>
            </section>
        
        
    
    )
}

export default Questions;
  