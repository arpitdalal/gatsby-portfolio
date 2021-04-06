const React = require('react')

exports.onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    React.createElement('script', {
      dangerouslySetInnerHTML: {
        __html: `
          (() => {
            document.addEventListener('DOMContentLoaded', () => {
              if(!localStorage.getItem('theme'))
                if(window.matchMedia('(prefers-color-scheme: dark)'))
                  document.querySelector('body').classList.add('dark-mode')
              
              if(localStorage.getItem('theme')) {
                localStorage.getItem('theme') == 'dark-mode' && document.querySelector('body').classList.add('dark-mode')
              }
            })
          })()
        `,
      },
    }),
  ])
}
