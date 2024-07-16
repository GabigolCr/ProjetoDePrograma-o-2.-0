const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você acha que o dinheiro dos impostos pagos são bem retribuídos?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "A economia social desempenha um papel crucial no desenvolvimento local e regional ao promover a criação de empregos e a inclusão econômica. "
            },
            {
                texto: "Não",
                afirmacao: "Embora a economia social tenha boas intenções, seu impacto no desenvolvimento local e regional pode ser limitado. "
            }
        ]
    },
    {
        enunciado: "De que forma a economia social contribui para o desenvolvimento local e regional?",
        alternativas: [
            {
                texto: "A economia social contribui significativamente para o desenvolvimento local e regional ao criar empregos e promover a inclusão econômica. Organizações como cooperativas e associações reinvestem seus lucros nas comunidades, fomentando o crescimento econômico local. Além disso, a economia social incentiva a participação cidadã e a governança democrática, resultando em um desenvolvimento mais sustentável e equitativo. Isso fortalece a coesão social e promove uma distribuição mais justa dos recursos, beneficiando toda a comunidade.",
                afirmacao: "Organizações como cooperativas e associações reinvestem seus lucros nas comunidades, impulsionando o crescimento econômico e fortalecendo a coesão social. Essas entidades incentivam a participação cidadã e a governança democrática, resultando em um desenvolvimento mais sustentável e equitativo."
            },
            {
                texto: "A economia social, embora bem-intencionada, pode ter um impacto limitado no desenvolvimento local e regional. Muitas dessas organizações enfrentam desafios financeiros e operacionais que dificultam seu crescimento e sustentabilidade a longo prazo. A dependência de subsídios e doações pode restringir suas operações, e sua capacidade de competir com grandes empresas é muitas vezes insuficiente. Além disso, a falta de profissionalismo e infraestrutura em algumas organizações pode comprometer a eficácia de suas iniciativas.",
                afirmacao: "Muitas organizações enfrentam desafios financeiros e operacionais que dificultam seu crescimento e sustentabilidade a longo prazo. "
            }
        ]
    },
    {
        enunciado: "Como a economia social pode promover a inclusão social e reduzir desigualdades?",
        alternativas: [
            {
                texto: "A economia social pode promover a inclusão social e reduzir desigualdades ao oferecer oportunidades de emprego e serviços essenciais para populações marginalizadas. Com práticas de governança democrática, essas organizações garantem que todos os membros tenham voz nas decisões, promovendo uma distribuição mais equitativa de recursos. Ao focar em princípios de solidariedade e justiça social, a economia social ajuda a integrar indivíduos na sociedade, fortalecendo os laços comunitários e promovendo um senso de pertencimento e coesão social.",
                afirmacao: "Além disso, a economia social tem o potencial de promover a inclusão social e reduzir desigualdades, oferecendo oportunidades de emprego e serviços essenciais para populações marginalizadas. Com práticas de governança democrática, essas organizações garantem uma distribuição mais equitativa de recursos, integrando indivíduos na sociedade e promovendo um senso de pertencimento e coesão social. Olhando para o futuro, as tendências são promissoras, com a digitalização e a inovação tecnológica criando novas oportunidades e a crescente colaboração entre setores público, privado e da economia social. "
            },
            {
                texto: "Embora a economia social tenha o objetivo de promover a inclusão social e reduzir desigualdades, ela pode enfrentar vários obstáculos para alcançar esses objetivos. Muitas vezes, essas organizações carecem de recursos e infraestrutura adequados para fazer uma diferença significativa. A dependência de financiamento externo pode levar a uma sustentabilidade incerta, e a pequena escala de operação pode limitar o impacto. Além disso, a governança democrática pode ser desafiadora na prática, resultando em ineficiências e tomadas de decisões subótimas.",
                afirmacao: " A dependência de subsídios e doações pode restringir suas operações, e a capacidade de competir com grandes empresas é muitas vezes insuficiente. Além disso, a falta de profissionalismo e infraestrutura em algumas dessas organizações pode comprometer a eficácia de suas iniciativas. A promoção da inclusão social e a redução das desigualdades também enfrentam obstáculos significativos. Muitas vezes, essas organizações carecem de recursos e infraestrutura adequados para fazer uma diferença significativa, e a governança democrática pode ser desafiadora na prática, resultando em ineficiências. "
            }
        ]
    },
    {
        enunciado: "Quais são as tendências futuras para a economia social?",
        alternativas: [
            {
                texto: "As tendências futuras para a economia social são promissoras, com um crescimento contínuo e maior integração com outras esferas da economia. A digitalização e a inovação tecnológica estão criando novas oportunidades para essas organizações, permitindo-lhes expandir seu alcance e impacto. A colaboração crescente entre setores público, privado e da economia social está promovendo parcerias eficazes para enfrentar desafios sociais complexos. A crescente conscientização e apoio dos consumidores para produtos e serviços de economia social também impulsionam o setor, alinhando-se com os Objetivos de Desenvolvimento Sustentável (ODS) da ONU.",
                afirmacao: "Olhando para o futuro, as tendências são promissoras, com a digitalização e a inovação tecnológica criando novas oportunidades e a crescente colaboração entre setores público, privado e da economia social. A conscientização e o apoio dos consumidores para produtos e serviços de economia social também estão em ascensão, alinhando-se com os Objetivos de Desenvolvimento Sustentável (ODS) da ONU, o que deve impulsionar ainda mais o setor."
            },
            {
                texto: "Apesar das tendências positivas, a economia social pode enfrentar vários desafios no futuro. A digitalização e a inovação tecnológica podem ser de difícil acesso para muitas organizações devido a limitações de recursos. A colaboração entre setores pode ser complicada e nem sempre bem-sucedida, devido a interesses divergentes. Além disso, o apoio dos consumidores pode ser volátil, e a dependência de práticas sustentáveis pode não ser suficiente para garantir a viabilidade econômica a longo prazo. O setor também pode enfrentar dificuldades em competir com empresas tradicionais e inovar de maneira eficaz.",
                afirmacao: "Olhando para o futuro, a economia social pode enfrentar vários desafios. A digitalização e a inovação tecnológica podem ser inacessíveis para muitas organizações devido a limitações de recursos, e a colaboração entre setores pode ser complicada e nem sempre bem-sucedida. O apoio dos consumidores também pode ser volátil, e a dependência de práticas sustentáveis pode não ser suficiente para garantir a viabilidade econômica a longo prazo. Além disso, o setor pode enfrentar dificuldades em competir com empresas tradicionais e inovar de maneira eficaz."
            }
        ]
    },

];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
