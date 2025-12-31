'use client';

import { useState } from 'react';
import Link from "next/link";

import { services } from "../api/services";


interface Category {
  title: string;
  emoji: string;
  items: string[];
}

const categories: Category[] = [
    { title: 'Career', emoji: '💼', items: services[0].offers },
    { title: 'Home', emoji: '🏠', items: services[1].offers },
    { title: 'Pets', emoji: '🐾', items: services[2].offers },
    { title: 'Childcare', emoji: '👶', items: services[3].offers },
    { title: 'Tech', emoji: '💻', items: services[4].offers },
    { title: 'Travel', emoji: '✈️', items: services[5].offers },
    { title: 'Weddings', emoji: '💒', items: services[6].offers },
    { title: 'Money', emoji: '💰', items: services[7].offers },
    { title: 'Mail', emoji: '📬', items: services[8].offers },
    { title: 'Fitness', emoji: '💪', items: services[9].offers },
    { title: 'Car', emoji: '🚗', items: services[10].offers },
    { title: 'Medical', emoji: '🏥', items: services[11].offers },
    { title: 'Small Business', emoji: '💼', items: services[12].offers },
    { title: 'Graphic Design', emoji: '🎨', items: services[13].offers },
    { title: 'Miscellaneous', emoji: '📝', items: services[14].offers },
]


export default function KelliDo() {
  const [openCategories, setOpenCategories] = useState<Set<number>>(new Set());

  const toggleCategory = (index: number) => {
    const newOpen = new Set(openCategories);
    if (newOpen.has(index)) {
      newOpen.delete(index);
    } else {
      newOpen.add(index);
    }
    setOpenCategories(newOpen);
  };
  return (
    <div className="min-h-screen py-16 px-6">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-4xl md:text-5xl font-cabinet font-bold mb-4 text-center">
          What I <span className="text-frog-green">Do</span>
        </h1>
        <p className="text-center font-geist text-lg mb-12 opacity-80">
          <span>🍯</span> <u>Kelli-Do</u>, <em>Noun</em>: a list of tasks or chores that <strong>Kelli</strong> (that&apos;s me!) can do, often related to home maintenance, improvement, getting rid of overwhelm, &amp; offering relief among the chaos.
        </p>

        <h1 className="text-4xl md:text-5xl font-cabinet font-bold mb-4 text-center">
          Tell Me <span className="text-frog-green">More</span>
        </h1>
        <p className="text-center font-geist text-lg mb-12 opacity-80">
          <p className=''><span>👩🏻‍💻</span> Professionally, I&apos;m a project manager for software developers - a <em>Scrum Master</em>. That sounds like a character right out of a video game, but I guarantee you that it&apos;s far simpler than that - I just make sure software gets shipped out to users.</p> 
          <p><span>🎂</span>In 2026, I&apos;ll make the milestone of <strong>10 years</strong> in the tech industry. Though I&apos;ve gained countless skills in my career, much of my strengths shine in working with people. Talking to them, collaborating, listening, forming plans, delegating tasks, analyzing data -- all the corporate buzzwords.</p>
          <p><span>🤝</span> My work in <strong>Kelli-Do&apos;s</strong> is much like working in tech as a Scrum Master - I&apos;m a helper, facilitator, purveyor of a plan among the chaos, &amp; go-to generalist in the moment you decide to ask for a helping hand.</p>
        </p>

        <h1 className="text-4xl md:text-5xl font-cabinet font-bold mb-4 text-center">
          Where To <span className="text-frog-green">Start</span>
        </h1>
        <p className='text-center font-geist text-lg mb-12 opacity-80'>So! Are you struggling to organize your kitchen cabinets? Can&apos;t decide on a contractor to remodel your bathroom? Need a pet-sitter for the weekend? Trying to make an agenda for your vacation? Have an old resume that needs a refresh? Moving &amp; need a deep clean? Just need some relief in the chaos?
        <p className='mt-4'>Click the <strong>categories</strong> below to see services offered, and if interested, click the button below to schedule a meeting with me to discuss a plan.</p>
        </p>
        <div className='text-center mb-12'>
          <Link href="https://calendly.com/landry-kel/30min" target="_blank" rel="noopener noreferrer" passHref>
            <button className="bg-frog-green text-black-forest px-6 py-3 rounded-full font-bold hover:bg-frog-green/80 transition-colors">Get Scheduled</button>
          </Link>
        </div>
        

        <div className="space-y-4">
          {categories.map((category, index) => (
            <div key={category.title} className="rounded-xl overflow-hidden transition-theme" style={{ backgroundColor: 'var(--card-bg)' }}>
              <button
                onClick={() => toggleCategory(index)}
                className="w-full px-6 py-5 flex items-center justify-between hover:bg-frog-green/10 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="text-3xl">{category.emoji}</span>
                  <h2 className="text-xl font-cabinet font-bold">{category.title}</h2>
                </div>
                <span
                  className={`text-2xl transition-transform duration-300 ${openCategories.has(index) ? 'rotate-180' : ''}`}
                >
                  ▼
                </span>
              </button>
              
              <div className={`accordion-content ${openCategories.has(index) ? 'open' : ''}`}>
                <ul className="px-6 pb-5 space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 font-geist"
                      style={{
                        transitionDelay: `${itemIndex * 50}ms`
                      }}
                    >
                      <span className="w-2 h-2 rounded-full bg-frog-green flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}