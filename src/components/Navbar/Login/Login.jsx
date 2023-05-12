import { Button, Form, Input } from "antd";
import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./Login.scss";

const Login = () => {


const {state, dispatch} = useContext(MyContext)

const [bazaLogin, setBazaLogin] = useState({
  phone:'',
  password:'',
})

const navigate = useNavigate()

function login(){
 if(bazaLogin.password !== '' && bazaLogin.phone !==''){
  axios
  .post('https://todo.paydali.uz/api/login',bazaLogin)
  .then(res =>{
    Swal.fire({
      title:'Good',
      icon:'success',
      timer: 3000,
      text:'Siz logindi duris kirittiniz',
    })

    console.log(res.data.payload.name);

    dispatch({type:'LOGIN', payload:{
      user: res.data.payload,
      token: res.data.payload.token
    }})

    navigate('/home', {replace: true})
    console.log(res);
  })
  .catch(err => {
    Swal.fire({
      title:'ERROR',
      icon:'error',
      timer:3000,
      text:'Siz logindi qate terdiniz!!!.'
    })
  })
 }else if(bazaLogin.password ==='' && bazaLogin.phone ==''){
  Swal.fire({
    title:'ERROR',
    icon:'error',
    text:'Siz ketekshelerdi toldirmadiniz!!'
  })
 }
}


  return (
    <div className="Login">
      <Form className="FormLog">
        <label>
          <i className='bx bxs-log-in'></i>
          <h1>Login</h1>
        </label>
        <label>
          <i className="bx bxs-phone-call"></i>
          <Input className="Input" value={bazaLogin.phone} onChange={(e) => setBazaLogin({...bazaLogin, phone: e.target.value})} placeholder="Enter your is Phone" required />
        </label>
        <label>
          <i className="bx bxs-lock-alt"></i>
          <Input.Password 
            className="Input"
            value={bazaLogin.password}
            onChange={(e) => setBazaLogin({...bazaLogin, password: e.target.value})}
            placeholder="Enter your is Password"
            required
          />
        </label>
        <label>
          <i className="bx bx-right-arrow-alt"></i>
          <Button className="btnLog" onClick={login}> Login </Button>
        </label>
      </Form>
    </div>
  );
};

export default Login;
