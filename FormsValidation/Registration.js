import { useState, useEffect } from "react";
 
import styles from "./Registration.module.css";

function Registration() {
    const [user, setUser] = useState({
        name:'',
        email:'',
        phone:'',
        password:''
    })

    const [errors, setErrors] = useState({
        name:'',
        email:'',
        phone:'',
        password:''
    })


    //define state to maintain the errorr messages


    // define useEffect for the email to validate check email can be considered or not
 
    function handleNameChange(e) {
        setUser({
            ...user,
            name: e.target.value
        });
        // email
    }
 
    function handleEmailChange(e) {
        setUser({
            ...user,
            email: e.target.value
        });
        // verify this email is valida or not
    }
 
    function handlePhoneChange(e) {
 
        setUser({
            ...user,
            phone: e.target.value
        });
    }
    function handlePasswordChange(e) {
 
        setUser({
            ...user,
            password: e.target.value
        });
    }
    function handleSubmit(e) {
 
        setUser({
            ...user,
            phone: e.target.value
        });
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(user);
        //reset the error state

        setErrors({
            name:'',
            email:'',
            phone:'',
            password:'',
        })

         // validate the user object
        // if the name field is empty   set the error message name is required
 
        if (user.name === '') {
            // set error message name is required with prevState
 
            setErrors((prevState) => ({
                ...prevState,
                name: 'Name is required',
            }));

           
        }

        if ((user.name !== '') && (user.name.length < '3')) {
            // set error message name is required with prevState
 
            setErrors((prevState) => ({
                ...prevState,
                name: 'Name should be more than 3 characters',
            }));

           
        }
        // if the email field is empty   set the error message email is required
        if (user.email===''){
// set error message email is required with prevState
 
            setErrors((prevState) => ({
                ...prevState,
                email: 'Email is required',
            }));

            //setErrors with oiut previsopstate
 
            setErrors({
                ...errors,
                email: 'Email is required',
            });

            if (!user.email.match(/^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/))
                {
                    setErrors((prevState) => ({
                        ...prevState,
                        email: 'enter valid email address',
                    }));
                }

        }

         // if the phone field is empty   set the error message phone is required
         if (user.phone===''){
            // set error message phone is required with prevState
             
                        setErrors((prevState) => ({
                            ...prevState,
                            phone: 'Phone is required',
                        }));
            
                        //setErrors with oiut previsopstate
             
                        // setErrors({
                        //     ...errors,
                        //     phone: 'Phone is required',
                        // });
            
                    }

                    if (user.phone.length !== 10)
                        {
                            setErrors((prevState) => ({
                                ...prevState,
                                phone: 'Phone should be 10 digits only',
                            }));
                        }
                        if (user.password.length < 8)
                            {
                                setErrors((prevState) => ({
                                    ...prevState,
                                    phone: 'Password shoule be more than 8 characters',
                                }));
                            }
    }
 

return (
    <form  className={styles.loginForm} onSubmit={handleSubmit}>
    <div className={styles.inputGroup}>
        <label htmlFor="name" className={styles.label}>Name:</label>
        <input
            type="text"
            id="name"
            name="name"
            className={styles.input}
            value={user.name}
             onChange={handleNameChange}
           
        />
          {/* if errors contains name as error display it here */}
          {errors.name && <span className={styles.error}>{errors.name}</span>}
    </div>
    <div className={styles.inputGroup}>
        <label htmlFor="email" className={styles.label}>Email:</label>
        <input
            type="text"
            id="email"
            name="email"
            className={styles.input}
            value={user.email}
             onChange={handleEmailChange}
           
        />
        {/* if errors contains emaail as error display it here */}
        {errors.email && <span className={styles.error}>{errors.email}</span>}
    </div>
    <div className={styles.inputGroup}>
        <label htmlFor="phone" className={styles.label}>Phone:</label>
        <input
            type="text"
            id="phone"
            name="phone"
            className={styles.input}
            value={user.phone}
             onChange={handlePhoneChange}
           
        />
         {/* if errors contains emaail as error display it here */}
         {errors.phone && <span className={styles.error}>{errors.phone}</span>}
    </div>
    <div className={styles.inputGroup}>
        <label htmlFor="password" className={styles.label}>Password:</label>
        <input
            type="password"
            id="password"
            name="password"
            className={styles.input}
            value={user.password}
             onChange={handlePasswordChange}
           
        />
         {/* if errors contains emaail as error display it here */}
         {errors.password && <span className={styles.error}>{errors.password}</span>}
    </div>
    <button type="submit" className={styles.submitButton}>Register</button>
    </form>
        );
 
    }
     
    export default Registration;