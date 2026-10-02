import Navbar from './Navbar';

const API = process.env.API_URL || 'http://localhost:4000';
async function getData() {
  const r = await fetch(`${API}/api/portfolio`, { cache: 'no-store' });
  if (!r.ok) throw new Error('API unavailable');
  return r.json();
}
const H = ({ n, t }: { n: string; t: string }) => <h2 className="h2"><span>{n}</span>{t}</h2>;

export default async function Home() {
  const d = await getData();
  const c = d.contact;
  return (
    <>
      <Navbar />
      <main>
        <section className="hero">
          <div className="bg grid" /><div className="bg nodes" />
          <div className="heroText">
            <p className="mono green"> who am i</p>
            <h1>{d.name}</h1>
            <h3>{d.title}</h3>
            <p className="lead">Computer Science and Engineering (Cyber Security) student focused on ethical hacking, penetration testing, network security and security engineering — from vulnerability assessment to technical security reports.</p>

            {/* Profile pic between title and buttons (visible ONLY on mobile) */}
            <div className="profile-container mobile-only">
              <div className="profile-avatar-wrap">
                <img
                  src="/profile.jpg"
                  alt="Adnan Shanavas — Cyber Security Engineer"
                  className="profile-img"
                />
                <span className="profile-badge mono">● VERIFIED</span>
              </div>
            </div>
            <div className="btns">
              <a className="btn primary" href="#projects">View Projects</a>
              <a className="btn" href="#experience">View Experience</a>
              <a className="btn" href="#contact">Contact Me</a>
            </div>
            <div className="socials mono">
              {c.github && <a href={`https://${c.github}`} target="_blank" rel="noopener noreferrer">GitHub</a>}
              {c.linkedin && <a href={`https://${c.linkedin}`} target="_blank" rel="noopener noreferrer">LinkedIn</a>}
              {c.email && <a href={`mailto:${c.email}`}>Email</a>}
              {c.phone && <a href={`tel:${c.phone.replace(/\s/g, '')}`}>{c.phone}</a>}
            </div>
          </div>
          <div className="profile-container desktop-only">
            <div className="profile-avatar-wrap">
              <img
                src="/profile.jpg"
                alt="Adnan Shanavas — Cyber Security Engineer"
                className="profile-img"
              />
              <span className="profile-badge mono">● VERIFIED</span>
            </div>
          </div>
        </section>

        <section id="about"><H n="01" t="Professional Profile" />
          <div className="cards3">
            {[['🔐', 'Cybersecurity focus', 'Security engineering across web apps and network services.'],
            ['🕵️', 'Ethical hacking', 'Vulnerability assessment and penetration testing.'],
            ['📡', 'Network reconnaissance', 'Port scanning, enumeration and traffic analysis.'],
            ['🧰', 'Security tools', 'Nmap, Wireshark, Burp Suite, Kali Linux, Metasploit.'],
            ['💻', 'Programming', 'Python, C and Java.'],
            ['🤝', 'Leadership & teamwork', 'Coordinated Scratch Workshop, Codestorm and Innovision 2k25.']]
              .map(([i, t, p]) => <div className="glass card" key={t}><span className="ico">{i}</span><h4>{t}</h4><p>{p}</p></div>)}
          </div></section>

        <section id="skills"><H n="02" t="Skills" />
          <p className="mono green">Technical</p>
          <div className="chips">{d.skills.technical.map((s: string) => <span className="chip cyan" key={s}>{s}</span>)}</div>
          <p className="mono green">Interpersonal</p>
          <div className="chips">{d.skills.soft.map((s: string) => <span className="chip" key={s}>{s}</span>)}</div></section>

        <section id="experience"><H n="03" t="Experience" />
          <div className="timeline">{d.experience.map((e: any) => (
            <div className="tl glass" key={e.org}>
              <span className="dot" />
              <p className="mono green">{e.when} · {e.where}</p>
              <h3>{e.role} — {e.org}</h3>
              <ul>{e.points.map((p: string) => <li key={p}>{p}</li>)}</ul>
              <div className="chips">{e.tags.map((t: string) => <span className="chip sm" key={t}>{t}</span>)}</div>
            </div>))}</div></section>

        <section id="projects"><H n="04" t="Projects" />
          <div className="projects">
            {d.projects.map((p: any) => (
              <article className="glass proj" key={p.id}>
                <div className="viz">
                  {p.id === 'phishing' ? (
                    <div className="dash mono">
                      <div className="row bad">
                        <span className="row-url">⚠ http://secure-login.verify-acc0unt.xyz</span>
                        <b className="badge-tag">UNSAFE</b>
                      </div>
                      <div className="row ok">
                        <span className="row-url">✓ https://github.com</span>
                        <b className="badge-tag">SECURE</b>
                      </div>
                      <div className="bar"><i style={{ width: '98%' }} /></div>
                      <small>Random Forest · phishing probability</small>
                    </div>
                  ) : (
                    <div className="dash mono center">
                      <div className="lock">🔒</div>
                      <div className="row row-crypto">
                        <span>report.docx</span>
                        <span className="crypto-arrow">→</span>
                        <b>report.docx.enc</b>
                      </div>
                      <div className="row row-crypto-info">
                        <span>Password ••••••••</span>
                        <span>AES256 · SHA256</span>
                      </div>
                      <div className="btns center-btns">
                        <span className="chip sm cyan">Encrypt</span>
                        <span className="chip sm">Decrypt</span>
                      </div>
                    </div>
                  )}
                </div>
                <h3>{p.title}</h3>
                <p className="mono green">Team Size: {p.team}</p>
                <p>{p.desc}</p>
                <div className="chips">{p.tech.map((t: string) => <span className="chip sm cyan" key={t}>{t}</span>)}</div>
              </article>))}
          </div></section>

        <section id="events"><H n="05" t="Events & Achievements" />
          <div className="cards3">{d.events.map((e: any) => (
            <div className="glass ev" key={e.title}>
              <div className="evArt">{e.icon}</div>
              <p className="mono green">{e.role}</p>
              <h4>{e.title}</h4>
              <p className="stat"><b>{e.stat}</b> {e.statLabel}</p>
            </div>))}</div></section>

        <section id="education"><H n="06" t="Education" />
          <div className="glass edu"><span className="ico">🎓</span>
            <div><h3>{d.education.degree}</h3><p>{d.education.school}</p>
              <p className="mono green">{d.education.years}</p></div></div>
          <H n="07" t="Courses & Certifications" />
          <div className="cards3">{d.courses.map((x: any) => (
            <div className="glass card" key={x.name}><h4>{x.name}</h4><p className="mono green">{x.issuer}</p>{x.note && <p>{x.note}</p>}</div>))}</div></section>

        <section id="stack"><H n="08" t="Technology Ecosystem" />
          <div className="flow">{d.ecosystem.map((t: string, i: number) => (
            <span key={t} className="node">{t}{i < d.ecosystem.length - 1 && <em>→</em>}</span>))}</div></section>

        <section><H n="09" t="Languages" />
          <div className="chips">{d.languages.map((l: string) => <span className="chip" key={l}>{l}</span>)}</div></section>

        <footer id="contact"><H n="10" t="Contact" />
          <h3>Adnan Shanavas</h3><p>Cyber Security Engineer</p>
          <div className="contacts mono">
            {c.email && (
              <a href={`mailto:${c.email}`} className="contact-btn">
                <span className="contact-icon">✉</span>
                <span className="contact-text">{c.email}</span>
              </a>
            )}
            {c.linkedin && (
              <a
                href={`https://${c.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-btn"
              >
                <span className="contact-icon">in</span>
                <span className="contact-text">{c.linkedin}</span>
              </a>
            )}
            {c.github && (
              <a
                href={`https://${c.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-btn"
              >
                <span className="contact-icon">⌥</span>
                <span className="contact-text">{c.github}</span>
              </a>
            )}
            {c.phone && (
              <a href={`tel:${c.phone.replace(/\s/g, '')}`} className="contact-btn">
                <span className="contact-icon">☎</span>
                <span className="contact-text">{c.phone}</span>
              </a>
            )}
          </div></footer>
      </main>
    </>
  );
}
