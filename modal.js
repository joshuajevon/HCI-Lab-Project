var modalesport=[
    {
        id: 0, team: 'RRQ A VS EVOS B',  date:'June 20', time: '11 : 20 AM',
    },

    {
        id: 1, team: 'Bigetron B VS Onic A',  date:'June 21', time: '12 : 50 PM',
    },

    {
        id: 2, team: 'Onic B VS RRQ B',  date:'June 22', time: '13 : 15 PM',
    },

    {
        id: 3, team: 'EVOS A VS Bigetron A',  date:'June 23', time: '14 : 40 PM',
    },
]

function Click(idx){
    document.getElementById('modal').style.display = 'block'
    document.getElementById('team').innerHTML=modalesport[idx].team
    document.getElementById('date').innerHTML=modalesport[idx].date
    document.getElementById('time').innerHTML=modalesport[idx].time
}

function Close(){
    document.getElementById('modal').style.display="none"
    document.getElementById('team').innerHTML=""
    document.getElementById('date').innerHTML=""
    document.getElementById('time').innerHTML=""
}