import React, { useState } from "react";

const Contact = () => {
  // állapotok az űrlapmezőkhöz
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  // esemény: mezők változása
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // esemény: űrlap beküldése
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Beküldött adatok:", formData);
    alert("Köszönjük az üzenetet! 🍻");

    // űrlap ürítése
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Kapcsolatfelvétel</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Név</label>
          <input
            type="text"
            name="name"
            className="w-full border rounded p-2"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block font-medium">Email</label>
          <input
            type="email"
            name="email"
            className="w-full border rounded p-2"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block font-medium">Üzenet</label>
          <textarea
            name="message"
            rows="5"
            className="w-full border rounded p-2"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded"
        >
          Küldés
        </button>
      </form>
    </div>
  );
};

export default Contact;
