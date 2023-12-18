import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts } from "../../Store/Slices/Used-slice"
import { AddUsed } from "../../Store/Slices/Cart-slice"
import { Link } from "react-router-dom"
import Swal from 'sweetalert2'
export default function ProductsList(){
    const products = useSelector(state=>state.usedMarket)
    const disp = useDispatch()
    useEffect(()=>{
        disp(fetchProducts())
    },[])
    const Swal = require('sweetalert2')
    return(
        <div>
            <div className="grid grid-cols-4 p-3 gap-2 container m-auto">
            {products.map((e)=>{
                return(
                    <div key={e.id} className="col-span-2 lg:col-span-1 p-2 relative">
                        <img src={e.img} alt="" className="w-full h-48 lg:h56 object-contain mb-2"/>
                        <Link onClick={(element)=>{
                            Swal.fire({
                                html: `
                                <div class="grid grid-flow-row justify-center align-middle justify-items-center">
                                <h1 class="p-2 font-bold text-base">${e.title}</h1>
                                <p class=" text-[13px]">${e.description}</p>
                                <img src=${e.img} alt="Image" class="alertimage m-2 h-96 mt-4">
                                <span class="mt-4">${e.price}$</span>
                                </div>`,
                                showCloseButton: true
                            })
                        }}><h1 className="h-[2rem] lg:h-[2rem] xl:h-[2rem] md:h-[2rem] text-center" dir="rtl">{e.title.slice(0,76)}</h1></Link>
                        <div className="relative text-center grid grid-flow-row justify-center">
                        <h1 className="p-2 ps-0 ">{e.price}$</h1>
                        <button className="relative py-1 px-2 lg:px-6 w-[6rem] bg-green-600 rounded-xl" onClick={(element)=> {
                                if(element.currentTarget.innerHTML === "Buy"){
                                    element.currentTarget.innerHTML = "Cancle"
                                    element.currentTarget.classList.remove('bg-green-600')
                                    element.currentTarget.classList.add('bg-red-600')
                                    disp(AddUsed({"product":e , count : 1,"condition":"used"} ))
                                }else{
                                    element.currentTarget.innerHTML = "Buy"
                                    element.currentTarget.classList.remove('bg-red-600')
                                    element.currentTarget.classList.add('bg-green-600')
                                    disp(AddUsed({"product":e , count : 1,"condition":"used"} ))
                                }
                            }}>Buy</button>
                        </div>
                    </div>
                )
            })}
        </div>
        </div>
    )
}