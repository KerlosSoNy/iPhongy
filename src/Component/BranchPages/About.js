import Ours from "../Home/Ours";
import JoinUs from './../Home/JoinUs';


export default function About(){
    return(
        <div className="lg:mt-[7%] md:mt-[7%] mt-[9%] mb-10">
            <div className="container mx-auto lg:text-center md:text-center text-start mb-20">
                <h1 className="text-4xl lg:w-[48%] md:w-[50%] w-[100%] p-2 ps-5 mx-auto my-10 mb-14">A store built on the love of craftmanship, quality and outstanding custmoer service</h1>
                <div>
                    <div className="flex lg:flex-row md:flex-row flex-col">
                        <div className="px-5 me-10 flex flex-col justify-center align-middle text-start">
                            <h1 className="text-xl lg:text-4xl md:text-3xl 
                            font-semibold text-start">From a store in Egyot to global brand with over 400 outlets</h1>
                            <p className="my-8 text-md lg:text-xl">When we started iPhongy, the idea was simple. Make high quality accessiruze and available for the mass store</p>
                            <p className="mb-10">Handmade searching , and lovingly crafted accessorize and covers is what we live, breathe and design so our cairo store become the hotbed for the Egypt interior design community </p>
                        </div>
                        <img className="lg:w-[50%] md:w-[50%] w-100 " src="https://assets-dubaiphone.dubaiphone.net/dp-prod/wp-content/uploads/2023/11/WhatsApp-Image-2023-09-16-at-7.46.22-PM.jpeg" alt="https://assets-dubaiphone.dubaiphone.net/dp-prod/wp-content/uploads/2023/11/WhatsApp-Image-2023-09-16-at-7.46.22-PM.jpeg"/>
                    </div>
                    <div className="flex lg:flex-row md:flex-row flex-col">
                        <img className="lg:w-[50%] md:w-[50%] w-100 mb-10" alt="https://assets-dubaiphone.dubaiphone.net/dp-prod/wp-content/uploads/2023/11/WhatsApp-Image-2023-11-01-at-19.04.50_7747bd5a.jpg" src="https://assets-dubaiphone.dubaiphone.net/dp-prod/wp-content/uploads/2023/11/WhatsApp-Image-2023-11-01-at-19.04.50_7747bd5a.jpg"/>
                        <div className="px-5 me-10 flex flex-col justify-center align-middle text-start">
                            <h1 className="text-xl lg:text-4xl md:text-3xl 
                            font-semibold text-start">From a store in Egyot to global brand with over 400 outlets</h1>
                            <p className="my-8 text-md lg:text-xl">When we started iPhongy, the idea was simple. Make high quality accessiruze and available for the mass store</p>
                            <p className="mb-10">Handmade searching , and lovingly crafted accessorize and covers is what we live, breathe and design so our cairo store become the hotbed for the Egypt interior design community </p>
                        </div>
                    </div>
                </div>
            </div>
            <Ours/>
            <JoinUs/>
        </div>
    )
}