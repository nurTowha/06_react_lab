import { useState } from "react"
import { useEffect } from "react"

function Task1(){
    const [componentList, setComponentList] = useState([""])
    const [sum, setSum] = useState(0)
    const [errorMessage, setErrorMessage] = useState(false)

    useEffect(() => {
        updateSum(componentList);
    }, [componentList]);

    function handleComponentChange(index, value){
        const updatedComponentList = [...componentList]
        updatedComponentList[index] = value
        setComponentList(updatedComponentList)
    }

    function removeComponent(index){
        const newComponentList = [...componentList];
        newComponentList.splice(index, 1)
        setComponentList(newComponentList)
        updateSum(newComponentList)
    }

    function addComponent(){
        setComponentList([...componentList, ""])
    }

    function updateSum(componentList){
        let s = 0;
        let isError = false; 
    
        for (let i = 0; i < componentList.length; i++) {
            let t = parseInt(componentList[i]);
            
            if (componentList[i] === "") {
                continue
            }

            if(isNaN(t)){
                isError = true
                break 
            } else {
                s += t
            }
        }
    
        setErrorMessage(isError);
        setSum(s);
    }
    

    return(
        <div style={{backgroundColor: "white"}}>
            <div style={{marginLeft:'900px', marginTop:'50px'}}>
                <button style={{backgroundColor: 'blue', border: 'none', borderRadius: '200px', color: 'whitesmoke'}} onClick={addComponent}>
                    Add Button
                </button>
            </div>

            {componentList.map((value, index) => {
                 return (
                        <div style={{marginLeft: '500px', marginTop: '20px', marginRight: '350px', backgroundColor: 'aliceblue', height: '100px', width: '500px', borderRadius: '200px',  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"}} key={index}>
                             <input type="text" value={value} placeholder="Enter a number" style={{borderRadius: '200px', borderColor: 'black', height: '30px', width: '300px', marginTop: '30px', marginLeft: '30px'}} onChange={(e) => handleComponentChange(index, e.target.value)} />

                             <button style={{marginLeft: '20px',backgroundColor: 'red', border: 'none', borderRadius: '200px', color: 'whitesmoke',  height: '30px', width: '50px', marginLeft:'70px'}} onClick={() => removeComponent(index)}>
                                Delete
                             </button>
                        </div>
                );
            })}
            
            
            


            {errorMessage && 
                <div style={{marginLeft: '500px', marginTop: '30px'}}>
                    <h3>Not A Number!</h3>
                </div>
            }

            <div style={{marginLeft: '500px', marginTop: '30px'}}>
                <h3>
                    The Sum Is: {sum}
                </h3>
            </div>
        </div>
    )
}

export default Task1