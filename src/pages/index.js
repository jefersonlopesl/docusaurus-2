import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Criar histórias</>,
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Desenvolver é aquela hora que você conta estorias, ou histórias, para os "ouvintes" dessa colossal rede de pessoas-- e máquinas...
      </>
    ),
  },
  {
    title: <>Tudo fica melhor com cores e imagens</>,
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Preto e branco é chique, mas!, dependendo dos nossos planos, às vezes as cores e visuias atraentes são um convite!
      </>
    ),
  },
  {
    title: <>Programar é como Lego</>,
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
As peças se encaixam, dá pra fazer de várias formas; misturar bem as coisas e, no final, temos algo para nos orgulhar :)
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/contato')}>
              Contato
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
