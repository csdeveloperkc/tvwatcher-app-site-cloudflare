import React from 'react';


const Search = (props) => {
	let searchInput = React.createRef();
	let onOnclickHandler = (e) => {
		props.setSearchValue(searchInput.current.value);
	};

	return (
		<div className='row'>
		  <div className='col'>
		  	<h1 style={{color: '#fff'}}>Search</h1>
		  </div>
		  <div className='col align-self-center'>
			<input
				className='form-control'
				ref={searchInput}
				placeholder='Search for Show...'
			></input>
		  </div>
		  <div className='col align-self-center'>
			<button onClick={onOnclickHandler}>Search</button>
		  </div>
		</div>
	);
};

export default Search;
