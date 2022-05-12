import Tilt from 'react-parallax-tilt';
import "animate.css/animate.min.css";


const Hero = ()=>{
    return (
        <section className="hero">
            <div className="h-12 flex justify-end items-center text-xl px-4 sm:px-20 xl:px-44">
               <a href="">  Blog </a>
            </div>
             <Tilt>
             <div className="min-h-screen flex items-center px-4 sm:px-20 xl:px-44">
                 <div className="xl:basis-2/3">
                <div className="text-3xl sm:text-5xl xl:text-left text-center font-bold font-righteous animate__animated    animate__flipInX" >
                    I make stunning websites for Indian Restaurants
                </div>
                <div className="text-xl  xl:text-left text-center  mt-4 animate__fadeInDown animate__animated ">
                  Not all websites are the same! , some are made such that target the user psychology and end up making your customers 😊, thats where I master!
                </div>
                <div className="mt-10 flex xl:justify-start justify-center animate__fadeInDown animate__animated">
                    <button className="rounded-md px-4 py-2 bg-primary text-white"> 
                        Contact Me Now
                    </button>
                </div>
         </div>

     </div>
             </Tilt>
     <div className="h-8 bg-gradient-to-t from-black to-fade">

     </div>
        </section>
    );
}


export default Hero;