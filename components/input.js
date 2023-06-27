export default function textInput(props) {
  let defType = 'text'
  return (
    <div className="flex flex-col ">
      <label>{props.name}</label>
      <input
        className="border-2 border-solid border-[#CCCFCE66] p-[10px] my-2  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  leading-tight border-gray-300 focus:outline-none text-gray-400 pr-16 font-mono js-password"
        type={defType}
        name={props.name}
        placeholder={props.placeholder || " "}
        autoComplete="off"
          /> {props.children || ""}
    </div>
  );
}
