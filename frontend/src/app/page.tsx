import Image from "next/image";

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

          <div className="flex flex-row items-center justify-between sm:flex-row w-full">
              <h3 className="text-lg flex-1 text-start"> Customer Support #1 </h3>
              <h3 className="text-lg flex-1 text-center"> Understand YOUR Needs</h3>
              <h3 className="text-lg flex-1 text-end"> Lovable Products </h3>
          </div>
        </main>
      </div>

      <section className="mx-auto w-full bg-gray-200">
          <div className="mx-auto p-10">
            <h3 className="text-5xl text-start">Solutions We Provide</h3>
            <p className="text-xl text-start">
            We offer a wide range of solutions to meet your needs. Our team is dedicated to delivering high-quality software that makes your life easier.
            </p>
          </div>
      </section>
    </div>
   
  );
}
