import React from 'react'
import Page1 from './genArfPages/Page1';
import Page2 from './genArfPages/Page2';
import Page3 from './genArfPages/Page3';

function Rabies() {
    return (
        <div className='d-flex mt-3 '>
            <div className='analysis card container-fluid shadow-sm border bordered-darker  mb-5'>
                <div id="carouselExampleCaptions" class="carousel slide" >
                    {/*Page indicator */}
                    <div class="carousel-indicators" data-bs-theme="dark">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    {/*Page indicator */}

                    {/* Carousel Content*/}
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <Page1/>
                        </div>
                        <div class="carousel-item">
                            <Page2/>
                        </div>
                        <div class="carousel-item">
                            <Page3/>
                        </div>
                    </div>
                    {/* Carousel Content*/}

                    {/* Carousel Button*/}
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev" data-bs-theme="dark">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next" data-bs-theme="dark">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="">Next</span>
                    </button>
                    {/* Carousel Button*/}
                </div>
            </div>
        </div>

    )
}

export default Rabies