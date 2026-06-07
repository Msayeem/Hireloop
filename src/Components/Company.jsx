import React from 'react';

const Company =({data}) => {

 
    return (
        <div>
            {data.map(com=>
                <div key={com._id}>
<h1>{com.company_name}</h1>
                    </div>
            )}
        </div>
    );
};

export default Company;