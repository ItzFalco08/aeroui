import React from 'react';

const About = () => {
    const frontend = [
        { name: 'React', color: '2A668B' },
        { name: 'Next.js', color: '0C0D0F' },
        { name: 'HTML', color: 'B95838' },
        { name: 'CSS', color: '2A498B' },
        { name: 'TailwindCSS', color: '2A598B' },
        { name: 'Framer Motion', color: '8B2A46' },
        { name: 'Bootstrap', color: '7952B3' },
    ];

    const backend = [
        { name: 'Node.js', color: '47A248' },
        { name: 'Express', color: '0C0D0F' },
        { name: 'MongoDB', color: '47A248' },
        { name: 'Socket.IO', color: '0C0D0F' },
        { name: 'Auth0', color: 'EB5424' },
        { name: 'PassportJS', color: '47A248' },
    ];

    return (
        <div>
            <h1 className="text-3xl font-semibold mb-3">About</h1>
            <p className="text-zinc-400 max-w-xl">About the creator of AeroUI</p>

            <h1 className='title'>About Developer</h1>
            <p className='para'>Hi, I am Rupam Das. A fullstack Web Developer and UI/UX designer having 3 years of experience in web development, MERN stack MongoDB, Express, ReactJS, NodeJS.</p>

            <div className='flex flex-col gap-10 mt-10'>
                <div>
                    {/* Frontend Section */}
                    <h2 className="text-2xl font-semibold mt-5">Frontend</h2>
                    <div className="w-full flex flex-wrap gap-3 mt-2">
                        {frontend.map((tech) => (
                            <img
                                key={tech.name}
                                className="h-8"
                                src={`https://img.shields.io/badge/${encodeURIComponent(
                                    tech.name
                                )}-${tech.color}?style=for-the-badge&logo=${encodeURIComponent(
                                    tech.name.replace(/\s+/g, '')
                                )}&logoColor=white`}
                                alt={`${tech.name} Badge`}
                            />
                        ))}
                    </div>
                </div>

                <div>
                    {/* Backend Section */}
                    <h2 className="text-2xl font-semibold mt-5">Backend</h2>
                    <div className="w-full flex flex-wrap gap-3 mt-2">
                        {backend.map((tech) => (
                            <img
                                key={tech.name}
                                className="h-8"
                                src={`https://img.shields.io/badge/${encodeURIComponent(
                                    tech.name
                                )}-${tech.color}?style=for-the-badge&logo=${encodeURIComponent(
                                    tech.name.replace(/\s+/g, '')
                                )}&logoColor=white`}
                                alt={`${tech.name} Badge`}
                            />
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;
