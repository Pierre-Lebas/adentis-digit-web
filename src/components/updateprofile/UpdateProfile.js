import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

export default function UpdateProfile() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { currentUser, updateEmail, updatePassword } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault();

        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError('Les mots de passe ne correspondent pas')
        }

        const promises = [];
        setLoading(true);
        setError('');
        if (emailRef.current.value !== currentUser.email){
            promises.push(updateEmail(emailRef.current.value));
        }
        if (passwordRef.current.value){
            promises.push(updatePassword(passwordRef.current.value));
        }

        Promise.all(promises).then(() => {
            navigate("/");
        }).catch(() => {
            setError('La modification du profil a échoué');
        }).finally(() => {
            setLoading(false);
        })
    }
    
  return (
    <>
        <div class="update-profile-component" className="w-100" style={{ maxWidth: "400px" }}>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Modifier le profil</h2>
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
                            <Form.Control type="email" ref={emailRef} required defaultValue={currentUser.email}/>
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Mot de passe</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required placeholder="Laisser vide pour garder le même mot de passe"/>
                        </Form.Group>
                        <Form.Group id="password-confirm">
                            <Form.Label>Confirmation mot de passe</Form.Label>
                            <Form.Control type="password" ref={passwordConfirmRef} required/>
                        </Form.Group>
                        <div className="w-100 text-center mt-4"></div>
                        <Button disabled={loading} className="w-100" type="submit">
                            Modifier
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                <Link to="/">Annuler</Link>
            </div>
        </div>
    </>
  )
}
