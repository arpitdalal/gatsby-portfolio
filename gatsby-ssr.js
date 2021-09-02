const React = require('react')

exports.onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    React.createElement('script', {
      dangerouslySetInnerHTML: {
        __html: `
          (() => {
            document.addEventListener('DOMContentLoaded', () => {
              if(!localStorage.getItem('theme')) {
                if(window.matchMedia('(prefers-color-scheme: dark)')) {
                  document.querySelector('body').classList.add('dark-mode');
                }
              }
              
              if(localStorage.getItem('theme')) {
                localStorage.getItem('theme') == 'dark-mode' && document.querySelector('body').classList.add('dark-mode');
              }
            })
          })()
        `,
      },
    }),
    <script defer async src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>,
    <script defer async src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></script>
  ])
}
