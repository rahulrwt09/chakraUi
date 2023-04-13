import React, { useState } from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    PinInput, PinInputField,
    Input,Container, Center,
    HStack,
    Button, ButtonGroup
  } from '@chakra-ui/react'

 

function Form() {


    const[loading, setloding]=useState(false)
   
    const handlesubmit = ()=>{
      setloding(true);
      setTimeout(()=>{
        setloding(false);
      },2000)
     
    };
  
  return (
    <div> 
 <Container style={{border:'1px solid', padding:'1%', marginTop:'2%'}}>
    <Center>Sign Up</Center>
<FormControl>
  <FormLabel>Email address</FormLabel>
  <Input type='email' />
  <FormHelperText>We'll never share your email.</FormHelperText>
  <FormLabel>First Name</FormLabel>
  <Input placeholder='Enter First Name' />
  <FormLabel>Last Name</FormLabel>
  <Input placeholder='Enter Last Name' />

  <FormLabel>Password</FormLabel>
  <Input placeholder='Enter Password' type="password" />

  <FormLabel>Enter Mobile</FormLabel>
  <Input placeholder='+91' type="number" />
   
  <FormLabel>OTP</FormLabel>
  <HStack style={{paddingTop:'5px'}}>
  <PinInput otp>
    <PinInputField />
    <PinInputField />
    <PinInputField />
    <PinInputField />
  </PinInput>
</HStack>

<Button onClick={handlesubmit} colorScheme='blue' isLoading= {loading} loadingText="Submitting...">
    
Button</Button>

</FormControl>
</Container>
    </div>
  )
}

export default Form