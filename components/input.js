export default function textInput(props) {
    let defType = props.type;
    let show = false;
  return (
    <div className="flex flex-col ">
      <label>{props.name}</label>
      <div className="flex border-2 border-solid border-[#CCCFCE66] my-2">
        <input
          className="p-[10px]  flex focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  leading-tight border-gray-300 focus:outline-none text-gray-400 pr-16 font-mono js-password"
          type={defType}
          name={props.name}
          placeholder={props.placeholder || " "}
          autoComplete="off"
        />{" "}
        {
         props.type == 'password' ? <div className="bordersolid border-2 border-[#CCCFCE66] border-y-0 border-r-0 p-1 cursor-pointer flex items-center w-[40px]">
            {props.children || ""}
          </div>: ''
        }
      </div>
    </div>
  );
}
