import react from "react";

function NewItemForm({newItem, setNewItem, listingsArray, setListingsArray}){

    function handleAddItemChange(e){
        let newKey = e.target.id
        let value = e.target.value
        setNewItem({...newItem, [newKey] : value})
    }

    function handleSubmit(e){
        e.preventDefault()
        fetch('http://localhost:6001/listings', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newItem)
        })
        .then(r => r.json())
        .then(response => setListingsArray([...listingsArray, response]))
        setNewItem({description: "", image: "", location: ""})
    }

    return(
        <form className="searchbar" onSubmit={handleSubmit}>
            <input
            type="text"
            id="description"
            placeholder="Item Description"
            value={newItem.description}
            onChange={handleAddItemChange}
            />
            <input
            type="text"
            id="image"
            placeholder="Image URL"
            value={newItem.image}
            onChange={handleAddItemChange}
            />
            <input
            type="text"
            id="location"
            placeholder="Location"
            value={newItem.location}
            onChange={handleAddItemChange}
            />
            <button>🍆</button>
        </form>
    )
}

export default NewItemForm