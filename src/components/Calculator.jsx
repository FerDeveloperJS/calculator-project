function Calculator() {
  return (
    <div className="relative">
      <div className="flex flex-wrap w-60 md:w-80 text-white font-bold gap-2.5">
        <button className="flex justify-center items-center bg-[#4B4B4B] w-14 h-14  md:w-20 md:h-20 p-1.5 text-2xl rounded-full">
          7
        </button>

        <button className="flex justify-center items-center bg-[#4B4B4B] w-14 h-14 md:w-20 md:h-20  p-1.5 text-2xl rounded-full">
          8
        </button>

        <button className="flex justify-center items-center bg-[#4B4B4B] w-14 h-14 md:w-20 md:h-20  p-1.5 text-2xl rounded-full">
          9
        </button>

        <button className="flex justify-center items-center bg-[#4B4B4B] w-14 h-14 md:w-20 md:h-20  p-1.5 text-2xl rounded-full">
          4
        </button>

        <button className="flex justify-center items-center bg-[#4B4B4B] w-14 h-14 md:w-20 md:h-20  p-1.5 text-2xl rounded-full">
          5
        </button>

        <button className="flex justify-center items-center bg-[#4B4B4B] w-14 h-14 md:w-20 md:h-20  p-1.5 text-2xl rounded-full">
          6
        </button>

        <button className="flex justify-center items-center bg-[#4B4B4B] w-14 h-14 md:w-20 md:h-20  p-1.5 text-2xl rounded-full">
          1
        </button>

        <button className="flex justify-center items-center bg-[#4B4B4B] w-14 h-14 md:w-20 md:h-20  p-1.5 text-2xl rounded-full">
          2
        </button>

        <button className="flex justify-center items-center bg-[#4B4B4B] w-14 h-14 md:w-20 md:h-20  p-1.5 text-2xl rounded-full">
          3
        </button>
      </div>

      <div className="mt-2.5 flex gap-2.5 text-white">
        <button className="flex justify-center items-center rounded-full p-1.5 w-14 h-14 md:w-20 md:h-20  text-4xl font-extrabold bg-[#c77dff]">
          +
        </button>

        <button className="flex justify-center items-center rounded-full p-1.5 w-14 h-14 md:w-20 md:h-20  text-4xl font-extrabold bg-[#c77dff]">
          -
        </button>

        <button className="flex justify-center items-center rounded-full p-1.5 w-14 h-14 md:w-20 md:h-20  text-4xl font-extrabold bg-[#c77dff]">
          x
        </button>

        <button className="flex justify-center items-center rounded-full p-1.5 w-14 h-14 md:w-20 md:h-20  text-4xl font-extrabold bg-[#c77dff]">
          ÷
        </button>
      </div>

      {/* <button className="absolute top-0 right-2.5 h-64 p-3.5 rounded-full bg-[#c77dff] font-extrabold text-4xl text-white">
        {" "}
        ={" "}
      </button> */}

      <div className="absolute flex flex-col gap-2.5 top-0 right-0 h-64 rounded-full text-white font-bold">
        <button className="text-4xl w-14 h-14 md:w-20 md:h-20  p-1.5 rounded-full bg-[#c77dff]">
          {" "}
          ={" "}
        </button>

        <button className="text-4xl w-14 h-14 md:w-20 md:h-20  p-1.5 rounded-full bg-[#4B4B4B]">
          ,
        </button>

        <button className="flex justify-center items-center bg-[#4B4B4B] w-14 h-14 md:w-20 md:h-20  p-1.5 text-2xl rounded-full">
          0
        </button>
      </div>
    </div>
  );
}

export default Calculator;
