function Calculator({
  screen,
  setScreen,
  currentOperation,
  setCurrentOperation,
}) {
  return (
    <div className="relative">
      <div className="flex flex-wrap w-60 md:w-80 text-white font-bold gap-2.5">
        <button
          onClick={() => setScreen(screen + "7")}
          className="flex justify-center items-center bg-[#4B4B4B] w-14 h-14  md:w-20 md:h-20 p-1.5 text-2xl rounded-full"
        >
          7
        </button>

        <button
          onClick={() => setScreen(screen + "8")}
          className="flex justify-center items-center bg-[#4B4B4B] w-14 h-14 md:w-20 md:h-20  p-1.5 text-2xl rounded-full"
        >
          8
        </button>

        <button
          onClick={() => setScreen(screen + "9")}
          className="flex justify-center items-center bg-[#4B4B4B] w-14 h-14 md:w-20 md:h-20  p-1.5 text-2xl rounded-full"
        >
          9
        </button>

        <button
          onClick={() => setScreen(screen + "4")}
          className="flex justify-center items-center bg-[#4B4B4B] w-14 h-14 md:w-20 md:h-20  p-1.5 text-2xl rounded-full"
        >
          4
        </button>

        <button
          onClick={() => setScreen(screen + "5")}
          className="flex justify-center items-center bg-[#4B4B4B] w-14 h-14 md:w-20 md:h-20  p-1.5 text-2xl rounded-full"
        >
          5
        </button>

        <button
          onClick={() => setScreen(screen + "6")}
          className="flex justify-center items-center bg-[#4B4B4B] w-14 h-14 md:w-20 md:h-20  p-1.5 text-2xl rounded-full"
        >
          6
        </button>

        <button
          onClick={() => setScreen(screen + "1")}
          className="flex justify-center items-center bg-[#4B4B4B] w-14 h-14 md:w-20 md:h-20  p-1.5 text-2xl rounded-full"
        >
          1
        </button>

        <button
          onClick={() => setScreen(screen + "2")}
          className="flex justify-center items-center bg-[#4B4B4B] w-14 h-14 md:w-20 md:h-20  p-1.5 text-2xl rounded-full"
        >
          2
        </button>

        <button
          onClick={() => setScreen(screen + "3")}
          className="flex justify-center items-center bg-[#4B4B4B] w-14 h-14 md:w-20 md:h-20  p-1.5 text-2xl rounded-full"
        >
          3
        </button>
      </div>

      <div className="mt-2.5 flex gap-2.5 text-white">
        <button
          onClick={() => setScreen(screen + "+")}
          className="flex justify-center items-center rounded-full p-1.5 w-14 h-14 md:w-20 md:h-20  text-4xl font-extrabold bg-[#c77dff]"
        >
          +
        </button>

        <button
          onClick={() => setScreen(screen + "-")}
          className="flex justify-center items-center rounded-full p-1.5 w-14 h-14 md:w-20 md:h-20  text-4xl font-extrabold bg-[#c77dff]"
        >
          -
        </button>

        <button
          onClick={() => setScreen(screen + "*")}
          className="flex justify-center items-center rounded-full p-1.5 w-14 h-14 md:w-20 md:h-20  text-4xl font-extrabold bg-[#c77dff]"
        >
          x
        </button>

        <button
          onClick={() => setScreen(screen + "/")}
          className="flex justify-center items-center rounded-full p-1.5 w-14 h-14 md:w-20 md:h-20  text-4xl font-extrabold bg-[#c77dff]"
        >
          ÷
        </button>
      </div>

      <div className="absolute flex flex-col gap-2.5 top-0 right-0 h-64 rounded-full text-white font-bold">
        <button
          onClick={() => {
            const result = eval(screen);
            setCurrentOperation(result);
            setScreen(result.toString());
          }}
          className="text-4xl w-14 h-14 md:w-20 md:h-20  p-1.5 rounded-full bg-[#c77dff]"
        >
          {" "}
          ={" "}
        </button>

        <button
          onClick={() => setScreen(screen + ".")}
          className="text-4xl w-14 h-14 md:w-20 md:h-20  p-1.5 rounded-full bg-[#4B4B4B]"
        >
          ,
        </button>

        <button
          onClick={() => setScreen(screen + "0")}
          className="flex justify-center items-center bg-[#4B4B4B] w-14 h-14 md:w-20 md:h-20  p-1.5 text-2xl rounded-full"
        >
          0
        </button>
      </div>
    </div>
  );
}

export default Calculator;
