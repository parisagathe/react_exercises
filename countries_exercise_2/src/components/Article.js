import React, { useState } from 'react';
import axios from "axios";

const Article = ({ article }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedContent, setEditedContent] = useState("");

    const dateFormater = (date) => {
        let newDate = new Date(date).toLocaleDateString("fr-FR", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric"
        });
        return newDate;
    };

    const handleEdit = () => {
        const data = {
            author: article.author,
            content: editedContent ? editedContent : article.content,
            date: article.date,
            updatedDate: Date.now(),
        };
        axios.put("http://localhost:3004/articles/" + article.id, data).then(() => {
            setIsEditing(false)
        });
    };

    const handleDelete = () => {
        axios.delete("http://localhost:3004/articles/" + article.id);
        window.location.reload();
    };

    return (
        <div className="article" style={{ background: isEditing ? "#f3feff" : "white"}}>
            <div className="card-header">
            <h3>{article.author}</h3>
            <em>Posté le : {dateFormater(article.date)}</em>
            </div>
            {
                isEditing ? (<textarea defaultValue={editedContent ? editedContent : article.content} autoFocus onChange={(e) => setEditedContent(e.target.value)}></textarea>) : (<p>{editedContent ? editedContent : article.content}</p>)
            }
            <div className="btn-container">
                {
                    isEditing ? (<button onClick={() => handleEdit()}>Valider</button>) :
                    (<button onClick={() => setIsEditing(true)}>Modifier</button>)
                }
                <button onClick={() => {
                    if (window.confirm("Voulez-vous vraiment supprimer cet article ?")) {
                        handleDelete();   
                    }
                }}>Supprimer</button>
            </div>
        </div>
    );
};

export default Article;