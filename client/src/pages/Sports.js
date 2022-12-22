import React from 'react';
import spurs from '../assets/spurs.jpeg';
import missions from '../assets/missions.webp';
import safc from '../assets/safc.png';
import utsa from '../assets/utsa.jpeg';
import brahmas from '../assets/brahmas.jpeg';


const Sports = () => {
    return (
        <main>
            <div className='flex-row justify-space-between'>
                <h1>Sports</h1>
            </div>
            <div className="flex-column justify-space-between p-3">
                <section className="card">
                    <h1 className="card-header">San Antonio Spurs</h1>
                    <div className="card-body">
                    <meat className="container flex-row justify-space-between">
                            <img src={spurs} className="display-inline" style={{ width: "40%"}} alt="spurs"/>
                            <p className="flex-row">The Spurs are San Antonio's premier basketball team. The 5 time NBA Champions are a persistent presence in the league's playoffs. The team plays it's home games at the AT&T Center on the city's Southeast side.</p>
                        </meat>
                    </div>
                </section>
                <section className="card">
                    <h1 className="card-header">San Antonio Missions</h1>
                    <div className="card-body">
                    <meat className="container flex-row justify-space-between">
                            <img src={missions} className="display-inline" style={{ width: "40%"}} alt="missions"/>
                            <p className="flex-row">The Missions are San Antonio's Minor League Baseball team and the Double-A affiliate of the San Diego Padres. The team is named for the Spanish missions around which the city was founded. The Missions play their home games at Nelson W. Wolff Municipal Stadium on the city's Southwest side.</p>
                        </meat>
                    </div>
                </section>
                <section className="card">
                    <h1 className="card-header">San Antonio Football Club</h1>
                    <div className="card-body">
                    <meat className="container flex-row justify-space-between">
                            <img src={safc} className="display-inline" style={{ width: "40%"}} alt="safc"/>
                            <p className="flex-row">San Antonio FC is San Antonio's professional soccer club. The team competes in the USL Championship, the second-highest level of the United States soccer league system. Although reletively new to the city, SAFC has a loyal fanbase who regularly pack Toyota Field Stadium, where the team plays on the city's Northeast side.</p>
                        </meat>
                    </div>
                </section>
                <section className="card">
                    <h1 className="card-header">UTSA</h1>
                    <div className="card-body">
                    <meat className="container flex-row justify-space-between">
                            <img src={utsa} className="display-inline" style={{ width: "40%"}} alt="utsa"/>
                            <p className="flex-row">The University of Texas at San Antonio is the city's largest college, and its football team reflects that. UTSA regularly regularly packs the Alamodome, where the team plays in the heart of the city.</p>
                        </meat>
                    </div>
                </section>
                <section className="card">
                    <h1 className="card-header">San Antonio Brahmas</h1>
                    <div className="card-body">
                    <meat className="container flex-row justify-space-between">
                            <img src={brahmas} className="display-inline" style={{ width: "40%"}} alt="brahmas"/>
                            <p className="flex-row">The Brahmas are the newest addition to the city's growing sports scene. While the XFL team's season won't begin until 2023, fans will undoubtedly be ecstatic for for their arrival at the Alomodome, the city's leading multi-purpose facility.</p>
                        </meat>
                    </div>
                </section>
            </div>
        </main>
        );
}

export default Sports;