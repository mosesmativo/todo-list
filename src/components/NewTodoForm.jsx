import PropTypes from "prop-types";
import toast, { Toaster } from "react-hot-toast";

import { useState } from "react";

export function NewTodoForm({ onSubmit }) {
    const [newItem, setNewItem] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        if (newItem === "") return;

        onSubmit(newItem);
        setNewItem("");
        toast.success('Your Task been added succesfully!.', {
            style: {
                border: '1px solid #713200',
                padding: '16px',
                color: '#713200',
            },
            iconTheme: {
                primary: '#713200',
                secondary: '#FFFAEE',
            }
        });
    }

    return (
        <form className="new-item-form" onSubmit={handleSubmit}>
            <div className="form-row">
                <label htmlFor="item">New Item</label>
                <input
                    id="item"
                    onChange={(e) => setNewItem(e.target.value)}
                    type="text"
                    value={newItem}
                />
            </div>
            <button className="btn">Add</button>
            <Toaster position="top-right" reverseOrder={false} />
        </form>
    );
}

NewTodoForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};
