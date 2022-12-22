import React from 'react';
import riverwalk from '../assets/riverwalk.jpeg';
import fiestatexas from '../assets/fiestatexas.png';
import witte from '../assets/witte.jpeg';
import marketsquare from '../assets/marketsquare.jpeg';
import zoo from '../assets/zoo.jpeg';

const Entertainment = () => {
    return (
        <main>
            <div className='flex-row justify-space-between'>
                <h1>Entertainment</h1>
            </div>
            <div className="flex-column justify-space-between p-3">
                <section className="card">
                    <h1 className="card-header">The San Antonio Riverwalk</h1>
                    <div className="card-body">
                        <meat className="container flex-row justify-space-between">
                            <img src={riverwalk} className="display-inline" style={{ width: "40%"}} alt="riverwalk"/>
                            <p className="flex-row">The San Antonio River Walk is the heart of the city. As the #1 attraction in Texas, the River Walk is full of dining, shopping, and cultural experiences.</p>
                        </meat>
                    </div>
                </section>

                <section className="card">
                    <h1 className="card-header">Six Flags Fiesta Texas</h1>
                    <div className="card-body">
                    <meat className="container flex-row justify-space-between">
                            <img src={fiestatexas} className="display-inline" style={{ width: "40%"}} alt="fiestatexas"/>
                            <p className="flex-row">From roller coasters and water slides to animal experiences, festivals, food and games, Six Flags Fiesta Texas offers enjoyment for people all ages.</p>
                        </meat>
                    </div>
                </section>

                <section className="card">
                    <h1 className="card-header">Witte Museum</h1>
                    <div className="card-body">
                    <meat className="container flex-row justify-space-between">
                            <img src={witte} className="display-inline" style={{ width: "40%"}} alt="witte"/>
                            <p className="flex-row">The Witte Museum is located between the ancient San Antonio River and historic Broadway, a bountiful riverside campus with large and open galleries, where Nature, Science and Culture meet through the lens of what we call Texas Deep Time and the themes of Land, Sky and Water.</p>
                        </meat>
                    </div>
                </section>

                <section className="card">
                    <h1 className="card-header">Historic Market Square</h1>
                    <div className="card-body">
                    <meat className="container flex-row justify-space-between">
                            <img src={marketsquare} className="display-inline" style={{ width: "40%"}} alt="marketsquare"/>
                            <p className="flex-row">The Historic Market Square is where the culture of San Antonio comes alive. Nearly every weekend of the year, Market Square is filled with live entertainment, delicious food, and fun for the whole family; and talk about shopping... with unique multi-cultural merchandise you can find something for everyone.</p>
                        </meat>
                    </div>
                </section>

                <section className="card">
                    <h1 className="card-header">San Antonio Zoo</h1>
                    <div className="card-body">
                    <meat className="container flex-row justify-space-between">
                            <img src={zoo} className="display-inline" style={{ width: "40%"}} alt="zoo"/>
                            <p className="flex-row">San Antonio Zoo is a 50+ acre zoo home to over 750 species, some of which are endangered or extinct in the wild, and an annual attendance of more than 1 million.</p>
                        </meat>
                    </div>
                </section>
            </div>
        </main>
        );
}

export default Entertainment;