import { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import axios from 'axios';
import { Link} from "react-router-dom";
import { EditOutlined } from "@mui/icons-material";

function Dashboard()
{
    var[details,setdetails]=useState([]);

    useEffect(()=>{
        displayAll();
    },[])


   var displayAll=function(){
    axios.get("http://localhost:4000/customers").then((response)=>{
        setdetails(response.data);
    })
   }

   var Delete=function(id){
    axios.delete("http://localhost:4000/" + id).then((response)=>{
        if(response.data.affectedRows > 0)
        {
            displayAll();
        }
    })

   }

   

    return<>
           <center>
          
            <div className="table-responsive">
                <table className="table table-bordered" style={{backgroundColor:'lightyellow'}}>
                    <thead>
                        <th><h4 style={{textAlign:'center'}}>ID</h4></th>
                        <th><h4 style={{textAlign:'center'}}>Customer Name</h4></th>
                        <th><h4 style={{textAlign:'center'}}>Address</h4></th>
                        <th><h4 style={{textAlign:'center'}}>Customer No</h4></th>
                        <th><h4 style={{textAlign:'center'}}>Meter Serial Number</h4></th>
                        <th><h4 style={{textAlign:'center'}}>Edit</h4></th>
                        <th><h4 style={{textAlign:'center'}}>Delete</h4></th>
                    </thead>
                    <tbody>
                        {
                            details.map((detail)=>{
                                return <tr>
                                    <td>{detail.id}</td>
                                    <td>{detail.name}</td>
                                    <td>{detail.address}</td>
                                    <td>{detail.customer_no}</td>
                                    <td>{detail.meter_serial_number}</td>
                                    <td><Link to={`/update/${detail.id}`}>
									<EditOutlined style={{ cursor: "pointer" }} />
								    </Link>
                                    </td>
                                    <td><button className="btn btn-danger" onClick={()=>{Delete(detail.id)}}>Delete</button></td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
           </center>
          </>
}
export default Dashboard;