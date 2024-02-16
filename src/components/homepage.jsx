import TopBanner from './top_banner'
import ContentFrame from './contentFrame'
import Footer from './footer'
export default function Homepage(){
    return(
        <div className='home'>
            <TopBanner/>
            <ContentFrame/>
            <Footer/>
        </div>
    )
}