
export default function JoinUs(){
    return(
        <div className="bg-[#f9f9f9]">
            <div className="container mx-auto text-center bg-white py-[7rem]"> 
                <h2 className="text-4xl mb-6">Join our store and get the benefits</h2>
                <p className="lg:w-[30rem] md:w-[30rem] lg:px-0 md:px-0 px-4 mx-auto lg:mb-20 md:mb-20 mb-8">Sign up for our newsletter and recevive exclusive offers on new ranges, sales, pop up stores and more</p>
                <div>
                    <input type="email" className="bg-[#f9f9f9] p-3 w-[22rem]" placeholder="your@email.com"/>
                    <button className="bg-[#2a254b] p-3 px-9 mt-6 lg:mt-0 md:mt-0 text-white hover:text-[#393266] hover:bg-[#e6e6eb]">Sign up</button>    
                </div>
            </div>
        </div>
    )
}