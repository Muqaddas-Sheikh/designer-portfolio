import React, { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import "./Contact.css";

function Contact() {
  const { isDarkMode } = useTheme();
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    projectName: "",
    projectDescription: "",
    deadline: "",
    designType: "",
    dimensions: "",
    colorPreferences: "",
    fontPreferences: "",
    graphicElements: "",
    designStyle: "",
    additionalInstructions: "",
    signature: "",
    date: ""
  });

  useEffect(() => {
    // iOS-style smooth fade + slide animation delay
    const timer = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you! Your design request has been submitted.");
  };

  return (
    <section
      className={`contact ${isDarkMode ? 'dark-theme' : 'light-theme'}`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(40px)",
        transition: "all 0.8s cubic-bezier(0.25, 0.1, 0.25, 1)"
      }}
    >
      <div className="contact-header">
        <h1>Graphic Design Request Form 🎨</h1>
        <p>Let's bring your creative vision to life! Fill out the form below to get started.</p>
      </div>

      <div className="contact-content">
        <form className="contact-form centered-form" onSubmit={handleSubmit}>
          {/* Name */}
          <div className="form-section">
            <h3>Name</h3>
            <div className="form-row">
              <input 
                type="text" 
                name="firstName"
                placeholder="First Name*" 
                value={formData.firstName}
                onChange={handleChange}
                required 
              />
              <input 
                type="text" 
                name="lastName"
                placeholder="Last Name*" 
                value={formData.lastName}
                onChange={handleChange}
                required 
              />
            </div>
          </div>

          {/* Contact Information */}
          <div className="form-section">
            <h3>Contact Information</h3>
            <input 
              type="email" 
              name="email"
              placeholder="Email*" 
              value={formData.email}
              onChange={handleChange}
              required 
            />
            <input 
              type="tel" 
              name="phone"
              placeholder="Phone Number" 
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          {/* Project Details */}
          <div className="form-section">
            <h3>Project Details</h3>
            <input 
              type="text" 
              name="projectName"
              placeholder="Project Name/Title*" 
              value={formData.projectName}
              onChange={handleChange}
              required 
            />
            <textarea 
              name="projectDescription"
              placeholder="Description of Project (including target audience, key message, etc.)*" 
              rows="3"
              value={formData.projectDescription}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          {/* Deadline */}
          <div className="form-section">
            <h3>Preferred Deadline</h3>
            <input 
              type="text" 
              name="deadline"
              placeholder="e.g., October 30, 2024" 
              value={formData.deadline}
              onChange={handleChange}
            />
          </div>

          {/* Design Type */}
          <div className="form-section">
            <h3>Design Type</h3>
            <select 
              name="designType"
              value={formData.designType}
              onChange={handleChange}
              required
            >
              <option value="">Select Design Type</option>
              <option value="logo">Logo Design</option>
              <option value="branding">Branding/Identity</option>
              <option value="print">Print Materials</option>
              <option value="digital">Digital Graphics</option>
              <option value="packaging">Packaging Design</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Design Specifications */}
          <div className="form-section">
            <h3>Design Specifications</h3>
            <input 
              type="text" 
              name="dimensions"
              placeholder="Dimensions/Size (e.g., 8.5 x 11 inches)" 
              value={formData.dimensions}
              onChange={handleChange}
            />
            <input 
              type="text" 
              name="colorPreferences"
              placeholder="Color Preferences" 
              value={formData.colorPreferences}
              onChange={handleChange}
            />
            <input 
              type="text" 
              name="fontPreferences"
              placeholder="Font Preferences" 
              value={formData.fontPreferences}
              onChange={handleChange}
            />
            <textarea 
              name="graphicElements"
              placeholder="Image/Graphic Elements (please describe any specific images or graphics to include)" 
              rows="2"
              value={formData.graphicElements}
              onChange={handleChange}
            ></textarea>
          </div>

          {/* Design Style */}
          <div className="form-section">
            <h3>Design Style/Inspiration</h3>
            <textarea 
              name="designStyle"
              placeholder="Please describe the general design style or provide examples of designs you like" 
              rows="3"
              value={formData.designStyle}
              onChange={handleChange}
            ></textarea>
          </div>

          {/* Additional Instructions */}
          <div className="form-section">
            <h3>Additional Instructions/Comments</h3>
            <textarea 
              name="additionalInstructions"
              placeholder="Any other details or special requests..." 
              rows="3"
              value={formData.additionalInstructions}
              onChange={handleChange}
            ></textarea>
          </div>

          {/* Signature */}
          <div className="form-section">
            <h3>Approval and Confirmation</h3>
            <p className="confirmation-text">
              I confirm that the information provided above is accurate, and request graphic design services for the project described. 
              I understand that the designer will review my request and follow up with any additional questions or clarifications.
            </p>
            <div className="form-row">
              <input 
                type="text" 
                name="signature"
                placeholder="Signature*" 
                value={formData.signature}
                onChange={handleChange}
                required 
              />
              <input 
                type="date" 
                name="date"
                value={formData.date}
                onChange={handleChange}
                required 
              />
            </div>
          </div>

          <button type="submit">Submit Design Request ✨</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
