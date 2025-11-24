function EmpData(props){
    return(
        <div>
            <h5>Index: {props.index}</h5>
            <h5>Name: {props.ename}</h5>
            <h5>Designation: {props.desig}</h5>
            <h5>Department: {props.dept}</h5>
            <h5>Email: {props.email}</h5>
        </div>
    )
}
export default EmpData