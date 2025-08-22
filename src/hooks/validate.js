const validate = (values) => {
  let errors = {};

  // Name
  if (!values.name.trim()) {
    errors.name = 'Name is required';
  }

  // Email
  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  // Phone
  if (!values.phone) {
    errors.phone = 'Phone number is required';
  } else if (!/^\d{6,15}$/.test(values.phone)) {
    errors.phone = 'Phone must be numbers only (6–15 digits)';
  }

  // Message
  if (!values.message.trim()) {
    errors.message = 'Message is required';
  }

  return errors;
};

export default validate;
