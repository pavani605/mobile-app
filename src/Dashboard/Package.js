import axios from 'axios';
import React, { useEffect, useState } from 'react';


const Package = () => {
    const [PackageData, setPackageData] = useState([]);

    const PackageDataBinding = () => {
        axios.post('https://services.shuttleq.net/api/Company/GetAllPackages?status=1')
            .then(res => {
                console.log(res.data);
                setPackageData(res.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    useEffect(() => {
        PackageDataBinding();
    }, []);

    return (
        <div>
            <button className='fixed-button'>
                <i className="bi bi-plus-circle-fill"></i>
            </button>
            <div className='container mt-3'>
                <h2>Package</h2>
                <div className="row">
                    {PackageData.map((i, key) => (
                        <div className="col-md-4 mb-3 draggable" key={key}>
                            <div className="card custom-card">
                                <div className="card-body">
                                    <h5 className="card-title">{i.packageName}</h5>
                                    <p className="card-text mb-1"><strong>$</strong> {i.packagePrice}</p>
                                    <p className="card-text mb-1"><strong>validity:</strong> {i.validity}</p>
                                    <p className="card-text mb-1"><strong></strong> {i.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Package;
