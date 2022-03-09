const info = [
    {
        title: 'abelha',
        qt: '1'
    },
    {
        title: 'adulticida',
        qt: '1'
    },
    {
        title: 'agricultura familiar',
        qt: '2'
    },
    {
        title: 'agroecologia',
        qt: '2'
    },
    {
        title: 'agrotóxico',
        qt: '3'
    },
    {
        title: 'alimento',
        qt: '3'
    },
    {
        title: 'análise de água',
        qt: '1'
    },
    {
        title: 'área',
        qt: '4'
    },
    {
        title: 'base de dados',
        qt: '3'
    },
    {
        title: 'bibliografia',
        qt: '3'
    },
    {
        title: 'câncer',
        qt: '1'
    },
    {
        title: 'comercialização de agrotóxico',
        qt: '8'
    },
    {
        title: 'conflito',
        qt: '2'
    },
    {
        title: 'doença',
        qt: '2'
    },
    {
        title: 'empresa',
        qt: '1'
    },
]

var render = []

for (var i = 0; i < info.length; i++) {

    var text = info[i].title + ' (' + info[i].qt + ')'
    console.log(text)

    render.push(
        `
            <a class="waves-effect waves-light btn" style="text-transform: lowercase;background-color: #206B82; border-radius: 20px; margin-top:1em;">${text}</a>
        `
    )
    
}

console.log(document.getElementById("tag_section").innerHTML = render.join(''))
//<button class="waves-effect waves-light btn" style="text-transform: lowercase;background-color: #206B82; border-radius: 20px">abelhas (1) </button>