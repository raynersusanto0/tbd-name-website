import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-6 items-center row-start-1 sm:items-center max-w-7xl">
        <div className="flex items-center flex-col sm:flex-row">
          <h1 className="text-5xl text-center"> Welcome to Our Website </h1>
        </div>

        <div className="flex items-center flex-col sm:flex-row">
          <h2 className="text-xl text-center"> At Pandu Web, we prioritize your convenience and satisfaction over any other factor. We believe that software solutions must be beneficial for our clients and give them an easier, not a headache. </h2> 
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
  );
}
