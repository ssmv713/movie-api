import { Component } from "../core/heropy";
import messageStore from "../store/message";

export default class Message extends Component {
  render() {
    console.log(123);
    this.el.innerHTML = `
     <h2>${messageStore.state.message}</h2>    
    `;
    this.el.append(new TextField().el, new Message().el);
  }
}
