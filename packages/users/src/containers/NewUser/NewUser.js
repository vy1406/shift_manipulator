import React, { Fragment } from "react"
import { useForm } from "react-hook-form";
import '../NewUser/NewUser.css'

export default function NewUser({
        isOpen,
        submitUser,
        handleForm,
        toggleIsOpen
    }) {
    const { register, handleSubmit } = useForm();

    const onSubmit = formUser => {
        toggleIsOpen(false)
        submitUser(formUser)
        handleForm()
    }

    return (
        <Fragment>
            {isOpen ?
                 <div className="lol">
                    <form className="newUserForm" onSubmit={handleSubmit(onSubmit)}>
                        <label className="userLabel" htmlFor="username"> Username:</label>
                        <input className="userInput" id="username" {...register("username")} />
                        <label className="userLabel" htmlFor="password"> Password:</label>
                        <input className="userInput" id="password" {...register("password")} />
                        <label className="userLabel" htmlFor="email"> Email:</label>
                        <input className="userInput" id="email" {...register("email")} />
                        <label className="userLabel" htmlFor="phoneNumber"> Phone Number:</label>
                        <input className="userInput" id="phoneNumber" {...register("phoneNumber")} />
                        <input type="submit" />
                    </form>
                </div>
            : <div></div> }
        </Fragment>
    );
}