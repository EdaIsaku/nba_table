const warriorsGames = [{
    awayTeam: {
      team: 'Golden State',
      points: 119,
     isWinner: true
    },



    homeTeam: {
      team: 'Albania',
      points: 106,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 105,
      isWinner: false
    },
    homeTeam: {
      team: 'Houston',
      points: 127,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 126,
      isWinner: true
    },
    awayTeam: {
      team: 'Houston',
      points: 85,
      isWinner: false
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 92,
      isWinner: false
    },
    awayTeam: {
      team: 'Houston',
      points: 95,
      isWinner: true
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 94,
      isWinner: false
    },
    homeTeam: {
      team: 'Houston',
      points: 98,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 115,
      isWinner: true
    },
    awayTeam: {
      team: 'Houston',
      points: 86,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 101,
      isWinner: true
    },
    homeTeam: {
      team: 'Houston',
      points: 92,
      isWinner: false
    }
  }
]

const makeChart = (games, target)=>{
const newUL = document.createElement('ul')
  for(let game of games){
  const newLI = document.createElement('li')
  newLI.innerHTML=scoreLine(game)
  let warriors = winner(game, target)
  newLI.classList.add(warriors.isWinner ? 'win' : 'loss')
  newUL.append(newLI)
}
return newUL
}

const scoreLine = ({awayTeam, homeTeam})=>{
  const gameName = `${awayTeam.team} @ ${homeTeam.team}`
  let teamPoints = awayTeam.points>homeTeam.points ? `<b>${awayTeam.points}</b>-${homeTeam.points}`:`${awayTeam.points}-<b>${homeTeam.points}</b>`
  return `${gameName} ${teamPoints}`
}

const winner = ({awayTeam, homeTeam}, target)=>{
  let warriors = homeTeam.team===target? homeTeam : awayTeam;
  return warriors
}

let gs = document.getElementById('gs')
let hs = document.getElementById('hs')

const chart1 =  makeChart(warriorsGames, 'Golden State')
const chart2 =  makeChart(warriorsGames, 'Houston')

gs.appendChild(chart1)
hs.append(chart2)


