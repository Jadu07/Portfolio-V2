const contacts = [
    {
      title: 'LinkedIn',
      value: 'View Account',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg',
      link: 'https://www.linkedin.com/in/yash-raj-chouhan',
      bg: 'bg-blue-100',
    },
    {
      title: 'Instagram',
      value: 'View Account',
      icon: 'https://cdn-icons-png.flaticon.com/512/174/174855.png',
      link: 'https://www.instagram.com/_jadu_._',
      bg: 'bg-pink-100',
    },
    {
      title: 'Email',
      value: 'Send Mail',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png',
      link: 'mailto:yashrajchouhan14@gmail.com',
      bg: 'bg-red-100',
    },
    {
      title: 'Phone',
      value: '+91 9131211880',
      icon: 'https://cdn-icons-png.flaticon.com/512/134/134946.png',
      link: 'tel:+919131211880',
      bg: 'bg-green-100',
    },
  ];
  
  export default function Contact() {
    return (
      <section className="w-full min-h-screen flex items-center bg-white">
        <div className="w-[90%] max-w-5xl mx-auto py-20">
          <div className="space-y-4 text-center md:text-left mb-12">
            <h2 className="text-2xl font-medium text-gray-500 mb-2">Get in Touch</h2>
            <h1 className="text-5xl font-bold text-gray-900">Contact Me</h1>
            <div className="h-1 w-100 bg-black rounded-full mx-auto md:mx-0"></div>
            <p className="text-lg text-gray-700 mt-4">
              Feel free to reach out for collaborations or just a friendly hello 😄
            </p>
          </div>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {contacts.map((contact, index) => (
              <a
                key={index}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/70 backdrop-blur-md border border-zinc-200 rounded-xl p-6 
                         shadow-sm hover:shadow-md transition-all duration-300 
                         transform hover:-translate-y-1"
              >
                <div className={`w-14 h-14 mx-auto rounded-xl flex items-center justify-center mb-4 ${contact.bg}`}>
                  <img 
                    src={contact.icon} 
                    alt={contact.title} 
                    className="w-7 h-7 object-contain" 
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {contact.title}
                  </h3>
                  <p className="text-sm text-gray-500 font-medium break-all">
                    {contact.value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    );
  }