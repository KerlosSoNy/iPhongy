import { Link } from "react-router-dom";

export default function MainSection(){
    return(
        <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-flow-row container mx-auto justify-between mainSection lg:mb-12 mb-20">
            <div className="bg-[#2A254B] grid grid-flow-row justify-between col-span-2 p-10">
                <div className="lg:p-3 p-[0px] flex flex-col justify-evenly 
                lg:w-[60%] md:w-[80%] w-[100%] 
                lg:ms-[2rem] ms-[0px] lg:mt-9 mt-1">
                    <p className="lg:m-3 m-0 md:mb-10 lg:mb-16 mb-16 text-white font-extralight lg:text-4xl md:text-2xl text-3xl" >The Phones brand for the future, with timeless designs</p>
                    <Link to='/products/newphones' className="bg-[#494565] ms-5 p-3 text-white md:w-[50%] w-[33%] text-center hover:text-[#393266] hover:bg-[#e6e6eb] lg:block md:block hidden
                    ">View Collection</Link>
                </div>
                <div className=" lg:ms-[4rem] lg:mt-[8rem]
                mb-10 pt-7 md:mt-12
            text-white md:text-md text-1xl lg:w-[65%] w-100">
                    <p>A new phone is eco friendly with Avion, the French Luxury retail brand with nice technics, tasteful colors and a beautiful way to display things using modern web technologies</p>
                </div>
                <Link to='/products/newphones' className="bg-[#494565] p-3 text-white w-[100%] text-center hover:text-[#393266] hover:bg-[#e6e6eb] lg:hidden md:hidden  block
                    ">View Collection</Link>
            </div>
            <div className="bg-[#fafafa] w-full h-full lg:flex md:flex justify-center hidden">
                <img src="https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iPhone-13-Pro_iPhone-13-Pro-Max_09142021_inline.jpg.slideshow-large_2x.jpg" className="w-[52%]" alt="" />
            </div>
        </div>
    )
}