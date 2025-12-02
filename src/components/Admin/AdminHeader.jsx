import React from 'react'
import {Nav} from 'react-bootstrap'
import { NavLink } from "react-router-dom";


function AdminHeader() {
    return (
         <Nav className="ms-auto">
            <NavLink to="/admin/products">Products</NavLink>
            <NavLink to="/admin/category">Category</NavLink>
            <NavLink to="/">Pricing</NavLink>
          </Nav>
    )
}

export default AdminHeader
