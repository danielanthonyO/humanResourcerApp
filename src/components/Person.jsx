
const Person = (props) => {
    return (
        <div className="card">
            <p><strong>Name: </strong>{props.name}</p>
            <p><strong>Title: </strong>{props.title}</p>
            <p><strong>Salary: </strong> {props.salary} €</p>
            <p><strong>Phone: </strong> {props.phone}</p>
            <p><strong>Email: </strong> {props.email}</p>
            <p><strong>Animal: </strong> {props.animal}</p>
        </div>
    );
}
export default Person;