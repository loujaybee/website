import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import MissionVision from "@site/src/components/MissionVision";
import InteractiveDiagram from "@site/src/components/InteractiveDiagram";
import Grid from '@mui/material/Grid';

import styles from "./index.module.css";
const { useState, useEffect } = React;

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const [bgImage, setBgImage] = useState('');

  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <Grid container spacing={3} className="perspective-container">
        <Grid item xs={6} className="hero hero--primary bgimg"/>
        <Grid item xs={5} className="hero__subtitle tagline">
          <Grid container direction="column" spacing={2} style={{display: 'flex'}}>
            <Grid item style={{display: 'flex', alignItems: 'left', paddingRight: 50}}>
              <p>{siteConfig.tagline}</p>
            </Grid>
            <Grid item>
                <Link
                  className="button button--primary button--lg"
                  to="/docs/intro"
                >
                  What is CNOE?
                </Link>
            </Grid>
          </Grid>
          <Grid item xs={3}/>
        </Grid>
      </Grid>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="The CNOE website />"
    >
      <HomepageHeader />
      <h1 className="heading heading-center">Platform Architecture</h1>
      <InteractiveDiagram />
      <main>
        <MissionVision />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
