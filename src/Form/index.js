import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { LogoSpace, MainSpace, FormSpace, Img } from "./styles";
import Stepper from "../Stepper";
import Step from "./Step";
import Complete from "./Complete";
//Validaciones
import { ValidarEmail, ValidarPassword } from "./DatosUsuario/validaciones";
import { ValidarNombre, ValidarApellidos, ValidarTelefono } from "./DatosPersonales/validaciones";
import { ValidarInput } from "./DatosEntrega/validaciones";

const Form = () => {

  const [step, setStep] = useState(0)
  const [email, setEmail ] = useState({
      value:"", 
      valid: null
    })
  const [password, setPassword ] = useState({
      value:"", 
      valid: null
    })
  const [name, setName] = useState({
      value:"", 
      valid: null
    })
  const [lastName, setLastName] = useState({
      value:"", 
      valid: null
    })
  const [phone, setPhone] = useState({
      value:"", 
      valid: null
    })
    const [address, setAddress] = useState({
      value:"", 
      valid: null
    })
  const [city, setCity] = useState({
      value:"", 
      valid: null
    })
  const [province, setProvince] = useState({
      value:"", 
      valid: null
    })
  const updateStep = (step) => {
    console.log("Actulizar paso", step)
    setStep(step)
  }
  // const steps = {
  //   0: <DatosUsuario updateStep={updateStep} />,
  //   1: <DatosPersonales updateStep={updateStep} />,
  //   2: <DatosEntrega updateStep={updateStep} />,
  //   3: <Complete />
  // }


  // useEffect(async ()=>{
  //   try {
  //     const data = await (await fetch("https://jsonplaceholder.typicode.com/posts")).json()
  //     console.log(data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }, [])

  const onSubmit = (e) => {
    e.preventDefault()
    if (step <= 3) {
        if (step===0 && email.valid && password.valid){
          updateStep(1)
        }
        if(step===1 && name.valid && lastName.valid && phone.valid){
          updateStep(2)
        }
        if(step===2 && address.valid && city.valid && province.valid){
          updateStep(3)
        }
    }
 
  }
  const handleChange = (element, position, currentStep, validator) => {
    const value = element.target.value
    const valid = validator(value)
    if(currentStep===0) {
        if(position===0) {setEmail({value:value, valid:valid})}
        if(position===1){setPassword({value:value, valid:valid})}
    }
    if(currentStep===1) {
        if(position===0){setName({value:value, valid:valid})}
        if(position===1){setLastName({value:value, valid:valid})}
        if(position===2){setPhone({value:value, valid:valid})}
    }
    if(currentStep===2) {
      if(position===0){setAddress({value:value, valid:valid})}
      if(position===1){setCity({value:value, valid:valid})}
      if(position===2){setProvince({value:value, valid:valid})}
  }
   }
  const stepsFlow = {
    0: {
      inputs: [
        {
          label: "Correo electronico",
          type: "email",
          value: email.value,
          valid: email.valid,
          onChange: handleChange,
          helperText: "Ingresa un correo electrónico válido.",
          validator: ValidarEmail,
        },
        {
          label: "Contraseña",
          type: "password",
          value: password.value,
          valid: password.valid,
          onChange: handleChange,
          helperText: "Ingresa una contraseña válida, al menos 8 caracteres y maximo 20.",
          validator: ValidarPassword,
        }
      ],
      buttonText: "Siguiente",
      onSubmit,
    },
    1: {
      inputs: [
        {
          label: "Nombre",
          type: "text",
          value: name.value,
          valid: name.valid,
          onChange: handleChange,
          helperText: "Ingresa un nombre valido.",
          validator: ValidarNombre,
        },
        {
          label: "Apellidos",
          type: "text",
          value: lastName.value,
          valid: lastName.valid,
          onChange: handleChange,
          helperText: "Ingresa un apellio valido.",
          validator: ValidarApellidos,
        },
        {
          label: "Telefono",
          type: "number",
          value: phone.value,
          valid: phone.valid,
          onChange: handleChange,
          helperText: "Ingresa un numero valido, minimo 8 digitos y maximo 14",
          validator: ValidarTelefono,
        }
      ],
      buttonText: "Siguiente",
      onSubmit,
    },
    2: {
      inputs: [
        {
          label: "Direccion",
          type: "text",
          value: address.value,
          valid: address.valid,
          onChange: handleChange,
          helperText: "Ingresa una direccion valida.",
          validator: ValidarInput,
        },
        {
          label: "Ciudad",
          type: "text",
          value: city.value,
          valid: city.valid,
          onChange: handleChange,
          helperText: "Ingresa una ciudad valida.",
          validator: ValidarInput,
        },
        {
          label: "Provincia",
          type: "text",
          value: province.value,
          valid: province.valid,
          onChange: handleChange,
          helperText: "Ingresa una provincia valida.",
          validator: ValidarInput,
        }
      ],
      buttonText: "Crear cuenta",
      onSubmit,
    },
    3: <Complete />
  }

  return (
    <Box
      sx={{
        padding: "30px",
        display: "flexbox",
        flexDirection: "column",
      }}
    >
      <LogoSpace>
        <Img src={"/favicon.png"} />
        <Typography variant="h3">AluraFood</Typography>
      </LogoSpace>
      <FormSpace>
        { step < 3 && <Stepper step={step}/>}
        {/* {steps[step]} */}
        <Step data={stepsFlow[step]} step={step}/>
      </FormSpace>
    </Box>
  );
};

export default Form;
