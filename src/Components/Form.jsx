import React, { useState } from 'react';
import * as XLSX from 'xlsx';

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Excel dosyası oluşturma
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.aoa_to_sheet([
      ['Ad', 'E-posta'], // Başlık satırı
      [formData.name, formData.email], // Form verileri
    ]);

    XLSX.utils.book_append_sheet(wb, ws, 'Form Verisi');

    // Excel dosyasını indir
    XLSX.writeFile(wb, 'form_data.xlsx');
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <h2>Formu Doldurun</h2>

        <div className="form-group">
          <label htmlFor="name">Adınız:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Adınızı girin"
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">E-posta:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="E-posta adresinizi girin"
            className="form-input"
          />
        </div>

        <button type="submit" className="submit-btn">
          Excel Dosyasına Kaydet
        </button>
      </form>
    </div>
  );
}

export default Form;
