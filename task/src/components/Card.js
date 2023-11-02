import React, { useEffect, useState } from 'react';
import axios from 'axios';

export function Card() {
    const [data, setData] = useState([]);


    useEffect(() => {
            axios.get('http://localhost:3456/photos')
            .then((response) => {
                const data = response.data;
                if (data.length > 0) {
                    setData(data);
                } else {
                    console.log("No products were added");
                    console.log(data);
                }
            })
            .then((data) => {
              this.setState({ photos: data });
            })
            .catch((error) => {
              console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <>
            <h1 className='my-3'>Featured API's of the week</h1>
            <main className="container-fluid">
                <section className='row d-flex justify-content-center'>
                    <div className='col-10'>
                        <div className='row g-4 d-flex justify-content-between'>
                            {Object.keys(data).length > 0 ? (
                                data.map((value, index) => (
                                    <div key={index} className="col-12 col-md-4 col-lg-4 cus-box-shadow">
                                        <div className="row m-5 rounded-5 bg-gradient py-3">
                                            <div className="col-lg-2 p-0">
                                                <img src={value.thumbnailUrl} className="rounded-5 w-100 m-2" alt="No Image" />
                                
                                            </div>
                                            <div className="col-lg-10 px-3 d-flex flex-column justify-content-around align-items-center">
                                                <div>
                                                    <h2 className="py-3">Album ID : {value.albumId}</h2>
                                                    <h5>ID : {value.id}</h5>
                                                    <h3>{value.title}</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="col-10">
                                    <h1 className="text-center">No products uploaded</h1>
                                </div>)
                            }
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}