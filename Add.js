import { useState } from "react";
import axios from 'axios';

function Add()
{
    var [detail, setdetails]=useState({name:"",address:"",customer_no:"",meter_serial_number:""});
    

    var Cancal=function(){
     setdetails({name:"",address:"",customer_no:"",meter_serial_number:""});
    }

    
    var Add=function(){
        axios.post("http://localhost:4000/",{
             name:detail.name,
             address:detail.address,
             customer_no:detail.customer_no,
             meter_serial_number:detail.meter_serial_number
            }
        )
            .then((response)=>{
                setdetails({name:"",address:"",customer_no:"",meter_serial_number:""});
            })

    }
    
    var TextChanged=function(args)
    {
        var CopyOfDetail = {...detail};
        CopyOfDetail[args.target.name]=args.target.value;
        setdetails(CopyOfDetail);
    }

    

   return(
    <>
    <div style={{padding:'50px',backgroundColor:'azure',}}>
        <div style={{marginLeft:'400px'}}>
        <label><h4>Name:</h4></label><br></br>
        <input type="text" name="name" value={detail.name} onChange={TextChanged} required style={{width:'500px',height:'35px', borderRadius:'12px'}} placeholder="Please Enter Name"/><br></br>
        <br></br>

        <label><h4>Address:</h4></label><br></br>
        <input type="text" name="address" value={detail.address} onChange={TextChanged} required style={{width:'500px',height:'35px', borderRadius:'12px'}}  placeholder="Please Enter Address"/><br></br>
        <br></br>

        <label><h4>Customer No:</h4></label><br></br>
        <input type="text" name="customer_no" value={detail.customer_no} onChange={TextChanged} required style={{width:'500px',height:'35px', borderRadius:'12px'}} placeholder="Please Enter Customer Number"/><br></br>
        <br></br>

        <label><h4>Meter Serial Number:</h4></label><br></br>
        <input type="text" name="meter_serial_number" value={detail.meter_serial_number} onChange={TextChanged} required style={{width:'500px',height:'35px', borderRadius:'12px'}} placeholder="Please Enter Meter Number"/><br></br>
        <br></br>

        <div>
        <button className="btn btn-success" style={{marginLeft:'130px', width:'100px', height:'50px'}} onClick={Add}>Add</button>{"      "}
        <button className='btn btn-danger' style={{marginLeft:'60px',width:'100px', height:'50px'}} onClick={Cancal}>Cancal</button>{"      "}
        </div>

        </div>
    </div>
    </>

   );   
}

export default Add;