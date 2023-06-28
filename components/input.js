export default function textInput(props) {
  let defType = props.type;
  return (
    <div className="flex flex-col ">
      <label className="text-sm">{props.name}</label>
      <div className=" w-[95%] flex border-2 border-solid border-[#CCCFCE66] my-2 rounded-lg md:w-[98%] ">
        <input
          className=" flex focus:ring-blue-500 focus:border-blue-500 block w-[360px] h-[40px] p-3  leading-tight border-gray-300 focus:outline-none text-gray-400 pr-16 font-mono js-password"
          type={defType}
          name={props.name}
          placeholder={props.placeholder || " "}
          autoComplete="off"
        />{" "}
        {props.type == "password" ? (
          <div className="border-solid border-2 border-[#CCCFCE66] border-y-0 border-r-0 p-2 cursor-pointer flex items-center w-[40px]">
            {props.children || ""}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
