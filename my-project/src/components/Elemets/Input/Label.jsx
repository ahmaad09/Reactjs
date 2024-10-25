const Label = (props) => {
    const {name,children} = props;
    return (
        <label
            htmlFor={name}
            className="text-slate-700 text-sm mb-2 font-bold block">
           {children}
        </label>
    )
}
export default Label;