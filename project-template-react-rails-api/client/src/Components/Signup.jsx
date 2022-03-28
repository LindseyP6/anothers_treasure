import React, { useState } from 'react'

function Signup({setUser, setIsAuthenticated}) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [telephone, setTelephone] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([])

    function handleSubmit(e){
        e.preventDefault()
        const newUser = {
            name, 
            email, 
            telephone, 
            password
        }
        fetch (`/users`, {
            method: "POST", 
            header: {"Content-Type": "application/json"},
            body: JSON.stringify(newUser)
        })
        .then(res => res.json())
        .then(json => {
            if(json.errors) setErrors(Object.entries(json.errors))
        })
        setName("")
        setEmail("")
        setTelephone("")
        setPassword("")
    }

    return (
        <>
            <div>Signup!</div>
            <form onSubmit={handleSubmit} className="signupForm">
            <label>Name
                <input
                    type="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <label>Email
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label>Telephone
                <input
                    type="name"
                    name="telephone"
                    value={telephone}
                    onChange={(e) => setTelephone(e.target.value)} />
            </label>
            <label>Password
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            <button 
                type="submit"
                name="submit"
                value="Join!"
                className="submit"> 
                <strong>Enter!</strong>
            </button>
            </form>
            {errors?errors.map(e => <div>{e[0]+': ' + e[1]}</div>):null}

        </>
    )
}

export default Signup