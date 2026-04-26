import type { Metadata } from 'next'
import { LegalPageShell } from '@/components/legal/LegalPageShell'
import { mockContact } from '@/data/mockData'

export const metadata: Metadata = {
  title: 'Cookie policy | Asimina Habipi Photography',
  description:
    'What cookies and similar technologies Asimina Habipi Photography uses, and how to control your choices.',
  alternates: {
    canonical: '/cookies',
  },
}

const lastUpdated = '16 January 2026'

export default function CookiesPage() {
  return (
    <LegalPageShell eyebrow="Legal" title="Cookie policy" updatedLabel={`Last updated: ${lastUpdated}`}>
      <p>
        This policy explains how <strong>Asimina Habipi Photography</strong> uses cookies and similar technologies on
        this website, and how you can control your choices. It should be read together with our{' '}
        <a className="text-stone-900 underline" href="/privacy">
          Privacy policy
        </a>
        .
      </p>

      <h2>1. What are cookies and similar technologies?</h2>
      <p>
        A <strong>cookie</strong> is a small text file placed on your device by a website. We also use{' '}
        <strong>similar technologies</strong> such as <strong>local storage</strong> in your browser to remember your
        preferences (for example your cookie choice) without necessarily sending a classic HTTP cookie to our servers.
      </p>

      <h2>2. How we ask for your consent</h2>
      <p>
        When you first visit, you will see a banner with <strong>Accept all</strong> and <strong>Essential only</strong>
        . Your choice is stored in your browser (as described below) so we do not show the same banner on every visit.
        You can change your mind at any time by clearing site data for this domain in your browser settings, after
        which the banner will appear again.
      </p>

      <h2>3. What we use in practice</h2>
      <h3>Strictly necessary / essential</h3>
      <p>These are needed for the site to work or to comply with your explicit request:</p>
      <ul>
        <li>Basic delivery of pages and security (as provided by the hosting or framework).</li>
        <li>
          A record of your <strong>cookie choice</strong> in <strong>local storage</strong> (key such as
          <code> asimina-cookie-consent</code>
          ) so the consent banner is not shown repeatedly. This is treated as a necessary feature of our consent
          interface.
        </li>
      </ul>

      <h3>Optional (only if you click &quot;Accept all&quot;)</h3>
      <p>
        If you choose <strong>Accept all</strong>, you agree that we may also use any optional, non-essential
        features we add in the future to improve the site (for example analytics to understand how the site is used,
        in an aggregated way). <strong>Until such tools are actually enabled, only essential storage applies.</strong>
        This policy will be updated if we add specific named cookies or third-party services.
      </p>
      <p>
        If you choose <strong>Essential only</strong>, we do not rely on that optional layer for the choice you have
        just signalled. We only keep what is essential, including the consent record itself.
      </p>

      <h2>4. Third-party services</h2>
      <p>
        This site is built to minimise third-party tracking. If we embed content or tools from other providers
        (for example video or map embeds), their cookies may apply — we will update this page when that is the case.
      </p>

      <h2>5. Managing cookies in your browser</h2>
      <p>
        You can block or delete cookies and local storage through your browser settings. Note that removing stored data
        may sign you out of other sites or clear your consent, causing our banner to show again.
      </p>

      <h2>6. Your rights and contact</h2>
      <p>
        For more on how we process personal data, including your rights under the GDPR, see the{' '}
        <a className="text-stone-900 underline" href="/privacy">
          Privacy policy
        </a>
        . Questions:{' '}
        <a className="text-stone-900 underline" href={`mailto:${mockContact.email}`}>
          {mockContact.email}
        </a>
        .
      </p>
    </LegalPageShell>
  )
}
