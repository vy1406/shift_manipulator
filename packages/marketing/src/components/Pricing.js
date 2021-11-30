// import React from 'react';
import React, { useState, useEffect } from "react"
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { Link as RouterLink } from 'react-router-dom';


function Copyright() {
  return (
    <Typography letiant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[200]
        : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
  techList: {
    height: '70px',
    // width: '100px',
    position: 'fixed',
    top: "0px",
    left: "0px",
    // transition: Animation()
  }
}));





const TECH_LIST = [
  { id: 0, title: "NestJS", img: 'https://seeklogo.com/images/N/nestjs-logo-09342F76C0-seeklogo.com.png' },
  { id: 1, title: "React", img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/320px-React-icon.svg.png' },
  { id: 2, title: "Redux-Saga", img: 'https://redux-saga.js.org//img/Redux-Saga-Logo-Portrait.png' },
  { id: 3, title: "npm", img: 'https://cdn.freebiesupply.com/logos/thumbs/2x/npm-logo.png' },
  { id: 4, title: "Material-UI", img: 'https://seeklogo.com/images/M/material-ui-logo-5BDCB9BA8F-seeklogo.com.png' },
  { id: 5, title: "webpack", img: 'https://webpack.js.org/icon-pwa-512x512.d3dae4189855b3a72ff9.png' },
  { id: 6, title: "CSS", img: 'https://cdn.freelogovectors.net/wp-content/uploads/2020/04/css-3-logo.png' },
  { id: 7, title: "HTML", img: 'https://www.pngrepo.com/png/183637/512/html5.png' },
  { id: 8, title: "Netlify", img: 'https://seeklogo.com/images/N/netlify-logo-758722CDF4-seeklogo.com.png' },
  { id: 9, title: "AWS", img: 'https://logos-world.net/wp-content/uploads/2021/08/Amazon-Web-Services-AWS-Logo.png' },
  { id: 10, title: "MongoDB Atlas", img: 'https://g.foolcdn.com/image/?url=https%3A%2F%2Fg.foolcdn.com%2Feditorial%2Fimages%2F635884%2Fatlas_icon_blk_stackedlarge.png&w=1200&op=resize' },
  { id: 11, title: "MongoDB", img: 'https://infinapps.com/wp-content/uploads/2018/10/mongodb-logo.png' },
  { id: 12, title: "PWA", img: 'https://responsivedesign.is/wp-content/uploads/2018/08/PWA-Progressive-Web-App-Logo.png' },
  { id: 13, title: "Github", img: 'https://cdn.iconscout.com/icon/free/png-256/github-153-675523.png' },
  { id: 14, title: "Jira", img: 'https://cdn.icon-icons.com/icons2/2699/PNG/512/atlassian_jira_logo_icon_170511.png' },
];





export default function Pricing() {
  const classes = useStyles();

  function moveDiv(divId) {
    let max_width = window.innerWidth - 150;
    let max_height = window.innerHeight - 50;

    const target = document.getElementsByClassName("techList")[divId];

    let render_rate = 1200;

    function makeNewPosition() {
      let nh = Math.floor(Math.random() * max_height);
      let nw = Math.floor(Math.random() * max_width);
      return [nh, nw];
    }
    setInterval(function () {
      let newq = makeNewPosition();
      target.style.top = newq[0] + "px";
      target.style.left = newq[1] + "px";
    }, render_rate)
  };



  useEffect(() => {
    for (let i of TECH_LIST) {
      moveDiv(i.id);
      // console.log(i);
    }
  })


  return (
    <React.Fragment>

      <div style={{ marginTop: "50px" }}>
        {TECH_LIST.map((img, i) => (
          <div >
            <img className="techList" style={{ position: "fixed", height: "100px", top: "100px", left: "50px", transition: "all 2s" }} key={img.id} src={img.img} />
          </div>
        )
        )}
      </div>

    </React.Fragment>
  );
}
