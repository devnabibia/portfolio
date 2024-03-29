import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import stroke from "../assets/stroke.svg";
import Card from "../elements/Card";
import dockett from "../assets/dockett.png";
import bookmark from "../assets/bookmark.png";
import sunnyside from "../assets/sunnyside.png";
import todo from "../assets/todo.png";
import Empower from "../assets/Empower.png";
import Lamoore from "../assets/Lamoore.png";
import crypto from "../assets/art.png";
import goalTracker from "../assets/goalTracker2.png";

const Project: React.FC = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <section className="flex flex-col px-6 pb-20" id="project">
      <section className="flex justify-start items-center lg:w-5/12 w-72">
        <h1 className="lg:text-2xl text-xl">
          <span className="text-primary ">#</span>Projects
        </h1>

        <figure className="pl-4">
          <img src={stroke} alt="line" className="w-36" />
        </figure>
      </section>
      <p className="lg:w-6/12 w-full md:w-11/12 text-sm text-justify pb-10 pt-5 leading-7">
        <span className="text-primary"> Skill Development</span>  is the process of improving specific skills to be more efficient and effective when you perform a task. In the workplace, 
        you'll find three main types of skill development: Upskilling: Improving your skills in your current role. Cross-skilling: Learn new skills for your current role.
        <br />
        <br />
        Over the course of time, while learning and mastering frontend and backend tools and frameworks,
        I've developed a couple of projects to showcase my skills. Here are a
        few:
      </p>
      <section className="grid md:grid-cols-2 grid-col-1 lg:grid-cols-3 gap-6 lg:gap-5 place-items-center w-full text-xs">
        <Card
          image={Empower}
          title="Card_application"
          about="I learned the importance of teamwork while building and maintaining the community website as the engineering lead."
          link="https://card-application-lime.vercel.app/"
        />
        <Card
          image={goalTracker}
          title="Real_estate_web_app"
          about="I mastered Firebase, TypeScript and integrated Paystack on this fullstack goal tracker application that allows you to track your goal progress."
          link="https://houssify.vercel.app/"
        />
        <Card
          image="/morent.png"
          title="A Car Rental Application"
          about="Exploring Supabase auth and database, I developed this car rental application that provides an easy way to rent cars at low prices with comfortable facilities."
          link="https://car-hire-app-chi.vercel.app/"
        />
        <Card
          image="/Ecommerce.png"
          title="A Grocery Store"
          about="I Mastered Zustand state management library by building this React application that allows you to order groceries easily on the website."
          link="https://e-commerce-devnabibia.vercel.app/"
        />
      <Card
          image="/inno.png"
          title="Gym_app"
          about="Mastering Tailwind, I translated this Figma design into frontend codes. A company website - Innovotio."
          link="https://gym-web-app-ten.vercel.app/"
        />
         {/* <Card
          image={Lamoore}
          title="Lamoore: A Clothing Store"
          about="I mastered the use of Web APIs and React on this ecommerce store called Lamoore. It provides fast, seamless, and enjoyable online shopping for all your clothing needs!."
          link="https://lamoore.vercel.app/"
        /> */}
        
         <Card
          image={dockett}
          title="A Sticky Note Application"
          about="My first attempt with Firebase and React. I developed a sticky note application for anyone with a busy schedule!"
          link="https://note-taking-web-app-phi.vercel.app/"
        />
        {/* <Card
          image={sunnyside}
          title="Sunny Side Agencies"
          about="Matering responsive designs, I jumped on a frontend mentor challenge and developed this responsive and user-friendly site."
          link="https://sunnyside-agencies.vercel.app/"
  /> */}

        {/* <Card
          image={todo}
          title="A Task Productivity App"
          about="During Empower Her Community Pair programming exercise, my team developed a task productivity app that helps you keep track of tasks using React and Firebase."
          link="https://ehc-todoapp.web.app/"
        /> */}

        {/* 
        <Card
          image={crypto}
          title="Crypto Art: A Landing Page"
          about="I recently just heard about AOS and I didn't hesitate to try it out. This Digital marketplace landing page for crypto collectibles and NFTs was developed using Next.js, and AOS library"
          link="https://crypto-art-teal.vercel.app/"
        /> */}
      </section>
    </section>
  );
};

export default Project;
