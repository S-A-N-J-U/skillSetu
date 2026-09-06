// import React from 'react'
// import appwriteService from "../appwrite/config"
// import {Link} from 'react-router-dom'

// function PostCard({$id, title, featuredImage}) {

//   return (
//     <Link to={`/post/${$id}`}>
//         <div className='w-full bg-gray-100 rounded-xl p-4'>
//             <div className='w-full justify-center mb-4'>
//                 <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
//                 className='rounded-xl' />

//             </div>
//             <h2
//             className='text-xl font-bold'
//             >{title}</h2>
//         </div>
//     </Link>
//   )
// }


// export default PostCard







import React from 'react';
import appwriteService from "../../appwrite/config";
import { Link } from 'react-router-dom';

function PostCard({ $id, title, featuredImage, content }) {
  const plainDescription = content
    ? content.replace(/<[^>]+>/g, '').slice(0, 110) + '...'
    : 'Read full details, community updates, and insights on Skill Setu.';

  return (
    <Link to={`/post/${$id}`} className="group block w-full h-full">
      <article className="flex flex-col h-full bg-white rounded-2xl border border-blue-100/80 shadow-xs transition-all duration-300 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1.5 overflow-hidden">

        <div className="relative w-full h-52 overflow-hidden bg-blue-50">
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-blue-950/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          <span className="absolute top-3.5 left-3.5 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-xs font-semibold text-blue-700 shadow-sm border border-blue-100">
            Article
          </span>
        </div>

        <div className="p-6 flex flex-col grow justify-between bg-white">
          <div className="space-y-2.5">
            <h2 className="text-xl font-bold text-blue-950 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2 leading-snug tracking-tight">
              {title}
            </h2>

            <p className="text-blue-900/70 text-sm leading-relaxed line-clamp-3">
              {plainDescription}
            </p>
          </div>

          <div className="pt-6 mt-4 border-t border-blue-50 flex items-center justify-between text-sm font-semibold text-blue-600">
            <span className="inline-flex items-center gap-1.5 group-hover:text-blue-700">
              Read post
            </span>

            <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:translate-x-1 shadow-xs">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </div>
          </div>
        </div>

      </article>
    </Link>
  );
}

export default PostCard;