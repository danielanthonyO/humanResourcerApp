import React from 'react';
import './Person.css';
// card content

const getYears = (startDate) => {
    const start = new Date(startDate);
    const now = new Date();
    const diff = now - start;
    const years = diff / (1000 * 60 * 60 * 24 * 365.25);
    return years;
};

const PersonCard = (props) => {
    const years = getYears(props.startDate);
    const fullYears = Math.floor(years);
    let message = "";

    if (years < 1) {
        message = "🔔 Schedule probation review.";
    } else if (fullYears % 5 === 0 && fullYears > 0) {
        message = "🎉 Schedule recognition meeting.";
    }

return (
    <div className="card-container">
    <div className="card">
    <p><strong>ID:</strong> {props.id}</p>
    <p><strong>Name:</strong> {props.name}</p>
    <p><strong>Title:</strong> {props.title}</p>
    <p><strong>Salary:</strong> {props.salary} €</p>
    <p><strong>Phone:</strong> {props.phone}</p>
    <p><strong>Email:</strong> {props.email}</p>
    <p><strong>Animal:</strong> {props.animal}</p>
    <p><strong>Start Date:</strong> {props.startDate}</p>
    <p><strong>Years of Service:</strong> {fullYears} year(s)</p>
    {message && <p style={{ color: "green", fontWeight: "bold" }}>{message}</p>}
    <p><strong>Location:</strong> {props.location}</p>
    <p><strong>Department:</strong> {props.department}</p>
    <p><strong>Skills:</strong> {props.skills}</p>
    </div>
    </div>
);
};

export default PersonCard;