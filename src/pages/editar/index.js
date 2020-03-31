import React, {Component, Fragment } from 'react';
import api from '../../services/api';
import Header from "../../components/Header";
import { Link, withRouter } from 'react-router-dom';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import { AppSwitch } from '@coreui/react';

import Logo from "../../assets/airbnb-logo.svg";

import { Form, Container } from "./styles";

class Edit extends Component{

	state = {
	    email: "",
	    password: "",
	    role: "basic",
	    enable: false,
	    error: ""
	};

	handleOnSubmit = async e => {

	    e.preventDefault();

	    const { id } = this.props.match.params;

	    const { email, password, role, enable } = this.state;

	    if (!email || !password) {
	    
	      	this.setState({ error: "Preencha todos os dados para atualizar-se" });
	    
	    } else {
	      try {

	        await api.put(`/user/${id}`, { role, enable });
	        this.props.history.push(`/user/${id}`);
	      
	      } catch (err) {
	        
	        console.log(err);
	        this.setState({ error: "Ocorreu um erro ao editar-se" });
	      
	      }
	    }

	};

	render() {

		const { email, password, role, enable } = this.state;

		return (
			<Fragment>
				<Header />
				<Container>
			        <Form onSubmit={this.handleOnSubmit}>
				          {this.state.error && <p>{this.state.error}</p>}
				        <input
				            type="text"
				            placeholder="Digite um e-mail"
				            onChange={e => this.setState({ email: e.target.value })}
				        />
				        <input
				            type="text"
				            placeholder="Digite uma senha"
				            onChange={e => this.setState({ password: e.target.value })}
				        />
						<select value={this.state.role} onChange={e => this.setState({ role: e.target.value })}>
							<option value="basic">basic</option>
							<option value="supervisor">supervisor</option>
							<option value="admin">admin</option>
						</select>
						<div className="animated fadeIn">
							<Row>
	          					<Col xs="12" md="6">
									<Card>
						              <CardHeader>
						                Ativar/Desativar User
						              </CardHeader>
						              <CardBody>
						                <AppSwitch className={'mx-1'} color={'dark'} checked />
						              </CardBody>
						            </Card>
						        </Col>
						    </Row>
						</div>    
				        <button type="submit">Editar</button>
				          <hr />
				        <Link to="/users">Cancelar</Link>
			        </Form>
			    </Container>
			</Fragment>		
    	)

	}

}

export default withRouter(Edit);
