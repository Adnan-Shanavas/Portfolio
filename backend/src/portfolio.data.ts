// Source of truth: Adnan_Resume_Final.pdf. Do not add facts that are not in the resume.
export const portfolio = {
  name: 'ADNAN SHANAVAS',
  title: 'CYBER SECURITY ENGINEER',
  contact: {
    email: 'adnanashanavas7@gmail.com',
    linkedin: 'linkedin.com/adnan-shanavas-b67056342',
    github: 'github.com/adnan-shanavas',
  },
  skills: {
    technical: ['Python', 'C', 'Java', 'Cybersecurity', 'Wireshark', 'Burp Suite', 'GitHub', 'VS Code'],
    soft: ['Leadership', 'Team Work', 'Hard Work', 'Script Writing', 'Critical Thinking', 'Creative Thinking', 'Decision Making'],
  },
  education: { degree: 'B.Tech in Computer Science and Engineering (Cyber Security)', school: 'Ilahia College of Engineering and Technology', years: '2023 – 2027', gpa: '5.87/10' },
  experience: [
    {
      role: 'Ethical Hacking Intern', org: 'Techmagie', when: 'July 2026 – Ongoing', where: 'Remote',
      points: ['Performed vulnerability assessment and penetration testing on web applications and network services.',
        'Conducted reconnaissance and enumeration using Nmap, Wireshark, and Burp Suite.',
        'Assisted in exploit validation using the Metasploit Framework and prepared technical security reports.'],
      tags: ['Vulnerability Assessment', 'Penetration Testing', 'Web Application Security', 'Network Services', 'Nmap', 'Wireshark', 'Burp Suite', 'Metasploit Framework', 'Technical Security Reports']
    },
    {
      role: 'Cyber Security Intern', org: 'GENZEE Technologies', when: 'July 2024 (2 weeks)', where: 'Kochi, Kerala',
      points: ['Performed network reconnaissance and port scanning using Nmap and analyzed traffic with Wireshark.',
        'Gained hands-on experience with Kali Linux, Burp Suite.',
        'Documented findings and presented remediation recommendations for identified security issues.'],
      tags: ['Network Reconnaissance', 'Port Scanning', 'Nmap', 'Wireshark', 'Kali Linux', 'Burp Suite', 'Security Findings', 'Remediation Recommendations']
    },
  ],
  projects: [
    {
      id: 'phishing', title: 'ML-Based Phishing Link Detector', team: 3, highlight: '98% accuracy across evaluation metrics',
      desc: 'Engineered a high-performance predictive model achieving 98% accuracy across evaluation metrics.',
      tech: ['Python', 'Random Forest', 'HTML / JS / CSS', 'FastAPI']
    },
    {
      id: 'crypto', title: 'Password Based File Encryption and Decryption System', team: 3, highlight: 'Encrypt and decrypt files',
      desc: 'Developed a Python-based tool to Encrypt and Decrypt Files.',
      tech: ['Python', 'Tkinter', 'AES256', 'SHA256']
    },
  ],
  events: [
    { title: '7 Day Training at Steam Robotics', role: 'Trainee', stat: '2+', statLabel: 'programming languages exposure', icon: '🤖' },
    { title: 'Scratch Workshop', role: 'Coordinator', stat: '35+', statLabel: 'students participated', icon: '🧩' },
    { title: 'Codestorm', role: 'Coordinator', stat: '20+', statLabel: 'teams participated', icon: '⌨️' },
    { title: 'Innovision 2k25', role: 'Coordinator', stat: '100+', statLabel: 'students participated', icon: '🏟️' },
    { title: 'AI Jump Start Workshop', role: 'Attendee', stat: '50+', statLabel: 'students', icon: '🧠' },
    { title: 'State Level Cybersecurity Quiz', role: 'Participant', stat: '60+', statLabel: 'students participated', icon: '🛡️' },
  ],
  courses: [
    { name: 'SQL Injection Attacks', issuer: 'EC-Council', note: 'Exposure to 2+ Injection Tools' },
    { name: 'Introduction to Cyber Security', issuer: 'CISCO', note: '' },
  ],
  ecosystem: ['Python', 'Cybersecurity', 'Nmap', 'Wireshark', 'Burp Suite', 'Kali Linux', 'Metasploit', 'FastAPI', 'Random Forest', 'AES256', 'SHA256', 'GitHub', 'VS Code'],
  languages: ['English', 'Malayalam', 'Tamil', 'Hindi'],
};
