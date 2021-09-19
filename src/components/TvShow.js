import React from 'react';

const TvShow = (props) => {
	if(props.tvshow.id !== undefined){
		var network = (props.tvshow.network == null) ? props.tvshow.webChannel['name'] : props.tvshow.network['name'];

		var max_summary = 250;
		var summary = props.tvshow.summary;

		if(summary.length){
			summary = summary.replace(/<\/?[^>]+(>|$)/g, "");

			summary = summary.length > max_summary ? summary.substring(0, max_summary) + '...' : summary;
		}
		return (
			<>
				<div className='image-container row d-flex justify-content-start m-3'>
					<div className="col-sm">
					 <img className="show_search_poster" src={props.tvshow.image['medium']} alt='movie'></img>
					</div>
					<div className='col-sm'>
						<div class="card" style={{width: '18rem'}}>
  							<div class="card-body">
    							<h5 class="card-title">{props.tvshow.name}</h5>
    							<h6 class="card-subtitle mb-2 text-muted">{network} | {props.tvshow.schedule['days'][0]}</h6>
    							<p class="card-text">
      								{summary}
    							</p>
  							</div>
						</div>
					</div>
					<div
						onClick={() => props.handleFavoriteClick(props.tvshow)}
						className='overlay d-flex align-items-center justify-content-center'
					>
						<svg xmlns="http://www.w3.org/2000/svg" 
							 width="16" 
							 height="16" 
							 fill="#fff" 
							 class="bi bi-star-fill" 
							 viewBox="0 0 16 16">
  							<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
						</svg>
						<span className='mr-2 addtofav'>Add to Favorites</span>
					</div>
				</div>				
			</>
		);
	}
	else{
		return (<></>);
	}
};

export default TvShow;