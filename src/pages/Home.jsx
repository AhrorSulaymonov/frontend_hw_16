import React from "react"
import useGetInputValues from "../hooks/useGetInputValues"

function Home() {
    const { values, handleChange, resetValues } = useGetInputValues({
        name: "",
        age: "",
        gender: ""
    });

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(values);
    }

    return (
        <div>
            <div>
                <h2 className="text-xl">
                    New User
                </h2>
                <form onSubmit={handleFormSubmit} className="border flex flex-col gap-2 p-2 w-[300px]">
                    <button className="bg-slate-200 w-fit px-2 rounded ml-auto" onClick={resetValues}>Reset</button>
                    <input
                        value={values.name}
                        className="border p-1 rounded border-slate-500"
                        type="text"
                        name="name"
                        onChange={handleChange}
                        placeholder="Username"
                    />
                    <input
                        value={values.age}
                        className="border p-1 rounded border-slate-500"
                        type="number"
                        name="age"
                        onChange={handleChange}
                        placeholder="User age"
                    />
                    <select
                        value={values.gender}
                        className="border p-1 rounded border-slate-500"
                        name="gender"
                        onChange={handleChange}
                    >
                        <option value="">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    <button type="submit" className="bg-slate-400 rounded border">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Home
