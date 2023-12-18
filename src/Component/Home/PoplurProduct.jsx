import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "../../Store/Slices/Cart-slice"
import { Link } from 'react-router-dom';
import ViewCollection from "../Simple-Buttons/ViewCollection";
import { fetchAccessorize } from "../../Store/Slices/access-slice";

export default function PopluerProducts(){
    let products = useSelector(state => state.accessoreMarket)
    const Swal = require('sweetalert2')
    let disp = useDispatch()
    useEffect(()=>{
        disp(fetchAccessorize())
    },[])
    var i = 0
    return(
        <div className="container mx-auto lg:mb-18 mb-20">
            <h1 className="mb-10 text-3xl ms-4">Our popular products</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 gap-4 p-1 align-middle justify-items-center poplur">
                {
                    products.map((elemnt)=>{
                        if(i < 3){
                            i++;
                            return(
                                <div key={elemnt.id} dir="rtl" id={`acc${elemnt.id}`} className="ps-1 mb-4">
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
                                    <img src={elemnt.img} alt="" className="w-[70%] h-[80%] object-contain  mx-auto  hover:blur-sm mb-4"/>
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
            <ViewCollection links='/products/accessorize' name="View Collection"/>
            </div>
        </div>
    )
}