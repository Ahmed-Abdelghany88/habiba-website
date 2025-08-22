import { useState } from 'react';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    let { name, value } = e.target;

    // Restrict phone input to numbers only
    if (name === 'phone') {
      value = value.replace(/\D/g, '');
    }

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      callback(); // call the function passed from component (e.g. send mail)
    }
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
    isSubmitting,
  };
};

export default useForm;
