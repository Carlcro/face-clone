import React, { Component } from 'react';
import { Card } from 'rbx';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import LikeAndComment from './LikeAndComment';
import Comments from './Comments';
import Commentate from './Commentate';
import Avatar from '../../../components/Avatar';
import Reactions from './Reactions';
import UsernameLink from '../../../components/UsernameLink/index';

const Content = styled.div`
  padding: 20px;
  font-size: 14px;
`;

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
`;

const TimeStamp = styled.p`
  font-size: 12px;
  font-weight: normal;
  color: #616770;
`;

// eslint-disable-next-line react/prefer-stateless-function
export default class TimelineCard extends Component {
  render() {
    return (
      <div style={{ padding: 20, width: 500 }}>
        <Card>
          <Card.Header style={{ padding: 5 }}>
            <StyledHeader>
              <Avatar size={48} avatar={this.props.item.avatar} />
              <div>
                <UsernameLink
                  name={this.props.item.name}
                  id={this.props.item.id}
                />
                <TimeStamp>
                  {this.props.item.timeStamp} · <i className="fas fa-user" />
                </TimeStamp>
              </div>
            </StyledHeader>
          </Card.Header>
          <Content>
            <p>{this.props.item.body}</p>
          </Content>
          <Reactions
            likes={this.props.item.likes}
            comments={this.props.item.comments.length}
          />
          <LikeAndComment />
          <Comments comments={this.props.item.comments} />
          <Commentate />
        </Card>
      </div>
    );
  }
}

TimelineCard.propTypes = {
  item: PropTypes.object,
};
