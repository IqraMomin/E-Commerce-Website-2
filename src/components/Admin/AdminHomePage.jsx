import React from "react"
import AdminHeader from "./AdminHeader"
import { Route } from "react-router-dom/cjs/react-router-dom.min"
import Products from "./Products"
import Category from "./Category"

function AdminHomePage() {
    return (
        <React.Fragment>
        <AdminHeader/>
        <Route path="/admin/products"><Products/></Route>
        <Route path="/admin/category"><Category/></Route>
        </React.Fragment>
       
    )
}

export default AdminHomePage
