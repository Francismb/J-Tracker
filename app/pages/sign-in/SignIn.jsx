import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../../components/inputs/TextInput';
import Title from '../../components/Title';
import {StyleSheet, css} from 'aphrodite';
import Button from "../../components/buttons/Button";
import Text from "../../components/Text";
import Spinner from "../../components/Spinner";
import withConsumer from "../../components/hocs/Consumer";
import JiraClient from 'jira-connector';
import {RED} from "../../styles/Colors";

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '600px',
    margin: '0 auto',
    padding: '100px 0'
  }
});

@withConsumer
export default class SignIn extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      host: '',
      email: '',
      password: '',
      error: null
    }
  }

  static propTypes = {
    store: PropTypes.shape({
      setJiraClient: PropTypes.func.isRequired
    }).isRequired
  };

  onChange = (key, value) => {
    this.setState({
      ...this.state,
      [key]: value
    })
  };

  onSignIn = (e) => {
    e.preventDefault();

    this.setState({
      ...this.state,
      loading: true,
    }, () => {

      const client = new JiraClient({
        host: `${this.state.host}.atlassian.net`,
        basic_auth: {
          username: this.state.email,
          password: this.state.password,
        }
      });

      client.project.getAllProjects().then(
        () => {
          this.setState({
            ...this.state,
            loading: false,
            error: null
          });
          this.props.store.setJiraClient(client);
        },
        () => {
          this.setState({
            ...this.state,
            loading: false,
            error: 'Failed to login to Jira'
          });
        }
      )
    });
  };

  render() {
    return (
      <form onSubmit={this.onSignIn} className={css(styles.container)}>
        <Title>
          Sign In
        </Title>
        <TextInput
          label="Host"
          placeholder="Enter Your Jira Domain"
          attribute="host"
          value={this.state.host}
          onChange={this.onChange}
        />
        <TextInput
          label="Email"
          placeholder="Enter Your Email Here"
          attribute="email"
          value={this.state.email}
          onChange={this.onChange}
        />
        <TextInput
          label="Password"
          placeholder="Enter Your Password Here"
          attribute="password"
          type="password"
          value={this.state.password}
          onChange={this.onChange}
        />
        {this.state.error !== null && (
          <Text color={RED}>
            {this.state.error}
          </Text>
        )}
        <Button type="submit" onClick={this.onSignIn}>
          Sign In
        </Button>
        <Text>
          Login with your Jira email and password
        </Text>
        <Spinner active={this.state.loading}/>
      </form>
    )
  }

}
