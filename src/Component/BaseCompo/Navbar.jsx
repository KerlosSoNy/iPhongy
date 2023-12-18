import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { decreaseCount, increaseCount, removeFromCart } from "../../Store/Slices/Cart-slice"
const pagesNav = [{to:"/",name:"Home",menu:false},
{to:"",name:"iPhones",menu:true},
{to:"/products/accessorize",name:"Accessorize",menu:false},
{to:"/contact",name:"Contact",menu:false},
{to:"/about",name:"About",menu:false}]


export default function Navbar(){
    let [isOpen,setOpen] = useState(false)
    let [menuOpen,setMenuOpen]= useState(false)
    let [iphoneOpen , setIphoneOpen]=useState(false)
    let cart = useSelector(state=>state.cart)
    let disp =useDispatch()
    const change= (isOpen)=> isOpen ? setOpen(false) : setOpen(true);
    const  menuIsopen = (menuOpen)=> menuOpen ? setMenuOpen(false) : setMenuOpen(true);

    const iphoneMenu = (iphoneOpen)=> iphoneOpen ? setIphoneOpen(false): setIphoneOpen(true);

    return(<>
        <div className="p-3 grid grid-flow-col justify-between w-full  z-20 bg-white h-[70px] container mx-auto">
            <div className=" mt-[23px] ps-[28px]" >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
                </svg>
            </div>

            <Link to='/'><h1 className="text-2xl headerNav mt-[19px]">iPhongy</h1></Link>


            <div className="lg:flex xl:flex md:flex flex-row gap-2 m-0 hidden p-0 md:pt-1">
                {/* Account */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block mt-[26px]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {/* Cart */}
                <div className="cartNav relative">
                    <div className=" hover:cursor-pointer mt-[23px]" 
                    onClick={()=>change(isOpen)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>
                    </div>
                    
                    {isOpen &&                     
                    <div className="absolute right-0 w-80 h-[18rem] overflow-y-auto z-20 border-2 border-stone-400 bg-white rounded-lg" id="cartProduct">
                        <div className="w-full h-full flex flex-col relative">
                        {cart.length > 0 ? <div>
                            {cart.map((e)=>{
                                // if(e.)
                                return(
                                    <div key={e.product.id} className="border-b-2 p-1 grid grid-cols-4 h-[7rem] relative overflow-hidden">
                                        <img src={e.product.img} alt={e.product.img} className="w-[6rem] pe-2  h-[6rem] object-contain relative border-r-2"/>
                                        <div className="grid grid-cols-3 px-3 relative h-[7rem] col-span-3">
                                            <h1 dir='rtl'className="text-sm col-span-2">{e.product.title.slice(0,60)}...</h1> 
                                                <div className="grid grid-flow-row p-3 ps-5 justify-center align-middle text-center relative">
                                                    <span>{e.product.price}</span>
                                                    {e.condition === "new"&&
                                                    <div className="grid grid-flow-col justify-center">
                                                        <button onClick={()=>disp(increaseCount(e))}>+</button>
                                                        <h2 className=" mx-1 pt-1">{e.count}</h2>
                                                        <button onClick={()=>disp(decreaseCount(e))}>-</button>
                                                    </div>
                                                    }
                                                    <button onClick={()=>disp(removeFromCart(e))} className="ms-[0.95rem] mt-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                        </svg>
                                                    </button>
                                                </div>
                                        </div>
                                    </div>
                                )
                            })}
                            <div className="text-center relative">
                            <Link to='/cart' className="p-3 px-6 sticky bottom-0">Your Cart</Link>
                        </div>
                        </div> : <span className="text-lg text-center mt-[7rem]">You Have No Products Yet</span>}
                        </div>
                    </div>
                    }
                </div>
            </div>

            {/* Start  The MobileView */}
            <button className=" font-semibold text-4xl hover:cursor-pointer
            block sm:hidden md:hidden mobileVie mt-[18px] me-[28px]"
            onClick={()=>menuIsopen(menuOpen)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                </svg>
            </button>
            {menuOpen && 
                <div className="absolute top-[70px] left-0 p-2 z-10 bg-white border-b-2 border-black w-[100%]">
                    <div className="grid grid-flow-row">
                            <div className="grid grid-flow-row">
                                {pagesNav.map((e)=>{
                                    return(
                                        <span key={e.name} className="p-3 border-b-2">
                                            {e.menu === false ?
                                            <Link to={e.to}>{e.name}</Link>: 
                                            <div className="relative">
                                                <button onClick={()=>iphoneMenu(iphoneOpen)}>{e.name}</button>
                                                {iphoneOpen && 
                                                <div className=" relative flex flex-col text-center p-3 w-20 left-[-30px]">
                                                    <Link to='/products/newphones' className=" my-1 ps-3">New</Link>
                                                    <Link to='/products/usedphones'className=" my-1 pt-2 ps-3">Used</Link>
                                                </div>}
                                            </div>}
                                        </span>
                                    )
                                })}
                            </div>
                            <div className="mt-2">
                                <Link to='/cart' className="p-3 ">Cart</Link>
                                <div className="flex justify-evenly border-t-2 py-5 mt-4">
                                    <Link>Sign Up</Link>
                                    <hr/>
                                    <Link>Log In</Link>
                                </div>
                            </div>
                    </div>  
                </div>}
        </div>
        <nav className=" relative w-full lg:grid hidden grid-flow-col lg:justify-center md:lg:justify-center xl:justify-center justify-center align-middle h-[60px] mb-5 navLinks">
            <ul className="lg:flex xl:flex md:flex gap-[7rem] md:gap-[4rem] hidden">
                {pagesNav.map((e)=>{
                    return(
                        <li key={e.name} className="p-3 md:pt-6">
                            {e.menu === false ?
                            <Link to={e.to}>{e.name}</Link>: 
                            <div className="relative">
                                <div>
                                    <button onClick={()=>iphoneMenu(iphoneOpen)} className="flex">
                                        {e.name}
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ms-2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </button>
                                </div>
                                <div class="icon icon__chevron dropdown__icon"></div>
                                {iphoneOpen && 
                                <div className=" absolute flex flex-col text-start p-3 z-50 bg-white w-36 top-10 left-[-0px] border-2 ">
                                    <Link to='/products/newphones' className=" my-1 w-full">New</Link>
                                    <Link to='/products/usedphones'className=" my-1 border-t-2 w-full pt-2">Used</Link>
                                </div>}
                            </div>}
                        </li>
                    )
                })}
            </ul>
        </nav>
        </>
    )
}