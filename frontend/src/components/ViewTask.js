import React from 'react';

function ViewTask(){
    return(
        <div className="view-task-outer">
            <div className="view-task-inner">
                <div>Status</div>
                <div className="view-task-name">
                    <div/>
                    <h1>Task Name...</h1>
                </div>
                <p>Note</p>
                <p>Due Date</p>
                <button>Save Changes</button>
            </div>   
        </div>
    );
}