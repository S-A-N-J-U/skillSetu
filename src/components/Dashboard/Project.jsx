import React from 'react';

const Icons = {
  Spotify: () => (
    <svg className="w-8 h-8 text-[#1DB954] fill-current" viewBox="0 0 24 24">
      <path d="M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.899 4.62-1.08 8.52-.66 11.7 1.32.42.18.479.659.241 1.019zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141 C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  ),
  Facebook: () => (
    <svg className="w-8 h-8 text-[#1877F2] fill-current" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  ),
  Amazon: () => (
    <svg className="w-8 h-8 text-[#FF9900] fill-current" viewBox="0 0 24 24">
      <path d="M13.828 10.124c-.24 0-.588.024-.924.084-1.896.348-3.36 1.488-3.36 3.204 0 1.536 1.056 2.472 2.508 2.472 1.2 0 2.22-.612 2.82-1.584V15.3h1.8v-5.176h-2.844zm-.108 3.732c-.372.588-.996.888-1.632.888-.708 0-1.152-.408-1.152-1.056 0-.852.792-1.392 2.052-1.548.252-.024.528-.024.732 0v1.716zm7.26 3.252c-4.476 3.3-10.968 3.732-15.54 1.152-.36-.204-.792.096-.54.492 2.376 3.66 8.52 5.064 13.92 2.412.432-.216.828-.684.16-.1056zm2.22-1.128c-.288-.372-1.908-.18-2.628-.096-.216.024-.252-.168-.06-.3 1.272-.888 3.348-.636 3.588-.336.24.312-.228 2.412-1.416 3.384-.18.144-.348.072-.276-.132.252-.696.804-2.52.792-2.52z"/>
    </svg>
  ),
  Zomato: () => (
    <svg className="w-8 h-8 text-[#E23744] fill-current" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.6 15.5H8.4v-1.8l4.4-4.7H8.4V9.2h7.2v1.8l-4.4 4.7h4.4v1.8z" />
    </svg>
  ),
  ChatApp: () => (
    <svg className="w-8 h-8 text-[#6366F1] fill-current" viewBox="0 0 24 24">
      <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"/>
    </svg>
  ),
  Github: () => (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  ),
  ExternalLink: () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H18m0 0v4.5M18 6l-7.5 7.5M10.5 4.5H6A2.25 2.25 0 003.75 6.75v10.5A2.25 2.25 0 006 19.5h10.5a2.25 2.25 0 002.25-2.25V13.5" />
    </svg>
  ),
};

const PROJECTS = [
  {
    id: 'spotify-clone',
    title: 'Spotify Clone',
    icon: <Icons.Spotify />,
    description: 'A full-stack music streaming web application built with React, Tailwind CSS, and Web Audio API featuring real-time playback and custom playlists.',
    tags: ['React', 'Tailwind CSS', 'Node.js'],
    githubUrl: 'https://github.com/your-username/spotify-clone',
    demoUrl: 'https://spotify-clone-demo.vercel.app',
  },
  {
    id: 'facebook-clone',
    title: 'Facebook Clone',
    icon: <Icons.Facebook />,
    description: 'Social networking platform replication featuring user authentication, post creation, news feed updates, and interactive likes/comments.',
    tags: ['React', 'Firebase', 'Tailwind CSS'],
    githubUrl: 'https://github.com/your-username/facebook-clone',
    demoUrl: 'https://facebook-clone-demo.vercel.app',
  },
  {
    id: 'amazon-clone',
    title: 'Amazon Clone',
    icon: <Icons.Amazon />,
    description: 'E-commerce platform with product filtering, dynamic shopping cart management, and seamless Stripe payment integration.',
    tags: ['React', 'Redux', 'Stripe API'],
    githubUrl: 'https://github.com/your-username/amazon-clone',
    demoUrl: 'https://amazon-clone-demo.vercel.app',
  },
  {
    id: 'zomato-clone',
    title: 'Zomato Clone',
    icon: <Icons.Zomato />,
    description: 'Food discovery and delivery application interface with restaurant search filters, rating systems, and interactive menus.',
    tags: ['React', 'Express', 'MongoDB'],
    githubUrl: 'https://github.com/your-username/zomato-clone',
    demoUrl: 'https://zomato-clone-demo.vercel.app',
  },
  {
    id: 'chatting-app-clone',
    title: 'Chatting App',
    icon: <Icons.ChatApp />,
    description: 'Real-time messaging application supporting instant direct messages, online presence status, and media attachment sharing.',
    tags: ['React', 'Socket.io', 'Tailwind CSS'],
    githubUrl: 'https://github.com/your-username/chatting-app',
    demoUrl: 'https://chat-app-demo.vercel.app',
  },
];

function Project() {
  return (
    <div className="max-w-6xl mx-auto p-6 font-sans">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">My Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            id={project.id}
            className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div>
       
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                <div className="p-2 bg-gray-50 rounded-xl">
                  {project.icon}
                </div>
              </div>

              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs font-medium px-2.5 py-1 bg-gray-100 text-gray-600 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

   
            <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-gray-900 text-white font-medium text-sm rounded-xl transition-all duration-300 hover:bg-gray-800 hover:shadow-[0_0_15px_rgba(0,0,0,0.3)] active:scale-95"
              >
                <Icons.Github />
                <span>Code</span>
              </a>

          
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-emerald-400 text-gray-950 font-semibold text-sm rounded-xl transition-all duration-300 hover:bg-emerald-300 hover:shadow-[0_0_20px_rgba(52,211,153,0.7)] active:scale-95"
              >
                <Icons.ExternalLink />
                <span>Demo</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;