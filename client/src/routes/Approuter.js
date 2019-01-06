import React from "react";
import {BrowserRouter,Route,Switch} from "react-router-dom";
import StreamShow from "../components/StreamShow"
import StreamNew from "../components/StreamNew"
import StreamList from "../components/StreamList"
import UserStreamsWrapper from "../components/UserStreamsWrapper"
import Header from "../components/Header"
const Approuter=()=>{
    return(
        <div>
        <BrowserRouter>
        <div>
        <Header />
        <Switch>
        <Route path="/" exact component={StreamList} />
        <Route path="/streams/new" exact component={StreamNew} />
        <Route path="/streams/mystreams" exact component={UserStreamsWrapper} />
        <Route path="/streams/:id" exact component={StreamShow} />
        </Switch>
        </div>
        </BrowserRouter>
        </div>
    )
}
export default Approuter