import React, { useState } from 'react';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.email) errors.email = 'Email is required';
    if (!formData.message) errors.message = 'Message is required';
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email))
      errors.email = 'Email address is invalid';
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);
    // Simulate a network request
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      // Reset form
      setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 sm:p-8 rounded-lg shadow-lg max-w-md mx-auto"
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-recaptcha="true"
      netlify
    >
      <input type="hidden" name="form-name" value="contact" />
      <h2 className="text-xl sm:text-2xl text-white mb-6 text-center">
        Contact Me
      </h2>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-300 mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 sm:p-3 border border-gray-700 rounded bg-transparent text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
          placeholder="Enter your full name"
          aria-describedby="name-error"
          required
        />
        {errors.name && (
          <p id="name-error" className="text-red-500 text-sm mt-1">
            {errors.name}
          </p>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-300 mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 sm:p-3 border border-gray-700 rounded bg-transparent text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
          placeholder="Enter your email address"
          aria-describedby="email-error"
          required
        />
        {errors.email && (
          <p id="email-error" className="text-red-500 text-sm mt-1">
            {errors.email}
          </p>
        )}
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block text-gray-300 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 sm:p-3 border border-gray-700 rounded bg-transparent text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
          placeholder="Enter your message"
          aria-describedby="message-error"
          required
        ></textarea>
        {errors.message && (
          <p id="message-error" className="text-red-500 text-sm mt-1">
            {errors.message}
          </p>
        )}
      </div>
      <div data-netlify-recaptcha="true" className="mb-6"></div>
      {success && (
        <p className="text-green-500 mb-4">
          Your message has been sent successfully!
        </p>
      )}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 sm:py-3 rounded hover:bg-blue-700 transition-colors duration-200"
        disabled={loading}
      >
        {loading ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
};

export default FormComponent;
