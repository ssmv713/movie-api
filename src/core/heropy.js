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
  if (!location.hash) {
    history.replaceState(null, "", "/#/");
  }
  const routerView = document.querySelector("router-view");
  const [hash, queryString = ""] = location.hash.split("?");

  const query = queryString.split("&").reduce((acc, cur) => {
    const [key, value] = cur.split("=");
    acc[key] = value;
    return acc;
  }, {});
  history.replaceState(query, "");
  const currentRoute = routes.find((route) =>
    new RegExp(`${route.path}/?$`).test(hash)
  );
  routerView.innerHTML = "";

  routerView.append(new currentRoute.component().el);

  window.scrollTo(0, 0);
}

export function createRouter(routes) {
  return function () {
    window.addEventListener("popstate", () => {
      routeRender(routes);
    });
    routeRender(routes);
  };
}

////Store ////
export class Store {
  constructor(state) {
    this.state = {};
    for (const key in state) {
      Objecy.defineProperty(this.state, key, {
        get: () => state[key],
        set: (val) => {
          console.log(val);
        },
      });
    }
  }
}
