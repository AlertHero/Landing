import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/Header'
import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="AlertHero"
      meta={[
        { name: 'author', content: 'AlertHero' },
        { name: 'description', content: 'A mobile app for private, secure, and fast communication' },
        { name: 'keywords', content: 'alerthero, alert, hero, mobile, notification ' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
      ]}
      link={[ {rel: 'icon', type: 'image/png', href: './static/home.png'} ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
