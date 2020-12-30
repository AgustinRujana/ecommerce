import React, { useContext } from "react";
import { Form, Button, Col } from "react-bootstrap";

import { UserContext } from "./context/UserContext";

const UserForm = () => {
  const [setUser] = useContext(UserContext);

  const handleSubmit = (event) =>{
    event.preventDefault();
    const userName = event.target[0].value;
    const userSurname = event.target[1].value;
    const Email_1 = event.target[2].value;
    const Email_2 = event.target[3].value;
    const userPhone = event.target[4].value;

    const saveUser = () => {
      const buyer = {
        name: userName + ' ' + userSurname,
        phone: userPhone,
        email: Email_1,
      }

      console.log(buyer);
      setUser(buyer);
    }

    Email_1 === Email_2 ? saveUser() : alert('Los mails no son iguales');
  }

  return (
    <>
      <Form className="mx-5 my-3" onSubmit={handleSubmit}>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridNombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="name" placeholder="Nombre" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridApellido">
            <Form.Label>Apellido</Form.Label>
            <Form.Control type="surname" placeholder="Apellido" />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formGridEmail">
          <Form.Label>Correo Electronico</Form.Label>
          <Form.Control placeholder="Correo Electronico" />
        </Form.Group>

        <Form.Group controlId="formGridEmail_Check">
          <Form.Label>Confirme Correo Electronico</Form.Label>
          <Form.Control placeholder="Confirme Correo Electronico" />
        </Form.Group>

        <Form.Group controlId="formGridTelefono">
          <Form.Label>Numero de Contacto</Form.Label>
          <Form.Control placeholder="Numero de Contacto" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Guardar Usuario
        </Button>
      </Form>
    </>
  );
};

export default UserForm;
