/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import { FormattedMessage } from 'react-intl';

import messages from './messages';

import React, { Component } from 'react';

class NotFound extends Component {
  handleNavigation = () => {
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <FormattedMessage {...messages.header} />
        <div>
          <button onClick={this.handleNavigation}>
            <FormattedMessage {...messages.goBack} />
          </button>
        </div>
      </div>
    );
  }
}

export default NotFound;
