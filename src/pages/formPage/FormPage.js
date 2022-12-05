import React, {useState} from 'react';

function FormPage() {

    const [form, setForm] = useState({
        username: "",
        age: "",
        position:""
    })

    const changeInput = (event) => {
        console.log(event)

        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const addUser = () => {
        console.log(form)



    }

    return (
        <>
            <input
                type="text"
                placeholder={"username"}
                name="username"
                onChange={changeInput}
            />
            <input
                type="number"
                placeholder={"age"}
                name="age"
                onChange={changeInput}
            />
            <input
                type="text"
                placeholder={"position"}
                name="position"
                onChange={changeInput}
            />
            <button onClick={addUser}>add user</button>
        </>
    );
}

export default FormPage;

