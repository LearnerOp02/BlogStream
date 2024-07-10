import axios from 'axios';
import React, { useContext } from 'react';
import { MdDelete } from 'react-icons/md';
import { UserContext } from '../context/UserContext';

const Comment = ({ c, post, fetchPostComments }) => {
    const { user } = useContext(UserContext);

    const deleteComment = async (id) => {
        try {
            await axios.delete(`http://localhost:8000/api/comment/${id}`);
            fetchPostComments();  // Call the prop function to refresh comments
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="p-3 bg-light rounded mb-3 shadow-sm" style={{ borderLeft: '5px solid #007bff' }}>
            <div className="d-flex justify-content-between align-items-center">
                <h3 className="h6 font-weight-bold text-dark">@{post.username}</h3>
                <div className="d-flex align-items-center">
                    <p className="text-muted mt-3 mr-2" style={{ fontSize: '0.9rem' }}>{new Date(c.updatedAt).toString().slice(0, 15)}</p>
                    {user?._id === c?.userId ? (
                        <button onClick={() => deleteComment(c._id)} className="btn btn-outline-danger mx-1" style={{ fontSize: '0.9rem' }}>
                            <MdDelete size={16} />
                        </button>
                    ) : ""}
                </div>
            </div>
            <p className="mt-0 text-dark" style={{ fontSize: '1rem' }}>{c.comment}</p>
        </div>
    );
};

export default Comment;
