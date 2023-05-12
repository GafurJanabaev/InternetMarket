import { Button, Form, Input } from "antd";
import axios from "axios";
import React, {useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import './Register.scss'
const Register = () => {
  const [bazaBackend, setBazaBackend] = useState({
    name: "",
    phone: "",
    password: "",
  });

  const navigate = useNavigate()

 function register(){
  axios
  .post('https://todo.paydali.uz/api/register',bazaBackend)
  .then(res => {
    Swal.fire({
      title:'Successfull',
      text:'Good',
      icon:'success',
      timer: 3000,
    })
    console.log(res)
    navigate('/login', {replace: true})
  })
  .catch(err => {
    Swal.fire({
      title:'ERROR',
      text:'Siz aldin registratsiya qilingansiz',
      timer:3000,
      icon: 'error',
    })
  })
 }

  return (
    <div className="Register">
      <Form className="FormReg">
        <label>
          <i className="bx bxs-registered"></i>
          <h1>Register</h1>
        </label>
        <label>
          <i className="bx bxs-user"></i>
          <Input className="Input" value={bazaBackend.name} onChange={(e) => setBazaBackend({...bazaBackend, name:e.target.value})} placeholder="Enter your is Name" required />
        </label>
        <label>
          <i className="bx bxs-phone-call"></i>
          <Input className="Input" value={bazaBackend.phone} onChange={(e) => setBazaBackend({...bazaBackend, phone: e.target.value})} placeholder="Enter your is Phone" required />
        </label>
        <label>
          <i className="bx bxs-lock-alt"></i>
          <Input.Password
            className="Input"
            placeholder="Enter your is Password"
            value={bazaBackend.password}
            onChange={(e) => setBazaBackend({...bazaBackend, password:e.target.value})}
            required
          />
        </label>
        <label>
          <i className="bx bx-right-arrow-alt"></i>
          <Button className="btnReg" onClick={register} > Submit </Button>
        </label>
      </Form>
    </div>
  );
};

export default Register;
