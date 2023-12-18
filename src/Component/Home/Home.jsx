import JoinUs from "./JoinUs";
import MainSection from "./MainSection";
import ShowingNew from "./NewProducts";
import Ours from "./Ours";
import PopluerProducts from "./PoplurProduct";

export default function Home(){
    
    return(
        <div className="lg:pt-8 md:pt-8  pt-1">
            <MainSection/>
            <Ours/>
            <ShowingNew/>
            <PopluerProducts/>
            <JoinUs/>
        </div>
    )
}