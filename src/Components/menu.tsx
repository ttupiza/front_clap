import React, { useState, useCallback } from 'react';
import '../css/menu.css'; // ruta corregida
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCog, faUsers, faFileAlt } from '@fortawesome/free-solid-svg-icons';

type NavItem = {
  name: string;
  icon: any; // cambio: usar any para evitar errores de tipos con distintas versiones
};

const NAV_ITEMS: NavItem[] = [
  { name: 'Perfil', icon: faUser },
  { name: 'Configuración', icon: faCog },
  { name: 'Beneficiarios', icon: faUsers },
  { name: 'Reportes', icon: faFileAlt },
];

const TabMenu: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('Perfil');

  const handleActivate = useCallback((name: string) => {
    setActiveTab(name);
  }, []);

  return (
    <nav className="centered-menu-container-react" aria-label="Menú principal">
      <ul className="nav-menu-react" role="tablist">
        {NAV_ITEMS.map((item) => (
          <li
            key={item.name}
            className={`nav-item-react ${activeTab === item.name ? 'active' : ''}`}
            role="presentation"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === item.name}
              className="nav-button-react"
              onClick={() => handleActivate(item.name)}
            >
              <FontAwesomeIcon icon={item.icon} aria-hidden="true" />
              <span>{item.name}</span>
            </button>
          </li>
        ))}
      </ul>
      {/* Línea divisora que va debajo del menú */}
      <div className="divider-react" />
    </nav>
  );
};

export default TabMenu;