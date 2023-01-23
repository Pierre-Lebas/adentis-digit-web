import React, { useState } from 'react'
import { Alert, Button, Card, Container, Dropdown, DropdownButton, Nav, Navbar, NavDropdown} from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import './header.css';

export default function Header() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout(){
    setError('');

    try{
      await logout();
      navigate('/login');
    } catch {
      setError('La déconnexion du compte a échoué')
    }
  }
  return (
    <>
      <Navbar style={{ backgroundColor: "rgb(1, 72, 124)" }}>
        <Container>
          <Navbar.Brand><h3>Tableau de bord</h3></Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <DropdownButton id="dropdown-item-button" title={<span><Icon.List/></span>}>
              <Dropdown.ItemText>{currentUser.email}</Dropdown.ItemText>
              <Dropdown.Item as="Link" ><Link to="/update-profile">Modifier le profil</Link></Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item as="button" ><Button variant="link" onClick={handleLogout}>Se déconnecter</Button></Dropdown.Item>
            </DropdownButton>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </>
  )
}
