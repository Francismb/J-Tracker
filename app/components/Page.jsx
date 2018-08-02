import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import {DARK_BLUE} from "../styles/Colors";
import {MdDashboard} from 'react-icons/md'

const style = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between'
  },
  menu: {
    width: '60px',
    background: DARK_BLUE
  }
});

const Page = ({children}) => (
  <div className={css(style.container)}>
    <div className={css(style.menu)}>
      <Link to={"/board"}><MdDashboard size={18} color={"#fff"}/></Link>
    </div>
    <div>
      {children}
    </div>
  </div>
);
