import {useEffect, useState} from "react";
import FormInput from "./FormInput";
import FormTextarea from "./FormArea";
import FormSelect from "./FormSelect";
import FormActions from "./FormActions";

function ReviewForm({isOpen, onClose, onSubmit, initialData}) {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [rating, setRating] = useState(1);

    useEffect(() => {
        if (initialData) {
            setTitle(initialData.title || '');
            setDescription(initialData.description || '');
            setRating(initialData.rating || 1);
        } else {
            setTitle('');
            setDescription('');
            setRating(1);
        }
    }, [initialData]);

    const handleSubmit = () => {
        if (!title.trim()) return alert('Title is required');
        onSubmit({title, description, rating});
        setTitle('');
        setDescription('');
        setRating(1);
    };

    if (!isOpen) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <h3>{initialData ? 'Edit Review' : 'Add New Review'}</h3>
                <FormInput label="Title" value={title} onChange={setTitle}/>
                <FormTextarea label="Description" value={description} onChange={setDescription}/>
                <FormSelect label="Rating" value={rating} onChange={setRating}/>
                <FormActions onCancel={onClose} onSubmit={handleSubmit}/>

            </div>
        </div>
    );
}

export default ReviewForm;