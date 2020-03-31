/*eslint-disable*/
import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
// core components
import styles from "../../assets/jss/material-dashboard-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a href="#home" className={classes.block}>
                Início
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="#terms" className={classes.block}>
                Termos de Uso
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="#about" className={classes.block}>
                Sobre
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="#help" className={classes.block}>
                Ajuda
              </a>
            </ListItem>
          </List>
        </div>
        <p className={classes.right}>
          <span>
            <a
              href="#autor"
              className={classes.a}
            >
              Quido
            </a>{" "}
            &copy; {1900 + new Date().getYear()}{" "}
            - Baseado em templates {" "} 
            <a
              href="https://www.creative-tim.com"
              target="_blank"
              className={classes.a}
            >
              Creative Tim
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
}
