import css from './index.css?raw'
import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App'

/**
 * @param {string} _url
 */
export function render(_url) {
  const head = `<style>${css}</style>`
  const html = renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  )
  return { head, html }
}
