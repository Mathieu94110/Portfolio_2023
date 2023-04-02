const TextArea = (props) => {
  return (
    <div className="relative">
      <label
        className={
          props.focus || props.value !== ""
            ? "absolute top-[-15px] left-4 text-lg bg-white px-0 text-black font-semibold"
            : "absolute top-4 left-4 px-2 pointer-events-none duration-150 ease text-black"
        }
        htmlFor={props.name}
      >
        {props.label}
      </label>
      <textarea
        className={
          props.focus || props.value !== ""
            ? "h-32 w-full mb-4 block border-black border-4  p-4 rounded  text-base border-2 border-black"
            : "h-32 w-full mb-4 block  border-black border-2 p-4 rounded transition duration-150 ease outline-none text-base"
        }
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        onInput={props.onInput}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
      />
    </div>
  );
};

export default TextArea;
