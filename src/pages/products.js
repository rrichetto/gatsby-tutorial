import React, { Component } from "react";
import Layout from "../components/layout";
import styles from "../components/products.module.css";

export default class products extends Component {
  render() {
    return (
      <Layout>
        <div className={styles.page}>
          <h1>this is our products page</h1>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, esse
            quidem, illo assumenda nesciunt mollitia debitis molestias similique
            nihil, ab natus? Similique facilis debitis voluptatem?
          </p>
        </div>
      </Layout>
    );
  }
}
