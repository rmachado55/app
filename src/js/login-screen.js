let page = 'home';

window.customElements.define(
  'login-screen',
  class extends HTMLElement {
    constructor() {
      super();
      const root = this.attachShadow({ mode: 'open' });
      
      if(page === 'login'){
      root.innerHTML = `
      <div>Login</div>
      `
      }
      else if(page === 'cadastro'){
      root.innerHTML = `
      <div>Cadastro</div>
      `
      }
      else{
        root.innerHTML = `
        <div>Home</div>
        `
      }
      
    }
  },
);