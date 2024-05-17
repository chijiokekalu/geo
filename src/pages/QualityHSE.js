// src/QualityHSE.js
import React, { useState } from 'react';
import './QualityHSE.css';
import project1 from '../images/project1.jpeg';
import project2 from '../images/project2.jpeg';
import project3 from '../images/project3.jpeg';

const initialHSEs = [
  {
    id: 1,
    src: project1,
    title: 'ISO 9001:2015 for Quality Management Systems',
    overview: 'Our dedication to maintaining the highest levels of quality management in our operations.',
    description: 'This certification underscores our commitment to delivering services that exceed client expectations.'
  },
  {
    id: 2,
    src: project2,
    title: 'ISO 14001:2015 for Environmental Management Systems',
    overview: 'Our commitment to minimizing environmental impact through sustainable practices.',
    description: 'Implementing resource conservation, waste management, and environmentally friendly technologies.'
  },
  {
    id: 3,
    src: project3,
    title: 'OHSAS 18001 for Occupational Health and Safety Management',
    overview: 'Ensuring the health and safety of our employees and clients.',
    description: 'Comprehensive safety measures and risk assessments to prevent accidents and injuries.'
  },
  // Add more initial HSEs as needed
];

const QualityHSE = () => {
  const [hses, setHSEs] = useState(initialHSEs);
  const [newHSE, setNewHSE] = useState({ src: '', title: '', overview: '', description: '' });

  const addHSE = (e) => {
    e.preventDefault();
    if (newHSE.src && newHSE.title && newHSE.overview && newHSE.description) {
      const newHSEObject = {
        id: hses.length ? hses[hses.length - 1].id + 1 : 1,
        ...newHSE
      };
      setHSEs([...hses, newHSEObject]);
      setNewHSE({ src: '', title: '', overview: '', description: '' });
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setNewHSE({ ...newHSE, src: event.target.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const removeHSE = (id) => {
    setHSEs(hses.filter((hse) => hse.id !== id));
  };

  return (
    <div className="quality-hse-container">
      <h1>Commitment to Excellence - Quality & HSE Standards at Geogreatotechnics & Geodreels Ltd</h1>
      <p>At Geogreatotechnics & Geodreels Ltd (GGL), our unwavering commitment to quality, health, safety, and environmental stewardship stands at the core of everything we do. Guided by international standards and best practices, we ensure that our projects not only meet but exceed the expectations of our clients, while safeguarding our people and the planet.</p>
      <div className="quality-hse-grid">
        {hses.map((hse) => (
          <div key={hse.id} className="quality-hse">
            <img src={hse.src} alt={hse.title} />
            <div className="quality-hse-info">
              <h2>{hse.title}</h2>
              <p><strong>Overview:</strong> {hse.overview}</p>
              <p><strong>Description:</strong> {hse.description}</p>
              <button onClick={() => removeHSE(hse.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
      <form className="add-quality-hse-form" onSubmit={addHSE}>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileUpload}
        />
        <input
          type="text"
          value={newHSE.title}
          onChange={(e) => setNewHSE({ ...newHSE, title: e.target.value })}
          placeholder="Enter title"
        />
        <textarea
          value={newHSE.overview}
          onChange={(e) => setNewHSE({ ...newHSE, overview: e.target.value })}
          placeholder="Enter overview"
        />
        <textarea
          value={newHSE.description}
          onChange={(e) => setNewHSE({ ...newHSE, description: e.target.value })}
          placeholder="Enter description"
        />
        <button type="submit">Add Quality & HSE</button>
      </form>
    </div>
  );
};

export default QualityHSE;
