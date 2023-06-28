export default function textInput(props) {
  let defType = props.type;
  return (
    <div className="flex flex-col ">
      <label className="text-sm">{props.name}</label>
      <div className="w-[98%] flex  border-2 border-solid border-[#CCCFCE66] my-2 rounded-lg md:w-[98%] ">
        <input
          className="flex focus:ring-blue-500 focus:border-blue-500 block h-[40px] p-3 leading-tight border-gray-300 focus:outline-none 
          text-gray-400 pr-6 font-mono js-password sm:w-[50%] md:w-[360px]"
          type={defType}
          name={props.name}
          placeholder={props.placeholder || " "}
          autoComplete="off"
        />{" "}
        {props.type == "password" ? (
          <div className="border-solid border-2 border-[#CCCFCE66] border-y-0 border-r-0 p-2 cursor-pointer flex justify-center items-center w-[200px] md:w-[15%]">
            {props.children || ""}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
