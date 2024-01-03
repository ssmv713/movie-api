import { Component } from "../core/heropy";
import messageStore from "../store/message";

export default class Message extends Component {
  render() {
    this.el.innerHTML = `
     <h2>${messageStore.state.message}</h2>    
    `;
  }
}
