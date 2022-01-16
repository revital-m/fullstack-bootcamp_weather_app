import React, { Component } from 'react';
import Card from '../Card/Card';
import './AvatarList.css'

export default class AvatarList extends Component {
    state = { avatars: [] };

  componentDidUpdate(prevProps) {
    if (prevProps.userValue !== this.props.userValue) {
      this.setState({
        avatars: this.filterData(this.props.avatars, this.props.userValue),
      });
    } else if (prevProps.avatars !== this.props.avatars) {
      this.setState({
        avatars: this.props.avatars,
      });
    }
  }

  filterData = (arrOfData, userInput) => {
    return arrOfData.filter((avatar) => {
      return avatar.name.toLowerCase().includes(userInput.toLowerCase());
    });
  };

  displayAvatars = () => {
    return this.state.avatars.map((avatar) => {
      return <Card key={avatar.id} title={avatar.name} imgSrc={avatar.imgUrl} />;
    });
  };
  render() {
    return <div className="avatar-list">{this.displayAvatars()}</div>;
  }
}
