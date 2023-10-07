import React from 'react'

export default function DependentDetail(props) {
  return (
    <div>
        <div className='.col-md-8 m-2 bg-light'>
    <div className='container'>
        <div className='row'>
            <div className='col-md-4'>
                <p>Id: {props.dependent.DependentName}</p>
                {/* <p>Name: {props.user.Model}</p> */}
                {/* <p>Model: {props.user.Type}</p> */}
                {/* <p>Age: {props.user.DependentAge}</p> */}
                {/* <p>{props.user.Relationship}</p> */}
                {/* <p>{props.user.Age}</p> */}
                <button className='btn btn-danger'>Remove</button>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}
