import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchAccessorize } from "../../Store/Slices/access-slice";
import { addToCart } from "../../Store/Slices/Cart-slice"
import { Link } from "react-router-dom";
export default function Accessorize(){
    const products = useSelector(state=>state.accessoreMarket);
    const disp = useDispatch()
    useEffect(()=>{
        disp(fetchAccessorize())
    },[])

    const Swal = require('sweetalert2')
    return(
        <div className="grid grid-cols-4 p-3 gap-2 container m-auto">
            {products.map((e)=>{
                return(
                    <div key={e.id} className="col-span-2 lg:col-span-1 p-2 relative">
                        <img src={e.img} alt="" className="w-full h-48 lg:h56 object-contain mb-2"/>
                        <Link onClick={()=>{
                            Swal.fire({
                                html: `
                                <div class="grid grid-flow-row justify-center align-middle justify-items-center">
                                <h1 class="p-2 font-bold text-base">${e.title}</h1>
                                <p class=" text-[13px]">${e.description}</p>
                                <img src=${e.img} alt="Image" class="alertimage m-2 h-96 mt-4">
                                <span class="mt-4">${e.price}$</span>
                                </div>`,
                                confirmButtonText: `Buy`,
                                showCloseButton: true
                            }).then((result)=>{
                                if (result.isConfirmed) {
                                    disp(addToCart({"product" :e , count: 1,"condition":"new"}))
                                }
                            });
                        }}><h1 className="h-[6.8rem] lg:h-[3rem] xl:h-[4rem] md:h-[4rem] text-center" dir="rtl">{e.title.slice(0,76)}...</h1></Link>
                        <div className="relative text-center grid grid-flow-row justify-center">
                            <h1 className="p-2 ps-0 ">{e.price}$</h1>
                            <button onClick={()=>disp(addToCart({"product" :e , count: 1,"condition":"new"}))} className=" relative py-1 px-2 lg:px-6 w-[6rem] bg-green-600 rounded-xl">Buy</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}