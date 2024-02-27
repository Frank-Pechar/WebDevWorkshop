class Tooltip extends HTMLElement {
  constructor() {
    super();
    this._tooltipContainer;
    this._tooltipText = 'Default Tooltip Text';
    this.attachShadow({ mode: 'open' });
    const template = document.querySelector('#tooltip-template');
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    if (this.hasAttribute('text')) {
      this._tooltipText = this.getAttribute('text');
    }
    const tooltipIcon = document.createElement('span');
    tooltipIcon.textContent = ' (?)';
    this.shadowRoot.appendChild(tooltipIcon);
    tooltipIcon.addEventListener('mouseenter', this._showTooltip.bind(this));
    tooltipIcon.addEventListener('mouseleave', this._hideTooltip.bind(this));
    this.style.position = 'relative';
    // const bhTooltip = document.querySelector('bh-tooltip');
    // console.dir(bhTooltip);
  }

  _showTooltip() {
    this._tooltipContainer = document.createElement('div');
    this._tooltipContainer.textContent = this._tooltipText;
    this._tooltipContainer.style.backgroundColor = 'black';
    this._tooltipContainer.style.color = 'white';
    this.style.position = 'absolute';
    this.style.zIndex = '10';
    this.shadowRoot.appendChild(this._tooltipContainer);
  }

  _hideTooltip() {
    this.shadowRoot.removeChild(this._tooltipContainer);
  }
}

customElements.define('bh-tooltip', Tooltip);
