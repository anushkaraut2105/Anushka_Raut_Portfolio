import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import App from './plain-html-ssr/App.js'
process.stdout.write(renderToStaticMarkup(React.createElement(App)))
