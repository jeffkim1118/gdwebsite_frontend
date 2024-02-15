export default function TopDeals(){
    const games = [
        "first", "second", "Third", "Fourth", "Fifth"
    ]

    return(
        <div className="deal-container">
            {games.map((game) => {return <div className="deal-box">
                {game}
            </div>})}
        </div>
    )
}