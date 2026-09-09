import React from 'react';
import { Button } from '@/components/ui/button';

function HireMe({
  name = 'Company Name',
  title = 'Job Title',
  tag1 = 'Remote',
  tag2 = 'Engineering',
  url = '#',
}) {
 
  const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(
    name
  )}&background=0D9488&color=fff&bold=true`;

  return (
    <div className="m-4 flex justify-center">
      <div className="flex w-full max-w-2xl items-center justify-between rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition-all">
        {/* Company Logo / Initials Avatar */}
        <div className="shrink-0">
          <img
            className="h-16 w-16 rounded-full border object-cover bg-gray-50"
            src={avatarUrl}
            alt={name}
          />
        </div>

    
        <div className="flex-1 px-5 text-left">
          <h2 className="text-lg font-bold text-gray-900">{name}</h2>
          <p className="text-sm font-medium text-gray-600 line-clamp-1">{title}</p>

          <div className="mt-2 flex flex-wrap gap-2">
            <span className="rounded-full bg-pink-100 px-3 py-0.5 text-xs font-semibold text-pink-700">
              {tag1}
            </span>
            <span className="rounded-full bg-blue-100 px-3 py-0.5 text-xs font-semibold text-blue-700">
              {tag2}
            </span>
          </div>
        </div>

        <a href={url} target="_blank" rel="noopener noreferrer">
          <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-4 py-2 rounded-lg cursor-pointer transition-colors">
            Apply Now
          </Button>
        </a>
      </div>
    </div>
  );
}

export default HireMe;