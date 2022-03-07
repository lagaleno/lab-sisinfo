const info = [
    {
        img: 'images/icon_group/agroecologia.png',
        name: 'Agroecologia e produção orgânica',
        description: 'Fonte de informações sobre produção de alimentos livre de agrotóxicos'
    },
    {
        img: 'images/icon_group/comercialização.png',
        name: 'Comercialização',
        description: 'Dados sobre a comercialização de agrotóxicos'
    },
    {
        img: 'images/icon_group/uso_solo.png',
        name: 'Uso do solo',
        description: 'Dados sobre o uso do solo no Brasil e no mundo'
    },
    {
        img: 'images/icon_group/bases.png',
        name: 'Bases de Dados',
        description: 'Bases de dados que reúnem informações sobre agrotóxicos'
    },
    {
        img: 'images/icon_group/residuos.png',
        name: 'Resíduos em alimentos',
        description: 'Dados sobre a análise de resíduos em alimentos'
    },
    {
        img: 'images/icon_group/conflitos.png',
        name: 'Conflitos',
        description: 'Dados sobre conflitos gerados pelos agrotóxicos e agronegócio'
    },
    {
        img: 'images/icon_group/intoxicacoes.png',
        name: 'Intoxicações',
        description: 'Registro de intoxicações sobre agrotóxicos'
    },
    {
        img: 'images/icon_group/transgenicos.png',
        name: 'Transgênicos',
        description: 'Dados sobre transgênicos'
    },
    {
        img: 'images/icon_group/doencas.png',
        name: 'Doenças',
        description: 'Relações entre tipos de agrotóxico/ grupos químicos, sintomas e doenças'
    },
    {
        img: 'images/icon_group/precos.png',
        name: 'Preços',
        description: 'Preços sobre agrotóxicos e outros produtos agropecuários'
    },
    {
        img: 'images/icon_group/bibliografia.png',
        name: 'Bibliografia',
        description: 'Conjunto de publicações sobre agrotóxicos, transgênicos e saúde'
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

