import { Button, TextField } from "@mui/material";
import { useState } from "react"
import DeleteIcon from "@mui/icons-material/Delete";

function AddRemoveInputField(){

    const [inputFields, setInputFields] = useState([{
        choices:'',

    } ]);
 
    const addInputField = ()=>{

        setInputFields([...inputFields, {
            choices:'',
        } ])
      
    }
    const removeInputFields = (index)=>{
        const rows = [...inputFields];
        rows.splice(index, 1);
        setInputFields(rows);
   }
   const handleChange = (index, evnt)=>{
    
    const { name, value } = evnt.target;
    const list = [...inputFields];
    list[index][name] = value;
    setInputFields(list);
    
 
 
}
    return(
    
        <div className="container">
            <div className="row">
                <div className="col-sm-8">
                  {
                      inputFields.map((data, index)=>{
                          const {choices}= data;
                          return(
                            <div className="row my-3" key={index}>
                    <div className="col">
                    <div className="form-group">
                    <TextField type="text" onChange={(evnt)=>handleChange(index, evnt)}
                     value={choices} name="choices" className="form-control" 
                      placeholder="entrer les propositions " />
                    {(inputFields.length!==1)? 
                         <Button
                         style={{ color: "red" }}
                         className="mr10"
                         onClick={removeInputFields}
                       >
                         <DeleteIcon />
                       </Button>:''}

                    </div>
                    </div>
                   
                    {/* <div className="col">
                

                
                 {(inputFields.length!==1)? <button className="btn btn-outline-danger" onClick={removeInputFields}>x</button>:''}
                  
                 
                    </div> */}
                  </div>
                          )
                      })
                  }
     
                <div className="row">
                    <div className="col-sm-12">

                    <Button className="btn btn-outline-success " onClick={addInputField}>
                        
                    Add New</Button>
                    </div>
                </div>
                  </div>
                </div>
                <div className="col-sm-4">

                </div>
            </div>
        
    )
}
export default AddRemoveInputField