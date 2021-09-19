import React from 'react';

const TvShowDetails = (props) => {
    if(!props.showDetails)
    {
        return null;
    }

    if(props.showDetails !== props.id)
    {
        return null;
    }

    var network = (props.tvshow.network == null) ? props.tvshow.webChannel['name'] : props.tvshow.network['name'];

    var generes = props.tvshow.generes.join(' | ');

    // var max_summary = 250;
    var summary = props.tvshow.summary;

    if(summary.length){
        summary = summary.replace(/<\/?[^>]+(>|$)/g, "");

        // summary = summary.length > max_summary ? summary.substring(0, max_summary) + '...' : summary;
    }


    return (
        <>  
            <div className='modal'>
                <div className='modal-content'>
                    <div className='modal-header'>
                        <h4 className='modal-title'>{props.tvshow.name}</h4>
                    </div>
                    <div className='modal-body'>
                        <div><span className="showInfoTitle">Network:</span> {network}</div>
                        <div><span className="showInfoTitle">Schedule:</span> {props.tvshow.schedule['days'][0]} at {props.tvshow.schedule['time']}</div>
                        <div><span className="showInfoTitle">Status:</span> {props.tvshow.status}</div>
                        <div><span className="showInfoTitle">Generes:</span> {generes}</div>
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