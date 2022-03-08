const info = [
    {
        img: 'images/icon_orgs/abrasco.png',
        name: 'Abrasco',
        description: 'Associação Brasileira de Saúde Coletiva'
    },
    {
        img: 'images/icon_orgs/anda.png',
        name: 'ANDA',
        description: 'Associação Nacional para Difusão de Adubos'
    },
    {
        img: 'images/icon_orgs/anvisa.png',
        name: 'ANVISA',
        description: 'Agência Nacional de Vigilância Sanitária'
    },
    {
        img: 'images/icon_orgs/campanha.png',
        name: 'Campanha Permanente Contra os Agrotóxicos e Pela Vida',
        description: 'Campanha Permanente Contra os Agrotóxicos e Pela Vida'
    },
    {
        img: 'images/icon_orgs/ctnbio.png',
        name: 'CTNBio',
        description: 'Comissão Técnica Nacional de Biossegurança'
    },
    {
        img: 'images/icon_orgs/fao.png',
        name: 'FAO',
        description: 'Food and Agriculture Organization of the United Nations - Organização das Nações Unidas'
    },
    {
        img: 'images/icon_orgs/fiocruz.png',
        name: 'Fiocruz',
        description: 'Fundação Oswaldo Cruz'
    },
    {
        img: 'images/icon_orgs/fnde.png',
        name: 'FNDE',
        description: 'Fundo Nacional de Desenvolvimento da Educação'
    },
    {
        img: 'images/icon_orgs/grain.png',
        name: 'GRAIN',
        description: 'GRAIN'
    },
    {
        img: 'images/icon_orgs/ibama.png',
        name: 'IBAMA',
        description: 'Instituto Brasileiro de Meio Ambiente'
    },
    {
        img: 'images/icon_orgs/IBGE.png',
        name: 'IBGE',
        description: 'Instituto Brasileiro de Geografia e Estatística'
    },
    {
        img: 'images/icon_orgs/ISAAA.png',
        name: 'ISAAA',
        description: 'Internacional Service for the Acquisition of Agro-biotech Applications'
    },
    {
        img: 'images/icon_orgs/MAPA.png',
        name: 'MAPA',
        description: 'Ministério da Agricultura, Pecuária e Abastecimento'
    },
    {
        img: 'images/icon_orgs/ms.png',
        name: 'MS',
        description: 'Ministério da Saúde'
    },
    {
        img: 'images/icon_orgs/sindiveg.png',
        name: 'SINDIVEG',
        description: 'Sindicato Nacional da Indústria de Produtos para Defesa Vegetal'
    }
];

console.log(info.length);

var render = [];

for (var i = 0; i < info.length; i++) { 
    
    render.push(
        `
        <div id="content" class="col s12 m6 l4">
            <div class="card small">
                <div>
                    <img src=${info[i].img} height="120" style="padding-top:2em;padding-left:1em;">
                </div>
                <span class="card-title" style="padding-left:1em;">${info[i].name}</span>
                <div class="card-content">
                    <p>${info[i].description}</p>
                </div>
            </div>
        </div>
        `
    )
    
}

document.getElementById("card_section").innerHTML = render.join('')
