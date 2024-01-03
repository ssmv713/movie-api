import TextField from "../components/TextField";
import { Component } from "../core/heropy";

export default class Home extends Component {
  render() {
    this.el.innerHTML = `
    <h1>Home Page!</h1>
    `;
    this.el.append(new TextField().el);
  }
}
