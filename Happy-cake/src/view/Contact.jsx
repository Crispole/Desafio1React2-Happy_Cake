import { Form, Button} from "react-bootstrap"
const Contact = () => {
return (
    <section className="d-flex flex-column align-items-center">
				<h1 className="mt-5">Cuentanos, ¿en que podemos ayudar, querido usuario? 🫶</h1>
				<Form>
					<Form.Group className="text-center mt-3">
						<Form.Label >Correo:</Form.Label>
						<Form.Control type="email" placeholder="name@example.com" />
					</Form.Group>

					<Form.Group className="text-center mt-3">
						<Form.Label>Descripción:</Form.Label>
						<Form.Control
							as="textarea"
							style={{ height: '100px' }}
							placeholder="Hola, mi nombre es y ..."
						/>
					</Form.Group>
					<Form.Group className="text-center mt-3">
						<Button variant="success" type="submit">
							ENVIAR
						</Button>
					</Form.Group>
			</Form>
    </section>)
}
export default Contact