import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";

function Update() {
    const { id } = useParams();
    const [customer, setCustomer] = useState({
        id: "", 
        name: "",
        address: "",
        customer_no: "",
        meter_serial_number: ""
    });

    useEffect(() => {

        axios.get(`http://localhost:4000/customers/${id}`)
            .then((response) => {
                setCustomer(response.data);
            })
            .catch((error) => {
                console.error("Error fetching customer data:", error);
            });
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCustomer((prevCustomer) => ({
            ...prevCustomer,
            [name]: value
        }));
    };

    const handleUpdate = async () => {
           const response = await axios.put(`http://localhost:4000/${id}`, customer);
            
            if (response.data.affectedRows > 0) {
                
                console.log("Customer updated successfully");
                setCustomer({name:"",address:"",customer_no:"",meter_serial_number:""});

            } else {
                
                console.error("Error updating customer");
            }
        
    };


    return (
        <>
            <div style={{ padding: '50px', backgroundColor: 'seashell' }}>
                <div style={{ marginLeft: '400px' }}>
                    <label><h4>Name:</h4></label><br></br>
                    <input
                        type="text" name="name"
                        style={{ width: '500px', height: '35px', borderRadius: '12px' }}
                        placeholder="Please Enter Name" value={customer.name}
                        onChange={handleInputChange}
                    /><br></br>
                    <br></br>

                    <label><h4>Address:</h4></label><br></br>
                    <input
                        type="text"
                        name="address"
                        style={{ width: '500px', height: '35px', borderRadius: '12px' }}
                        placeholder="Please Enter Address" value={customer.address}
                        onChange={handleInputChange}
                    /><br></br>
                    <br></br>

                    <label><h4>Customer No:</h4></label><br></br>
                    <input
                        type="text" name="customer_no"
                        style={{ width: '500px', height: '35px', borderRadius: '12px' }}
                        placeholder="Please Enter Customer Number" value={customer.customer_no}
                        onChange={handleInputChange}
                    /><br></br>
                    <br></br>

                    <label><h4>Meter Serial Number:</h4></label><br></br>
                    <input
                        type="text"
                        name="meter_serial_number"
                        style={{ width: '500px', height: '35px', borderRadius: '12px' }}
                        placeholder="Please Enter Meter Number"
                        value={customer.meter_serial_number}
                        onChange={handleInputChange}
                    /><br></br>
                    <br></br>
                    <button
                        onClick={handleUpdate}
                        type="button"
                        style={{ marginLeft: "170px", height:'50px'}}
                        className="btn btn-primary"
                    > Update Customer
                    </button>

                </div>
            </div>
        </>
    );
}

export default Update;
