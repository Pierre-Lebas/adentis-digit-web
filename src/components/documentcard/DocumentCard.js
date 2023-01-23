import React from 'react';
import { Card } from 'react-bootstrap';

export default function DocumentCard() {
  return (
    <>
        <Card style={{ maxWidth: "400px" }}>
            <Card.Header><strong>SUIVI d'intégration 1 mois</strong></Card.Header>
            <Card.Body>
                <blockquote className="blockquote mb-0" style={{ fontSize: "1em" }}>
                <p>
                    {' '}
                    Document modèle pour le formulaire de SUIVI d'intégration 1 mois{' '}
                </p>
                <footer className="blockquote-footer" >
                    Envoyé <cite title="Source Title">01/01/2023</cite>
                </footer>
                </blockquote>
            </Card.Body>
        </Card>
    </>
  )
}
