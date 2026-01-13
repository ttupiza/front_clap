import React, { useMemo } from 'react';
import '../css/menu.css'; // ruta corregida
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCog, faUsers, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useLocation } from 'react-router-dom';

type NavItem = {
  name: string;
  icon: any;
  to: string;
};

const NAV_ITEMS: NavItem[] = [
  { name: 'Perfil', icon: faUser, to: '/perfil' },
  { name: 'Configuración', icon: faCog, to: '/lista_usuario' },
  { name: 'Beneficiarios', icon: faUsers, to: '/lista_beneficiarios' },
  { name: 'Reportes', icon: faFileAlt, to: '/reportes' },
];

const TabMenu: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const activeName = useMemo(() => {
    const match = NAV_ITEMS.find((item) => item.to === location.pathname || location.pathname.startsWith(item.to + '/'));
    return match ? match.name : '';
  }, [location.pathname]);

  return (
    <nav className="centered-menu-container-react" aria-label="Menú principal">
      <ul className="nav-menu-react" role="tablist">
        {NAV_ITEMS.map((item) => (
          <li
            key={item.name}
            className={`nav-item-react ${activeName === item.name ? 'active' : ''}`}
            role="presentation"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeName === item.name}
              className="nav-button-react"
              onClick={() => navigate(item.to)}
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