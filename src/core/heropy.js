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
    console.log("router");
  };
}

////Store ////
export class Store {
  constructor(state) {
    this.state = {};
    // this.observers = {};
    for (const key in state) {
      Object.defineProperty(this.state, key, {
        get: () => state[key], //state['messsage']
        set: (val) => {
          console.log(val);
          // this.observers[key]();
        },
      });
    }
  }
  subscribe(key, cb) {
    //상태가 변하는지 아닌지 구독을 통해서 감시
    // this.observers[key] = cb;
  }
}
