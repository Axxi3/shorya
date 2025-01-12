import arrow from "../assets/arrow.png";

const Card = ({ img, head, sub, text,link }) => {
  return (
    <div
    onClick={() => window.location.href = link}
    className="flex items-center justify-between bg-[#1c1c1c] gap-5 border-solid border-white rounded-md p-4">
      {/* Left Content */}
      <div className="flex gap-3 justify-center items-center">
        <img src={img} className="w-[75px] h-[75px] rounded-md" alt="" />
        <div className="flex flex-col">
          <h4 className="text-[16px] font-semibold text-white">{head}</h4>
          <p className="text-[14px] text-gray-600">{sub}</p>
        </div>
      </div>

      {/* Button */}
      <div className="flex items-center justify-center">
        <button className="hidden sm:flex border-2 border-gray-500 rounded-md py-2 px-5 text-white hover:bg-black transition duration-300 ease-in-out">
          {/* Text Button (Visible on larger screens) */}
          {text}
        </button>

        <button className="flex sm:hidden border-2 border-gray-500 rounded-md h-[50px] w-[50px] text-white hover:bg-black transition duration-300 ease-in-out items-center justify-center">
          {/* Arrow Button (Visible on smaller screens) */}
          <img src={arrow} className="h-[24px] w-[24px]" alt="Arrow Icon" />
        </button>
      </div>
    </div>
  );
};

export default Card;
