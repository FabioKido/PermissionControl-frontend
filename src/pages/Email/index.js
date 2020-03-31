import React, { Component, Fragment } from 'react';
import api from '../../services/api';
import { withRouter } from 'react-router-dom';
import Header from "../../components/Header";
import { Form, Container } from "./styles";

class Email extends Component{

	state = {
	    email: "",
	    mensagem: "",
	    subject: "Controll App",
	    error: "",
	    success: ""
	};

	handleOnSubmit = async e => {

	    e.preventDefault();

	    const { email, subject, mensagem } = this.state;
	    
	    if (!email || !subject || !mensagem) {
	    
	      	this.setState({ error: "Preencha todos os dados para enviá-lo" });
	    
	    } else {
	      try {

	        const response = await api.post("/email", { email, subject, mensagem });
	        console.log(response.data.message);
	        this.setState({ success: response.data.message });
	      
	      } catch (err) {
	        
	        console.log(err);
	        this.setState({ error: "Ocorreu um erro ao enviar o email" });
	      
	      }
	    }
	};

	render() {
		return (
			<Fragment>
				<Header />
				<Container>
			        <Form onSubmit={this.handleOnSubmit}>
				          {this.state.error && <p className="error hidden">{this.state.error}</p>}
				          {this.state.success && <p className="success hidden">{this.state.success}</p>}
				        <input
				            type="text"
				            placeholder="Digite um E-mail"
				            onChange={e => this.setState({ email: e.target.value })}
				        />
				        <input
				            type="text"
				            placeholder="Digite um Subject"
				            onChange={e => this.setState({ subject: e.target.value })}
				        />
				        <input
				            type="text"
				            placeholder="Digite uma Mensagem"
				            onChange={e => this.setState({ mensagem: e.target.value })}
				        />
				        <button type="submit">Enviar</button>
				          <hr />
			        </Form>
			    </Container>		
    		</Fragment>
    	)

	}

}

export default withRouter(Email);