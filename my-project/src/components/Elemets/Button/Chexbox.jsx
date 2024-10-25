const Chexbox = (props) => {
    const {children} = props
    return(
        <div className="flex my-4">
            <input type="checkbox" className="mr-2" />
            {children}
        </div>
    )
}

export default Chexbox