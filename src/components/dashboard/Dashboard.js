import React, { useState } from 'react'
import { Alert, Button, Card, Tab, Tabs } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import DocumentCard from '../documentcard/DocumentCard';
import Header from '../header/Header';
import './dashboard.css';

export default function Dashboard() {
    /*const [error, setError] = useState("");
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
    }*/

  return (
    <>
        <div className="dashboard-component" >
            <Header></Header>
            <Tabs defaultActiveKey="model" className="mb-3" justify>
                <Tab eventKey="model" title="Modèles">
                    <div className="card-list">
                        <DocumentCard></DocumentCard>
                    </div>
                </Tab>
                <Tab eventKey="not-submited-doc" title="Non soumis">
                    <div className="card-list">
                        <DocumentCard></DocumentCard>
                    </div>
                </Tab>
                <Tab eventKey="submited-doc" title="Soumis">
                    <div className="card-list">
                        <DocumentCard></DocumentCard>
                    </div>
                </Tab>
            </Tabs>
            
        </div>
    </>
  )
}
