import React from "react";
const Smurf = props => {
    return <div>
    <h1>{props.smurf.name}</h1>
    <h3>{props.smurf.age}</h3>
    <h3>{props.smurf.height}</h3>
<button onClick={(event,id=props.id) => props.delete(event,id)} >Delete</button>
</div>
};

export default Smurf;