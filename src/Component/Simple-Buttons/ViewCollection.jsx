import { Link } from "react-router-dom"
export default function ViewCollection(props){

    return(
        <>
        <Link to={props.links} className="hover:text-[#393266] hover:bg-[#e6e6eb] text-black ms-5 p-3 bg-[#f0efef] md:w-[15%] w-[40%] text-center lg:block md:block hidden">{props.name}</Link>
        <Link to={props.links} className=" bg-[#f0efef] p-3 text-black w-[90%] text-center hover:text-[#393266] hover:bg-[#e6e6eb] lg:hidden md:hidden  block">{props.name}</Link>
        </>
    )
}