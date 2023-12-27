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
//Router//
function routeRender(routes) {
  const routerView = document.querySelector("router-view");
  const [hash, queryString = ""] = location.hash.split("?");
  const currentRoute = routes.find((route) =>
    new RegExp(`${route.path}/?$`).test(hash)
  );
  routerView.innerHTML = "";

  routerView.append(new currentRoute.component().el);
}
console.log(123);
export function createRouter(routes) {
  return function () {
    window.addEventListener("popstate", () => {
      routeRender(routes);
    });
    routeRender(routes);
  };
}
