import TheHeader from './components/TheHeader';
import { Component } from './core/heropy';

export default class App extends Component {
  render() {
    this.el.append(new TheHeader().el);
  }
}
