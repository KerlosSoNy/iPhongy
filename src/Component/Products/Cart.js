import { useDispatch, useSelector } from "react-redux"
import { decreaseCount, increaseCount, removeFromCart } from "../../Store/Slices/Cart-slice"
import ViewCollection from "../Simple-Buttons/ViewCollection"
import { Link } from 'react-router-dom';

export default function Cart(){
    const products = useSelector(state=>state.cart)
    const dispat = useDispatch()
    const Swal = require('sweetalert2')
    const totalPayment = products.reduce((acc,product)=>{
        let pricess = 0
        if(product.count >1){
            pricess = parseInt(product.product.price) * product.count
            return acc += pricess
        }else{
            return acc += parseInt(product.product.price)
        }
    },0)

    const totalProducts = products.reduce((acc,product)=>{
        let length1 = 0
        if(product.count >1){
            length1 = product.count
            return acc += length1
        }else{
            return acc += product.count
        }
    },0)
    return(
        <div>
            <div className="container mx-auto my-20">
                <h1 className="lg:text-4xl text-2xl ps-2 pb-4 border-b-[1px]">Your shopping cart</h1>
                <div>
                    {products.length > 0 ? 
                <div>
                    <div class="relative overflow-auto shadow-md sm:rounded-lg md:block lg:block hidden ">
                        <table class="w-full text-sm text-left rtl:text-right  overflow-scroll  text-black dark:text-black">
                        <thead class="text-xs text-black uppercase bg-gray-50 dark:bg-[##E6E6EB] dark:text-black">
                            <tr>
                                <th scope="col" class="px-16 py-3">
                                    <span class="sr-only">Image</span>
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Product
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Qty
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Price
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            products.map((e)=>{
                                return(
                                    <tr class="bg-white border-b dark:bg-[##E6E6EB]">
                                <td class="p-4">
                                    <img src={e.product.img} class="w-16 md:w-32 max-w-full max-h-full" alt="Apple Watch"/>
                                </td>
                                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-black">
                                    {e.product.title}
                                </td>
                                {e.condition === "new" ?
                                <td class="px-6 py-4">
                                    <div class="flex items-center">
                                        <button onClick={()=> dispat(decreaseCount(e))} class="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                                            <span class="sr-only" >Quantity button</span>
                                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                                            </svg>
                                        </button>
                                        <div>
                                            {e.count}
                                        </div>
                                        <button onClick={()=> dispat(increaseCount(e))} class="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                                            <span class="sr-only">Quantity button</span>
                                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                                            </svg>
                                        </button>
                                    </div>
                                </td>:
                                <td class="px-6 py-4">
                                <div class="flex items-center">
                                    <button disabled onClick={()=> dispat(decreaseCount(e))} class="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                                        <span class="sr-only" >Quantity button</span>
                                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                                        </svg>
                                    </button>
                                    <div>
                                        {e.count}
                                    </div>
                                    <button disabled onClick={()=> dispat(increaseCount(e))} class="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                                        <span class="sr-only">Quantity button</span>
                                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                                        </svg>
                                    </button>
                                </div>
                            </td>
                                }
                                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-black">
                                ${e.product.price}
                                </td>
                                <td class="px-6 py-4">
                                    <button onClick={()=>dispat(removeFromCart(e))} class="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</button>
                                </td>
                            </tr>
                                )
                            })
                           }
                       </tbody>
                    </table>
                    </div>
                {/* Mobile View  */}
                    <div className="grid grid-flow-row lg:hidden md:hidden">
                        {products.map((e)=>{
                            return(
                                <div key={e.product.id}>
                                    <div className="grid grid-flow-col p-2">
                                        <img src={e.product.img} alt={e.product.title}/>
                                        <div className="text-center  p-2">
                                            <Link onClick={()=>{
                            Swal.fire({
                                html: `
                                <div class="grid grid-flow-row justify-center align-middle justify-items-center">
                                    <h1 class="p-2 font-bold text-base">${e.product.title}</h1>
                                    <p class=" text-[13px]">${e.product.description}</p>
                                    <img src=${e.product.img} alt="Image" class="alertimage m-2 mt-4">
                                    <span class="mt-4">${e.product.price}$</span>
                                </div>`,
                                confirmButtonText: `Close`,
                                showCloseButton: true
                            });
                        }}
                                            ><h1>{e.product.title}</h1></Link>
                                            <span>${e.product.price}</span>
                                            <div class="flex items-center">
                                        <div className="grid grid-flow-row justify-items-center align-middle mt-10 mx-auto">
                                            <div className="flex mb-2">
                                                <button onClick={()=> dispat(decreaseCount(e))} class="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                                                    <span class="sr-only" >Quantity button</span>
                                                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                                                    </svg>
                                                </button>
                                                <div>
                                                    {e.count}
                                                </div>
                                                <button onClick={()=> dispat(increaseCount(e))} class="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                                                    <span class="sr-only">Quantity button</span>
                                                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                                                    </svg>
                                                </button>
                                            </div>
                                            <button onClick={()=>dispat(removeFromCart(e))} class="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</button>
                                        </div>
                                    </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                    :
                    <div className="container mx-auto my-20 text-center">
                        <h1 className="lg:text-4xl text-xl">No iteams Yet</h1>
                    </div>}
                </div>
                <div className=" pt-4 border-t-[1px]">
                    <h1 className="lg:text-2xl text-xl ps-2">SubTotal ${totalPayment}</h1>
                    <span className="ps-2">Taxes and shipping are calculated at chechkout</span>
                    <div className="flex justify-center my-12">
                        <ViewCollection links="/" name="Check Out"/>
                    </div>
                </div>
            </div>
        </div>
    )
}