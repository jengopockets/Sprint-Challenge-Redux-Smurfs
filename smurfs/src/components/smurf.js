import React from "react";
const smurf = props => {
    return <div key={props.smurf.id}>
    <h1>{props.smurf.name}</h1>
    <h3>{props.smurf.age}</h3>
    <h3>{props.smurf.height}</h3>
<button onClick={() => props.delete(props.smurf.id)} >Delete</button>
</div>
};

export default smurf;