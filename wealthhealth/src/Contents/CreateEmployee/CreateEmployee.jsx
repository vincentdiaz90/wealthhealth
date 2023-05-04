import React from 'react'
import { useState, useEffect } from "react";

import SelectForm from '../../Components/SelectForm/SelectForm'
//import ModalCreateEmployee from '../../Components/ModalCreateEmployee/ModalCreateEmployee'
import { ModalCreateEmployee } from 'npm-modal-v'

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import departments from '../../asset/data/departments.json'
import states from '../../asset/data/states.json'

import './CreateEmployee.css'

export default function CreateEmployee() {

    // Modal
    const [modalReset, setModalReset] = useState(false);
    const [displayModal, setDisplayModal] = useState(false);

    // Employee
    const [newEmployee, setNewEmployee] = useState({
        /* Informations */
        "First name": "",
        "Last name": "",
        "Date of birth": "",
        "Start date": "",

        /* Address */
        "State": states[0].abbreviation,
        "ZIP code": "",
        "Street": "",
        "City": "",

        /* Department */
        "Department": departments[0].abbreviation     
    });



   // Form
   /* Elements */
   const handleFormChange = (event) => {
    setNewEmployee({
        ...newEmployee, [event.target.name]: event.target.value
    });
};

    /* DatePicker */
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [startDate, setStartDate] = useState("");
    const handleFormDateChange = (name, value) => {
        setNewEmployee({
            ...newEmployee, [name]: new Date(value).toLocaleDateString("en")
        });
    };

    /* Dropdown */
    const handleFormDropdownChange = (name, value) => {
    setNewEmployee({
        ...newEmployee, [name]: value
    });
}

    // Save 
    const [formOK, setFormOK] = useState(false);
    const [errorForm, setErrorForm] = useState([]);

    const saveEmployee = () => {
        /* Verify if all the fields are not empty */
        setErrorForm([]);
        Object.keys(newEmployee).forEach((input, index) => {
            if(Object.values(newEmployee)[index] === "") {
                setFormOK(false);
                setErrorForm(errorForm => [...errorForm, input]);
            }
        });

        if(errorForm.length === 0) {
            setFormOK(true);
        }
    }

    useEffect(() => {
        if(formOK === true && errorForm.length === 0) {
            /* Show the modal */
            setModalReset(!modalReset);
            setDisplayModal(true);

            /* Get the list of current employees */
            const employees = JSON.parse(localStorage.getItem("employees")) || [];

            /* Add the employee to the list */
            employees.push(newEmployee);

            /* Save the new employees list */
            localStorage.setItem("employees", JSON.stringify(employees));

            /* Reset the form */
            setNewEmployee({
                /* Informations */
                "First name": "",
                "Last name": "",
                "Date of birth": "",
                "Start date": "",
        
                /* Address */
                "State": states[0].abbreviation,
                "ZIP code": "",
                "Street": "",
                "City": "",
        
                /* Department */
                "Department": departments[0].abbreviation     
            });
            document.getElementById("form-create").reset();
            setDateOfBirth("");
            setStartDate("");
        }
    }, [errorForm])


   // Template
   return (
       <main className='createEmployee'>

           <h1 className='create-employee-title'>Create a new employee</h1>

           {/* Form */}
           <form action="#" id="form-create">

               {/* Form Informations */}

                <section className="informations">

                <h2 className="form-title">Informations</h2>

                    <div className="form-section-name">
                        <div className="form-inputs">
                            <label htmlFor="first-name">First name</label>
                            <input autoComplete="off" id="first-name" name="First name" onChange={handleFormChange} placeholder="Your first name" type="text" />
                        </div>
                        <div className="form-inputs">
                            <label htmlFor="last-name">Last name</label>
                            <input autoComplete="off" id="last-name" name="Last name" onChange={handleFormChange} placeholder="Your last name" type="text" />
                        </div>
                    </div>

                    <div className="form-section-birthday">
                        <div className="form-inputs">
                            <label htmlFor="date-of-birth">Date of birth</label>
                            <DatePicker className="date-picker-input" id="date-of-birth" onChange={(date) => {handleFormDateChange("Date of birth", date); setDateOfBirth(date)} } placeholderText="Your birth date" selected={dateOfBirth} />
                            
                        </div>
                        <div className="form-inputs">
                            <label htmlFor="start-date">Start date</label>
                            <DatePicker className="date-picker-input" id="start-date" onChange={(date) => {handleFormDateChange("Start date", date); setStartDate(date)} } placeholderText="Your start date" selected={startDate} />
                            
                        </div>
                    </div>
                </section>
               


               {/* Form Address */}

                

                <section className="zip-code">

                <h2 className="form-category">Address</h2>
                    <div className="form-section-ZIP-Code">
                        <div className="form-inputs">
                            <label htmlFor="State">State</label>
                            <SelectForm name="State" onChangeDropdown={(value) => handleFormDropdownChange("State", value)} optionsList={states} />
                        </div>
                        <div className="form-inputs">
                            <label htmlFor="zip-code">Zip Code</label>
                            <input id="zip-code" name="ZIP code" onChange={handleFormChange} placeholder="Your ZIP code" type="number" />
                        </div>
                    </div>

                    <div className="form-section-street">
                        <div className="form-inputs">
                            <label htmlFor="street">Street</label>
                            <input autoComplete="off" id="street" name="Street" onChange={handleFormChange} placeholder="Your street name" type="text" />
                        </div>
                        <div className="form-inputs">
                            <label htmlFor="city">City</label>
                            <input autoComplete="off" id="city" name="City" onChange={handleFormChange} placeholder="Your city name" type="text" />
                        </div>
                    </div>
                </section>
               


               {/* Form Department */}

               <section className="form-section-departments">

                    <h2 className="form-department">Department</h2>
                    <div className="form-inputs form-inputs-full">
                        <label htmlFor="department">Department</label>
                        <SelectForm name="Department" onChangeDropdown={(value) => handleFormDropdownChange("Department", value)} optionsList={departments} />
                    </div>
               </section>


           </form>


           {/* Form Button */}

           <button id="form-btn-submit" onClick={saveEmployee} type="submit">Save</button>

          <ModalCreateEmployee key={modalReset} id="modal-created" showModal={displayModal} closeModal={() => setDisplayModal(false)} response="Employee Created !" />
       </main>
   );
}

