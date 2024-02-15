import TopDeals from "./deals/top-deals";
import BestDeals from "./deals/best-deals";

export default function ContentFrame(){
    return(
        <div className="content-frame">
            <h1>Top Deals</h1>
            <TopDeals/>
            <h1>Best Deals</h1>
            <BestDeals/>
        </div>
    )
}