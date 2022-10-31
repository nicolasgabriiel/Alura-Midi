
// Busca todos os botões com a classe ".tecla"
const botoes = document.querySelectorAll('.tecla');

// fução que permite tocar o som, além de armezenar o seletorAudio que for usado
function tocaSom(seletorAudio) {
   const elemento = document.querySelector(seletorAudio);

//Estrutura que pergunta:  elemento não é nulo e é do tipo audio ? então execute, se não exiba uma mensgagem no console
    
    if( elemento != null && elemento.localName === 'audio'){
        elemento.play();
    }else{
        console.log('Seletor não encontrado.')
    }}


    //Contador for que passa por todos os 9 elementos de classe
for (let contador = 0; contador < botoes.length; contador++){

    // a constante tecla armazena todos os botoes juntado a lista Botoes[e o número 'for' considerando o contador ]    
    const tecla = botoes[contador]
    // a instrução é o valor da classe de cada tecla, para ser unido com o id #som e assim buscar todos os id's de audio
    const instrucao = tecla.classList[1]

    //A constante idAudio armazena todos os id's de audio através de uma template string que une uma frase com uma var ou const, assim a tag idAudio,
    //armazena TODOS os id's audios pois eles ja passaram pelo contador na variavel tecla
    const idAudio = `#som_${instrucao}`

    // essa função diz que quando o botão da lista for pressionado, seu respectivo audio deve ser reproduzido através da função toca som
    tecla.onclick = function (){
        tocaSom(idAudio); }
   // essa fução diz que que que se as teclas espaço e enter forem pressionadas, então a classe '.ativa' deve ser aplicada no css da variavel tecla
   tecla.onkeydown = function (evento) {
    if ( evento.code === 'Space' || evento.code === 'Enter'){
        tecla.classList.add('ativa')
    } }    
   // essa função diz que sempre que nenhuma tecla for pressionada, a classe ativa também não deverá ser ativa no css da variavel tecla
   tecla.onkeyup = function (){
    tecla.classList.remove('ativa') 
   } }
   //todo esse código deve ser rodado dentro do for para que todas os 9 botões funcionem com o contador 



