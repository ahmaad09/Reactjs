const Input = ({ type = "text", placeholder, name,id }) => {
    return (
      <input
        maxLength={30}
        name={name}
        type={type}
        className="text-sm border rounded-md border-black bg-transparent w-full placeholder:text-slate-500 py-2 px-3 text-slate-700 focus:outline-none"
        placeholder={placeholder}
        id={id}
      />
    );
  };
  
  export default Input;
  