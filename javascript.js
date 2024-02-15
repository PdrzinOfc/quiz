const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      respostas: [
        "Uma linguagem de marcação",
        "Uma linguagem de programação",
        "Um estilo de design"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do comando 'console.log()' em JavaScript?",
      respostas: [
        "Imprimir no console do navegador",
        "Criar uma janela pop-up",
        "Executar uma função assíncrona"
      ],
      correta: 0
    },
    {
      pergunta: "Como se declara uma variável em JavaScript?",
      respostas: [
        "var myVar;",
        "variable myVar;",
        "let myVar = 10;"
      ],
      correta: 2
    },
    {
      pergunta: "O que é um array em JavaScript?",
      respostas: [
        "Um tipo de dado para armazenar texto",
        "Uma estrutura de controle de fluxo",
        "Uma coleção de elementos"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a diferença entre '==' e '===' em JavaScript?",
      respostas: [
        "Nenhuma diferença, ambos comparam valores",
        "Um compara apenas valores, o outro compara valores e tipos",
        "São operadores bitwise"
      ],
      correta: 1
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Um modelo de design para websites",
        "Uma biblioteca popular",
        "Uma interface para interagir com elementos HTML"
      ],
      correta: 2
    },
    {
      pergunta: "Como se faz um loop 'for' em JavaScript?",
      respostas: [
        "for (i = 0; i < 5; i++)",
        "loopFor (i = 0; i < 5; i++)",
        "while (i < 5)"
      ],
      correta: 0
    },
    {
      pergunta: "O que é o evento 'onclick' em JavaScript?",
      respostas: [
        "Um evento para cliques de mouse",
        "Uma função que não faz nada",
        "Um tipo de variável"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a finalidade do operador ternário em JavaScript?",
      respostas: [
        "Atribuir um valor a uma variável",
        "Comparar dois valores",
        "Substituir o 'if' e 'else' em algumas situações"
      ],
      correta: 2
    },
    {
      pergunta: "O que é o JSON em JavaScript?",
      respostas: [
        "Um novo tipo de dado",
        "Um formato de dados para troca de informações",
        "Um método de criptografia"
      ],
      correta: 1
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePergutas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePergutas
  
  // loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
    
    for(let resposta of item.respostas){
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta

        corretas.delete(item)
        if(estaCorreta){
          corretas.add(item)
        }

        mostrarTotal.textContent = corretas.size + ' de ' + totalDePergutas
      }


  
      quizItem.querySelector('dl').appendChild(dt)

    }
  
  quizItem.querySelector('dl dt').remove()
  
  // coloca as perguntas na tela
  quiz.appendChild(quizItem)
  
  }
