import React from 'react'
import { Button, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct } from '../../store/slices/adminProductSlice';

function ProductsList({onEdit}) {
    const dispatch = useDispatch();
    const deleteProductHandler=(id)=>{
        dispatch(deleteProduct(id))
    }
    const productsList = useSelector(state=>state.adminProducts.products);
    return (
        <Table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Image</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {productsList.map(ele=>{
                    return <tr key={ele.id}>
                        <td>{ele.title}</td>
                        <td>{ele.description}</td>
                        <td>{ele.price}</td>
                        <td></td>
                        <td>
                            <div className='product-actions d-flex'>
                            <Button onClick={()=>{onEdit(ele)}}>Edit</Button>
                            <Button onClick={()=>{deleteProductHandler(ele.id)}}>Delete</Button>
                            </div>
                        </td>
                    </tr>
                })}
            </tbody>
        </Table>
    )
}

export default ProductsList
