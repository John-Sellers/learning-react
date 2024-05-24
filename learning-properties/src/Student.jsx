import PropTypes from 'prop-types'

function Student(props) {
    return (
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
            <p>Can Drive: {props.canDrive ? "Yes" : "No"}</p>
        </div>
    )
}

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
    canDrive: PropTypes.bool
}

Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: "Unknown",
    canDrive: "Maybe"
}

export default Student
