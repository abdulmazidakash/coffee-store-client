import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const AddCoffee = () => {

	const handleAddCoffee = event =>{
		event.preventDefault();

		const form = event.target;
		const name = form.name.value;
		const chef = form.chef.value;
		const supplier = form.supplier.value;
		const taste = form.taste.value;
		const category = form.category.value;
		const details = form.details.value;
		const photo = form.photo.value;

		const newCoffee = {name, chef, supplier, taste, category, details, photo};
		console.log(newCoffee);

		//send data to server
		fetch('http://localhost:5000/coffee', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(newCoffee)
		})
			.then(res => res.json())
			.then(data => {
				console.log(data);

				if(data.insertId){
					Swal.fire({
						title: 'Success!',
						text: 'Coffee added successfully',
						icon: 'success',
						confirmButtonText: 'Cool'
					  })
				}
			})
	}
	return (
		<div className='lg:w-3/4 mx-auto mb-8'>
            <div className="text-center p-10">
				<Link to='/' className='btn bg-gradient-to-r from-orange-500 to-lime-500 w-full'>Home Back</Link >
                <h1  className="text-5xl font-bold">Add Coffee!</h1>
                <p className="py-6">
                    Provident cupiditate voluptatem et in.Quaerat fugiat ut assumenda excepturi exercitationem
                    quasi. In deleniti eaque aut repudiandae et a id nisi.
                </p>
            </div>
            <div className="card bg-gradient-to-tr from-green-200 to-pink-200 w-full shrink-0 shadow-2xl ">
                <form onSubmit={handleAddCoffee} className="card-body">
                    {/* form first row */}
                    <div className='flex flex-col lg:flex-row gap-5'>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="coffee name" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Chef</span>
                            </label>
                            <input type="text" name='chef' placeholder="chef name" className="input input-bordered" required />
                        </div>
                    </div>
                    {/* form second row */}
                    <div className='flex flex-col lg:flex-row gap-5'>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Supplier</span>
                            </label>
                            <input type="text" name='supplier' placeholder="coffee supplier" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Taste</span>
                            </label>
                            <input type="text" name='taste' placeholder="taste name" className="input input-bordered" required />
                        </div>
                    </div>
                    {/* form third row */}
                    <div className='flex flex-col lg:flex-row gap-5'>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <input type="text" name='category' placeholder="coffee Category" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <input type="text" name='details' placeholder="Coffee Details" className="input input-bordered" required />
                        </div>
                    </div>


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name='photo' placeholder="Photo url" className="input input-bordered" required />

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary text-xl font-bold bg-gradient-to-l from-orange-500 to-rose-700">ADD COFFEE</button>
                    </div>
                </form>
            </div>
        </div>
	);
};

export default AddCoffee;