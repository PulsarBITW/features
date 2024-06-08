import React from "react";
import "./App.css";

import { Link, Route, Switch } from "react-router-dom";
import { PAGES, ROUTES } from "./Routes";

function App() {
  return (
    <div className="App">
      <div>
        <Link to={ROUTES.MAIN}>Main</Link>
      </div>
      <div>
        <Switch>
          {PAGES.map((el) => (
            <Route key={el.url} path={el.url} exact={el.exact}>
              {el.component}
            </Route>
          ))}
          {/* <Redirect to={ROUTES.DetailBlock}></Redirect> */}
          {/* Редирект на рабочий блок*/}
        </Switch>
      </div>
    </div>
  );
}

export default App;
