'use client'

import Link from 'next/link'

export default function TermsOfService() {
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
        <h1 className="text-4xl md:text-5xl font-black mb-2">Terms of Service</h1>
        <p className="text-sm text-gray-400 mb-12">Last updated: {lastUpdated}</p>

        <div className="prose prose-invert space-y-8 text-gray-300 leading-relaxed">

          <section>
            <p>
              These Terms of Service ("Terms") govern your access to and use of DEMM OS, the website at{' '}
              <a href="https://www.demmmarketing.com" className="text-yellow-400 hover:underline">www.demmmarketing.com</a>,
              and any related services (collectively, the "Services") provided by DEMM LLC,
              doing business as DEMM Marketing ("DEMM," "we," "us," or "our"). By
              creating an account, starting a free trial, or otherwise using the Services, you agree to
              these Terms. If you do not agree, do not use the Services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">1. Eligibility &amp; Account</h2>
            <p>
              You must be at least 18 years old and have authority to enter into a contract on behalf of
              yourself or the business you represent. You are responsible for maintaining the security of
              your login credentials and for all activity under your account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">2. Subscriptions &amp; Billing</h2>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><strong className="text-white">Plans:</strong> DEMM OS is offered in three monthly subscription tiers: Survivor ($99/month), Growth ($299/month), and Empire ($999/month). Add-on services and one-time setup fees may apply.</li>
              <li><strong className="text-white">Free Trial:</strong> Eligible new accounts may begin with a 7-day free trial on the Survivor tier. No credit card is required to start the trial. You may upgrade, downgrade, or cancel at any time during the trial.</li>
              <li><strong className="text-white">Billing:</strong> Paid subscriptions are billed monthly in advance via Stripe. Charges recur automatically until you cancel. You authorize us and Stripe to charge your payment method.</li>
              <li><strong className="text-white">Taxes:</strong> Fees do not include sales tax, VAT, or similar taxes, which you are responsible for paying where applicable.</li>
              <li><strong className="text-white">Price Changes:</strong> We may change subscription prices with at least 30 days' advance notice. Changes take effect at the start of your next billing cycle.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">3. Cancellation &amp; Refund Guarantee</h2>
            <p>
              You can cancel your subscription at any time from your account settings or by emailing
              hello@demmmarketing.com. Cancellation stops future renewals; you will continue to have
              access until the end of the paid billing period.
            </p>
            <p>
              <strong className="text-white">30-Day Money-Back Guarantee:</strong> If you do not save at
              least 10 hours per month using DEMM OS, you may request a 100% refund of your most recent
              monthly subscription fee within 30 days of that charge. To request a refund, email
              hello@demmmarketing.com with your account email and a brief explanation. Refunds are issued
              to your original payment method within 5–10 business days. The guarantee applies only to
              recurring subscription fees; one-time setup fees, add-on services, and third-party charges
              (e.g., ad spend, telephony) are non-refundable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">4. SMS &amp; Messaging Terms (A2P 10DLC / TCPA)</h2>
            <p>
              By providing your mobile phone number, you expressly consent to receive recurring automated
              marketing, transactional, and account-related text messages from DEMM Marketing, including
              missed-call text-backs, appointment reminders, review requests, billing notices, promotional
              offers, and customer-support replies. Consent is not a condition of purchase.
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Message frequency varies (typically 2–10 messages per month).</li>
              <li>Msg &amp; data rates may apply. Carriers are not liable for delayed or undelivered messages.</li>
              <li>Reply <strong className="text-white">STOP</strong> to any message to opt out of marketing texts.</li>
              <li>Reply <strong className="text-white">HELP</strong> for help, or email hello@demmmarketing.com.</li>
              <li>For full SMS terms and our consent practices, see our{' '}
                <Link href="/privacy" className="text-yellow-400 hover:underline">Privacy Policy</Link>.</li>
            </ul>
            <p className="mt-4">
              When you use the Services to send SMS or email to your own contacts, <strong className="text-white">you
              are the sender</strong> under the TCPA, CAN-SPAM, and similar laws. You represent and warrant
              that (a) you have obtained the legally required consents from every recipient before adding
              them to a campaign, (b) every campaign includes a clear and conspicuous opt-out method, and
              (c) you will honor opt-out requests promptly. You agree to indemnify DEMM for any claim,
              fine, or penalty arising from your messaging activity.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">5. Acceptable Use</h2>
            <p>You agree not to, and will not allow any third party to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Use the Services to send spam, phishing, scams, or content that violates carrier rules or the CTIA Messaging Principles &amp; Best Practices;</li>
              <li>Send messages relating to SHAFT-restricted content (Sex, Hate, Alcohol, Firearms, Tobacco, cannabis, gambling, or high-risk financial services) without prior written authorization from DEMM;</li>
              <li>Send messages to recipients you have not received express prior consent from;</li>
              <li>Reverse engineer, decompile, or attempt to extract source code from the Services;</li>
              <li>Resell, sublicense, or expose the Services as a competing offering;</li>
              <li>Use the Services to harm minors, harass others, or violate any law.</li>
            </ul>
            <p className="mt-4">
              Violation may result in immediate suspension or termination without refund, and we may
              report violations to carriers, regulators, or law enforcement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">6. Customer Content &amp; License</h2>
            <p>
              You retain ownership of all content you upload, create, or generate through the Services
              ("Customer Content"), including contact lists, campaigns, and AI-generated outputs you
              approve. You grant DEMM a worldwide, non-exclusive, royalty-free license to host, process,
              transmit, display, and back up Customer Content solely to provide the Services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">7. Intellectual Property</h2>
            <p>
              DEMM owns all rights in the Services, including DEMM OS™, AXIOM™, and the DEMM Marketing™
              brand. We grant you a limited, non-exclusive, non-transferable license to use the Services
              while your subscription is active. No other rights are granted by implication or otherwise.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">8. Third-Party Services</h2>
            <p>
              The Services integrate with third-party providers (such as Stripe, Twilio, Google Workspace,
              and Meta). Use of those providers is subject to their own terms and pricing, and DEMM is
              not responsible for their availability or performance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">9. Disclaimers</h2>
            <p>
              EXCEPT AS EXPRESSLY SET FORTH IN THE 30-DAY MONEY-BACK GUARANTEE ABOVE, THE SERVICES ARE
              PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED,
              INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
              NON-INFRINGEMENT. DEMM DOES NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, ERROR-FREE,
              OR PRODUCE ANY SPECIFIC RESULT.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">10. Limitation of Liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, DEMM AND ITS OFFICERS, DIRECTORS, EMPLOYEES, AND
              AFFILIATES WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
              PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUE, ARISING FROM YOUR USE OF THE SERVICES.
              DEMM'S TOTAL LIABILITY ARISING FROM OR RELATING TO THE SERVICES WILL NOT EXCEED THE AMOUNTS
              YOU PAID TO DEMM IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">11. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless DEMM from any claim, loss, damage, liability, or
              expense (including reasonable attorneys' fees) arising from (a) your Customer Content, (b)
              your use of the Services, (c) your violation of these Terms, or (d) your violation of any
              law or third-party right, including TCPA, CAN-SPAM, and consumer-protection laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">12. Termination</h2>
            <p>
              You may terminate at any time by canceling your subscription. We may suspend or terminate
              your account, with or without notice, for any violation of these Terms, non-payment, or
              behavior that poses a risk to DEMM, our other customers, or third parties. Upon
              termination, your right to use the Services ceases. We will retain your data for 30 days
              after termination so that you may export it, then delete it in accordance with our Privacy
              Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">13. Governing Law &amp; Dispute Resolution</h2>
            <p>
              These Terms are governed by the laws of the State of Georgia, USA, without regard to its
              conflict of laws principles. Any dispute will be resolved in the state or federal courts
              located in Fulton County, Georgia, and you consent to that jurisdiction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">14. Changes to These Terms</h2>
            <p>
              We may update these Terms from time to time. The "Last updated" date at the top reflects
              the most recent revision. Material changes will be communicated by email or by a prominent
              notice in the Services. Your continued use of the Services after a change indicates your
              acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">15. Contact</h2>
            <div className="mt-4 p-6 bg-gray-900/50 border border-gray-700 rounded-lg">
              <p className="font-semibold text-white">DEMM LLC</p>
              <p className="text-sm text-gray-400">DBA DEMM Marketing</p>
              <p className="text-sm text-gray-400 mt-2">
                Email: <a href="mailto:hello@demmmarketing.com" className="text-yellow-400 hover:underline">hello@demmmarketing.com</a>
              </p>
              <p className="text-sm text-gray-400">
                Phone: <a href="tel:+18135608191" className="text-yellow-400 hover:underline">(813) 560-8191</a>
              </p>
              <p className="text-sm text-gray-400">Atlanta, GA, United States</p>
            </div>
          </section>
        </div>

        {/* Footer link */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex justify-between text-sm text-gray-500">
          <Link href="/privacy" className="hover:text-yellow-400 transition">← Privacy Policy</Link>
          <Link href="/" className="hover:text-yellow-400 transition">Home →</Link>
        </div>
      </article>
    </main>
  )
}
