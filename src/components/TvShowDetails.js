import React from 'react';

const TvShowDetails = (props) => {
    if(!props.showDetails)
    {
        return null;
    }

    var summary = props.tvshow.summary;

    if(summary.length){
        summary = summary.replace(/<\/?[^>]+(>|$)/g, "");

        summary = summary.length > max_summary ? summary.substring(0, max_summary) + '...' : summary;
    }


    return (
        <>  
            <div className='modal'>
                <div className='modal-content'>
                    <div className='modal-header'>
                        <h4 className='modal-title'>{props.tvshow.name}</h4>
                    </div>
                    <div className='modal-body'>
                        {summary}
                    </div>
                    <div className='modal-footer'>
                        <button onClick={props.onClose} className='button'>Close</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TvShowDetails;