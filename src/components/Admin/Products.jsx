import React, { useEffect, useState } from 'react'
import MyModal from '../UI/MyModal'
import { Button, Form } from 'react-bootstrap'
import { addProduct } from '../../store/slices/adminProductSlice';
import { useDispatch } from 'react-redux';
import ProductsList from './ProductsList';

function Products() {
    const [showModal, setShowModal] = useState(false);
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [productImg, setProductImg] = useState("");
    const [description, setDescription] = useState("");
    const [isEdit, setIsEdit] = useState(null);

    const dispatch = useDispatch();

    useEffect(() => {
        if (isEdit) {
            setTitle(isEdit.title || "");
            setDescription(isEdit.description || "");
            setPrice(isEdit.price || "");
            setCategory(isEdit.category || "");
        } else {
            resetForm();
        }
    }, [isEdit]);


    const closeModalHandler = () => {
        setShowModal(false);
    }
    const titleChangeHandler = (e) => {
        setTitle(e.target.value);
    }
    const priceChangeHandler = (e) => {
        setPrice(e.target.value);
    }
    const descriptionChangeHandler = (e) => {
        setDescription(e.target.value);
    }
    const categoryChangeHandler = (e) => {
        setCategory(e.target.value);
    }
    const handleImageSelect = (e) => {
        const file = e.target.files[0];
        setProductImg(file);
    }
    const resetForm = () => {
        setTitle("");
        setDescription("");
        setPrice("");
        setCategory("");
        setProductImg("");
        setIsEdit(null);
    };
    const formChangeHandler = (e) => {
        e.preventDefault();
        const productDetails = {
            title, description, price, category
        }
        dispatch(addProduct(productDetails));
        console.log(productDetails);
        resetForm();


    }

    return (
        <React.Fragment>
            <Button onClick={() => { setShowModal(prev => !prev) }}>Add Product</Button>
            <MyModal
                show={showModal} onClose={closeModalHandler}
                title='Add Product' onSave={formChangeHandler}>
                <Form onSubmit={formChangeHandler}>
                    <Form.Control className='mb-3' type='text' placeholder='Title' onChange={titleChangeHandler} value={title} />
                    <Form.Control className='mb-3' type='text' placeholder='Description' onChange={descriptionChangeHandler} value={description} />
                    <Form.Control className='mb-3' type='number' placeholder='Price' onChange={priceChangeHandler} value={price} />
                    <Form.Select onChange={categoryChangeHandler} className='mb-3'>
                        <option value="">Select a Category</option>
                        <option value="headphones">Headphones</option>
                        <option value="smartwatch">SmartWatch</option>

                    </Form.Select>
                    <Form.Control
                        type="file"
                        accept="image/*"
                        onChange={handleImageSelect}
                        placeholder='Select an Image'
                    />
                    {/* <Button type='submit' className='w-100 py-2 mt-2' style={{ backgroundColor: "#6f42c1" }}>Add Products</Button> */}

                </Form>
            </MyModal>
            <ProductsList onEdit={(editData) => {
                 setIsEdit(editData)
                 setShowModal(true) }} />
        </React.Fragment>

    )
}

export default Products
