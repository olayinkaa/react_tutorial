/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';




function Card(props){

        return(

                <div className="mt-2">
                    {/* <div className="row"> */}
                        <div class="col-md-4">
                            <div className="card">
                            {/* <div className="card" style={{width: "18rem"}}> */}
                            {/* <img src="" class="card-img-top" alt="" /> */}
                                <div className="card-body">
                                    <h5 className="card-title">{props.title}</h5>
                                    <p className="card-text">{props.text}</p>
                                    <a href="#" className="btn btn-primary">{props.button}</a>
                                </div>
                            </div>
                        </div>
                    {/* </div> */}
                </div>
        )
}


export default Card;