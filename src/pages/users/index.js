import React, {Component, Fragment } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import Header from "../../components/Header";

import './styles.css';

export default class Users extends Component{
	state = {
		users: []
	};

	componentDidMount(){
		this.loadUsers();
	}

	loadUsers = async () => {
		const response = await api.get(`/users`);

		this.setState({ users: response.data.data });
	};

	render(){
		const { users } = this.state;

		return (
			<Fragment>
				<Header />
				<div className="product-list">
					{users.map(user => (
						<article key={user.id}>
							<strong>{user.email}</strong>
							<p>{user.role}</p>

							<Link to={`/user/${user.id}`}>Acessar</Link>
						</article>
					))}
				</div>
			</Fragment>
		);
	}
}