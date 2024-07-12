// Data.js
import Work1 from "../../assets/work1.jpg";
import Work2 from "../../assets/work2.jpg";
import Work3 from "../../assets/work3.jpg";
import Work4 from "../../assets/work4.jpg";
import Work5 from "../../assets/work5.jpg";

import ICTIEE from "../../assets/Publication_images/ICTIEE 2023.jpeg";
import IJRAR from '../../assets/Publication_images/IJRAR, 2022.jpeg';
import ICTACT from "../../assets/Publication_images/ICTACT,2022.jpeg";
import CPGCON from '../../assets/Publication_images/CPGCON-16.jpeg';
import IJARCCE from '../../assets/Publication_images/IJARCCE.png';
import ICRTET from '../../assets/Publication_images/ICRTET,2014.jpeg';

import hardware from '../../assets/Achievements-images/Hardware.png';
import software from '../../assets/Achievements-images/software.png';
import appreciation from '../../assets/Achievements-images/Appreciation.png';
import socialMedia from '../../assets/Achievements-images/social-media.png';
import unesco from '../../assets/Achievements-images/unesco.png';
import eyecontact from '../../assets/Achievements-images/eye-contact.png';
import digitalIndia from '../../assets/Achievements-images/digitalIndia.png';
import sunhacks from '../../assets/Achievements-images/sunhacks.png';
import mahindra from '../../assets/Achievements-images/mahindra.png';
import csi from '../../assets/Achievements-images/csi.png';
import womenaward from '../../assets/Achievements-images/women-award.png';
import techersHackathone from '../../assets/Achievements-images/techers hackathone.png';
import eyantra from '../../assets/Achievements-images/eyantra.png';
import consultancy from '../../assets/Achievements-images/consultancy.png';

import godapark from '../../assets/projects/godapark.png';
import deepblue from '../../assets/projects/deepblue.png';
import avishkar from '../../assets/projects/avishkar.png';
import inhouse from '../../assets/projects/inhouse.png';

import article1 from '../../assets/news/news1.png';
import article2 from '../../assets/news/news2.png';
import article3 from '../../assets/news/news3.png';

import story1 from '../../assets/career guidelines/story1.png';
import story2 from '../../assets/career guidelines/story2.png';
import story3 from '../../assets/career guidelines/story3.png';


export const projectsData = [
   
    //Achievements section started
    {
        id: 1,
        image: appreciation,
        title: 'Appreciation by AICTE members ',
        modal_heading:'Appreciation by AICTE members',
        details: '',
        modal_image :appreciation,
        content:'',
        category: 'Achievements',
    },
    {
        id: 2,
        image: hardware,
        title: 'SMART INDIA HACKATHON 2022',
        modal_heading:'WINNER OF SMART INDIA HACKATHON 2022',
        details: ' Hardware Edition - Chennai ',
        modal_image :hardware,
        content:' Problem Statement by the Organization : Dept. of Science & Tech.(DoST),Ministry of Science and Technology',
        category: 'Achievements',
    },
    
    {
        id: 3,
        image: software,
        title: 'SMART INDIA HACKATHON 2022',
        modal_heading:'WINNER OF SMART INDIA HACKATHON 2022',
        details: ' Softeware Edition - Chennai ',
        modal_image :software,
        content:' Problem Statement by the Organization : Ministry of Electronics and Information Technology(MEITY)',
        category: 'Achievements',
    },
    {
        id: 4,
        image: socialMedia,
        title: 'Most Active Team On Social Media',
        modal_heading:'Appreciation For Most Active Team On Social Media',
        details: '',
        modal_image :socialMedia,
        content:'',
        category: 'Achievements',
    },
    {
        id: 5,
        image: unesco,
        title: 'Finalist of UNESCO INDIA',
        modal_heading:'Finalist of UNESCO INDIA',
        details: '',
        modal_image :unesco,
        content:'',
        category: 'Achievements',
    },
    {
        id: 6,
        image: digitalIndia,
        title: 'आत्मनिर्भर भारत',
        modal_heading:'आत्मनिर्भर भारत / Digital India Initiatives',
        details: '',
        modal_image :digitalIndia,
        content:'A small contribution for आत्मनिर्भर भारत through Digital India Objectives by TE Computer Course Web Technology more than 25 projects guided for Atama Nirthar Bharat /Digital India Initiatives 25 projects guided for institute/organization/shop/supermarket/NGO/College etc.',
        category: 'Achievements',
    },
    {
        id: 7,
        image: sunhacks,
        title: ' Extra ordinary contribution as a judge',
        modal_heading:'Felicitated for extra ordinary contribution as a judge in International Hackathon-“Sunhacks22”',
        details: 'Held at - Sandip University in association with ESDS Software Solution Limited, Nashik',
        modal_image :sunhacks,
        content:'',
        category: 'Achievements',
    },
    {
        id: 8,
        image: mahindra,
        title: 'Industry Training',
        modal_heading:'Industry Training for employees of Mahindra & Mahindra Ltd. Nashik',
        details: 'Organized by -KKWIEER, Nashik',
        modal_image :mahindra,
        content:'',
        category: 'Achievements',
    },
    {
        id: 9,
        image: csi,
        title: 'Computer Sociery Of INDIA',
        modal_heading:'Computer Sociery Of INDIA',
        details: '',
        modal_image :csi,
        content:'',
        category: 'Achievements',
    },
    {
        id: 10,
        image: womenaward,
        title: 'कर्तृत्ववान महिला सम्मान',
        modal_heading:'“कर्तृत्ववान महिला सम्मान”',
        details: 'By K.K.WAGH Vidyabhavan and Junior College',
        modal_image :womenaward,
        content:'',
        category: 'Achievements',
    },
    {
        id: 11,
        image: techersHackathone,
        title: 'Finalist of techer\'s Hackathone',
        modal_heading:'Finalist of Teacher’s Hackathon(T-L-E :Teaching-Learning Evaluation) ',
        details:  'By Symbiosis International(Deemed University)',
        modal_image :techersHackathone,
        content:'',
        category: 'Achievements',
    },
    {
        id: 12,
        image: eyantra,
        title: 'e-Yantra IIT-Bombay',
        modal_heading:'Qualifying for the  Innovation Sprint of e-Yantra Innovation challenge 2022-2023',
        details:  'By IIT-Bombay',
        modal_image :eyantra,
        content:'',
        category: 'Achievements',
    },
    {
        id: 13,
        image: consultancy,
        title: 'consultancy in the area Web Development',
        modal_heading:'Received consultancy in the area Web Development',
        details:  'By Divisional Commissioner Office Nashik with Rs. 2.65Lakhs',
        modal_image :consultancy,
        content:'',
        category: 'Achievements',
    },
    // Achievements category finished

    //petants category Started
    {
        id: 14,
        image: eyecontact,
        title: 'Aligning eye contact in display screens',
        modal_heading:'Title : A system and method for aligning eye contact in display screens during online meeting',
        details: '',
        modal_image :eyecontact,
        content:'Application Number :TEMP/E-1/69389/2022-MUM (202221059988)',
        category: 'Patent & Copyrights',
    },
    // patents category end 

    // Project Guided started
    {
        id: 15,
        image: godapark,
        title: 'Project – Goda Park',
        modal_heading:'Title : Project – Goda Park – Based on Augmented reality and virtual reality (AR/VR) ',
        details: 'Nashik Smart City, Kumbhamela 27',
        modal_image :godapark,
        content:'',
        category: 'Project Guided',
    },
    {
        id: 16,
        image: deepblue,
        title: 'Project – Deep Blue',
        modal_heading:'Title : Project Deep Blue',
        details: 'By Mastek ',
        modal_image :deepblue,
        content:'Secured potition in top 7 teams all over INDIA',
        category: 'Project Guided',
    },
    {
        id: 17,
        image: avishkar,
        title: 'Avishkar Research Competition',
        modal_heading:'Avishkar Research Competition',
        details: 'By SPPU, Pune ',
        modal_image :avishkar,
        content:'',
        category: 'Project Guided',
    },
    {
        id: 18,
        image: inhouse,
        title: 'In-House(Society Level)Projects',
        modal_heading:'Involvement In-House(Society Level)Projects Development',
        details: '',
        modal_image :inhouse,
        content:'',
        category: 'Project Guided',
    },
    // project guided ended

    //news started
    {
        id: 19,
        image: article1,
        title: 'Article 1',
        modal_heading:'Published: - Opportunities in Artificial Intelligence (Dainik Punyanagari– 18th Jan 2022)',
        details:  '',
        modal_image :article1,
        content:'Submitted:- AR/VR ,Technology and Covid-19 and Role of education institutions for “Atma Nirbhar Bharat”',
        category: 'News',
    },
    {
        id: 20,
        image: article2,
        title: 'Article 2',
        modal_heading:'Some Of My published Articles',
        details:  '',
        modal_image :article2,
        content:'',
        category: 'News',
    },
    {
        id: 21,
        image: article3,
        title: 'Article 3',
        modal_heading:'Some Of My published Articles',
        details:  '',
        modal_image :article3,
        content:'',
        category: 'News',
    },
    // news category ended

    // career guided started 
    {
        id: 22,
        image: story1,
        title: 'Success Story 1',
        modal_heading:'Success Story 1',
        details:  '',
        modal_image :story1,
        content:'',
        category: 'Career Guidelines',
    },
    {
        id: 23,
        image: story2,
        title: 'Success Story 2',
        modal_heading:'Success Story 2',
        details:  '',
        modal_image :story2,
        content:'',
        category: 'Career Guidelines',
    },
    {
        id: 24,
        image: story3,
        title: 'More Success Stories',
        modal_heading:'More Success Stories',
        details: '',
        modal_image :story3,
        content:'',
        category: 'Career Guidelines',
    },
    // career giuded ended

    // Publication id's from  1-19
    {
        id: 25,
        image: ICTIEE,
        title: 'Paper 1',
        modal_heading:'Title - “Providing adaptable curriculum enrichment through Teaching-Learning-Evaluation”',
        details: 'Publication - ICTIEE 2023 (Selected for conference held in Mysore on 6th January 2023)',
        category: 'Publication',
    },
    {
        id: 26,
        image: IJRAR,
        title: 'Paper 2',
        modal_heading:'Title -“Future of Self Driving Vehicles in India”',
        details: 'Publication -  IJRAR, 2022 ',
        category: 'Publication',
    },
    {
        id: 27,
        image: IJRAR,
        title: 'Paper 3',
        modal_heading:'Title -“Review paper on “Data transmission for underwater communication using Li-Fi”',
        details: 'Publication -  IJRAR, 2022 ',
        category: 'Publication',
    },
    {
        id: 28,
        image: ICTACT,
        title: 'Paper 4',
        modal_heading:'Title -“Role of educational institutions for Atmanirbhar Bharat ”',
        details: 'Publication - ICTACT,2022',
        category: 'Publication',
    },
    
    {
        id: 29,
        image: Work1,
        title: 'Paper 5',
        modal_heading:'Title -“Review paper on methodologies of tracking and monitoring of carbon credit',
        details: 'Publication -  Will update soon ',
        category: 'Publication',
    },
    {
        id: 30,
        image: ICTACT,
        title: 'Paper 6',
        modal_heading:'Title -“Review paper on monitoring Animal migration on earth using scientific equipment on the ISS RS”',
        details: 'Publication -  ICTACT, 2022  ',
        category: 'Publication',
    },
    {
        id: 31,
        image: Work1,
        title: 'Paper 7',
        modal_heading:'Title - “Review Paper on Crowd Management Using Mob-Analyzer”',
        details: 'Publication -   Will update soon ', // JEITSM,2022
        category: 'Publication',
    },
    {
        id: 32,
        image: ICTACT,
        title: 'Paper 8',
        modal_heading:'Title -“Review paper on Screen less Display”',
        details: 'Publication -   ICTACT, 2022  ',
        category: 'Publication',
    },
    {
        id: 33,
        image: ICTACT,
        title: 'Paper 9',
        modal_heading:'Title -“Review paper on monitoring forest by remote sensing”',
        details: 'Publication -  ICTACT, 2022',
        category: 'Publication',
    },
    {
        id: 34,
        image: ICTACT,
        title: 'Paper 10',
        modal_heading:'Title -“5G Frameworks & Network Management using AI”',
        details: 'Publication -  ICTACT,2022 ',
        category: 'Publication',
    },
    {
        id: 35,
        image: CPGCON,
        title: 'Paper 11',
        modal_heading:'Title -“Development of Recommender System based on Meta-Algorithmic Approach”',
        details: 'Publication -  CPGCON 16  ',
        category: 'Publication',
    },
   
    {
        id: 36,
        image: ICTACT,
        title: 'Paper 12',
        modal_heading:'Title -“Review paper on a Block chain as a cyber defence”',
        details: 'Publication -   ICTACT, 2022',
        category: 'Publication',
    },
    
    {
        id: 37,
        image: Work1,
        title: 'Paper 13',
        modal_heading:'Title -“Technology and COVID – 19”',
        details: 'Publication -  Will update soon ,2020 ',
        category: 'Publication',
    },
    {
        id: 38,
        image: ICTACT,
        title: 'Paper 14',
        modal_heading:'Title -“Review paper on Hive Interface”',
        details: 'Publication -   ICTACT, 2022  ',
        category: 'Publication',
    },
    {
        id: 39,
        image: IJARCCE,
        title: 'Paper 15',
        modal_heading:'Title - “Meta-Algorithmic approach for development of recommender system”',
        details: 'Publication -   IJARCCE, 2016 ',
        category: 'Publication',
    },
    {
        id: 40,
        image: IJARCCE,
        title: 'Paper 16',
        modal_heading:'Title - “A Survey on Recommender System”',
        details: 'Publication -  IJARCCE, 2016 ',
        category: 'Publication',
    },
    {
        id: 41,
        image: ICRTET,
        title: 'Paper 17',
        modal_heading:'Title -“Opinion Mining - The Customer Review System”',
        details: 'Publication -  ICRTET,2014 ',
        category: 'Publication',
    },
    {
        id: 42,
        image: Work1,
        title: 'Paper 18',
        modal_heading:'Title - “Face identification based on lip movement features”',
        details: 'Publication - will update soon , 2014 ',
        category: 'Publication',
    },
    {
        id: 43,
        image: ICTIEE,
        title: 'Paper 19',
        modal_heading:'Title -“Providing adaptable curriculum enrichment through Teaching-Learning-Evaluation”',
        details: ' Publication - ICTIEE 2023 (Selected for conference held in Mysore on 6th January 2023)',
        category: 'Publication',
    },
    // Publication section finished 

];

export const projectsNav = [
    {
        name: 'all',
    },
    {
        name: 'News',
    },
    {
        name: 'Publication',
    },
    {
        name: 'Social',
    },
    {
        name: 'Certificates',
    },
    {
        name: 'Achievements',
    },
    {
        name: 'Career Details',
    },
    {
        name: 'Career Guidelines',
    },
    {
        name: 'Project Guided',
    },
    {
        name: 'Patent & Copyrights',
    },
];
