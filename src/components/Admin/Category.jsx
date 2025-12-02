import React, { useEffect, useState } from 'react'
import MyModal from '../UI/MyModal'
import { Button, Form } from 'react-bootstrap'
import { addProduct } from '../../store/slices/adminProductSlice';
import { useDispatch } from 'react-redux';
import ProductsList from './ProductsList';
import CategoryList from './CategoryList';

function Category() {
    const [showModal, setShowModal] = useState(false);
    const [title, setTitle] = useState("");
    const [categoryImg, setCategoryImg] = useState("");
    const [isEdit, setIsEdit] = useState(null);

    const dispatch = useDispatch();

    useEffect(() => {
        if (isEdit) {
            setTitle(isEdit.title || "");
        
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

    const handleImageSelect = (e) => {
        const file = e.target.files[0];
        setCategoryImg(file);
    }
    const resetForm = () => {
        setTitle("");      
        setCategoryImg("");
        setIsEdit(null);
    };

    const formChangeHandler = (e) => {
        e.preventDefault();
        const categoryDetails = {
            title
        }
        //dispatch(addProduct(productDetails));
        console.log(productDetails);
        resetForm();


    }

    return (
        <React.Fragment>
        <Button onClick={() => { setShowModal(prev => !prev) }}>Add Category</Button>
        <MyModal
            show={showModal} onClose={closeModalHandler}
            title='Add Category' onSave={formChangeHandler}>
            <Form onSubmit={formChangeHandler}>
                <Form.Control className='mb-3' type='text' placeholder='Title' onChange={titleChangeHandler} value={title} />
                 <Form.Control
                    type="file"
                    accept="image/*"
                    onChange={handleImageSelect}
                    placeholder='Select an Image'
                />
            </Form>
        </MyModal>
        <CategoryList onEdit={(editData) => {
             setIsEdit(editData)
             setShowModal(true) }} />
    </React.Fragment>

)
}

export default Category
