import React from 'react';
import BlurbSection from '../components/components/BlurbSection';
import Container from '../components/components/Container';
import Venue from '../components/components/Venue';
import Form from '../components/components/Form';
import Hero from '../components/components/Hero';
import Map from '../components/components/Map';
import SponsorDeck from '../components/components/SponsorDeck';
import DavosSchedule from '../components/components/DavosSchedule';

const Davos = ({ davos }) => {
    return (
        <div className="flex flex-col w-screen items-stretch overflow-hidden leading-[1] ">
            <Hero />
            <Venue />
            <Container>
                {davos != undefined && <BlurbSection blurbs={davos.davosBlurbs} />}
            </Container>
            <Container>
                <Form form="1b47017d-3301-472d-ab6b-131d7246d589" />
            </Container>
            <Map />
            <SponsorDeck />
            <DavosSchedule />
        </div>
    );
};

export default Davos;
