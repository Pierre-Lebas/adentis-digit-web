import React, { useState } from 'react'
import { Alert, Button, Card, Nav } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import './dashboard.css';

export default function Dashboard() {
    const [error, setError] = useState("");
    const { currentUser, logout } = useAuth();
    const navigate = useNavigate();

    async function handleLogout(){
        setError('');

        try{
            await logout();
            navigate('/login');
        } catch {
            setError('Failed to Log out')
        }
    }

  return (
    <>
        <Nav fill variant="tabs" defaultActiveKey="model">
            <Nav.Item>
                <Nav.Link eventKey="model">Modèles</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="not-submit">Non soumis</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="submit">Soumis</Nav.Link>
            </Nav.Item>
        </Nav>
        <Card>
            <Card.Body>
                <h2 className="text-center mb-4">Profil</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <strong>Email: </strong> {currentUser.email}
                <Link to="/update-profile" className="btn btn-primary w-100 mt-3">Modifier le profil</Link>
            </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
            <Button variant="link" onClick={handleLogout}>Se déconnecter</Button>
        </div>
    </>
  )
}
