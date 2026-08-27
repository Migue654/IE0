import React, {useState} from "react";



function Form(){
    const [person,setPerson] = useState({

        name: "",
        job: "",

    })

    function handleChange(event){

        const { name , value } = event.target;

        if (name== "job") setPerson ({ name : person ["name"], job:value })

        else
            setPerson({name: value , job: ["job"]})
}
    return (
        <form>
            <label htmlFor="name">Name</label>
            <input type="text" name ="name" value = {person.name} onChange= {handleChange} />
            <label htmlFor="job">Job</label>
            <input type="text" name="job" id="job" value={person.job} onChange={handleChange}/>
        </form>
    )

}

export default Form;
