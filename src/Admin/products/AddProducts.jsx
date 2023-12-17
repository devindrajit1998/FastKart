import React from 'react'

export default function AddProducts() {
  return (
    <>
   <div className="container mt-5">
  <h2>Product Details</h2>
  <form id="productForm">
    <div className="form-group">
      <label htmlFor="productId">ID:</label>
      <input
        type="text"
        className="form-control"
        id="productId"
        name="productId"
        defaultValue={3003}
      />
    </div>
    <div className="form-group">
      <label htmlFor="category">Category:</label>
      <input
        type="text"
        className="form-control"
        id="category"
        name="category"
        defaultValue="Home & Living"
      />
    </div>
    <div className="form-group">
      <label htmlFor="subcategory">Subcategory:</label>
      <input
        type="text"
        className="form-control"
        id="subcategory"
        name="subcategory"
        defaultValue="Furniture"
      />
    </div>
    <div className="form-group">
      <label htmlFor="subSubcategory">SubSubcategory:</label>
      <input
        type="text"
        className="form-control"
        id="subSubcategory"
        name="subSubcategory"
        defaultValue="Tables"
      />
    </div>
    <div className="form-group">
      <label htmlFor="productName">Product Name:</label>
      <input
        type="text"
        className="form-control"
        id="productName"
        name="productName"
        defaultValue="Industrial Style Coffee Table"
      />
    </div>
    <div className="form-group">
      <label htmlFor="brand">Brand:</label>
      <input
        type="text"
        className="form-control"
        id="brand"
        name="brand"
        defaultValue="Vintage Vibes"
      />
    </div>
    <div className="form-group">
      <label htmlFor="description">Description:</label>
      <textarea
        className="form-control"
        id="description"
        name="description"
        rows={4}
        defaultValue={
          "Sturdy and stylish coffee table with an industrial touch."
        }
      />
    </div>
    {/* ... (continue adding the remaining form fields) */}
    <div className="form-group">
      <label htmlFor="saleAvailable">Sale Available:</label>
      <input
        type="checkbox"
        id="saleAvailable"
        name="saleAvailable"
        defaultChecked=""
      />
    </div>
    <div className="form-group">
      <label htmlFor="featured">Featured:</label>
      <input type="checkbox" id="featured" name="featured" defaultChecked="" />
    </div>
    <button type="submit" className="btn btn-primary">
      Submit
    </button>
  </form>
</div>

    </>
  )
}
