import React from 'react';
import PropTypes from 'prop-types';
import withConsumer from "../../components/hocs/Consumer";

@withConsumer
export default class Board extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      projects: []
    }
  }

  static propTypes = {
    store: PropTypes.shape({
      client: PropTypes.object.isRequired
    })
  };

  componentDidMount() {
    this.props.store.client.project.getAllProjects().then((response) => {
      this.setState({
        ...this.state,
        projects: response.map(project => ({
          id: project.id,
          name: project.name,
          key: project.key
        }))
      })
    });
  }

  render() {
    return (
    )
  }
}
