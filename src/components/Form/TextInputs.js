const TextInputs = (props) => (
  <div className="relative">
    <label
      className={
        props.focus || props.value !== ""
          ? "absolute top-[-27px] left-4 text-lg text-black font-semibold translate-y-[50%] bg-white"
          : "absolute top-4 left-4 px-2 transition duration-150 ease"
      }
      htmlFor={props.name}
    >
      {props.label}
    </label>
    <input
      className={
        props.focus || props.value !== ""
          ? "border-4 border-black mb-4 block w-full p-4 rounded outline-none text-base"
          : "border-2 border border-black mb-4 block w-full p-4 rounded duration-150 ease outline-none text-base"
      }
      type={props.type}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      onInput={props.onInput}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
    />
  </div>
);

export default TextInputs;
