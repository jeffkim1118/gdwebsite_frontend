export default function BestDeals(){
    const deals = [
        1,2,3,4,5,6,7,8,9,10
    ]
    return(
        <div>
            <ul>
                {deals.map((deal) => {
                    return <div>
                        <li>{deal}</li>
                    </div>
                })}
            </ul>
        </div>
    )
}