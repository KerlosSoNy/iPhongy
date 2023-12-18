
import { Link } from 'react-router-dom';
export default function Footer(){
    return(
        <footer className="static bottom-0 bg-[#2a254b] text-white mt-24">
            <div className="container mx-auto py-20 px-6 gap-2 grid grid-cols-2 lg:grid-cols-3 md:grid-cols-3 justify-items-evenly align-middle border-b-2 border-[#4a4666]">
                <div>
                    <ul className=''>
                        <li className='mb-3'><Link to='/'>Home</Link></li>
                        <li className='mb-3'><Link to='/products/newphones'>New IPhone</Link></li>
                        <li className='mb-3'><Link to='/products/usedphones'>Used IPhone</Link></li>
                        <li className='mb-3'><Link to='/products/accessorize'>Accessorize</Link></li>
                        <li className='mb-3'><Link to='/contact'>Contact us</Link></li>
                        <li className='mb-3'><Link to='/about'>About</Link></li>
                    </ul>
                </div>
                <div>
                    <ul>
                    <li className='mb-3'><Link to='/cart'>Cart</Link></li>
                    <li className='mb-3'><Link to='/'>Locations</Link></li>
                    <li className='mb-3'><Link to='/'>Privecy</Link></li>
                    <li className='mb-3'><Link to='/'>Return policy</Link></li>
                    </ul>
                </div>
                <div className=' col-span-2 lg:col-span-1 md:col-span-1 lg:mt-0 md:mt-0 mt-10'>
                    <h2 className='mb-3'>Join our mailling list</h2>
                    <input type="email" className="bg-[#4a4666] p-3 w-[12rem] lg:w-[22rem] md:w-[20rem]" placeholder="your@email.com"/>
                    <button className="bg-[#ffffff] p-3 px-9 mt-6 lg:mt-0 md:mt-0 text-black hover:text-[#393266] hover:bg-[#e6e6eb]">Sign up</button>    
                </div>
            </div>
            <div className='grid grid-flow-col justify-between container mx-auto py-2 px-5 text-[#8d8c96]'>   
                <p>Copyright 2023 iPhongy LTD</p>
                <div className='flex flex-row gap-8'>
                <a  href="https://github.com/KerlosSoNy"   target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 50 50">
                    <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
                </svg></a> 
                <a  href="https://www.linkedin.com/in/kerlos-m-61759a105"  target="_blank" tap>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="26" height="26" viewBox="0 0 25 25">
                    <path d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M7.738,17L7.738,17 c-0.697,0-1.262-0.565-1.262-1.262v-4.477C6.477,10.565,7.042,10,7.738,10h0C8.435,10,9,10.565,9,11.262v4.477 C9,16.435,8.435,17,7.738,17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2 S8.551,8.717,7.694,8.717z M16.779,17L16.779,17c-0.674,0-1.221-0.547-1.221-1.221v-2.605c0-1.058-0.651-1.174-0.895-1.174 s-1.058,0.035-1.058,1.174v2.605c0,0.674-0.547,1.221-1.221,1.221h-0.081c-0.674,0-1.221-0.547-1.221-1.221v-4.517 c0-0.697,0.565-1.262,1.262-1.262h0c0.697,0,1.262,0.565,1.262,1.262c0,0,0.282-1.262,2.198-1.262C17.023,10,18,10.977,18,13.174 v2.605C18,16.453,17.453,17,16.779,17z"></path>
                </svg></a>
                </div>
            </div>
        </footer>
    )
}