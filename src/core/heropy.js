//COMPONENT//

export class Component {
  constructor(payload = {}) {
    const { tagName = "div", state = {}, props = {} } = payload;
    this.state = state;
    this.props = props;
    this.el = document.createElement(tagName);
    this.render();
  }
  render() {}
}
