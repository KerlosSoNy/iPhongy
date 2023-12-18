import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchNewProducts } from './../../Store/Slices/New-slice';
import { addToCart } from "../../Store/Slices/Cart-slice"
import { Link } from 'react-router-dom';
import ViewCollection from "../Simple-Buttons/ViewCollection";
export default function ShowingNew(){
    let products = useSelector(state => state.newMarket)
    const Swal = require('sweetalert2')
    let disp = useDispatch()
    useEffect(()=>{
        disp(fetchNewProducts())
    },[])
    var i = 0
    return(
        <div className="container mx-auto lg:mb-18 mb-20">
            <h1 className="mb-10 text-3xl ms-4">New IPhones</h1>
            <div className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-2 gap-4 p-1">
                {
                    products.map((elemnt)=>{
                        if(i < 4){
                            i++;
                            return(
                                <div key={elemnt.id} dir="rtl" className="ps-1 mb-4 bg">
                                    <Link onClick={()=>{
                                            Swal.fire({
                                                html: `
                                                <div class="grid grid-flow-row justify-center align-middle justify-items-center">
                                                    <h1 class="p-2 font-bold text-base">${elemnt.title}</h1>
                                                    <p class=" text-[13px]">${elemnt.description}</p>
                                                    <img src=${elemnt.img} alt="Image" class="alertimage m-2 mt-4">
                                                    <span class="mt-4">${elemnt.price}$</span>
                                                </div>`,
                                                confirmButtonText: `Buy`,
                                                showCloseButton: true
                                            }).then((result)=>{
                                                if (result.isConfirmed) {
                                                    disp(addToCart({"product" :elemnt , count: 1,"condition":"new"}))
                                                }
                                            });
                                        }}>
                                    <img src={elemnt.img} alt="" className="w-[70%] h-[70%] object-contain  mx-auto  hover:blur-sm mb-4"/>
                                    <h2 className="ps-5 mb-2">{elemnt.title.slice(0,42)}</h2>
                                    <span className="ps-5">{elemnt.price}$</span>
                                    </Link>
                                </div>
                            )
                        }else{
                            return null;
                        }
                    })
                }
            </div>
            <div className="flex justify-center my-12">
            <ViewCollection links='/products/newphones' name="View Collection"/>
            </div>
        </div>
    )
}