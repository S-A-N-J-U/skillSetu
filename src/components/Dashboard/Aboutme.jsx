import React, { useState, useEffect } from 'react';

function Aboutme() {
  const initialText = `My name is Sanju, a dedicated and passionate second-year B.Tech student at VGI College with a strong foundation in modern web development. Driven by a deep curiosity for technology and digital design, I specialize in crafting interactive, responsive, and visually engaging user interfaces. My core technical toolkit includes HTML, CSS, JavaScript, and React.js, which allow me to translate creative ideas into functional, clean, and efficient front-end applications. As a continuous learner, I pride myself on staying updated with modern web standards, component-driven architectures, and best practices for interface optimization. Whether it is engineering modular code bases in React or refining responsive CSS layouts for smooth performance across diverse devices, I aim to create web experiences that seamlessly blend form and function.

Beyond my technical coursework and coding projects, I am an avid reader. My love for reading books plays a key role in shaping my approach to problem-solving and critical thinking. Engaging with varied literature sharpens my focus, broadens my perspective, and enhances my ability to analyze complex challenges logically. This combination of technical discipline and intellectual curiosity allows me to tackle front-end development tasks with both structural precision and imaginative flair. As a computer science and engineering student, I thrive in environments that challenge me to solve real-world problems and collaborate with cross-functional teams to build intuitive web products.

Currently, I am actively seeking front-end job opportunities and internships where I can apply my web development skills, contribute to real-world projects, and grow alongside experienced engineering professionals. I am eager to join a forward-thinking team that values innovation, clean architecture, and user-centric design. If you are looking for a motivated front-end developer with a strong technical foundation in React and JavaScript, combined with a commitment to continuous growth and excellence, I would love to connect and explore how I can bring value to your organization.`;

  const [text, setText] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [savedMessage, setSavedMessage] = useState('');


  useEffect(() => {
    const savedText = localStorage.getItem('aboutMeText');
    if (savedText) {
      setText(savedText);
    } else {
      setText(initialText);
    }
  }, [initialText]);


  const handleSave = () => {
    localStorage.setItem('aboutMeText', text);
    setIsEditing(false);
    setSavedMessage('Changes saved successfully!');
    setTimeout(() => setSavedMessage(''), 3000);
  };


  const handleReset = () => {
    setText(initialText);
    localStorage.removeItem('aboutMeText');
    setIsEditing(false);
    setSavedMessage('Reset to default text!');
    setTimeout(() => setSavedMessage(''), 3000);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-md border border-gray-100 mt-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">About Me</h2>
        
        <div className="flex items-center gap-3">
          {savedMessage && (
            <span className="text-sm text-green-600 font-medium animate-pulse">
              {savedMessage}
            </span>
          )}
          
          {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
            >
              Edit
            </button>
          ) : (
            <div className="flex gap-2">
              <button
                onClick={handleSave}
                className="px-4 py-2 text-sm font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700 transition"
              >
                Save
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleReset}
                className="px-3 py-2 text-xs font-semibold text-red-600 border border-red-200 rounded-lg hover:bg-red-50 transition"
              >
                Reset Default
              </button>
            </div>
          )}
        </div>
      </div>

      {isEditing ? (
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={14}
          className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-gray-800 leading-relaxed font-sans text-base"
        />
      ) : (
        <div className="text-gray-700 leading-relaxed space-y-4 whitespace-pre-line text-justify p-2">
          {text}
        </div>
      )}
    </div>
  );
}

export default Aboutme;
