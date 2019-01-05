import React from "react";
import {BrowserRouter,Route} from "react-router-dom";
import StreamShow from "../components/StreamShow"
import StreamNew from "../components/StreamNew"
import StreamList from "../components/StreamList"
import UserStreams from "../components/UserStreams"
import Header from "../components/Header"
const Approuter=()=>{
    return(
        <div>
        <BrowserRouter>
        <div>
        <Header />
        <Route path="/" exact component={StreamList} />
        <Route path="/streams/new" exact component={StreamNew} />
        <Route path="/streams/mystreams" exact component={UserStreams} />
        <Route path="/stream/:id" exact component={StreamShow} />
        </div>
        </BrowserRouter>
        </div>
    )
}
export default Approuter