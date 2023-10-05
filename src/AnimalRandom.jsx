import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AnimalRandomizer = () => {
  const [animal, setAnimalInfo] = useState({
    text: '',
    imagen: '',
  });

  useEffect(() => {
    fetchAnimalData();
  }, []);

  const fetchAnimalData = async () => {
    try {
      const response = await axios.get('https://some-random-api.ml/animal/dog');
      const { fact, image } = response.data;

      setAnimalInfo({
        text: fact,
        imagen: image,
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleButtonClick = () => {
    fetchAnimalData();
  };

  return (
    <div className="animal-container">
      <div className="animal-text">{animal.text}</div>
      <img
        className="animal-image"
        src={animal.imagen}
        alt="Supuestamente deberia estar la foto pero por alguna razon no carga"
      />
      <button className="refresh-button" onClick={handleButtonClick}>
        Next
      </button>
    </div>
  );
};

export default AnimalRandomizer;
