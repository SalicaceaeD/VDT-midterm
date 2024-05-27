import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Form } from "./Form"

axios.defaults.baseURL = "http://localhost:10000/"

function App() {
  const [addSection, setAddSection] = useState(false);
  const [editSection, setEditSection] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    school: "",
    email: ""
  })
  const [formEdit, setFormEdit] = useState({
    name: "",
    gender: "",
    school: "",
    email: "",
    id: ""
  })
  const [dataList, setDataList] = useState([])

  const handleOnChange = (e) => {
    const {value, name} = e.target
    setFormData((preve) => {
      return {
        ...preve,
        [name] : value
      }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = await axios.post("/create", formData)
    if (data.data.success) {
      setAddSection(false)
      getData()
      console.log(data)
      alert("data save successfully")
      setFormData({
        name: "",
        gender: "",
        school: "",
        email: ""
      })
    }
  }

  const getData = async() => {
    const data = await axios.get("/")
    console.log(data)
    if (data.data.success) {
      setDataList(data.data.data)
    }
  }
  //console.log(dataList)

  useEffect(() => {
    getData()
  }, [])

  const handleDelete = async (id) => {
    const data = await axios.delete("/delete/"+id)
    if (data.data.success) {
      getData()
      alert("data delete successfully")
    }
  }

  const handleUpdate = async (e) => {
    e.preventDefault()
    const data = await axios.put("/update", formEdit)
    if (data.data.success) {
      setEditSection(false)
      getData()
      alert("data update successfully")
    }
  }

  const handleEditOnChange = async (e) => {
    const {value, name} = e.target;
    setFormEdit((preve) => {
      return {
        ...preve,
        [name] : value
      }
    });
  }

  const handleEdit = (el) => {
    setFormEdit(el)
    setEditSection(true)
  }

  return (
    <>
    {
            addSection && (
              <Form 
                handleSubmit = {handleSubmit}
                handleOnChange = {handleOnChange}
                handleClose = {()=>setAddSection(false)}
                rest = {formData}
              />
            )
          }
          {
            editSection && (
              <Form 
                handleSubmit = {handleUpdate}
                handleOnChange = {handleEditOnChange}
                handleClose = {()=>setEditSection(false)}
                rest = {formEdit}
              />
            )
          }
        <div class="container">
            <h1 class="text-center mb-5 mt-5 text-dark">
                <b>Dach sách VDT 2024</b>
            </h1>
            <button type="button" class="btn btn-primary mb-2 btn-sm fw-bold" onClick={()=>setAddSection(true)}>+ Add</button> 
                
            <div class="table-responsive" >
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Họ và Tên</th>
                    <th>Giới tính</th>
                    <th>Trường</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {
                    dataList[0] ? (
                    dataList.map((el) => {
                      return (
                        <tr>
                          <td>{el.name}</td>
                          <td>{el.gender}</td>
                          <td>{el.school}</td>
                          <td>
                            <button type="button" class="btn btn-info btn-sm mx-1" onClick={()=>{handleEdit(el)}}>Detail & Update</button>
                            <button type="button" class="btn btn-danger btn-sm mx-1" onClick={()=>handleDelete(el._id)}>x Delete</button>
                          </td>
                        </tr>
                      )
                    })
                    ) : (
                      <tr><td colspan="4" class="text-center">No User Found</td></tr>
                    )
                  }
                </tbody>
              </table>
            </div>
        </div>
    </>
  );
}

export default App;
