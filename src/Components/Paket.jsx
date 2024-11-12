import React, { useState } from 'react';
import egitim from '../images/egitim-paketi.png'
import alisveris from '../images/alisveris.png'
import sosyal from '../images/sosyal.png'
import kantin from '../images/kantin.png'


function Paket() {
  const [selectedPackage, setSelectedPackage] = useState(null);

  const packages = [
    {
      id: 'egitim',
      title: 'Eğitim Paketi',
      description: 'Öğrenme materyalleri ve rehberlikle dolu kapsamlı bir eğitim paketi.',
      image: egitim,
    },
    {
      id: 'alisveris',
      title: 'Alışveriş Çeki',
      description: 'Gençler için çeşitli alışveriş indirimlerinden faydalanabileceğiniz çekler.',
      image: alisveris,
    },
    {
      id: 'sosyal',
      title: 'Sosyal Paket',
      description: 'Aktiviteler, etkinlikler ve sosyal deneyimlerle dolu bir sosyal destek paketi.',
      image: sosyal,
    },
    {
      id: 'kantin',
      title: 'Kantin Paketi',
      description: 'Kantin harcamalarınız için özel indirim ve fırsatlar sunan kantin paketi.',
      image: kantin,
    },
  ];

  const openPackageDetails = (pkg) => {
    setSelectedPackage(pkg);
  };

  const closePackageDetails = () => {
    setSelectedPackage(null);
  };

  return (
    
    <div className="packages">
      <div className="package-container">
        
        {packages.map((pkg) => (
          <div key={pkg.id} className="package-card" onClick={() => openPackageDetails(pkg)}>
            <img src={pkg.image} alt={pkg.title} />
            <h2>{pkg.title}</h2>
            <p>{pkg.description}</p>
          </div>
        ))}
      </div>

      {selectedPackage && (
        <div className="popup" onClick={closePackageDetails}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedPackage.title}</h2>
            <img src={selectedPackage.image} alt={selectedPackage.title} />
            <p>{selectedPackage.description}</p>
            <button onClick={closePackageDetails}>Kapat</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Paket;