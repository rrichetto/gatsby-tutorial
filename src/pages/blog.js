import React from "react";
import Layout from "../components/layout";
import styles from "../components/blog.module.css";

const blog = () => {
  return (
    <Layout>
      <div className={styles.page}>
        <h1>this is our blog page</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, esse
          quidem, illo assumenda nesciunt mollitia debitis molestias similique
          nihil, ab natus? Similique facilis debitis voluptatem?
        </p>
      </div>
    </Layout>
  );
};

export default blog;
