import Image from "next/image";
import  Carousel  from "@/components/carousel";

export default function Home() {
  return (
    <div>
       <div className="grid grid-rows justify-items-center p-8 pb-5 gap-5 sm:p-20">
        <main className="flex flex-col gap-8 items-center row-start-1 sm:items-center w-full max-w-7xl">
          <div className="flex items-center flex-col sm:flex-row">
            <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-center font-bold leading-tight sm:leading-normal"> Welcome to <br></br> Our Website </h1>
          </div>

          <div className="flex items-center flex-col sm:flex-row">
            <h2 className="text-xl text-center"> At S&N Software, we prioritize your convenience and satisfaction over any other factor. We believe that software solutions must be beneficial for our clients and give them an easier time, not a headache. </h2> 
          </div>

          <div className="flex items-center flex-col sm:flex-row my-10">
            <button className="bg-gray-500 text-white hover:bg-gray-900 focus:ring-gray-700 px-20 py-4 text-base rounded-lg justify-center">
              Sign Up
            </button>
          </div>
        </main>
      </div>

      <section className="mx-auto w-full">
          < Carousel />
      </section>
      
      <section className="grid grid-rows justify-items-center p-8 pb-5 gap-5 sm:p-20">
        <div className="flex flex-col gap-8 items-center row-start-1 sm:items-center w-full max-w-7xl">
          <div className="flex items-center flex-col sm:flex-row">
            <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-7xl text-center font-bold leading-tight sm:leading-normal"> Why Us? </h1>
          </div>

          <div className="flex items-center flex-col sm:flex-row pb-20">
            <h2 className="text-xl text-center"> 
              Our philosophy when it comes to developing software solutions is to PROVIDE VALUE. We understand the importance of how a product should be functional for you while being developed in an efficient manner. Our team has an extreme focus in providing a comfortable process when pitching out your ideas, turning them into a reality, and making sure to improve wherever we can.
            </h2> 
          </div>

          <div className="flex flex-row items-center justify-between sm:flex-row w-full pt-20">
              <div className="text-lg flex-1 text-start w-1/3"> Customer Support #1 </div>
              <div className="text-lg flex-1 text-center w-1/3"> Understand YOUR Needs</div>
              <div className="text-lg flex-1 text-end w-1/3"> Lovable Products </div>
          </div>
        </div>
      </section>
    </div>
   
  );
}
