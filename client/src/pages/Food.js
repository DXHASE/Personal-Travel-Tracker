import React from 'react';

const Food = () => {
    return (
        <main>
            <div className='flex-row justify-space-between'>
                <h1>Food</h1>
            </div>
            <div className="flex-column justify-space-between p-3">
                <section className="card">
                    <h1 className="card-header">The Pearl Brewery</h1>
                    <div className="card-body">
                    <meat className="container flex-row justify-space-between">
                            <img src={exampleImg} className="display-inline" style={{ width: "40%"}} alt="example"/>
                            <p className="flex-row">Have your tastebuds prepped and ready when you arrive at the Pearl. The beer factory turned food mecca is home to a variety of exquisite eateries inculding the James Beard award nominated "Cured." The Pearl is also home to a variety of independently owned shops offering a veritable of wares and servies.</p>
                        </meat>
                    </div>
                </section>
                <section className="card">
                    <h1 className="card-header">Mi Tierra</h1>
                    <div className="card-body">
                    <meat className="container flex-row justify-space-between">
                            <img src={exampleImg} className="display-inline" style={{ width: "40%"}} alt="example"/>
                            <p className="flex-row">Established in 1941, Mi Tierra served as a three-table cafe for early-rising farmers and workers at San Antonio’s Mercado. Sixty years later, it is a world-famous landmark - the place is a destination for hometown regulars and hungry tourists go for authentic Mexican food and a warm Texas welcome. Mi Tierra is a signature of downtown San Antonio and a suitable location for all occasions.</p>
                        </meat>
                    </div>
                </section>
                <section className="card">
                    <h1 className="card-header">Dough Pizzaria Napoletana</h1>
                    <div className="card-body">
                    <meat className="container flex-row justify-space-between">
                            <img src={exampleImg} className="display-inline" style={{ width: "40%"}} alt="example"/>
                            <p className="flex-row">Featured on Food Network's "Dinners, Drive-Ins, and Dives," Dough Pizzaria is a culinary standout, with it's authentic Neapolitan cuisine and finite operating hours, one is sure to enjoy their plethor of offerings.</p>
                        </meat>
                    </div>
                </section>
                <section className="card">
                    <h1 className="card-header">Longhorn cafe</h1>
                    <div className="card-body">
                    <meat className="container flex-row justify-space-between">
                            <img src={exampleImg} className="display-inline" style={{ width: "40%"}} alt="example"/>
                            <p className="flex-row">The Longhorn Cafe started as a small taco stand in the 1950s and soon became the home of the Original Big Juicy™. San Antonians will recognize The Longhorn cafe as the city's premier Burger Joint. With locations all around town, The Longhorn Cafe is sure to please even the most hungry on patrons.</p>
                        </meat>
                    </div>
                </section>
                <section className="card">
                    <h1 className="card-header">Bill Miller BBQ</h1>
                    <div className="card-body">
                    <meat className="container flex-row justify-space-between">
                            <img src={exampleImg} className="display-inline" style={{ width: "40%"}} alt="example"/>
                            <p className="flex-row">Bill Miller BBQ is San Antonio's most beloved restaurant chain. With locations all throuought South Texas, Bill Miller BBQ is the region's most well-known food chain around.</p>
                        </meat>
                    </div>
                </section>
            </div>
        </main>
        );
}

export default Food;