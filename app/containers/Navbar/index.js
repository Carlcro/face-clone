/* eslint-disable no-underscore-dangle */
/**
 *
 * Navbar
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, Button, Control, Field } from 'rbx';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import NavItem from './NavItem';
import Avatar from '../../components/Avatar';
// import makeSelectNavbar from './selectors';
import MessagesList from './MessagesList';

import Input from '../../components/common/Input';
import { logout } from '../../services/authService';

const Wrapper = styled.a`
  background-color: blue;
`;

/* eslint-disable react/prefer-stateless-function */
export default class NavigationBar extends React.Component {
  state = {
    style: {
      message: '#1a2947',
      bell: '#1a2947',
      question: '#1a2947',
      arrowDown: '#1a2947',
      users: '#1a2947',
    },
  };

  handleClick = event => {
    const { style } = this.state;
    const color = style[event.target.id] === 'white' ? '#1a2947' : 'white';
    style[event.target.id] = color;

    this.setState({
      style,
    });
  };

  handleLogout = () => {
    logout();
    window.location = '/';
  };

  render() {
    const { user } = this.props;

    return (
      <Wrapper>
        <Navbar
          transparent
          style={{ height: 43, fontSize: 12, backgroundColor: '#4267b2' }}
        >
          <Navbar.Brand>
            <Navbar.Item as={Link} to="/">
              <span style={{ color: 'white' }}>
                <i className="fab fa-facebook fa-2x" />
              </span>
            </Navbar.Item>
            {user ? (
              <Navbar.Item
                onClick={this.handleLogout}
                style={{ fontWeight: 'bold', color: 'white' }}
              >
                Log out
              </Navbar.Item>
            ) : (
              <Navbar.Item
                as={Link}
                to="/login"
                style={{ fontWeight: 'bold', color: 'white' }}
              >
                Log in
              </Navbar.Item>
            )}
          </Navbar.Brand>
          <Navbar.Menu>
            <Navbar.Segment align="start">
              <Navbar.Item>
                <Field kind="addons">
                  <Control>
                    <Input
                      style={{
                        backgroundColor: 'white',
                        color: 'black',
                        width: 400,
                        height: 23,
                        borderRadius: 3,
                        paddingLeft: 10,
                        fontWeight: 'normal',
                      }}
                      type="text"
                      placeholder="Search"
                    />
                  </Control>
                  <Control>
                    <Button
                      style={{
                        width: 46,
                        height: 23,
                      }}
                      static
                    >
                      <i className="fas fa-search" />
                    </Button>
                  </Control>
                </Field>
              </Navbar.Item>
            </Navbar.Segment>
            <Navbar.Segment align="end">
              {user && (
                <React.Fragment>
                  <Navbar.Item
                    as={Link}
                    to={`/profile/${user._id}`}
                    style={{ fontWeight: 'bold', color: 'white' }}
                  >
                    <Avatar size={24} id={user._id} />
                    {user.name}
                  </Navbar.Item>
                  <Navbar.Item style={{ fontWeight: 'bold', color: 'white' }}>
                    Startsida
                  </Navbar.Item>
                  <Navbar.Item style={{ fontWeight: 'bold', color: 'white' }}>
                    Skapa
                  </Navbar.Item>

                  <Navbar.Item dropdown>
                    <Navbar.Link arrowless>
                      <Navbar.Link arrowless>
                        <NavItem
                          onClick={this.handleClick}
                          id="users"
                          className="fas fa-users fa-lg"
                          style={{ color: this.state.style.users }}
                        />
                      </Navbar.Link>
                    </Navbar.Link>
                    <Navbar.Dropdown align="right" />
                  </Navbar.Item>
                  <Navbar.Item dropdown>
                    <Navbar.Link arrowless>
                      <NavItem
                        onClick={this.handleClick}
                        id="message"
                        className="fab fa-facebook-messenger fa-lg"
                        style={{ color: this.state.style.message }}
                      />
                    </Navbar.Link>
                    <Navbar.Dropdown align="right">
                      <MessagesList />
                    </Navbar.Dropdown>
                  </Navbar.Item>
                  <Navbar.Item dropdown>
                    <Navbar.Link arrowless>
                      <NavItem
                        onClick={this.handleClick}
                        id="bell"
                        className="fas fa-bell fa-lg"
                        style={{ color: this.state.style.bell }}
                      />
                    </Navbar.Link>
                    <Navbar.Dropdown align="right" />
                  </Navbar.Item>
                  <Navbar.Item dropdown>
                    <Navbar.Link arrowless>
                      <NavItem
                        onClick={this.handleClick}
                        id="question"
                        className="fas fa-question-circle fa-lg"
                        style={{ color: this.state.style.question }}
                      />
                    </Navbar.Link>
                    <Navbar.Dropdown align="right" />
                  </Navbar.Item>
                </React.Fragment>
              )}
            </Navbar.Segment>
          </Navbar.Menu>
        </Navbar>
      </Wrapper>
    );
  }
}

NavigationBar.propTypes = {
  user: PropTypes.object,
};
