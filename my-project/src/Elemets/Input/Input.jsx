const Input = (props) => {
    const {type, placeholder} = props;
    return(
        <input type={type} name="" id="email" className="text-sm border rounded w-full px-3 py-2 text-slate-700 placeholder:opacity-45" placeholder={placeholder} />
    )
};

export default Input;