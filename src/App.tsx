import { useEffect, useState } from 'react'
import {
  ArrowRight,
  Award,
  BadgeCheck,
  CalendarClock,
  ChevronDown,
  Clock3,
  Heart,
  HeartHandshake,
  Languages,
  LockKeyhole,
  Mail,
  MapPinned,
  MapPin,
  Menu,
  MessageCircleHeart,
  Moon,
  ShieldCheck,
  Star,
  UsersRound,
} from 'lucide-react'
import { homeByLocale, localeOptions, type HomeContent, type Locale } from './content/home'
import brandMark from './assets/doula/brand-mark.png'
import './App.css'

const fieldIcons = [HeartHandshake, CalendarClock, MapPin, Languages, Moon]
const trustIcons = [ShieldCheck, UsersRound, HeartHandshake, LockKeyhole]
const navTargets = ['find-support', 'how-it-works', 'for-providers', 'resources', 'about-us']

function getInitialLocale(): Locale {
  if (typeof window === 'undefined') {
    return 'en'
  }

  const requestedLocale = new URLSearchParams(window.location.search).get('lang')
  return localeOptions.some((option) => option.code === requestedLocale)
    ? (requestedLocale as Locale)
    : 'en'
}

function Logo({ home }: { home: HomeContent }) {
  return (
    <a className="logo" href="#top" aria-label="Doula home">
      <img className="logo-mark" src={brandMark} alt="" aria-hidden="true" />
      <span>{home.brand.name}</span>
    </a>
  )
}

function LanguageSwitcher({
  locale,
  setLocale,
  label,
}: {
  locale: Locale
  setLocale: (locale: Locale) => void
  label: string
}) {
  return (
    <div className="language-switcher" aria-label={label}>
      {localeOptions.map((option) => (
        <button
          aria-label={option.ariaLabel}
          aria-pressed={locale === option.code}
          className={locale === option.code ? 'active' : undefined}
          key={option.code}
          onClick={() => setLocale(option.code)}
          type="button"
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}

function Header({
  home,
  locale,
  setLocale,
}: {
  home: HomeContent
  locale: Locale
  setLocale: (locale: Locale) => void
}) {
  return (
    <header className="site-header">
      <Logo home={home} />
      <nav className="desktop-nav" aria-label="Primary navigation">
        {home.nav.primary.map((item, index) => (
          <a key={item} href={`#${navTargets[index]}`}>
            {item}
          </a>
        ))}
      </nav>
      <div className="header-actions">
        <LanguageSwitcher label={home.nav.languageLabel} locale={locale} setLocale={setLocale} />
        <a href="#login" className="login-link">
          {home.nav.login}
        </a>
        <a href="#match" className="button button-clay button-small">
          {home.nav.cta}
        </a>
        <button className="menu-button" type="button" aria-label={home.nav.openMenu}>
          <Menu size={22} />
        </button>
      </div>
    </header>
  )
}

function Hero({
  home,
  locale,
  setLocale,
}: {
  home: HomeContent
  locale: Locale
  setLocale: (locale: Locale) => void
}) {
  return (
    <section className="hero-section" id="top">
      <Header home={home} locale={locale} setLocale={setLocale} />
      <img className="hero-image" src={home.hero.image} alt="" loading="eager" decoding="sync" />
      <div className="hero-overlay" />
      <div className="container hero-content">
        <div className="hero-copy">
          <h1>{home.hero.headline}</h1>
          <p>{home.hero.copy}</p>
          <div className="hero-buttons">
            <a href="#match" className="button button-clay">
              {home.hero.primaryCta}
            </a>
            <a href="#providers" className="button button-outline">
              {home.hero.secondaryCta}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function MatchPanel({ home }: { home: HomeContent }) {
  return (
    <section className="container match-shell" id="match" aria-label="Find a match">
      <div className="match-panel">
        <div className="match-fields">
          {home.matchPanel.fields.map((field, index) => {
            const Icon = fieldIcons[index]
            return (
              <button className="match-field" type="button" key={field.label}>
                <span className="field-icon" aria-hidden="true">
                  <Icon size={19} />
                </span>
                <span className="field-text">
                  <strong>{field.label}</strong>
                  <span>
                    {field.value}
                    <ChevronDown size={15} aria-hidden="true" />
                  </span>
                </span>
              </button>
            )
          })}
          <a href="#providers" className="button button-olive match-cta">
            {home.matchPanel.cta}
          </a>
        </div>
        <p className="scope-note">
          <ShieldCheck size={15} aria-hidden="true" />
          {home.matchPanel.note}
        </p>
      </div>
    </section>
  )
}

function ProviderGrid({ home }: { home: HomeContent }) {
  return (
    <section className="container section-block providers" id="providers">
      <div className="section-heading split-heading">
        <div>
          <span className="eyebrow">{home.providers.eyebrow}</span>
          <h2>{home.providers.title}</h2>
        </div>
        <a className="text-link" href="#all-providers">
          {home.providers.link}
          <ArrowRight size={17} aria-hidden="true" />
        </a>
      </div>
      <div className="provider-grid">
        {home.providers.items.map((provider) => (
          <article className="provider-card" key={provider.name}>
            <div className="provider-photo">
              <img
                src={provider.image}
                alt={`${provider.name}, ${provider.role}`}
                loading="eager"
                decoding="sync"
              />
              <button
                type="button"
                aria-label={`${home.providerLabels.save} ${provider.name}`}
                className="save-button"
              >
                <Heart size={24} />
              </button>
              <span className="provider-rating">
                <Star size={15} fill="currentColor" aria-hidden="true" />
                {provider.rating}
              </span>
            </div>
            <div className="provider-body">
              <div className="provider-title-row">
                <div>
                  <h3>{provider.name}</h3>
                  <p className="provider-role">{provider.role}</p>
                </div>
                <span>{provider.reviews}</span>
              </div>
              <div className="provider-mobile-summary" aria-label={`${provider.name} quick details`}>
                <span>
                  <Star size={14} fill="currentColor" aria-hidden="true" />
                  {provider.rating}
                </span>
                <span>
                  <MapPinned size={14} aria-hidden="true" />
                  {provider.location}
                </span>
                <span>
                  <Award size={14} aria-hidden="true" />
                  {provider.rate}
                </span>
                <a href="#match">{home.providerLabels.requestIntro}</a>
              </div>
              <div className="chips">
                {provider.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className="provider-detail-grid">
                <span>
                  <MapPinned size={16} aria-hidden="true" />
                  <small>{home.providerLabels.area}</small>
                  <strong>{provider.location}</strong>
                </span>
                <span>
                  <Languages size={16} aria-hidden="true" />
                  <small>{home.providerLabels.languages}</small>
                  <strong>{provider.languages}</strong>
                </span>
                <span>
                  <Clock3 size={16} aria-hidden="true" />
                  <small>{home.providerLabels.response}</small>
                  <strong>{provider.response}</strong>
                </span>
              </div>
              <p className="provider-quote">
                <MessageCircleHeart size={16} aria-hidden="true" />
                <span>{provider.quote}</span>
              </p>
              <div className="credential-row">
                {provider.credentials.slice(0, 2).map((credential) => (
                  <span key={credential}>{credential}</span>
                ))}
              </div>
              <div className="provider-meta">
                <span>
                  <Award size={17} aria-hidden="true" />
                  <small>{home.providerLabels.rate}</small>
                  <strong>{provider.rate}</strong>
                </span>
                <span>
                  <BadgeCheck size={17} aria-hidden="true" />
                  <small>{home.providerLabels.nextOpening}</small>
                  <strong>{provider.availability}</strong>
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function TrustStrip({ home }: { home: HomeContent }) {
  return (
    <section className="trust-strip">
      <div className="container">
        <span className="eyebrow trust-eyebrow">{home.trust.eyebrow}</span>
        <h2>{home.trust.title}</h2>
        <div className="trust-stats" aria-label="Doula platform stats">
          {home.trust.stats.map((stat) => (
            <span key={stat.label}>
              <strong>{stat.value}</strong>
              {stat.label}
            </span>
          ))}
        </div>
        <div className="trust-grid">
          {home.trust.items.map((item, index) => {
            const Icon = trustIcons[index]
            return (
              <article key={item.title} className="trust-item">
                <Icon size={31} aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function CareCategories({ home }: { home: HomeContent }) {
  return (
    <section className="container section-block care-section" id="find-support">
      <div className="section-heading center-heading">
        <h2>{home.care.title}</h2>
      </div>
      <div className="care-grid">
        {home.care.items.map((item) => (
          <article className="care-card" key={item.title}>
            <img src={item.image} alt="" loading="eager" decoding="sync" />
            <span>{item.detail}</span>
            <h3>{item.title}</h3>
            <p>{item.copy}</p>
            <a href="#care-details">
              {home.care.link}
              <ArrowRight size={15} aria-hidden="true" />
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

function HowItWorks({ home }: { home: HomeContent }) {
  return (
    <section className="section-block how-section" id="how-it-works">
      <div className="container">
        <div className="section-heading center-heading">
          <h2>{home.howItWorks.title}</h2>
        </div>
        <div className="steps-grid">
          {home.howItWorks.steps.map((step) => (
            <article className="step-card" key={step.number}>
              <span className="step-number">
                <img className="step-mark" src={brandMark} alt="" aria-hidden="true" />
                <strong>{step.number}</strong>
              </span>
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function PathCtas({ home }: { home: HomeContent }) {
  return (
    <section className="container section-block path-section" id="for-providers">
      <div className="section-heading center-heading">
        <h2>{home.paths.title}</h2>
      </div>
      <div className="path-grid">
        <article className="path-card path-family">
          <img src={home.paths.family.image} alt="" loading="eager" decoding="sync" />
          <div>
            <h3>{home.paths.family.title}</h3>
            <p>{home.paths.family.copy}</p>
            <a className="button button-olive" href="#match">
              {home.paths.family.cta}
            </a>
          </div>
        </article>
        <span className="path-divider">{home.paths.divider}</span>
        <article className="path-card path-provider">
          <img src={home.paths.provider.image} alt="" loading="eager" decoding="sync" />
          <div>
            <h3>{home.paths.provider.title}</h3>
            <p>{home.paths.provider.copy}</p>
            <a className="button button-outline" href="#apply">
              {home.paths.provider.cta}
            </a>
          </div>
        </article>
      </div>
    </section>
  )
}

function Faq({ home }: { home: HomeContent }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="container faq-section" id="resources">
      <div className="split-heading">
        <h2>{home.faq.title}</h2>
        <a className="text-link" href="#all-faqs">
          {home.faq.link}
          <ArrowRight size={17} aria-hidden="true" />
        </a>
      </div>
      <div className="faq-grid">
        {home.faq.items.map((item, index) => {
          const isOpen = openIndex === index
          const questionId = `faq-question-${index}`
          const answerId = `faq-answer-${index}`

          return (
            <article className={`faq-item${isOpen ? ' is-open' : ''}`} key={item.question}>
              <button
                id={questionId}
                type="button"
                className="faq-question"
                aria-expanded={isOpen}
                aria-controls={answerId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span>{item.question}</span>
                <ChevronDown size={19} aria-hidden="true" />
              </button>
              <div
                id={answerId}
                className="faq-answer"
                role="region"
                aria-labelledby={questionId}
              >
                <p>{item.answer}</p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

function Footer({ home }: { home: HomeContent }) {
  return (
    <footer className="site-footer" id="about-us">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo home={home} />
          <p>
            {home.brand.line.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </p>
          <div className="social-row" aria-label="Social links">
            <a href="#community" aria-label={home.footer.socialLabels[0]}>
              <MessageCircleHeart size={18} />
            </a>
            <a href="#providers" aria-label={home.footer.socialLabels[1]}>
              <HeartHandshake size={18} />
            </a>
            <a href="#newsletter" aria-label={home.footer.socialLabels[2]}>
              <Mail size={18} />
            </a>
          </div>
        </div>
        {home.footer.columns.map((column) => (
          <nav className="footer-column" key={column.title} aria-label={column.title}>
            <h3>{column.title}</h3>
            {column.links.map((link) => (
              <a href={`#${link.toLowerCase().replaceAll(' ', '-')}`} key={link}>
                {link}
              </a>
            ))}
          </nav>
        ))}
        <div className="footer-newsletter">
          <h3>{home.footer.newsletter.title}</h3>
          <p>{home.footer.newsletter.copy}</p>
          <form>
            <label htmlFor="newsletter-email" className="visually-hidden">
              {home.footer.newsletter.placeholder}
            </label>
            <input id="newsletter-email" type="email" placeholder={home.footer.newsletter.placeholder} />
            <button type="submit">{home.footer.newsletter.cta}</button>
          </form>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>{home.footer.copyright}</span>
        <div>
          {home.footer.legal.map((item) => (
            <a href={`#${item.toLowerCase().replaceAll(' ', '-')}`} key={item}>
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

function App() {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale)
  const home = homeByLocale[locale]
  const activeLocale = localeOptions.find((option) => option.code === locale)

  const setLocale = (nextLocale: Locale) => {
    setLocaleState(nextLocale)

    if (typeof window === 'undefined') {
      return
    }

    const nextUrl = new URL(window.location.href)
    if (nextLocale === 'en') {
      nextUrl.searchParams.delete('lang')
    } else {
      nextUrl.searchParams.set('lang', nextLocale)
    }
    window.history.replaceState(null, '', `${nextUrl.pathname}${nextUrl.search}${nextUrl.hash}`)
  }

  useEffect(() => {
    document.documentElement.lang = activeLocale?.htmlLang ?? 'en'
  }, [activeLocale?.htmlLang])

  return (
    <main data-locale={locale} lang={activeLocale?.htmlLang ?? 'en'}>
      <Hero home={home} locale={locale} setLocale={setLocale} />
      <MatchPanel home={home} />
      <ProviderGrid home={home} />
      <TrustStrip home={home} />
      <CareCategories home={home} />
      <HowItWorks home={home} />
      <PathCtas home={home} />
      <Faq home={home} />
      <Footer home={home} />
    </main>
  )
}

export default App
