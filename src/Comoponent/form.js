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

    const [isDisabled, setDisabled] = useState(true);
    const[loading, setloding]=useState(false)
    const[email, setemail]=useState(" ")
    const[fname, setfname]=useState(" ")
    const[lname, setlname]=useState(" ")
    const[password, setpassword]=useState(" ")
    const[num, setnum]=useState(" ")
    const handlesubmit = ()=>{
      setloding(true);
      setDisabled(false)
      setTimeout(()=>{
        setloding(false);
      },2000)
     
    };
   console.log({email,lname,fname,password,num})
  return (
    <div> 
 <Container style={{border:'1px solid', padding:'1%', marginTop:'2%'}}>
    <Center>Sign Up</Center>
<FormControl>
  <FormLabel>Email address</FormLabel>
  <Input type='email' onChange={(e)=>
    setemail(e.target.value)
  } />
  <FormHelperText>We'll never share your email.</FormHelperText>
  <FormLabel>First Name</FormLabel>
  <Input placeholder='Enter First Name'
    onChange={(e)=>
        setfname(e.target.value)
      } 
   />
  <FormLabel>Last Name</FormLabel>
  <Input placeholder='Enter Last Name'
  onChange={(e)=>
    setlname(e.target.value)
  }  />

  <FormLabel>Password</FormLabel>
  <Input placeholder='Enter Password' type="password" 
   onChange={(e)=>
    setpassword(e.target.value)
  }  

 />

  <FormLabel>Enter Mobile</FormLabel>
  <Input placeholder='+91' type="number"
    onChange={(e)=>
        setnum(e.target.value)
      }  
  />
   
  <FormLabel>OTP</FormLabel>
  <HStack style={{paddingTop:'5px'}}>
  <PinInput otp>
    <PinInputField />
    <PinInputField />
    <PinInputField />
    <PinInputField />
  </PinInput>
</HStack>

<Button  disabled={isDisabled ? true : false} onClick={handlesubmit} colorScheme='blue' isLoading= {loading} loadingText="Submitting...">
    
Sumbit</Button>

</FormControl>
</Container>
    </div>
  )
}

export default Form