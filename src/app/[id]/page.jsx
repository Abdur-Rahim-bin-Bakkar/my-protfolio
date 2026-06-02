import Link from 'next/link';
import React from 'react';

const ProjectDetailsPage = async ({ params }) => {
    const { id } = await params
  const projects = [
    {
      id:1,
      title: 'Online-Book-Borrowing-Platform',
      description: 'Online-Book-Borrowing-Platform, There have email password and google authentication system.',
      tags: ['Next JS', 'MongoDb','Better Auth', "HTML", "CSS", "Java Script",'Tailwind'],
      image: 'https://i.ibb.co.com/PZJVtBvp/Screenshot-2026-05-01-212108.png',
      demo: 'https://book-library-two-kohl.vercel.app/',
      code: 'https://github.com/Abdur-Rahim-bin-Bakkar/Online-Book-Borrowing-Platform-'
    },
    {
      id:2,
      title: 'News web application',
      description: 'Real-time News Application, Journalism Without Fear or Favour There have email password and google authentication system.',
      tags: ['Next JS', 'MongoDb','Better Auth', "HTML", "CSS", "Java Script",'Tailwind'],
      image: 'https://i.ibb.co.com/SDvmzB7s/Screenshot-2026-05-01-211731.png',
      demo: 'https://dragon-news-two-gold.vercel.app/news/01',
      code: 'https://github.com/Abdur-Rahim-bin-Bakkar/dragon-news-web-application'
    },
    {
      id:3,
      title: 'Application stor',
      description: 'a simple application stor web application',
      tags: ['React Router', 'React', "HTML", "CSS", "Java Script",'Tailwind'],
      image: 'https://i.ibb.co.com/xtvLVCXD/Screenshot-2026-05-01-201825.png',
      demo: 'https://application-stor-abdur-rahim.vercel.app/',
      code: 'https://github.com/Abdur-Rahim-bin-Bakkar/application-store'
    },
    {
      id:4,
      title: 'KeenKeeper',
      description: 'KeenKeeper is a modern relationship management web app that helps users keep track of their friends, interactions, and connection status. It allows users to organize meaningful relationships, monitor engagement frequency, and ensure no important connection is neglected.',
      tags: ['Next JS', 'React', "HTML", "CSS", "Java Script",'Tailwind','Daisy UI'],
      image: 'https://i.ibb.co.com/cKw1M3qN/Screenshot-2026-05-01-212807.png',
      demo: 'https://communication-web-application.vercel.app/',
      code: 'https://github.com/Abdur-Rahim-bin-Bakkar/keen-keeper-application-with-next-js'
    },
    {
      id:5,
      title: 'DigTools',
      description: 'Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today. Explore Products',
      tags: [ 'React', "HTML", "CSS", "Java Script",'Tailwind','Daisy UI'],
      image: 'https://i.ibb.co.com/1tXHvTwP/Screenshot-2026-05-04-220156.png',
      demo: 'https://digital-tools-shopp.netlify.app/',
      code: 'https://github.com/Abdur-Rahim-bin-Bakkar/DigiTools-Platform'
    },
  ];
    const currentProject = projects.find(pro => pro.id == id)
    console.log(currentProject)
    return (
        <div className='max-w-11/12 mx-auto  pt-16'>
            

            <div className="flex gap-5 flex-col md:flex-row mt-10">
                <img
                    src={currentProject.image}
                    alt={currentProject.title}
                    className="max-w-100 h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="p-6 space-y-4 flex-1">
                    <h3 className="text-xl font-bold ">{currentProject.title}</h3>
                    <p className="text-sm  dark:text-white">{currentProject.description}</p>
                    <div className="flex gap-4 pt-2">
                        <a href={currentProject.demo} className="text-xs font-bold text-brand-orange flex items-center gap-1 hover:underline">
                            Demo <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </a>
                        <a href={currentProject.code} className="text-xs font-bold text-gray-500 dark:text-gray-400 flex items-center gap-1 hover:underline">
                            Code <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </a>
                    </div>
                    <div className="">
                        <h1 className='font-bold mb-5'>Technology</h1>
                        {currentProject.tags.map((tag) => (
                            <span key={tag} className="text-[10px] uppercase font-bold bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-gray-600 dark:text-gray-300 ml-4">{tag}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetailsPage;