import { NextSeo } from "next-seo";
import { useState } from "react";

import { services } from "../api/services";

export default function KelliDo() {
    const [toggleCareer, setToggleCareer] = useState(true);
    const [toggleHome, setToggleHome] = useState(true);
    const [togglePets, setTogglePets] = useState(true);
    const [toggleChildcare, setToggleChildcare] = useState(true);    
    const [toggleTech, setToggleTech] = useState(true);
    const [toggleTravel, setToggleTravel] = useState(true);    
    const [toggleWeddings, setToggleWeddings] = useState(true);
    const [toggleMoney, setToggleMoney] = useState(true);    
    const [toggleMail, setToggleMail] = useState(true);
    const [toggleFitness, setToggleFitness] = useState(true);
    const [toggleCar, setToggleCar] = useState(true);
    const [toggleMedical, setToggleMedical] = useState(true);
    const [toggleSmallBusiness, setToggleSmallBusiness] = useState(true);
    const [toggleMisc, setToggleMisc] = useState(true);

    const handleCareer = () => {
        setToggleCareer(!toggleCareer);
    }
    const handleHome = () => {
        setToggleHome(!toggleHome);
    }
    const handlePets = () => {
        setTogglePets(!togglePets);
    }
    const handleChildcare = () => {
        setToggleChildcare(!toggleChildcare);
    }
    const handleTech = () => {
        setToggleTech(!toggleTech);
    }
    const handleTravel = () => {
        setToggleTravel(!toggleTravel);
    }
    const handleWeddings = () => {
        setToggleWeddings(!toggleWeddings);
    }
    const handleMoney = () => {
        setToggleMoney(!toggleMoney);
    }
    const handleMail = () => {
        setToggleMail(!toggleMail);
    }
    const handleFitness = () => {
        setToggleFitness(!toggleFitness);
    }
    const handleCar = () => {
        setToggleCar(!toggleCar);
    }
    const handleMedical = () => {
        setToggleMedical(!toggleMedical);
    }
    const handleSmallBusiness = () => {
        setToggleSmallBusiness(!toggleSmallBusiness);
    }
    const handleMisc = () => {
        setToggleMisc(!toggleMisc);
    }

  return (
    <div  className='flex flex-col justify-center text-center m-auto w-1/3'>
      <NextSeo
        title="Kelli Landry - Kelli Do"
        description="Kelli Do, a page for Kelli Landry showcasing her skills and services for trade, barter, or payment."
        canonical="http://kellilandry.dev/kelli-do"
      />
        <header>
            <h1 className="text-indigo-500 dark:text-indigo-200 text-2xl py-4 ">
                a different spin on the 🍯 honey-do
            </h1>
            <h2 className="text-indigo-400 dark:text-indigo-100 text-xl py-4">
                <u>kelli-do</u>, <em>noun</em>: a list of tasks or chores that <strong>kelli</strong> (that's me!) can complete, often related to home maintenance, improvement, getting rid of overwhelm, &amp; offering relief in the chaos.
            </h2>
        </header>
        <section>
            <p className="dark:text-indigo-200 pb-4">while i have been known professionally as a programmer turned tech project manager, my services and skills span many areas. my pricing structure is flexible. some services are only local to where i live, but many are digital and can be done remotely.</p>
            <p className="dark:text-indigo-200 pb-4">click on each area to see more & schedule a time to consult with me for us to work something out!</p>
        </section>
        <section>
            <button className=" bg-indigo-600 dark:bg-indigo-300 text-indigo-300 dark:text-indigo-700 p-3 rounded-md" onClick={handleCareer}>Career</button>
            <ul style={{ display: toggleCareer ? 'none' : 'block' }}>
                {services[0].offers.map((item, index) => (
                    <li key={index} className="dark:text-indigo-200">{item}</li>
                ))}
            </ul>

            <button className=" bg-indigo-600 dark:bg-indigo-300 text-indigo-300 dark:text-indigo-700 p-3 rounded-md" onClick={handleHome}>Home</button>
            <ul style={{ display: toggleHome ? 'none' : 'block' }}>
                {services[1].offers.map((item, index) => (
                    <li key={index} className="dark:text-indigo-200">{item}</li>
                ))}
            </ul>

            <button className=" bg-indigo-600 dark:bg-indigo-300 text-indigo-300 dark:text-indigo-700 p-3 rounded-md" onClick={handlePets}>Pets</button>
            <ul style={{ display: togglePets ? 'none' : 'block' }}>
                {services[2].offers.map((item, index) => (
                    <li key={index} className="dark:text-indigo-200">{item}</li>
                ))}
            </ul>

            <button className=" bg-indigo-600 dark:bg-indigo-300 text-indigo-300 dark:text-indigo-700 p-3 rounded-md" onClick={handleChildcare}>Childcare</button>
            <ul style={{ display: toggleChildcare ? 'none' : 'block' }}>
                {services[3].offers.map((item, index) => (
                    <li key={index} className="dark:text-indigo-200">{item}</li>
                ))}
            </ul>

            <button className=" bg-indigo-600 dark:bg-indigo-300 text-indigo-300 dark:text-indigo-700 p-3 rounded-md" onClick={handleTech}>Tech</button>
            <ul style={{ display: toggleTech ? 'none' : 'block' }}>
                {services[4].offers.map((item, index) => (
                    <li key={index} className="dark:text-indigo-200">{item}</li>
                ))}
            </ul>

            <button className=" bg-indigo-600 dark:bg-indigo-300 text-indigo-300 dark:text-indigo-700 p-3 rounded-md" onClick={handleTravel}>Travel</button>
            <ul style={{ display: toggleTravel ? 'none' : 'block' }}>
                {services[5].offers.map((item, index) => (
                    <li key={index} className="dark:text-indigo-200">{item}</li>
                ))}
            </ul>

            <button className=" bg-indigo-600 dark:bg-indigo-300 text-indigo-300 dark:text-indigo-700 p-3 rounded-md" onClick={handleWeddings}>Weddings</button>
            <ul style={{ display: toggleWeddings ? 'none' : 'block' }}>
                {services[6].offers.map((item, index) => (
                    <li key={index} className="dark:text-indigo-200">{item}</li>
                ))}
            </ul>

            <button className=" bg-indigo-600 dark:bg-indigo-300 text-indigo-300 dark:text-indigo-700 p-3 rounded-md" onClick={handleMoney}>Money</button>
            <ul style={{ display: toggleMoney ? 'none' : 'block' }}>
                {services[7].offers.map((item, index) => (
                    <li key={index} className="dark:text-indigo-200">{item}</li>
                ))}
            </ul>

            <button className=" bg-indigo-600 dark:bg-indigo-300 text-indigo-300 dark:text-indigo-700 p-3 rounded-md" onClick={handleMail}>Mail & Packages</button>
            <ul style={{ display: toggleMail ? 'none' : 'block' }}>
                {services[8].offers.map((item, index) => (
                    <li key={index} className="dark:text-indigo-200">{item}</li>
                ))}
            </ul>

            <button className=" bg-indigo-600 dark:bg-indigo-300 text-indigo-300 dark:text-indigo-700 p-3 rounded-md" onClick={handleFitness}>Fitness & Wellness</button>
            <ul style={{ display: toggleFitness ? 'none' : 'block' }}>
                {services[9].offers.map((item, index) => (
                    <li key={index} className="dark:text-indigo-200">{item}</li>
                ))}
            </ul>

            <button className=" bg-indigo-600 dark:bg-indigo-300 text-indigo-300 dark:text-indigo-700 p-3 rounded-md" onClick={handleCar}>Car</button>
            <ul style={{ display: toggleCar ? 'none' : 'block' }}>
                {services[10].offers.map((item, index) => (
                    <li key={index} className="dark:text-indigo-200">{item}</li>
                ))}
            </ul>

            <button className=" bg-indigo-600 dark:bg-indigo-300 text-indigo-300 dark:text-indigo-700 p-3 rounded-md" onClick={handleMedical}>Medical</button>
            <ul style={{ display: toggleMedical ? 'none' : 'block' }}>
                {services[11].offers.map((item, index) => (
                    <li key={index} className="dark:text-indigo-200">{item}</li>
                ))}
            </ul>

            <button className=" bg-indigo-600 dark:bg-indigo-300 text-indigo-300 dark:text-indigo-700 p-3 rounded-md" onClick={handleSmallBusiness}>Small Business</button>
            <ul style={{ display: toggleSmallBusiness ? 'none' : 'block' }}>
                {services[12].offers.map((item, index) => (
                    <li key={index} className="dark:text-indigo-200">{item}</li>
                ))}
            </ul>

            <button className=" bg-indigo-600 dark:bg-indigo-300 text-indigo-300 dark:text-indigo-700 p-3 rounded-md" onClick={handleMisc}>Misc</button>
            <ul style={{ display: toggleMisc ? 'none' : 'block' }}>
                {services[13].offers.map((item, index) => (
                    <li key={index} className="dark:text-indigo-200">{item}</li>
                ))}
            </ul>
        </section>
    </div>
  );
}