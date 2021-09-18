import React from 'react';

const TvShowDetails = (props) => {
    if(!props.showDetails)
    {
        return null;
    }

    return (
        <>  
            <div className='modal'>
                <div className='modal-content'>
                    <div className='modal-header'>
                        <h4 className='modal-title'>Modal Title HERE</h4>
                    </div>
                    <div className='modal-body'>
                        Modal Body HERE
                    </div>
                    <div className='modal-footer'>
                        <button className='button'>Close</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TvShowDetails;