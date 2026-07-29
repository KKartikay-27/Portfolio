import { useEffect, useRef } from 'react'

const EXPERIENCE = [
  {
    when: (<>MAY 2026 —<br /><span className="now">PRESENT</span></>),
    role: 'SDE Intern — Full-Stack & RL Environments',
    org: 'Scaler AI Labs',
    loc: '// Bengaluru',
    points: [
      <>Building production-grade <b>reinforcement-learning environments 0→1</b> for confidential enterprise AI clients with Next.js, FastAPI, TypeScript, SQLAlchemy & Docker.</>,
      <>Shipping across frontend, backend, DB design & containerized deploys in <b>2-week cycles</b>, with GitHub Actions CI/CD pushing images to AWS ECR.</>,
      <>Contributing across environments spanning communication, observability & financial-analytics platforms.</>,
    ],
  },
  {
    when: (<>MAR 2025 —<br />JUN 2025</>),
    role: 'SWE Intern — Data Automation & Applied ML',
    org: 'Undivided Capital · Project Kalam',
    loc: '// Bengaluru',
    points: [
      <>Engineered multi-source pipelines across Wellfound, GrowthList, Cloudways & RocketReach — <b>2,300+ startup records</b> at near-100% scraping success.</>,
      <>Built resilient browser automation (Selenium, PhantomBuster) handling retries, session invalidation & anti-bot constraints across long batches.</>,
      <>Structured <b>7K+ data points</b> for a founder-intelligence platform; sustained pipelines running <b>90+ hours</b> stably.</>,
    ],
  },
]

const PROJECTS = [
  {
    title: 'Intelligent RAG Assistant', date: "MAR–APR '26", tag: 'AI Engineering',
    points: [
      <>Built a <b>retrieval-augmented QA system over PDFs</b> with persistent vector storage & real-time querying.</>,
      <>Tuned retrieval strategies — <b>MMR vs. similarity, top-k, fetch-k</b> — to balance precision against context diversity.</>,
      <>Context-grounded prompting with explicit constraints to cut hallucinations & enforce faithfulness.</>,
      <>Built a <b>source-attribution pipeline</b> linking answers to retrieved chunks for transparency & debugging.</>,
      <>Analyzed failure cases & iteratively improved chunking + retrieval quality.</>,
    ],
    chips: ['LangChain', 'ChromaDB', 'Ollama', 'Streamlit'],
    link: 'https://github.com/KKartikay-27/intelligent-RAG-assistant',
  },
  {
    title: 'Project Kalam', date: "FEB–JUN '25", tag: 'Backend · Applied ML',
    points: [
      <>Built an <b>end-to-end founder-evaluation system</b> automating investment screening across <b>2,000+ profiles</b>.</>,
      <>Distributed scraping (Selenium, BeautifulSoup, PhantomBuster) with retry handling & robust failure recovery.</>,
      <>Feature-engineering pipelines turning qualitative VC heuristics into structured, model-ready ranking features.</>,
      <>Benchmarked <b>ML, rule-based & hybrid</b> ranking for consistent lead prioritization & scoring.</>,
    ],
    chips: ['Python', 'scikit-learn', 'Selenium', 'PhantomBuster'],
    link: null,
  },
  {
    title: 'In-Memory KV Store', date: "FEB–MAR '26", tag: 'Backend Infra · Systems',
    points: [
      <>Built a <b>high-performance in-memory KV store</b> serving concurrent TCP clients with efficient request handling.</>,
      <>Thread-safe access via <b>ConcurrentHashMap</b> with optimised synchronisation to minimise contention.</>,
      <><b>TTL-based eviction using priority queues</b> for lifecycle management of large key sets.</>,
      <>Evaluated single- vs. multi-threaded designs — latency, throughput & consistency trade-offs.</>,
    ],
    chips: ['Java', 'TCP', 'Concurrency', 'ExecutorService'],
    link: 'https://github.com/KKartikay-27/in-memory-key-value-store',
  },
  {
    title: 'LeetCode Helper', date: "FEB–APR '25", tag: 'AI Engineering',
    points: [
      <>Built an <b>AI coding assistant</b> generating context-aware hints via multi-step LLM reasoning pipelines.</>,
      <>Prompt architectures with controlled reasoning flows & output constraints to <b>prevent solution leakage</b>.</>,
      <>Session-aware context management for consistent multi-turn interactions.</>,
      <>Iteratively refined prompts from failure cases (over-revealing, wrong reasoning paths).</>,
    ],
    chips: ['React', 'Node.js', 'Express', 'LLM APIs'],
    link: 'https://github.com/KKartikay-27/leetcode-helper',
  },
]

const STACK = [
  ['Languages', ['Java', 'Python', 'JavaScript', 'TypeScript', 'Bash']],
  ['Backend / APIs', ['FastAPI', 'Node.js', 'Express', 'REST', 'SQLAlchemy', 'JWT', 'WebSockets']],
  ['AI / LLM', ['LangChain', 'Ollama', 'ChromaDB', 'RAG', 'Prompt Eng', 'Context Mgmt']],
  ['Data / ML', ['scikit-learn', 'Pandas', 'NumPy', 'Feature Eng', 'Pipelines']],
  ['Distributed / Systems', ['Multithreading', 'Concurrency', 'HDFS', 'Spark', 'Hive']],
  ['Frontend', ['React', 'Next.js', 'React Native', 'Tailwind', 'Streamlit']],
  ['DevOps', ['Docker', 'GitHub Actions', 'AWS ECR', 'CI/CD', 'Linux', 'Git']],
]

const SHead = ({ no, children }) => (
  <div className="shead reveal"><span className="no">{no}</span><h2>{children}</h2><span className="rule" /></div>
)

export default function App() {
  const canvasRef = useRef(null)
  const heroRef = useRef(null)

  // Quiet drifting constellation
  useEffect(() => {
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
    const cv = canvasRef.current
    const hero = heroRef.current
    if (!cv || !hero) return
    const ctx = cv.getContext('2d')
    let W, H, dpr, nodes = [], raf = 0
    const mouse = { x: -999, y: -999 }
    let seed = 99
    const rand = (a, b) => { seed = (seed * 9301 + 49297) % 233280; return a + (seed / 233280) * (b - a) }
    const size = () => {
      const r = hero.getBoundingClientRect(); dpr = Math.min(window.devicePixelRatio || 1, 2)
      W = r.width; H = r.height; cv.width = W * dpr; cv.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    const initNodes = () => {
      const count = Math.max(22, Math.min(50, Math.floor(W * H / 32000))); nodes = []
      for (let i = 0; i < count; i++) nodes.push({ x: rand(0, W), y: rand(0, H), vx: rand(-.14, .14), vy: rand(-.14, .14) })
    }
    const onMove = (e) => { const r = cv.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top }
    const onLeave = () => { mouse.x = mouse.y = -999 }
    hero.addEventListener('pointermove', onMove)
    hero.addEventListener('pointerleave', onLeave)
    const D = 140
    const frame = () => {
      ctx.clearRect(0, 0, W, H)
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i]; n.x += n.vx; n.y += n.vy
        if (n.x < 0) n.x = W; if (n.x > W) n.x = 0; if (n.y < 0) n.y = H; if (n.y > H) n.y = 0
        if (mouse.x > -100) { const mdx = mouse.x - n.x, mdy = mouse.y - n.y, md = Math.hypot(mdx, mdy); if (md < 130) { n.x -= mdx / md * 0.25; n.y -= mdy / md * 0.25 } }
      }
      for (let a = 0; a < nodes.length; a++) {
        for (let b = a + 1; b < nodes.length; b++) {
          const d = Math.hypot(nodes[a].x - nodes[b].x, nodes[a].y - nodes[b].y)
          if (d < D) { ctx.strokeStyle = 'rgba(40,230,255,' + (0.10 * (1 - d / D)) + ')'; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(nodes[a].x, nodes[a].y); ctx.lineTo(nodes[b].x, nodes[b].y); ctx.stroke() }
        }
        ctx.fillStyle = 'rgba(150,170,255,.35)'; ctx.beginPath(); ctx.arc(nodes[a].x, nodes[a].y, 1.3, 0, 6.29); ctx.fill()
      }
      raf = requestAnimationFrame(frame)
    }
    const staticDraw = () => {
      ctx.clearRect(0, 0, W, H)
      for (let a = 0; a < nodes.length; a++) { ctx.fillStyle = 'rgba(150,170,255,.35)'; ctx.beginPath(); ctx.arc(nodes[a].x, nodes[a].y, 1.3, 0, 6.29); ctx.fill() }
    }
    size(); initNodes(); reduce ? staticDraw() : frame()
    let rt
    const onResize = () => { clearTimeout(rt); rt = setTimeout(() => { size(); initNodes(); if (reduce) staticDraw() }, 160) }
    window.addEventListener('resize', onResize)
    return () => { cancelAnimationFrame(raf); clearTimeout(rt); window.removeEventListener('resize', onResize); hero.removeEventListener('pointermove', onMove); hero.removeEventListener('pointerleave', onLeave) }
  }, [])

  // Scroll reveal
  useEffect(() => {
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
    const items = document.querySelectorAll('.reveal')
    if (!('IntersectionObserver' in window) || reduce) { items.forEach(el => el.classList.add('in')); return }
    const io = new IntersectionObserver((es) => {
      es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } })
    }, { threshold: .12 })
    items.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  // Card spotlight
  useEffect(() => {
    if (!matchMedia('(pointer:fine)').matches) return
    const cards = Array.from(document.querySelectorAll('.card'))
    const handlers = cards.map(card => {
      const h = (e) => { const r = card.getBoundingClientRect(); card.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100) + '%'); card.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100) + '%') }
      card.addEventListener('pointermove', h); return [card, h]
    })
    return () => handlers.forEach(([card, h]) => card.removeEventListener('pointermove', h))
  }, [])

  // Console greeting
  useEffect(() => {
    try {
      console.log('%cKUMAR KARTIKAY', 'color:#28e6ff;font-size:26px;font-weight:900')
      console.log('%c→ github.com/KKartikay-27   → linkedin.com/in/kkartikay', 'color:#8a8db4;font-size:12px')
    } catch (_) {}
  }, [])

  return (
    <>
      <header className="hero" id="hero" ref={heroRef}>
        <canvas id="env" ref={canvasRef} />
        <div className="hero-content">
          <div className="eyebrow"><span className="pulse" /> BENGALURU, IN</div>
          <h1 className="name">Kumar Kartikay</h1>
          <p className="tag">I build <span className="c">backend</span> and <span className="m">ML</span> systems — <span className="l">RL environments</span>, retrieval pipelines and concurrent services.</p>
          <p className="sub">I'm an SDE intern at Scaler AI Labs, helping build reinforcement-learning environments for enterprise AI clients. I work across the frontend, backend, database, and Docker deployments — mostly on the parts that need to keep working once they're in production.</p>
          <div className="btns">
            <a className="btn solid" href="#contact">Get in touch</a>
            <a className="btn" href="#work">See the work</a>
          </div>
        </div>
        <div className="scrolldown"><span>scroll</span><span className="ln" /></div>
      </header>

      <div className="wrap">
        <section className="blk" id="about">
          <SHead no="01">About</SHead>
          <p className="lead reveal">I'm a computer science student who enjoys building backend and ML systems — the kind of work where things have to keep running once real usage hits them. Over the last couple of years I've built retrieval pipelines, a concurrent key-value store, and data pipelines that ran for days without falling over. I'm still learning a lot, but I try to write code that's reliable and easy to reason about, and to ship steadily rather than chase perfect.</p>
        </section>

        <section className="blk" id="experience">
          <SHead no="02">Experience</SHead>
          <div className="tl">
            {EXPERIENCE.map((x, i) => (
              <article className="row reveal" key={i}>
                <div className="when">{x.when}</div>
                <div>
                  <h3>{x.role}</h3>
                  <div className="org">{x.org} <span className="loc">{x.loc}</span></div>
                  <ul>{x.points.map((p, j) => <li key={j}>{p}</li>)}</ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="blk" id="work">
          <SHead no="03">Selected Work</SHead>
          <div className="pgrid">
            {PROJECTS.map((p, i) => (
              <article className="card reveal" key={i}>
                <div className="spot" />
                <div className="ptop"><h3>{p.title}</h3><span className="date">{p.date}</span></div>
                <span className="ptag">{p.tag}</span>
                <ul>{p.points.map((pt, j) => <li key={j}>{pt}</li>)}</ul>
                <div className="chips">{p.chips.map(c => <span className="chip" key={c}>{c}</span>)}</div>
                {p.link && <a className="plink" href={p.link} target="_blank" rel="noopener noreferrer">View on GitHub ↗</a>}
              </article>
            ))}
          </div>
        </section>

        <section className="blk" id="stack">
          <SHead no="04">Stack</SHead>
          <div className="stackgrid reveal">
            {STACK.map(([cat, vals]) => (
              <div className="stackcard" key={cat}>
                <h4>{cat}</h4>
                <div className="svals">{vals.map(v => <span key={v}>{v}</span>)}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="blk" id="education">
          <SHead no="05">Education</SHead>
          <div className="edu">
            <div className="ecard reveal"><h3>Scaler School of Technology</h3><div className="p">UG · Computer Science · 2023–Present · Bangalore</div></div>
            <div className="ecard reveal"><h3>BITS Pilani</h3><div className="p">B.Sc. (Hons.) CS · 2023–Present · Distance</div></div>
          </div>
        </section>

        <section className="blk contact" id="contact">
          <SHead no="06">Get in touch</SHead>
          <p className="cbig reveal"><a href="mailto:kumarkartikay005@gmail.com">let's build →</a></p>
          <div className="btns reveal">
            <a className="btn solid" href="mailto:kumarkartikay005@gmail.com">kumarkartikay005@gmail.com</a>
            <a className="btn mag" href="https://github.com/KKartikay-27/" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
            <a className="btn mag" href="https://www.linkedin.com/in/kkartikay/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
          </div>
        </section>
      </div>

      <footer><div className="wrap"><div className="fmeta"><span>Bengaluru, IN</span></div></div></footer>
    </>
  )
}
