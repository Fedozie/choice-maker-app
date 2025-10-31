import { createContext } from 'react';

const FormContext = createContext({
  formData: {
    question: '',
    answer: ''
  },
  setFormData: () => {
    
  }
});


export default FormContext;