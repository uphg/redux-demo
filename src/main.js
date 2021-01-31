const $ = (el)=> document.querySelector(el)

function reducer(state = 0, action) {
  switch (action.type) {
    case "加一":
      return state + 1;
    case "减一":
      return state - 1;
    default:
      return state;
  }
}

const store = Redux.createStore(reducer);
const valueEl = $('#value')

function render() {
  valueEl.innerHTML = store.getState().toString();
}

render();
store.subscribe(render);

$('#addButton').addEventListener("click", function () {
  store.dispatch({ type: "加一" });
});

$('#backButton').addEventListener("click", function () {
  store.dispatch({ type: "减一" });
});

$('#oddButton').addEventListener("click", function () {
  if (store.getState() % 2 !== 0) {
    store.dispatch({ type: "加一" });
  }
});

$('#asyncButton').addEventListener("click", function () {
  setTimeout(function () {
    store.dispatch({ type: "加一" });
  }, 2000);
});
