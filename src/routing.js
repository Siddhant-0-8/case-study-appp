
import React from 'react'
import UploadQuestion from "./srikanth/UploadQuestion"
import SearchView from "./kavithas/SearchView"

import { BrowserRouter as Router, Route, Link} from 'react-router-dom'

const routing =(

<>
    <div>
        <Route path="/" component={UploadQuestion} exact />
    </div>
    <div>
        <Route path="/SearchView" component={SearchView} exact />
    </div>
    </>
)


export default routing