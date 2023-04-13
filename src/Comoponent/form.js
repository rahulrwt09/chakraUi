import React from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,Container
  } from '@chakra-ui/react'
function Form() {
  return (
    <div> 
 <Container style={{border:'1px solid', padding:'5%', marginTop:'6%'}}>
<FormControl>
  <FormLabel>Email address</FormLabel>
  <Input type='email' />
  <FormHelperText>We'll never share your email.</FormHelperText>
</FormControl>
</Container>
    </div>
  )
}

export default Form