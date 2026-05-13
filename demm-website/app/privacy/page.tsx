'use client'

import Link from 'next/link'

export default function PrivacyPolicy() {
  const lastUpdated = 'May 13, 2026'

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-yellow-400/20 px-6 py-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link href="/" className="group flex flex-col leading-none" aria-label="DEMM OS home">
            <span className="font-display text-3xl md:text-4xl font-bold text-yellow-400 tracking-tight leading-none group-hover:opacity-90 transition">
              DEMM <span className="font-light italic">OS</span>
            </span>
            <span className="mt-1 h-px w-12 bg-yellow-400/60" aria-hidden="true"></span>
            <span className="mt-1 font-sans text-[10px] uppercase tracking-[0.25em] text-gray-400">DEMM Marketing</span>
          </Link>
          <Link href="/" className="text-sm text-gray-400 hover:text-yellow-400 transition">
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-black mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-400 mb-12">Last updated: {lastUpdated}</p>

        <div className="prose prose-invert space-y-8 text-gray-300 leading-relaxed">

          <section>
            <p>
              DEMM LLC ("DEMM," "DEMM Marketing," "we," "us," or "our"),
              the operator of DEMM OS and the website at{' '}
              <a href="https://www.demmmarketing.com" className="text-yellow-400 hover:underline">www.demmmarketing.com</a>{' '}
              (the "Site"), respects your privacy. This Privacy Policy describes how we collect, use,
              disclose, and protect personal information when you visit the Site, use DEMM OS, or
              communicate with us by phone, SMS, or email.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">1. Information We Collect</h2>
            <p>We collect the following categories of personal information:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><strong className="text-white">Contact Information:</strong> name, business name, email address, phone number, mailing address.</li>
              <li><strong className="text-white">Account &amp; Billing Data:</strong> login credentials, subscription tier, payment method tokens (processed by Stripe — we do not store card numbers).</li>
              <li><strong className="text-white">Communications:</strong> messages you send to us by SMS, email, web chat, or phone, including consent records.</li>
              <li><strong className="text-white">CRM &amp; Marketing Data:</strong> contacts, leads, appointments, and content you upload or generate within DEMM OS.</li>
              <li><strong className="text-white">Usage Data:</strong> pages viewed, features used, IP address, device type, browser, and timestamps.</li>
              <li><strong className="text-white">Cookies &amp; Similar Technologies:</strong> session cookies, analytics cookies, and pixels used to operate and improve the Site and the product.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">2. How We Use Your Information</h2>
            <p>We use personal information to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Provide, operate, and improve DEMM OS and our Site;</li>
              <li>Process payments, manage subscriptions, and send invoices and receipts;</li>
              <li>Send transactional messages (account verification, billing, appointment reminders, support replies);</li>
              <li>Send marketing communications when you have opted in, including SMS and email;</li>
              <li>Respond to your inquiries, requests, and customer-support tickets;</li>
              <li>Detect, prevent, and respond to fraud, abuse, and security incidents;</li>
              <li>Comply with our legal obligations and enforce our Terms of Service.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">3. SMS &amp; Messaging Consent (A2P 10DLC / TCPA)</h2>

            <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-lg p-6 my-6">
              <h3 className="text-lg font-bold text-yellow-300 mb-3">SMS Program Disclosure</h3>
              <p className="text-gray-200 text-sm leading-relaxed">
                <strong>Program Name:</strong> DEMM Marketing Customer Messaging<br />
                <strong>Program Description:</strong> By providing your mobile phone number to DEMM Marketing
                (whether by filling out a form on our Site, starting a free trial, becoming a customer, or
                texting us directly), you consent to receive recurring automated marketing, transactional,
                and account-related text messages from DEMM Marketing at the number provided, including
                missed-call text-backs, appointment reminders, review requests, billing notifications,
                promotional offers, and customer-support replies. Consent is <strong>not</strong> a condition
                of purchase.
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-1 text-sm text-gray-200">
                <li><strong>Message frequency:</strong> varies by activity. Typically 2–10 messages per month per number.</li>
                <li><strong>Carriers:</strong> Msg &amp; data rates may apply. Carriers are not liable for delayed or undelivered messages.</li>
                <li><strong>To opt out:</strong> Reply <strong>STOP</strong> to any message at any time. We will stop sending you marketing texts immediately. You may continue to receive transactional or one-time-passcode messages where required by law.</li>
                <li><strong>For help:</strong> Reply <strong>HELP</strong> or contact us at hello@demmmarketing.com or by phone.</li>
                <li><strong>Supported carriers:</strong> AT&amp;T, Verizon, T-Mobile, Sprint, U.S. Cellular, Boost, Cricket, MetroPCS, and most other U.S. carriers.</li>
              </ul>
            </div>

            <p>
              We obtain your express written consent before sending marketing SMS to you, as required by
              the federal Telephone Consumer Protection Act ("TCPA"), Federal Communications Commission
              regulations, the CTIA Messaging Principles &amp; Best Practices, and applicable state laws.
              We maintain logs of consent capture (timestamp, IP address, opt-in source).
            </p>
            <p>
              <strong className="text-white">Mobile information is never shared with third parties or affiliates for marketing or promotional purposes.</strong>
              {' '}All categories of personal information described in this policy exclude mobile-opt-in data
              and consent; this information will not be shared with any third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">4. How We Share Information</h2>
            <p>We share personal information only in these limited cases:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><strong className="text-white">Service Providers:</strong> Stripe (payments), Twilio / our messaging carrier (SMS delivery), Google Workspace (email), Vercel (hosting), and analytics providers — all under written contracts limiting use of your data.</li>
              <li><strong className="text-white">Legal:</strong> when required by subpoena, court order, or applicable law.</li>
              <li><strong className="text-white">Business Transfers:</strong> in connection with a merger, acquisition, or sale of assets, subject to continued protection of your information.</li>
              <li><strong className="text-white">With Your Consent:</strong> in any other case where you have given us explicit permission.</li>
            </ul>
            <p className="mt-4">
              <strong className="text-white">We do not sell your personal information.</strong> We do not
              share mobile phone numbers, SMS opt-in data, or SMS message content with third parties for
              marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">5. Cookies &amp; Tracking</h2>
            <p>
              We use cookies and similar technologies to keep you signed in, remember preferences, and
              measure traffic. You can disable cookies in your browser settings, but parts of the Site or
              product may stop working correctly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">6. Data Retention</h2>
            <p>
              We retain personal information for as long as your account is active and as needed to provide
              services, comply with legal obligations, resolve disputes, and enforce our agreements. SMS
              consent records are retained for at least four (4) years after opt-in or opt-out, as
              recommended by industry best practices.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">7. Your Privacy Rights</h2>
            <p>Depending on where you live, you may have rights to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Access the personal information we hold about you;</li>
              <li>Correct inaccurate information;</li>
              <li>Delete your information, subject to legal exceptions;</li>
              <li>Opt out of marketing communications (reply STOP to SMS, click unsubscribe in any email);</li>
              <li>Restrict or object to processing;</li>
              <li>Data portability.</li>
            </ul>
            <p className="mt-4">
              To exercise these rights, email{' '}
              <a href="mailto:privacy@demmmarketing.com" className="text-yellow-400 hover:underline">privacy@demmmarketing.com</a>.
              We will respond within 30 days.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">8. Children's Privacy</h2>
            <p>
              DEMM OS is a business product not directed to children under 13. We do not knowingly collect
              personal information from anyone under 13.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">9. Security</h2>
            <p>
              We use commercially reasonable administrative, technical, and physical safeguards to protect
              personal information, including encryption in transit (TLS), encryption at rest where
              practical, access controls, and regular security review. No system is 100% secure, and we
              cannot guarantee the security of your information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. The "Last updated" date at the top
              reflects the most recent revision. Material changes will be communicated via email or a
              prominent notice on the Site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">11. Contact Us</h2>
            <p>If you have questions about this Privacy Policy or our data practices, contact us at:</p>
            <div className="mt-4 p-6 bg-gray-900/50 border border-gray-700 rounded-lg">
              <p className="font-semibold text-white">DEMM LLC</p>
              <p className="text-sm text-gray-400">DBA DEMM Marketing</p>
              <p className="text-sm text-gray-400 mt-2">
                Email: <a href="mailto:privacy@demmmarketing.com" className="text-yellow-400 hover:underline">privacy@demmmarketing.com</a>
              </p>
              <p className="text-sm text-gray-400">
                Phone: <a href="tel:+10000000000" className="text-yellow-400 hover:underline">(XXX) XXX-XXXX</a>
              </p>
              <p className="text-sm text-gray-400">Atlanta, GA, United States</p>
            </div>
          </section>
        </div>

        {/* Footer link */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex justify-between text-sm text-gray-500">
          <Link href="/" className="hover:text-yellow-400 transition">← Home</Link>
          <Link href="/terms" className="hover:text-yellow-400 transition">Terms of Service →</Link>
        </div>
      </article>
    </main>
  )
}
