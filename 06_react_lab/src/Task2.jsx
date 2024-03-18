import { useState } from "react"
import { useEffect } from "react"

function Task2(){
    const [componentList, setComponentList] = useState([])
    const [sum, setSum] = useState(0)
   

    function handleComponentChange(index, newValue) {
        const updatedComponentList = [...componentList];
        updatedComponentList[index] = {
            ...updatedComponentList[index],
            ...newValue
        };
        setComponentList(updatedComponentList);
    }

    function removeComponent(index){
        const newComponentList = [...componentList];
        newComponentList.splice(index, 1)
        setComponentList(newComponentList)
    }

    function addComponent(){
        setComponentList([
            ...componentList,
            {
              title: "Task",
              description: "Default Description",
              isEditPressed: false
            }
          ]);
    }

    function handleEditPressed(index) {
        const updatedComponentList = [...componentList];
        updatedComponentList[index].isEditPressed = true;
        setComponentList(updatedComponentList);
      }

      function handleDonePressed(index) {
        const updatedComponentList = [...componentList]
        updatedComponentList[index].isEditPressed = false

        setComponentList(updatedComponentList)
      }
    

    return(
        <div style={{backgroundColor: "white"}}>
            <div style={{marginLeft:'900px', marginTop:'50px'}}>
                <button style={{backgroundColor: 'blue', border: 'none', borderRadius: '200px', color: 'whitesmoke'}} onClick={addComponent}>
                    Add Button
                </button>
            </div>

            {componentList.map((value, index) => {
                 if(!value.isEditPressed){
                 return (
                        <div style={{marginLeft: '500px', marginTop: '20px', marginRight: '350px', backgroundColor: 'aliceblue', height: '100px', width: '550px', borderRadius: '00px',  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"}} key={index}>
                            <div style={{ display: 'flex', alignItems: 'center', marginTop:'20px' }}>
                                <text style={{ marginLeft: '50px', fontWeight: 'bold', fontSize: '20px' }}>{value.title}</text>
                                

                                <button style={{ marginLeft: '250px', backgroundColor: 'blue', border: 'none', borderRadius: '200px', color: 'whitesmoke', height: '30px', width: '60px' }} onClick={() => handleEditPressed(index)}>
                                    Edit
                                </button>

                                <button style={{ marginLeft: '30px', backgroundColor: 'red', border: 'none', borderRadius: '200px', color: 'whitesmoke', height: '30px', width: '50px' }} onClick={() => removeComponent(index)}>
                                    Delete
                                </button>
                            </div>

                             <text style={{marginLeft: '50px'}}>{value.description}</text>
                        </div>
                )
                }

                else {
                    return(
                        <div style={{marginLeft: '500px', marginTop: '20px', marginRight: '350px', backgroundColor: 'aliceblue', height: '150px', width: '550px', borderRadius: '00px',  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"}} key={index}>
                            <div style={{ display: 'flex', alignItems: 'center', marginTop:'20px' }}>
                            <input type="text" value={value.title} placeholder="Title" style={{borderRadius: '200px', borderColor: 'black', height: '30px', width: '300px', marginTop: '30px', marginLeft: '30px'}} onChange={(e) => handleComponentChange(index, { title: e.target.value, description: value.description })} />

                                <button style={{ marginLeft: '200px', backgroundColor: 'blue', border: 'none', borderRadius: '200px', color: 'whitesmoke', height: '30px', width: '60px' }} onClick={()=>handleDonePressed(index)}>
                                    Done
                                </button>

                            </div>

                            <input type="text" value={value.description} placeholder="Description" style={{borderRadius: '200px', borderColor: 'black', height: '30px', width: '300px', marginTop: '30px', marginLeft: '30px'}} onChange={(e) => handleComponentChange(index, { title: value.title, description: e.target.value })} />
                        </div>
                    )
                }
            })}
            
        </div>
    )
}

export default Task2