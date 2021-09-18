import React, { useState} from 'react';
import TvShowDetails from './TvShowDetails';


const TvShowList = (props) => {

    const [showDetails,setShowDetails] = useState(false);

    return (
        <>
                <div>
                    <div className="container overflow-hidden">
                        <div className="row gx-5">
                            {props.tvshowList.map((val, k) =>{
                                return (
                                    <>
                                    <div className="col-sm-2">
                                     <img src={val.image['medium']} alt='movie' onClick={() => setShowDetails(val.id)}/>
                                     <TvShowDetails
                                        id={val.id}
                                        showDetails={showDetails}
                                        tvshow={val}
                                        onClose={() => setShowDetails(false)}
                                     />
                                     <div
                                        onClick={() => props.handleFavoriteClick(val)}                                        
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" 
                                            width="16" 
                                            height="16" 
                                            fill="#fff" 
                                            class="bi bi-star-fill" 
                                            viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>
                                        <span className='mr-2 removefromfav'>Remove from Favorites</span>
                                    </div>                                      
                                    </div>

                                 </>
                                )
                              })
                            }
                        </div>
                    </div>                 
                </div>
        </>
    );
}

export default TvShowList;