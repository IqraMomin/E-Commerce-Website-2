import React from 'react'
import { Button, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct } from '../../store/slices/adminProductSlice';


function CategoryList() {
    const dispatch = useDispatch();
    const deleteProductHandler=(id)=>{
        dispatch(deleteProduct(id))
    }
    const categoryList = useSelector(state=>state.adminCategory.category);
    return (
        <Table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Image</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {categoryList.map(ele=>{
                    return <tr key={ele.id}>
                        <td>{ele.title}</td>
                        <td>Image</td>
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

export default CategoryList
