import Input from "./Input";
import Label from "./label";

const fromInput = (props) => {
    const {name,placeholder} = props
    return(
        <div className="mb-6">
            <Label htmlFor={htmlFor} name={name}>Email</Label>
            <Input type={type} name={name} placeholder={placeholder} ></Input>
        </div>
        
    )
}

export default fromInput;