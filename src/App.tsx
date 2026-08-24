import { profile, sections, socials } from './data'
import type { Entry } from './data'
import { Icon, MoonIcon, SunIcon } from './Icons'
import { useTheme } from './useTheme'

function EntryRow({ entry }: { entry: Entry }) {
  const notes =
    entry.note === undefined ? [] : Array.isArray(entry.note) ? entry.note : [entry.note]

  const line = (
    <>
      {entry.name && <span className="entry-name">{entry.name}</span>}
      {entry.name && <span className="entry-dash"> — </span>}
      <span className="entry-title">{entry.title}</span>
    </>
  )

  return (
    <li className="entry">
      <div className="entry-line">
        <span className="arrow" aria-hidden>
          ↳
        </span>
        {entry.href ? (
          <a className="entry-link entry-body" href={entry.href} target="_blank" rel="noreferrer">
            {line}
            <span className="entry-arrow" aria-hidden>
              ↗
            </span>
          </a>
        ) : (
          <span className="entry-body">{line}</span>
        )}
        {entry.tag && <span className="tag">{entry.tag}</span>}
      </div>
      {notes.map((note) => (
        <div className="entry-note" key={note}>
          <span className="arrow" aria-hidden>
            ↳
          </span>
          <span>{note}</span>
        </div>
      ))}
    </li>
  )
}

export default function App() {
  const { theme, toggle } = useTheme()

  return (
    <main className="page">
      <header className="header">
        <div>
          <h1 className="name">
            {profile.name}
            <span className="cursor" aria-hidden />
          </h1>
          {profile.tagline && <p className="tagline">{profile.tagline}</p>}
        </div>

        <nav className="socials" aria-label="Links">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="social"
              aria-label={s.label}
              title={s.label}
              target={s.href.startsWith('mailto:') ? undefined : '_blank'}
              rel="noreferrer"
            >
              <Icon name={s.icon} />
            </a>
          ))}
          <button
            className="social"
            onClick={toggle}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? <MoonIcon /> : <SunIcon />}
          </button>
        </nav>
      </header>

      {sections.map((section, i) => (
        <section
          className="section"
          key={section.label}
          style={{ animationDelay: `${80 + i * 70}ms` }}
        >
          <h2 className="section-label">
            <span className="bullet" aria-hidden>
              ◆
            </span>
            <span>{section.label}:</span>
          </h2>
          <ul className="entries">
            {section.entries.map((entry) => (
              <EntryRow key={entry.name ?? entry.title} entry={entry} />
            ))}
          </ul>
        </section>
      ))}

      <footer className="footer">
        <span>© {new Date().getFullYear()} {profile.name}</span>
      </footer>
    </main>
  )
}
