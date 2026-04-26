import type { Metadata } from 'next'
import { LegalPageShell } from '@/components/legal/LegalPageShell'
import { mockContact } from '@/data/mockData'

export const metadata: Metadata = {
  title: 'Privacy policy | Asimina Habipi Photography',
  description:
    'How Asimina Habipi Photography processes personal data in line with the GDPR, including your rights and how to contact us.',
  alternates: {
    canonical: '/privacy',
  },
}

const lastUpdated = '16 January 2026'

export default function PrivacyPage() {
  return (
    <LegalPageShell eyebrow="Legal" title="Privacy policy" updatedLabel={`Last updated: ${lastUpdated}`}>
      <p>
        This policy explains how <strong>Asimina Habipi Photography</strong> (&quot;we&quot;, &quot;us&quot;) processes
        personal data when you use this website, enquire about services, or work with us as a client. It is written
        with the UK/EU <strong>General Data Protection Regulation (GDPR)</strong> and, in Norway, the
        <strong> Personopplysningsloven</strong> in mind. It is for information and does not replace professional legal
        advice for your specific situation.
      </p>

      <h2>1. Data controller</h2>
      <p>
        The data controller is Asimina Habipi Photography, operating in Oslo, Norway. For any privacy-related questions
        you can contact us at{' '}
        <a className="text-stone-900 underline" href={`mailto:${mockContact.email}`}>
          {mockContact.email}
        </a>
        .
      </p>

      <h2>2. What data we may collect</h2>
      <ul>
        <li>
          <strong>Contact and enquiry data:</strong> for example your name, email address, phone number, event date,
          location, and the content of your message when you email us or use contact details on this site.
        </li>
        <li>
          <strong>Contract and project data:</strong> information needed to deliver photography services, such as venue
          details, shot lists, or other information you choose to share.
        </li>
        <li>
          <strong>Website usage data:</strong> basic technical data may be processed by our hosting and
          infrastructure providers (for example server logs, IP address in a security context, browser type) as
          described in your host’s documentation.
        </li>
        <li>
          <strong>Cookie and preference data:</strong> as set out in our <a href="/cookies">Cookie policy</a> — for
          example your choice regarding optional cookies, stored in your browser where applicable.
        </li>
      </ul>

      <h2>3. Why we use your data (legal bases)</h2>
      <p>We process personal data on one or more of the following bases under the GDPR:</p>
      <ul>
        <li>
          <strong>Contract:</strong> to take steps you request before a contract or to perform our photography agreement.
        </li>
        <li>
          <strong>Legitimate interests:</strong> to respond to enquiries, run our business, improve the site, and keep
          IT and accounts secure, where these interests are not overridden by your rights.
        </li>
        <li>
          <strong>Consent:</strong> where you have given clear consent (for example for optional, non-essential cookies
          or for certain marketing, if we offer it and you opt in).
        </li>
        <li>
          <strong>Legal obligation:</strong> where the law requires us to retain or disclose information.
        </li>
      </ul>

      <h2>4. How long we keep data</h2>
      <p>
        We keep contact and project data for as long as needed to provide our services, manage our relationship with
        you, and meet legal, tax, and accounting requirements (typically a limited number of years, unless a longer
        period is required by law). Server logs and similar technical data are usually retained for short periods
        according to our hosting configuration.
      </p>

      <h2>5. Who we share data with</h2>
      <p>We do not sell your personal data. We may share it with:</p>
      <ul>
        <li>IT and hosting providers that make this website and our email or storage work;</li>
        <li>professional advisers when needed (for example accountants);</li>
        <li>public authorities when required by law.</li>
      </ul>
      <p>Where a processor is used, we require them to protect your data appropriately.</p>

      <h2>6. International transfers</h2>
      <p>
        If any provider processes data outside the European Economic Area (EEA), we will rely on appropriate
        safeguards recognised under the GDPR (such as Standard Contractual Clauses) where required.
      </p>

      <h2>7. Your rights</h2>
      <p>Depending on the situation, you may have the right to:</p>
      <ul>
        <li>request access to your personal data;</li>
        <li>ask for correction of inaccurate data;</li>
        <li>ask for erasure, restriction, or object to certain processing;</li>
        <li>withdraw consent at any time where processing is based on consent;</li>
        <li>lodge a complaint with a supervisory authority.</li>
      </ul>
      <p>
        In Norway, the supervisory authority is{' '}
        <a
          className="text-stone-900 underline"
          href="https://www.datatilsynet.no"
          target="_blank"
          rel="noopener noreferrer"
        >
          Datatilsynet
        </a>
        . You can also contact the authority in your country of residence in the EEA/UK.
      </p>
      <p>
        To exercise your rights, email us at{' '}
        <a className="text-stone-900 underline" href={`mailto:${mockContact.email}`}>
          {mockContact.email}
        </a>
        . We may need to confirm your identity before replying.
      </p>

      <h2>8. Security</h2>
      <p>We use reasonable technical and organisational measures to protect personal data against loss and misuse.</p>

      <h2>9. Changes to this policy</h2>
      <p>We may update this page from time to time. The &quot;Last updated&quot; date at the top will change when we do.</p>
    </LegalPageShell>
  )
}
