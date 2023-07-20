const questions = {
  response_code: 0,
  results: [
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "hard",
      question:
        "The Harvard architecture for micro-controllers added which additional bus?",
      correct_answer: "Instruction",
      incorrect_answers: ["Address", "Data", "Control"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "Which company was established on April 1st, 1976 by Steve Jobs, Steve Wozniak and Ronald Wayne?",
      correct_answer: "Apple",
      incorrect_answers: ["Microsoft", "Atari", "Commodore"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "In any programming language, what is the most common way to iterate through an array?",
      correct_answer: "(For)loops",
      incorrect_answers: ["(If)Statements", "(Do-while)loops", "(While)loops"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "What does CPU stand for?",
      correct_answer: "Central Processing Unit",
      incorrect_answers: [
        "Central Process Unit",
        "Computer Personal Unit",
        "Central Processor Unit",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "medium",
      question:
        "Moore(s law originally stated that the number of transistors on a microprocessor chip would double every...",
      correct_answer: "Year",
      incorrect_answers: ["Four Years", "Two Years", "Eight Years"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "medium",
      question: "When was the programming language (C#)released?",
      correct_answer: "2000",
      incorrect_answers: ["1998", "1999", "2001"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "HTML is what type of language?",
      correct_answer: "Markup Language",
      incorrect_answers: [
        "Macro Language",
        "Programming Language",
        "Scripting Language",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "medium",
      question:
        "What five letter word is the motto of the IBM Computer company?",
      correct_answer: "Think",
      incorrect_answers: ["Click", "Logic", "Pixel"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "Which computer hardware device provides an interface for all other connected devices to communicate?",
      correct_answer: "Motherboard",
      incorrect_answers: [
        "Central Processing Unit",
        "Hard Disk Drive",
        "Random Access Memory",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "medium",
      question: "On which computer hardware device is the BIOS chip located?",
      correct_answer: "Motherboard",
      incorrect_answers: [
        "Hard Disk Drive",
        "Central Processing Unit",
        "Graphics Processing Unit",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn(t get modified?",
      correct_answer: "Final",
      incorrect_answers: ["Static", "Private", "Public"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "medium",
      question:
        "Which of the following languages is used as a scripting language in the Unity 3D game engine?",
      correct_answer: "C#",
      incorrect_answers: ["Java", "C++", "Objective-C"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "If you were to code software in this language you(d only be able to type 0(s and 1(s.",
      correct_answer: "Binary",
      incorrect_answers: ["JavaScript", "C++", "Python"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "medium",
      question:
        "All of the following programs are classified as raster graphics editors EXCEPT:",
      correct_answer: "Inkscape",
      incorrect_answers: ["Paint.NET", "GIMP", "Adobe Photoshop"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "The series of the Intel HD graphics generation succeeding that of the 5000 and 6000 series (Broadwell) is called:",
      correct_answer: "HD Graphics 500",
      incorrect_answers: [
        "HD Graphics 700 ",
        "HD Graphics 600",
        "HD Graphics 7000",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "medium",
      question: "Nvidia(s headquarters are based in which Silicon Valley city?",
      correct_answer: "Santa Clara",
      incorrect_answers: ["Palo Alto", "Cupertino", "Mountain View"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "hard",
      question:
        "The internet domain .fm is the country-code top-level domain for which Pacific Ocean island nation?",
      correct_answer: "Micronesia",
      incorrect_answers: ["Fiji", "Tuvalu", "Marshall Islands"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "How many kilobytes in one gigabyte (in decimal)?",
      correct_answer: "1000000",
      incorrect_answers: ["1024", "1000", "1048576"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "medium",
      question: "In the server hosting industry IaaS stands for...",
      correct_answer: "Infrastructure as a Service",
      incorrect_answers: [
        "Internet as a Service",
        "Internet and a Server",
        "Infrastructure as a Server",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "medium",
      question:
        "What is the name of the default theme that is installed with Windows XP?",
      correct_answer: "Luna",
      incorrect_answers: ["Neptune", "Whistler", "Bliss"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "On Twitter, what was the original character limit for a Tweet?",
      correct_answer: "140",
      incorrect_answers: ["120", "160", "100"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "medium",
      question:
        "In the programming language (Python(, which of these statements would display the string (Hello World)correctly?",
      correct_answer: "print((Hello World()",
      incorrect_answers: [
        "console.log((Hello World()",
        "echo (Hello World(",
        "printf((Hello World()",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "medium",
      question:
        "In HTML, which non-standard tag used to be be used to make elements scroll across the viewport?",
      correct_answer: "&lt;marquee&gt;&lt;/marquee&gt;",
      incorrect_answers: [
        "&lt;scroll&gt;&lt;/scroll&gt;",
        "&lt;move&gt;&lt;/move&gt;",
        "&lt;slide&gt;&lt;/slide&gt;",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "medium",
      question:
        "In CSS, which of these values CANNOT be used with the (position)property?",
      correct_answer: "center",
      incorrect_answers: ["static", "absolute", "relative"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "hard",
      question:
        "Which of these was the name of a bug found in April 2014 in the publicly available OpenSSL cryptography library?",
      correct_answer: "Heartbleed",
      incorrect_answers: ["Shellshock", "Corrupted Blood", "Shellscript"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "In (Hexadecimal(, what color would be displayed from the color code? (#00FF00(?",
      correct_answer: "Green",
      incorrect_answers: ["Red", "Blue", "Yellow"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "medium",
      question:
        "In programming, the ternary operator is mostly defined with what symbol(s)?",
      correct_answer: "?:",
      incorrect_answers: ["??", "if then", "?"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "Which computer language would you associate Django framework with?",
      correct_answer: "Python",
      incorrect_answers: ["C#", "C++", "Java"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "What does LTS stand for in the software market?",
      correct_answer: "Long Term Support",
      incorrect_answers: [
        "Long Taco Service",
        "Ludicrous Transfer Speed",
        "Ludicrous Turbo Speed",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "medium",
      question: "In computing terms, typically what does CLI stand for?",
      correct_answer: "Command Line Interface",
      incorrect_answers: [
        "Common Language Input",
        "Control Line Interface",
        "Common Language Interface",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "medium",
      question: "What does (LCD)stand for?",
      correct_answer: "Liquid Crystal Display",
      incorrect_answers: [
        "Language Control Design",
        "Last Common Difference",
        "Long Continuous Design",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "medium",
      question: "Which operating system was released first?",
      correct_answer: "Mac OS",
      incorrect_answers: ["Windows", "Linux", "OS/2"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "medium",
      question: ".at is the top-level domain for what country?",
      correct_answer: "Austria",
      incorrect_answers: ["Argentina", "Australia", "Angola"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "medium",
      question: "What is known as (the brain)of the Computer?",
      correct_answer: "Central Processing Unit",
      incorrect_answers: [
        "Motherboard",
        "Graphics Processing Unit",
        "Keyboard",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "hard",
      question:
        "Which of the following is the oldest of these computers by release date?",
      correct_answer: "TRS-80",
      incorrect_answers: ["Commodore 64", "ZX Spectrum", "Apple 3"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "hard",
      question: "What internet protocol was documented in RFC 1459?",
      correct_answer: "IRC",
      incorrect_answers: ["HTTP", "HTTPS", "FTP"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "hard",
      question:
        "Which of these is not a key value of Agile software development?",
      correct_answer: "Comprehensive documentation",
      incorrect_answers: [
        "Individuals and interactions",
        "Customer collaboration",
        "Responding to change",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "The C programming language was created by this American computer scientist. ",
      correct_answer: "Dennis Ritchie",
      incorrect_answers: [
        "Tim Berners Lee",
        "al-Khw\u0101rizm\u012b",
        "Willis Ware",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "medium",
      question: "The name of technology company HP stands for what?",
      correct_answer: "Hewlett-Packard",
      incorrect_answers: ["Howard Packmann", "Husker-Pollosk", "Hellman-Pohl"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "hard",
      question: "What vulnerability ranked #1 on the OWASP Top 10 in 2013?",
      correct_answer: "Injection ",
      incorrect_answers: [
        "Broken Authentication",
        "Cross-Site Scripting",
        "Insecure Direct Object References",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "Which programming language shares its name with an island in Indonesia?",
      correct_answer: "Java",
      incorrect_answers: ["Python", "C", "Jakarta"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "medium",
      question: "What does RAID stand for?",
      correct_answer: "Redundant Array of Independent Disks",
      incorrect_answers: [
        "Rapid Access for Indexed Devices",
        "Range of Applications with Identical Designs",
        "Randomized Abstract Identification Description",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "In computing, what does LAN stand for?",
      correct_answer: "Local Area Network",
      incorrect_answers: [
        "Long Antenna Node",
        "Light Access Node",
        "Land Address Navigation",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "hard",
      question:
        "According to DeMorgan(s Theorem, the Boolean expression (AB))is equivalent to:",
      correct_answer: "A)+ B(",
      incorrect_answers: ["A(B + B(A", "A(B(", "AB)+ AB"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "medium",
      question: "What is the number of keys on a standard Windows Keyboard?",
      correct_answer: "104",
      incorrect_answers: ["64", "94", "76"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "hard",
      question: "What was the name of the first Bulgarian personal computer?",
      correct_answer: "IMKO-1",
      incorrect_answers: ["Pravetz 82", "Pravetz 8D", "IZOT 1030"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "medium",
      question:
        "Unix Time is defined as the number of seconds that have elapsed since when?",
      correct_answer: "Midnight, January 1, 1970",
      incorrect_answers: [
        "Midnight, July 4, 1976",
        "Midnight on the creator of Unix(s birthday",
        "Midnight, July 4, 1980",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "medium",
      question: "What does the (S)in the RSA encryption algorithm stand for?",
      correct_answer: "Shamir",
      incorrect_answers: ["Secure", "Schottky", "Stable"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "hard",
      question:
        "What is the codename of the eighth generation Intel Core micro-architecture launched in October 2017?",
      correct_answer: "Coffee Lake",
      incorrect_answers: ["Sandy Bridge", "Skylake", "Broadwell"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "hard",
      question:
        "Which kind of algorithm is Ron Rivest not famous for creating?",
      correct_answer: "Secret sharing scheme",
      incorrect_answers: [
        "Hashing algorithm",
        "Asymmetric encryption",
        "Stream cipher",
      ],
    },
  ],
}
export default questions
