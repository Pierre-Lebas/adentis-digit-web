import React, { useState } from 'react'
import { Alert, Button, Card, Tab, Tabs } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import DocumentCard from '../documentcard/DocumentCard';
import Header from '../header/Header';
import './dashboard.css';

export default function Dashboard() {
    /*const [error, setError] = useState("");
    const { currentUser, logout } = useAuth();
    

    async function handleLogout(){
        setError('');

        try{
            await logout();
            navigate('/login');
        } catch {
            setError('Failed to Log out')
        }
    }*/
    const navigate = useNavigate();

    function newDoc(){
        navigate('/edit-form');
    }

  return (
    <>
        <div className="dashboard-component" >
            <Header></Header>
            <Tabs defaultActiveKey="model" className="mb-3" justify>
                <Tab eventKey="model" title="Modèles">
                    <div className="card-list">
                        <DocumentCard></DocumentCard>
                    </div>
                    <Button className="new-doc-button" variant="primary" onClick={newDoc}><span><Icon.ClipboardPlus/></span> Nouveau document</Button>
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
