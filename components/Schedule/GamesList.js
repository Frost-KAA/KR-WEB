import GameCard from "./GameCard";

const GamesList = ({games}) =>{

    return(
        <div>
           <ul >
                {games.map(({pk, homeTeam, awayTeam, homeScore, awayScore, date, location}) => (
                    <GameCard kwy={pk} id={pk} homeTeam={homeTeam} awayTeam={awayTeam} homeScore={homeScore} awayScore={awayScore} date={date} location={location} />
                ))}
            </ul>
        </div>
        
    )
}

export default GamesList;
