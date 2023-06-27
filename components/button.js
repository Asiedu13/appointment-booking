export default function Button(props) {
    return (
    <button
      className={`flex justify-center items-center border-2 border-solid border-[#CCCFCE66] bg[#fff] p-5 my-[30px] h-[20px] w-[inherit] text-[14px] rounded`}
    >
      {props.children}
    </button>
  );
}

export function SubmitButton(props) {
    return (
      <button
        className={`flex justify-center items-center border-2 border-solid border-[#CCCFCE66] bg-[#00100B] p-5 my-[30px] h-[20px] w-[inherit] text-[14px] text-[#fff] border-none rounded`}
      >
        {props.children}
      </button>
    );
}