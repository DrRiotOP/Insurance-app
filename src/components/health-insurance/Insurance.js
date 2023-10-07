import React from 'react'
import { InsuranceService } from '../../Services/InsuranceService';
import { Link } from "react-router-dom";



export default function Insurance(props) {

    function onDelete() {
        InsuranceService.deleteUser(props.user.DependentId);
        alert("Employee is deleted");
    }

    // return (
    //     <div className='add-dependents'>
    //         <Link to="/add-dependent">
    //             <button className='btn btn-success'>AddDependent</button>
    //         </Link>
    //     </div>
    // )

    return (
        <>
            <div className='card health-card'>

                <p>Id: {props.user.DependentId}</p>
                <p>Name: {props.user.DependentName}</p>
                <p>Relationship: {props.user.Relationship}</p>
                <p>Age: {props.user.DependentAge}</p>
                {/* <p>{props.user.Relationship}</p> */}
                {/* <p>{props.user.Age}</p> */}
                <div className='click'>
                <button onClick={onDelete} className='remove'>Remove</button>
                </div>
            </div>

        </>
    )
}

