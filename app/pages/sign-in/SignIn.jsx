import React from 'react';
import TextInput from '../../components/inputs/TextInput';
import Title from '../../components/Title';
import {StyleSheet, css} from 'aphrodite';
import Button from "../../components/buttons/Button";
import Text from "../../components/Text";
import Spinner from "../../components/Spinner";
import withConsumer from "../../components/hocs/Consumer";
import JiraClient from 'jira-connector';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '600px',
    margin: '0 auto',
    padding: '100px 0'
  }
});

class SignIn extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      host: '',
      username: '',
      password: '',
    }
  }

  componentDidMount() {
    console.log(this.props);
  }

  onChange = (key, value) => {
    this.setState({
      ...this.state,
      [key]: value
    })
  };

  onSignIn = () => {
    this.setState({
      ...this.state,
      loading: true,
    }, () => {

      const client = new JiraClient({
        host: `${this.state.host}.atlassian.net`,
        basic_auth: {
          username: this.state.username,
          password: this.state.password,
        }
      });

      client.applicationProperties.getProperties()
        .then(
          () => {
            console.log('success')
          },
          () => {
            console.log('rejected')
          }
        )
        .then(() => {
          this.setState({
            ...this.state,
            loading: false
          })
        });
    });
  };

  render() {
    return (
      <div className={css(styles.container)}>
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
          label="Username"
          placeholder="Enter Your Username Here"
          attribute="username"
          value={this.state.username}
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
        <Button onClick={this.onSignIn}>
          Sign In
        </Button>
        <Text>
          Login with your Jira email and password
        </Text>
        <Spinner active={this.state.loading}/>
      </div>
    )
  }

}

export default withConsumer(SignIn);
