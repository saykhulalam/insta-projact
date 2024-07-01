"use client";

import FCButton from "@/src/components/FCButton";
import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  category: string;
  email: string;
  orderNumber: string;
  message: string;
}

const ContactForm: React.FC = () => {
  // State management for form inputs
  const [formData, setFormData] = useState<FormData>({
    category: "order",
    email: "",
    orderNumber: "",
    message: "",
  });

  // Change handler
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Form submission handler
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission,
    // such as sending the data to an API endpoint.
    console.log(formData);

    //   reset the form data and alert the user
    setFormData({
      category: "order",
      email: "",
      orderNumber: "",
      message: "",
    });
    alert("Form submitted successfully!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="card-wrapper">
        <div className="rounded-[20px] bg-white text-card-foreground shadow-owncard p-8 space-y-4 w-full">
          <div>
            <label className="font-medium ml-1 text-sm">
              Vyberte kategorii
            </label>
            <div className="relative">
              {/* <select
                className="flex h-10 w-full items-center justify-between border border-input bg-background px-3 ring-offset-background placeholder:text-muted-foreground focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 py-[25px] mt-1.5 rounded-xl text-sm shadow-xs focus-visible:ring-[2px] focus-visible:ring-offset-0 transition duration-100 focus-visible:ring-[#fd7702] focus:ring-offset-0 focus:ring-[#fd7702] focus-visible:shadow-newxl font-medium text-black"
                name="category"
                value={formData.category}
                onChange={handleChange}
              >
                <option value="order">Dotaz k objednávce</option>
                <option value="before">Dotaz před nákupem</option>
                <option value="other">Ostatní</option>
              </select> */}
              <select
                className="flex h-14 w-full items-center justify-between border border-input bg-background px-3 ring-offset-background placeholder:text-muted-foreground focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 mt-1.5 rounded-xl text-sm shadow-xs focus-visible:ring-[2px] focus-visible:ring-offset-0 transition duration-100 focus-visible:ring-[#fd7702] focus:ring-offset-0 focus:ring-[#fd7702] focus-visible:shadow-newxl font-medium text-black"
                name="category"
                value={formData.category}
                onChange={handleChange}
              >
                <option value="order">Dotaz k objednávce</option>
                <option value="before">Dotaz před nákupem</option>
                <option value="other">Ostatní</option>
              </select>
            </div>
          </div>
          <div>
            <label className="font-medium ml-1 text-sm">Váš email</label>
            <input
              className="flex h-10 w-full border border-input bg-background px-3 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 py-[25px] mt-1.5 rounded-xl text-sm shadow-xs focus-visible:ring-[2px] focus-visible:ring-offset-0 transition duration-100 focus-visible:ring-[#fd7702] focus-visible:shadow-newxl font-medium"
              name="email"
              placeholder="Zadejte váš email"
              required
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="font-medium ml-1 text-sm">Číslo objednávky</label>
            <input
              className="flex h-10 w-full border border-input bg-background px-3 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 py-[25px] mt-1.5 rounded-xl text-sm shadow-xs focus-visible:ring-[2px] focus-visible:ring-offset-0 transition duration-100 focus-visible:ring-[#fd7702] focus-visible:shadow-newxl font-medium"
              name="orderNumber"
              placeholder="např. 332412 nebo ponechte prázdné"
              value={formData.orderNumber}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="font-medium ml-1 text-sm">Zpráva</label>
            <textarea
              className="flex min-h-[80px] w-full border border-input bg-background px-3 ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 py-[10px] mt-1.5 rounded-xl text-sm shadow-xs focus-visible:ring-[2px] focus-visible:ring-offset-0 transition duration-100 focus-visible:ring-[#fd7702] focus-visible:shadow-newxl font-medium"
              name="message"
              placeholder="Napište váš dotaz a zahrňte název profilu nebo odkaz na váš profil."
              required
              rows={6}
              spellCheck="false"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="flex justify-center">
            <FCButton type="submit" text="Odeslat zprávu" />
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
