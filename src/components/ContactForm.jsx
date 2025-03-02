"use client"
import { useState } from "react";
import { Mail, User, MessageCircle } from "lucide-react";


export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-lg shadow-lg rounded-2xl bg-white p-6">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <User className="absolute left-3 top-3 text-gray-400" size={20} />
            <input 
              type="text" 
              name="name" 
              placeholder="Your Name" 
              value={formData.name} 
              onChange={handleChange} 
              className="pl-10 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
            <input 
              type="email" 
              name="email" 
              placeholder="Your Email" 
              value={formData.email} 
              onChange={handleChange} 
              className="pl-10 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="relative">
            <MessageCircle className="absolute left-3 top-3 text-gray-400" size={20} />
            <textarea 
              name="message" 
              placeholder="Your Message" 
              value={formData.message} 
              onChange={handleChange} 
              className="pl-10 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            ></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
