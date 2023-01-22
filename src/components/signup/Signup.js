import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

export default function Signup() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { signup } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function handleSubmit(e){
        e.preventDefault();

        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError('Les mots de passe ne correspondent pas')
        }

        try{
            setError('');
            setLoading(true);
            await signup(emailRef.current.value, passwordRef.current.value);
            navigate("/");
        } catch(error){
            console.log(error);
            setError('L\'inscription du compte a échoué');
        }

        setLoading(false);
    }
    
  return (
    <>
        <div className="w-100 sign-up-component" style={{ maxWidth: "400px" }}>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Création du compte</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="name">
                            <Form.Label>Nom</Form.Label>
                            <Form.Control type="name" required/>
                        </Form.Group>
                        <Form.Group id="firstname">
                            <Form.Label>Prénom</Form.Label>
                            <Form.Control type="firstname" required/>
                        </Form.Group>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required/>
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Mot de passe</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required/>
                        </Form.Group>
                        <Form.Group id="password-confirm">
                            <Form.Label>Confirmation mot de passe</Form.Label>
                            <Form.Control type="password" ref={passwordConfirmRef} required/>
                        </Form.Group>
                        <div className="w-100 text-center mt-4"></div>
                        <Button disabled={loading} className="w-100" type="submit">
                            S'incrire
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Vous avez déjà un compte ? <Link to="/login">Connectez-vous !</Link>
            </div>
        </div>
    </>
  )
}
