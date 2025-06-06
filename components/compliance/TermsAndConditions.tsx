"use client";

import * as React from "react";
import NextLink from "next/link";
import { Link } from "react-scroll";

import { HEADER_SIZE } from "@/utils";
import { GoBackButton } from "./GoBackButton";

import "./compliance.scss";

const offset = -HEADER_SIZE - 20;

export const TermsAndConditions = () => (
  <div className="compliance">
    <div className="compliance__container">
      <div className="compliance__document">
        <h1 className="compliance__title">
          <GoBackButton />
          <span>TERMS AND CONDITIONS</span>
        </h1>
        <p className="compliance__date">
          Last updated:&nbsp;<b>19.05.2025</b>
        </p>
        <section>
          <h2 className="compliance__title-small">
            AGREEMENT TO OUR LEGAL TERMS
          </h2>
          <p className="compliance__par">
            We are AristoByte &nbsp;(&#39;Company&#39;, &#39;we&#39;,
            &#39;us&#39;, or &#39;our&#39;), a company registered in Poland
            &nbsp;at Wesele Cracow, Cracow, Lesser Poland 30-127.
          </p>
          <p className="compliance__par">
            We operate the website &nbsp;
            <NextLink className="compliance__link" href="/" target="_blank">
              https://www.aristobyte.com
            </NextLink>
            (the &#39;Site&#39;), as well as any other related products and
            services that refer or link to these legal terms (the &#39;Legal
            Terms&#39;) (collectively, the &#39;Services&#39;).
          </p>
          <ul className="compliance__list compliance__list--with-dots">
            <li>
              <p className="compliance__par">
                Online Contact Form:&nbsp;
                <NextLink className="compliance__link" href="/contact">
                  https://aristobyte.com/contact
                </NextLink>
              </p>
            </li>
            <li>
              <p className="compliance__par">
                Email:&nbsp;
                <NextLink
                  className="compliance__link"
                  href="mailto:info@aristobyte.com"
                  target="_blank"
                >
                  info@aristobyte.com
                </NextLink>
              </p>
            </li>
            <li>
              <p className="compliance__par">
                Phone:&nbsp;
                <NextLink
                  className="compliance__link"
                  href="tel:+48-451-652-749"
                  target="_blank"
                >
                  (+48) 451 652 749
                </NextLink>
              </p>
            </li>
          </ul>
          <p className="compliance__par">
            These Legal Terms constitute a legally binding agreement made
            between you, whether personally or on behalf of an entity
            (&#39;you&#39;), and AristoByte, concerning your access to and use
            of the Services. You agree that by accessing the Services, you have
            read, understood, and agreed to be bound by all of these Legal
            Terms. IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU
            ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST
            DISCONTINUE USE IMMEDIATELY.
          </p>
          <p className="compliance__par">
            Supplemental terms and conditions or documents that may be posted on
            the Services from time to time are hereby expressly incorporated
            herein by reference. We reserve the right, in our sole discretion,
            to make changes or modifications to these Legal Terms from time to
            time. We will alert you about any changes by updating the &#39;Last
            updated&#39; date of these Legal Terms, and you waive any right to
            receive specific notice of each such change. It is your
            responsibility to periodically review these Legal Terms to stay
            informed of updates. You will be subject to, and will be deemed to
            have been made aware of and to have accepted, the changes in any
            revised Legal Terms by your continued use of the Services after the
            date such revised Legal Terms are posted.
          </p>
          <p className="compliance__par">
            All users who are minors in the jurisdiction in which they reside
            (generally under the age of 18) must have the permission of, and be
            directly supervised by, their parent or guardian to use the
            Services. If you are a minor, you must have your parent or guardian
            read and agree to these Legal Terms prior to you using the Services.
          </p>
          <p className="compliance__par">
            We recommend that you print a copy of these Legal Terms for your
            records.
          </p>
        </section>
        <section id="table-of-contents">
          <h2 className="compliance__title-small">TABLE OF CONTENTS</h2>
          <ul className="compliance__list">
            <li>
              <Link
                offset={offset}
                className="compliance__link"
                to="our-service"
              >
                1. OUR SERVICES
              </Link>
            </li>
            <li>
              <Link
                offset={offset}
                className="compliance__link"
                to="intellectual-property-rights"
              >
                2. INTELLECTUAL PROPERTY RIGHTS
              </Link>
            </li>
            <li>
              <Link
                offset={offset}
                className="compliance__link"
                to="user-representations"
              >
                3. USER REPRESENTATIONS
              </Link>
            </li>
            <li>
              <Link
                offset={offset}
                className="compliance__link"
                to="subscriptions"
              >
                4. SUBSCRIPTIONS
              </Link>
            </li>
            <li>
              <Link
                offset={offset}
                className="compliance__link"
                to="prohibited-activities"
              >
                5. PROHIBITED ACTIVITIES
              </Link>
            </li>
            <li>
              <Link
                offset={offset}
                className="compliance__link"
                to="user-generated-contributions"
              >
                6. USER GENERATED CONTRIBUTIONS
              </Link>
            </li>
            <li>
              <Link
                offset={offset}
                className="compliance__link"
                to="contribution-license"
              >
                7. CONTRIBUTION LICENSE
              </Link>
            </li>
            <li>
              <Link
                offset={offset}
                className="compliance__link"
                to="third-party-websites-and-content"
              >
                8. THIRD-PARTY WEBSITES AND CONTENT
              </Link>
            </li>
            <li>
              <Link
                offset={offset}
                className="compliance__link"
                to="services-management"
              >
                9. SERVICES MANAGEMENT
              </Link>
            </li>
            <li>
              <Link
                offset={offset}
                className="compliance__link"
                to="privacy-policy"
              >
                10. PRIVACY POLICY
              </Link>
            </li>
            <li>
              <Link
                offset={offset}
                className="compliance__link"
                to="term-and-termination"
              >
                11. TERM AND TERMINATION
              </Link>
            </li>
            <li>
              <Link
                offset={offset}
                className="compliance__link"
                to="modifications-and-interruptions"
              >
                12. MODIFICATIONS AND INTERRUPTIONS
              </Link>
            </li>
            <li>
              <Link
                offset={offset}
                className="compliance__link"
                to="governing-law"
              >
                13. GOVERNING LAW
              </Link>
            </li>
            <li>
              <Link
                offset={offset}
                className="compliance__link"
                to="dispute-resolution"
              >
                14. DISPUTE RESOLUTION
              </Link>
            </li>
            <li>
              <Link
                offset={offset}
                className="compliance__link"
                to="corrections"
              >
                15. CORRECTIONS
              </Link>
            </li>
            <li>
              <Link
                offset={offset}
                className="compliance__link"
                to="disclaimer"
              >
                16. DISCLAIMER
              </Link>
            </li>
            <li>
              <Link
                offset={offset}
                className="compliance__link"
                to="limitations-of-liability"
              >
                17. LIMITATIONS OF LIABILITY
              </Link>
            </li>
            <li>
              <Link
                offset={offset}
                className="compliance__link"
                to="indemnification"
              >
                18. INDEMNIFICATION
              </Link>
            </li>
            <li>
              <Link offset={offset} className="compliance__link" to="user-data">
                19. USER DATA
              </Link>
            </li>
            <li>
              <Link
                offset={offset}
                className="compliance__link"
                to="electronic-communications-transactions-and-signatures"
              >
                20. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES
              </Link>
            </li>
            <li>
              <Link
                offset={offset}
                className="compliance__link"
                to="california-users-and-residents"
              >
                21. CALIFORNIA USERS AND RESIDENTS
              </Link>
            </li>
            <li>
              <Link
                offset={offset}
                className="compliance__link"
                to="miscellaneous"
              >
                22. MISCELLANEOUS
              </Link>
            </li>
            <li>
              <Link
                offset={offset}
                className="compliance__link"
                to="contact-us"
              >
                23. CONTACT US
              </Link>
            </li>
          </ul>
        </section>
        <section id="our-services">
          <h2 className="compliance__title-small">1. OUR SERVICES</h2>
          <p className="compliance__par">
            The information provided when using the Services is not intended for
            distribution to or use by any person or entity in any jurisdiction
            or country where such distribution or use would be contrary to law
            or regulation or which would subject us to any registration
            requirement within such jurisdiction or country. Accordingly, those
            persons who choose to access the Services from other locations do so
            on their own initiative and are solely responsible for compliance
            with local laws, if and to the extent local laws are applicable.
          </p>
          <p className="compliance__par">
            The Services are not tailored to comply with industry-specific
            regulations (Health Insurance Portability and Accountability Act
            (HIPAA), Federal Information Security Management Act (FISMA), etc.),
            so if your interactions would be subjected to such laws, you may not
            use the Services. You may not use the Services in a way that would
            violate the Gramm-Leach-Bliley Act (GLBA).
          </p>
        </section>
        <section id="intellectual-property-rights">
          <h2 className="compliance__title-small">
            2. INTELLECTUAL PROPERTY RIGHTS
          </h2>
          <h3 className="compliance__subtitle">Our intellectual property</h3>
          <p className="compliance__par">
            We are the owner or the licensee of all intellectual property rights
            in our Services, including all source code, databases,
            functionality, software, website designs, audio, video, text,
            photographs, and graphics in the Services (collectively, the
            &#39;Content&#39;), as well as the trademarks, service marks, and
            logos contained therein (the &#39;Marks&#39;).
          </p>
          <p className="compliance__par">
            Our Content and Marks are protected by copyright and trademark laws
            (and various other intellectual property rights and unfair
            competition laws) and treaties in the United States and around the
            world.
          </p>
          <p className="compliance__par">
            The Content and Marks are provided in or through the Services
            &#39;AS IS&#39; for your personal, non-commercial use or internal
            business purpose only.
          </p>
          <h3 className="compliance__subtitle">Your use of our Services</h3>
          <p className="compliance__par">
            Subject to your compliance with these Legal Terms, including the
            &#39;
            <Link
              offset={offset}
              className="compliance__link"
              to="prohibited-activities"
            >
              PROHIBITED ACTIVITIES
            </Link>
            &#39; section below, we grant you a non-exclusive, non-transferable,
            revocable license to:
          </p>
          <ul className="compliance__list compliance__list--with-dots">
            <li>
              <p className="compliance__par">access the Services; and</p>
            </li>
            <li>
              <p className="compliance__par">
                download or print a copy of any portion of the Content to which
                you have properly gained access,
              </p>
            </li>
          </ul>
          <p className="compliance__par">
            solely for your personal, non-commercial use or internal business
            purpose.
          </p>
          <p className="compliance__par">
            Except as set out in this section or elsewhere in our Legal Terms,
            no part of the Services and no Content or Marks may be copied,
            reproduced, aggregated, republished, uploaded, posted, publicly
            displayed, encoded, translated, transmitted, distributed, sold,
            licensed, or otherwise exploited for any commercial purpose
            whatsoever, without our express prior written permission.
          </p>
          <p className="compliance__par">
            If you wish to make any use of the Services, Content, or Marks other
            than as set out in this section or elsewhere in our Legal Terms,
            please address your request to:&nbsp;
            <NextLink
              className="compliance__link"
              href="mailto:info@aristobyte.com"
              target="_blank"
            >
              info.aristobyte@gmail.com
            </NextLink>
            . If we ever grant you the permission to post, reproduce, or
            publicly display any part of our Services or Content, you must
            identify us as the owners or licensors of the Services, Content, or
            Marks and ensure that any copyright or proprietary notice appears or
            is visible on posting, reproducing, or displaying our Content.
          </p>
          <p className="compliance__par">
            We reserve all rights not expressly granted to you in and to the
            Services, Content, and Marks.
          </p>
          <p className="compliance__par">
            Any breach of these Intellectual Property Rights will constitute a
            material breach of our Legal Terms and your right to use our
            Services will terminate immediately.
          </p>
          <h3 className="compliance__subtitle">Your submissions</h3>
          <p className="compliance__par">
            Please review this section and the &#39;
            <Link
              offset={offset}
              className="compliance__link"
              to="prohibited-activities"
            >
              PROHIBITED ACTIVITIES
            </Link>
            &#39; section carefully prior to using our Services to understand
            the (a) rights you give us and (b) obligations you have when you
            post or upload any content through the Services.
          </p>
          <p className="compliance__par">
            Submissions: By directly sending us any question, comment,
            suggestion, idea, feedback, or other information about the Services
            (&#39;Submissions&#39;), you agree to assign to us all intellectual
            property rights in such Submission. You agree that we shall own this
            Submission and be entitled to its unrestricted use and dissemination
            for any lawful purpose, commercial or otherwise, without
            acknowledgment or compensation to you.
          </p>
          <p className="compliance__par">
            You are responsible for what you post or upload: By sending us
            Submissions through any part of the Services you:
          </p>
          <ul className="compliance__list compliance__list--with-dots">
            <li>
              <p className="compliance__par">
                confirm that you have read and agree with our &#39;
                <Link
                  offset={offset}
                  className="compliance__link"
                  to="prohibited-activities"
                >
                  PROHIBITED ACTIVITIES
                </Link>
                &#39; and will not post, send, publish, upload, or transmit
                through the Services any Submission that is illegal, harassing,
                hateful, harmful, defamatory, obscene, bullying, abusive,
                discriminatory, threatening to any person or group, sexually
                explicit, false, inaccurate, deceitful, or misleading;
              </p>
            </li>
            <li>
              <p className="compliance__par">
                to the extent permissible by applicable law, waive any and all
                moral rights to any such Submission;
              </p>
            </li>
            <li>
              <p className="compliance__par">
                warrant that any such Submission are original to you or that you
                have the necessary rights and licenses to submit such
                Submissions and that you have full authority to grant us the
                above-mentioned rights in relation to your Submissions; and
              </p>
            </li>
            <li>
              <p className="compliance__par">
                warrant and represent that your Submissions do not constitute
                confidential information.
              </p>
            </li>
          </ul>
          <p className="compliance__par">
            You are solely responsible for your Submissions and you expressly
            agree to reimburse us for any and all losses that we may suffer
            because of your breach of (a) this section, (b) any third
            party&rsquo;s intellectual property rights, or (c) applicable law.
          </p>
        </section>
        <section id="user-representations">
          <h2 className="compliance__title-small">3. USER REPRESENTATIONS</h2>
          <p className="compliance__par">
            By using the Services, you represent and warrant that:
          </p>
          <ul className="compliance__list compliance__list--with-dots">
            <li>
              <p className="compliance__par">
                (1) you have the legal capacity and you agree to comply with
                these Legal Terms;
              </p>
            </li>
            <li>
              <p className="compliance__par">
                (2) you are not a minor in the jurisdiction in which you reside,
                or if a minor, you have received parental permission to use the
              </p>
            </li>
            <li>
              <p className="compliance__par">
                (3) you will not access the Services through automated or
                non-human means, whether through a bot, script or otherwise;
              </p>
            </li>
            <li>
              <p className="compliance__par">
                (4) you will not use the Services for any illegal or
                unauthorised purpose;
              </p>
            </li>
            <li>
              <p className="compliance__par">
                (5) your use of the Services will not violate any applicable law
                or regulation.
              </p>
            </li>
          </ul>
          <p className="compliance__par">
            If you provide any information that is untrue, inaccurate, not
            current, or incomplete, we have the right to suspend or terminate
            your account and refuse any and all current or future use of the
            Services (or any portion thereof).
          </p>
        </section>
        <section id="subscriptions">
          <h2 className="compliance__title-small">4. SUBSCRIPTIONS</h2>
          <h3 className="compliance__subtitle">Billing and Renewal</h3>
          <p className="compliance__par">
            Your subscription will continue and automatically renew unless
            cancelled. You consent to our charging your payment method on a
            recurring basis without requiring your prior approval for each
            recurring charge, until such time as you cancel the applicable
            order. The length of your billing cycle is annual.
          </p>
          <h3 className="compliance__subtitle">Free Trial</h3>
          <p className="compliance__par">
            We offer a 30 -day free trial to new users who register with the
            Services. The account will not be charged and the subscription will
            be suspended until upgraded to a paid version at the end of the free
            trial.
          </p>
          <h3 className="compliance__subtitle">Cancellation</h3>
          <p className="compliance__par">
            You can cancel your subscription at any time by logging into your
            account. Your cancellation will take effect at the end of the
            current paid term. If you have any questions or are unsatisfied with
            our Services, please email us at info.aristobyte@gmail.com.
          </p>
          <h3 className="compliance__subtitle">Fee Changes</h3>
          <p className="compliance__par">
            We may, from time to time, make changes to the subscription fee and
            will communicate any price changes to you in accordance with
            applicable law.
          </p>
        </section>
        <section id="prohibited-activities">
          <h2 className="compliance__title-small">5. PROHIBITED ACTIVITIES</h2>
          <p className="compliance__par">
            You may not access or use the Services for any purpose other than
            that for which we make the Services available. The Services may not
            be used in connection with any commercial endeavours except those
            that are specifically endorsed or approved by us.
          </p>
          <p className="compliance__par">
            As a user of the Services, you agree not to:
          </p>
          <ul className="compliance__list compliance__list--with-dots">
            <li>
              <p className="compliance__par">
                Systematically retrieve data or other content from the Services
                to create or compile, directly or indirectly, a collection,
                compilation, database, or directory without written permission
                from us.
              </p>
            </li>
            <li>
              <p className="compliance__par">
                Trick, defraud, or mislead us and other users, especially in any
                attempt to learn sensitive account information such as user
                passwords.
              </p>
            </li>
            <li>
              <p className="compliance__par">
                Circumvent, disable, or otherwise interfere with
                security-related features of the Services, including features
                that prevent or restrict the use or copying of any Content or
                enforce limitations on the use of the Services and/or the
                Content contained therein.
              </p>
            </li>
            <li>
              <p className="compliance__par">
                Disparage, tarnish, or otherwise harm, in our opinion, us and/or
                the Services.
              </p>
            </li>
            <li>
              <p className="compliance__par">
                Use any information obtained from the Services in order to
                harass, abuse, or harm another person.
              </p>
            </li>
            <li>
              <p className="compliance__par">
                Make improper use of our support services or submit false
                reports of abuse or misconduct.
              </p>
            </li>
            <li>
              <p className="compliance__par">
                Use the Services in a manner inconsistent with any applicable
                laws or regulations.
              </p>
            </li>
            <li>
              <p className="compliance__par">
                Engage in unauthorised framing of or linking to the Services.
              </p>
            </li>
            <li>
              <p className="compliance__par">
                Upload or transmit (or attempt to upload or to transmit)
                viruses, Trojan horses, or other material, including excessive
                use of capital letters and spamming (continuous posting of
                repetitive text), that interferes with any party&rsquo;s
                uninterrupted use and enjoyment of the Services or modifies,
                impairs, disrupts, alters, or interferes with the use, features,
                functions, operation, or maintenance of the Services.
              </p>
            </li>
            <li>
              <p className="compliance__par">
                Engage in any automated use of the system, such as using scripts
                to send comments or messages, or using any data mining, robots,
                or similar data gathering and extraction tools.
              </p>
            </li>
            <li>
              <p className="compliance__par">
                Delete the copyright or other proprietary rights notice from any
                Content.
              </p>
            </li>
            <li>
              <p className="compliance__par">
                Attempt to impersonate another user or person or use the
                username of another user.
              </p>
            </li>
            <li>
              <p className="compliance__par">
                Upload or transmit (or attempt to upload or to transmit) any
                material that acts as a passive or active information collection
                or transmission mechanism, including without limitation, clear
                graphics interchange formats (&#39;gifs&#39;), 1&times;1 pixels,
                web bugs, cookies, or other similar devices (sometimes referred
                to as &#39;spyware&#39; or &#39;passive collection
                mechanisms&#39; or &#39;pcms&#39;).
              </p>
            </li>
            <li>
              <p className="compliance__par">
                Interfere with, disrupt, or create an undue burden on the
                Services or the networks or services connected to the Services.
              </p>
            </li>
            <li>
              <p className="compliance__par">
                Harass, annoy, intimidate, or threaten any of our employees or
                agents engaged in providing any portion of the Services to you.
              </p>
            </li>
            <li>
              <p className="compliance__par">
                Attempt to bypass any measures of the Services designed to
                prevent or restrict access to the Services, or any portion of
                the Services.
              </p>
            </li>
            <li>
              <p className="compliance__par">
                Copy or adapt the Services&#39; software, including but not
                limited to Flash, PHP, HTML, JavaScript, or other code.
              </p>
            </li>
            <li>
              <p className="compliance__par">
                Except as permitted by applicable law, decipher, decompile,
                disassemble, or reverse engineer any of the software comprising
                or in any way making up a part of the Services.
              </p>
            </li>
            <li>
              <p className="compliance__par">
                Except as may be the result of standard search engine or
                Internet browser usage, use, launch, develop, or distribute any
                automated system, including without limitation, any spider,
                robot, cheat utility, scraper, or offline reader that accesses
                the Services, or use or launch any unauthorised script or other
                software.
              </p>
            </li>
            <li>
              <p className="compliance__par">
                Use a buying agent or purchasing agent to make purchases on the
                Services.
              </p>
            </li>
            <li>
              <p className="compliance__par">
                Make any unauthorised use of the Services, including collecting
                usernames and/or email addresses of users by electronic or other
                means for the purpose of sending unsolicited email, or creating
                user accounts by automated means or under false pretences.
              </p>
            </li>
            <li>
              <p className="compliance__par">
                Use the Services as part of any effort to compete with us or
                otherwise use the Services and/or the Content for any
                revenue-generating endeavour or commercial enterprise.
              </p>
            </li>
            <li>
              <p className="compliance__par">
                Use the Services to advertise or offer to sell goods and
                services.
              </p>
            </li>
            <li>
              <p className="compliance__par">
                Sell or otherwise transfer your profile.
              </p>
            </li>
          </ul>
        </section>
        <section id="user-generated-contributions">
          <h2 className="compliance__title-small">
            6. USER GENERATED CONTRIBUTIONS
          </h2>
          <p className="compliance__par">
            The Services does not offer users to submit or post content. We may
            provide you with the opportunity to create, submit, post, display,
            transmit, perform, publish, distribute, or broadcast content and
            materials to us or on the Services, including but not limited to
            text, writings, video, audio, photographs, graphics, comments,
            suggestions, or personal information or other material
            (collectively, &#39;Contributions&#39;). Contributions may be
            viewable by other users of the Services and through third-party
            websites. As such, any Contributions you transmit may be treated in
            accordance with the Services&#39; Privacy Policy. When you create or
            make available any Contributions, you thereby represent and warrant
            that:
          </p>
          <ul className="compliance__list compliance__list--with-dots">
            <li>
              <p className="compliance__par">
                The creation, distribution, transmission, public display, or
                performance, and the accessing, downloading, or copying of your
                Contributions do not and will not infringe the proprietary
                rights, including but not limited to the copyright, patent,
                trademark, trade secret, or moral rights of any third party.
              </p>
            </li>
            <li>
              <p className="compliance__par">
                You are the creator and owner of or have the necessary licenses,
                rights, consents, releases, and permissions to use and to
                authorise us, the Services, and other users of the Services to
                use your Contributions in any manner contemplated by the
                Services and these Legal Terms.
              </p>
            </li>
            <li>
              <p className="compliance__par">
                You have the written consent, release, and/or permission of each
                and every identifiable individual person in your Contributions
                to use the name or likeness of each and every such identifiable
                individual person to enable inclusion and use of your
                Contributions in any manner contemplated by the Services and
                these Legal Terms.
              </p>
            </li>
            <li>
              <p className="compliance__par">
                Your Contributions are not false, inaccurate, or misleading.
              </p>
            </li>
            <li>
              <p className="compliance__par">
                Your Contributions are not unsolicited or unauthorised
                advertising, promotional materials, pyramid schemes, chain
                letters, spam, mass mailings, or other forms of solicitation.
              </p>
            </li>
            <li>
              <p className="compliance__par">
                Your Contributions are not obscene, lewd, lascivious, filthy,
                violent, harassing, libellous, slanderous, or otherwise
                objectionable (as determined by us).
              </p>
            </li>
            <li>
              <p className="compliance__par">
                Your Contributions do not ridicule, mock, disparage, intimidate,
                or abuse anyone.
              </p>
            </li>
            <li>
              <p className="compliance__par">
                Your Contributions are not used to harass or threaten (in the
                legal sense of those terms) any other person and to promote
                violence against a specific person or class of people.
              </p>
            </li>
            <li>
              <p className="compliance__par">
                Your Contributions do not violate any applicable law,
                regulation, or rule.
              </p>
            </li>
            <li>
              <p className="compliance__par">
                Your Contributions do not violate the privacy or publicity
                rights of any third party.
              </p>
            </li>
            <li>
              <p className="compliance__par">
                Your Contributions do not violate any applicable law concerning
                child pornography, or otherwise intended to protect the health
                or well-being of minors.
              </p>
            </li>
            <li>
              <p className="compliance__par">
                Your Contributions do not include any offensive comments that
                are connected to race, national origin, gender, sexual
                preference, or physical handicap.
              </p>
            </li>
            <li>
              <p className="compliance__par">
                Your Contributions do not otherwise violate, or link to material
                that violates, any provision of these Legal Terms, or any
                applicable law or regulation.
              </p>
            </li>
          </ul>
          <p className="compliance__par">
            Any use of the Services in violation of the foregoing violates these
            Legal Terms and may result in, among other things, termination or
            suspension of your rights to use the Services.
          </p>
        </section>
        <section id="contributions-license">
          <h2 className="compliance__title-small">7. CONTRIBUTION LICENSE</h2>
          <p className="compliance__par">
            You and Services agree that we may access, store, process, and use
            any information and personal data that you provide following the
            terms of the Privacy Policy and your choices (including settings).
          </p>
          <p className="compliance__par">
            By submitting suggestions or other feedback regarding the Services,
            you agree that we can use and share such feedback for any purpose
            without compensation to you.
          </p>
          <p className="compliance__par">
            We do not assert any ownership over your Contributions. You retain
            full ownership of all of your Contributions and any intellectual
            property rights or other proprietary rights associated with your
            Contributions. We are not liable for any statements or
            representations in your Contributions provided by you in any area on
            the Services. You are solely responsible for your Contributions to
            the Services and you expressly agree to exonerate us from any and
            all responsibility and to refrain from any legal action against us
            regarding your Contributions.
          </p>
        </section>
        <section id="third-party-websites-and-content">
          <h2 className="compliance__title-small">
            8. THIRD-PARTY WEBSITES AND CONTENT
          </h2>
          <p className="compliance__par">
            The Services may contain (or you may be sent via the Site) links to
            other websites (&#39;Third-Party Websites&#39;) as well as articles,
            photographs, text, graphics, pictures, designs, music, sound, video,
            information, applications, software, and other content or items
            belonging to or originating from third parties (&#39;Third-Party
            Content&#39;). Such Third-Party Websites and Third-Party Content are
            not investigated, monitored, or checked for accuracy,
            appropriateness, or completeness by us, and we are not responsible
            for any Third-Party Websites accessed through the Services or any
            Third-Party Content posted on, available through, or installed from
            the Services, including the content, accuracy, offensiveness,
            opinions, reliability, privacy practices, or other policies of or
            contained in the Third-Party Websites or the Third-Party Content.
            Inclusion of, linking to, or permitting the use or installation of
            any Third-Party Websites or any Third-Party Content does not imply
            approval or endorsement thereof by us. If you decide to leave the
            Services and access the Third-Party Websites or to use or install
            any Third-Party Content, you do so at your own risk, and you should
            be aware these Legal Terms no longer govern. You should review the
            applicable terms and policies, including privacy and data gathering
            practices, of any website to which you navigate from the Services or
            relating to any applications you use or install from the Services.
            Any purchases you make through Third-Party Websites will be through
            other websites and from other companies, and we take no
            responsibility whatsoever in relation to such purchases which are
            exclusively between you and the applicable third party. You agree
            and acknowledge that we do not endorse the products or services
            offered on Third-Party Websites and you shall hold us blameless from
            any harm caused by your purchase of such products or services.
            Additionally, you shall hold us blameless from any losses sustained
            by you or harm caused to you relating to or resulting in any way
            from any Third-Party Content or any contact with Third-Party
            Websites.
          </p>
        </section>
        <section id="services-management">
          <h2 className="compliance__title-small">9. SERVICES MANAGEMENT</h2>
          <p className="compliance__par">
            We reserve the right, but not the obligation, to: (1) monitor the
            Services for violations of these Legal Terms; (2) take appropriate
            legal action against anyone who, in our sole discretion, violates
            the law or these Legal Terms, including without limitation,
            reporting such user to law enforcement authorities; (3) in our sole
            discretion and without limitation, refuse, restrict access to, limit
            the availability of, or disable (to the extent technologically
            feasible) any of your Contributions or any portion thereof; (4) in
            our sole discretion and without limitation, notice, or liability, to
            remove from the Services or otherwise disable all files and content
            that are excessive in size or are in any way burdensome to our
            systems; and (5) otherwise manage the Services in a manner designed
            to protect our rights and property and to facilitate the proper
            functioning of the Services.
          </p>
        </section>
        <section id="privacy-policy">
          <h2 className="compliance__title-small">10. PRIVACY POLICY</h2>
          <p className="compliance__par">
            We care about data privacy and security. Please review our Privacy
            Policy:
            <Link
              offset={offset}
              className="compliance__link"
              to="prohibited-activities"
            >
              https://aristobyte.com/privacy-policy
            </Link>
            . By using the Services, you agree to be bound by our Privacy
            Policy, which is incorporated into these Legal Terms. Please be
            advised the Services are hosted in Poland. If you access the
            Services from any other region of the world with laws or other
            requirements governing personal data collection, use, or disclosure
            that differ from applicable laws in Poland, then through your
            continued use of the Services, you are transferring your data to
            Poland, and you expressly consent to have your data transferred to
            and processed in Poland.
          </p>
        </section>
        <section id="term-and-termination">
          <h2 className="compliance__title-small">11. TERM AND TERMINATION</h2>
          <p className="compliance__par">
            These Legal Terms shall remain in full force and effect while you
            use the Services. WITHOUT LIMITING ANY OTHER PROVISION OF THESE
            LEGAL TERMS, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND
            WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SERVICES
            (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY
            REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF
            ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE LEGAL
            TERMS OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR
            USE OR PARTICIPATION IN THE SERVICES OR DELETE ANY CONTENT OR
            INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR
            SOLE DISCRETION.
          </p>
          <p className="compliance__par">
            If we terminate or suspend your account for any reason, you are
            prohibited from registering and creating a new account under your
            name, a fake or borrowed name, or the name of any third party, even
            if you may be acting on behalf of the third party. In addition to
            terminating or suspending your account, we reserve the right to take
            appropriate legal action, including without limitation pursuing
            civil, criminal, and injunctive redress.
          </p>
        </section>
        <section id="modification-and-interruptions">
          <h2 className="compliance__title-small">
            12. MODIFICATIONS AND INTERRUPTIONS
          </h2>
          <p className="compliance__par">
            We reserve the right to change, modify, or remove the contents of
            the Services at any time or for any reason at our sole discretion
            without notice. However, we have no obligation to update any
            information on our Services. We will not be liable to you or any
            third party for any modification, price change, suspension, or
            discontinuance of the Services.
          </p>
          <p className="compliance__par">
            We cannot guarantee the Services will be available at all times. We
            may experience hardware, software, or other problems or need to
            perform maintenance related to the Services, resulting in
            interruptions, delays, or errors. We reserve the right to change,
            revise, update, suspend, discontinue, or otherwise modify the
            Services at any time or for any reason without notice to you. You
            agree that we have no liability whatsoever for any loss, damage, or
            inconvenience caused by your inability to access or use the Services
            during any downtime or discontinuance of the Services. Nothing in
            these Legal Terms will be construed to obligate us to maintain and
            support the Services or to supply any corrections, updates, or
            releases in connection therewith.
          </p>
        </section>
        <section id="governing-law">
          <h2 className="compliance__title-small">13. GOVERNING LAW</h2>
          <p className="compliance__par">
            These Legal Terms are governed by and interpreted following the laws
            of Poland, and the use of the United Nations Convention of Contracts
            for the International Sales of Goods is expressly excluded. If your
            habitual residence is in the EU, and you are a consumer, you
            additionally possess the protection provided to you by obligatory
            provisions of the law in your country to residence. AristoByte and
            yourself both agree to submit to the non-exclusive jurisdiction of
            the courts of Lesser Poland, which means that you may make a claim
            to defend your consumer protection rights in regards to these Legal
            Terms in Poland, or in the EU country in which you reside.
          </p>
        </section>
        <section id="dispute-resolution">
          <h2 className="compliance__title-small">14. DISPUTE RESOLUTION</h2>
          <h3 className="compliance__subtitle">Informal Negotiations</h3>
          <p className="compliance__par">
            To expedite resolution and control the cost of any dispute,
            controversy, or claim related to these Legal Terms (each a
            &#39;Dispute&#39; and collectively, the &#39;Disputes&#39;) brought
            by either you or us (individually, a &#39;Party&#39; and
            collectively, the &#39;Parties&#39;), the Parties agree to first
            attempt to negotiate any Dispute (except those Disputes expressly
            provided below) informally for at least thirty (30) days before
            initiating arbitration. Such informal negotiations commence upon
            written notice from one Party to the other Party.
          </p>
          <h3 className="compliance__subtitle">Binding Arbitration</h3>
          <p className="compliance__par">
            Any dispute arising from the relationships between the Parties to
            these Legal Terms shall be determined by one arbitrator who will be
            chosen in accordance with the Arbitration and Internal Rules of the
            European Court of Arbitration being part of the European Centre of
            Arbitration having its seat in Strasbourg, and which are in force at
            the time the application for arbitration is filed, and of which
            adoption of this clause constitutes acceptance. The seat of
            arbitration shall be Cracow, Poland. The language of the proceedings
            shall be Polish/English. Applicable rules of substantive law shall
            be the law of Poland.
          </p>
          <h3 className="compliance__subtitle">Restrictions</h3>
          <p className="compliance__par">
            The Parties agree that any arbitration shall be limited to the
            Dispute between the Parties individually. To the full extent
            permitted by law, (a) no arbitration shall be joined with any other
            proceeding; (b) there is no right or authority for any Dispute to be
            arbitrated on a class-action basis or to utilise class action
            procedures; and (c) there is no right or authority for any Dispute
            to be brought in a purported representative capacity on behalf of
            the general public or any other persons.
          </p>
          <h3 className="compliance__subtitle">
            Exceptions to Informal Negotiations and Arbitration
          </h3>
          <p className="compliance__par">
            The Parties agree that the following Disputes are not subject to the
            above provisions concerning informal negotiations binding
            arbitration: (a) any Disputes seeking to enforce or protect, or
            concerning the validity of, any of the intellectual property rights
            of a Party; (b) any Dispute related to, or arising from, allegations
            of theft, piracy, invasion of privacy, or unauthorised use; and (c)
            any claim for injunctive relief. If this provision is found to be
            illegal or unenforceable, then neither Party will elect to arbitrate
            any Dispute falling within that portion of this provision found to
            be illegal or unenforceable and such Dispute shall be decided by a
            court of competent jurisdiction within the courts listed for
            jurisdiction above, and the Parties agree to submit to the personal
            jurisdiction of that court.
          </p>
        </section>
        <section id="corrections">
          <h2 className="compliance__title-small">15. CORRECTIONS</h2>
          <p className="compliance__par">
            There may be information on the Services that contains typographical
            errors, inaccuracies, or omissions, including descriptions, pricing,
            availability, and various other information. We reserve the right to
            correct any errors, inaccuracies, or omissions and to change or
            update the information on the Services at any time, without prior
            notice.
          </p>
        </section>
        <section id="disclaimer">
          <h2 className="compliance__title-small">16. DISCLAIMER</h2>
          <p className="compliance__par">
            THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU
            AGREE THAT YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE RISK. TO
            THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES,
            EXPRESS OR IMPLIED, IN CONNECTION WITH THE SERVICES AND YOUR USE
            THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF
            MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
            NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE
            ACCURACY OR COMPLETENESS OF THE SERVICES&#39; CONTENT OR THE CONTENT
            OF ANY WEBSITES OR MOBILE APPLICATIONS LINKED TO THE SERVICES AND WE
            WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS,
            MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS, (2) PERSONAL
            INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM
            YOUR ACCESS TO AND USE OF THE SERVICES, (3) ANY UNAUTHORISED ACCESS
            TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL
            INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN, (4) ANY
            INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE SERVICES,
            (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE
            TRANSMITTED TO OR THROUGH THE SERVICES BY ANY THIRD PARTY, AND/OR
            (6) ANY ERRORS OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY
            LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY
            CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE
            SERVICES. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME
            RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A
            THIRD PARTY THROUGH THE SERVICES, ANY HYPERLINKED WEBSITE, OR ANY
            WEBSITE OR MOBILE APPLICATION FEATURED IN ANY BANNER OR OTHER
            ADVERTISING, AND WE WILL NOT BE A PARTY TO OR IN ANY WAY BE
            RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND ANY
            THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES. AS WITH THE PURCHASE
            OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT,
            YOU SHOULD USE YOUR BEST JUDGEMENT AND EXERCISE CAUTION WHERE
            APPROPRIATE.
          </p>
        </section>
        <section id="limitations-of-liability">
          <h2 className="compliance__title-small">
            17. LIMITATIONS OF LIABILITY
          </h2>
          <p className="compliance__par">
            IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE
            TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL,
            EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST
            PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM
            YOUR USE OF THE SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE
            POSSIBILITY OF SUCH DAMAGES. NOTWITHSTANDING ANYTHING TO THE
            CONTRARY CONTAINED HEREIN, OUR LIABILITY TO YOU FOR ANY CAUSE
            WHATSOEVER AND REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL
            TIMES BE LIMITED TO $100.00 USD. CERTAIN US STATE LAWS AND
            INTERNATIONAL LAWS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR
            THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IF THESE LAWS APPLY
            TO YOU, SOME OR ALL OF THE ABOVE DISCLAIMERS OR LIMITATIONS MAY NOT
            APPLY TO YOU, AND YOU MAY HAVE ADDITIONAL RIGHTS.
          </p>
        </section>
        <section id="indemnification">
          <h2 className="compliance__title-small">18. INDEMNIFICATION</h2>
          <p className="compliance__par">
            You agree to defend, indemnify, and hold us harmless, including our
            subsidiaries, affiliates, and all of our respective officers,
            agents, partners, and employees, from and against any loss, damage,
            liability, claim, or demand, including reasonable attorneys&rsquo;
            fees and expenses, made by any third party due to or arising out of:
            (1) use of the Services; (2) breach of these Legal Terms; (3) any
            breach of your representations and warranties set forth in these
            Legal Terms; (4) your violation of the rights of a third party,
            including but not limited to intellectual property rights; or (5)
            any overt harmful act toward any other user of the Services with
            whom you connected via the Services. Notwithstanding the foregoing,
            we reserve the right, at your expense, to assume the exclusive
            defence and control of any matter for which you are required to
            indemnify us, and you agree to cooperate, at your expense, with our
            defence of such claims. We will use reasonable efforts to notify you
            of any such claim, action, or proceeding which is subject to this
            indemnification upon becoming aware of it.
          </p>
        </section>
        <section id="user-data">
          <h2 className="compliance__title-small">19. USER DATA</h2>
          <p className="compliance__par">
            We will maintain certain data that you transmit to the Services for
            the purpose of managing the performance of the Services, as well as
            data relating to your use of the Services. Although we perform
            regular routine backups of data, you are solely responsible for all
            data that you transmit or that relates to any activity you have
            undertaken using the Services. You agree that we shall have no
            liability to you for any loss or corruption of any such data, and
            you hereby waive any right of action against us arising from any
            such loss or corruption of such data.
          </p>
        </section>
        <section id="electronic-communications-transactions-and-signatures">
          <h2 className="compliance__title-small">
            20. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES
          </h2>
          <p className="compliance__par">
            Visiting the Services, sending us emails, and completing online
            forms constitute electronic communications. You consent to receive
            electronic communications, and you agree that all agreements,
            notices, disclosures, and other communications we provide to you
            electronically, via email and on the Services, satisfy any legal
            requirement that such communication be in writing. YOU HEREBY AGREE
            TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER
            RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND
            RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE
            SERVICES. You hereby waive any rights or requirements under any
            statutes, regulations, rules, ordinances, or other laws in any
            jurisdiction which require an original signature or delivery or
            retention of non-electronic records, or to payments or the granting
            of credits by any means other than electronic means.
          </p>
        </section>
        <section id="california-users-and-residents">
          <h2 className="compliance__title-small">
            21. CALIFORNIA USERS AND RESIDENTS
          </h2>
          <p className="compliance__par">
            If any complaint with us is not satisfactorily resolved, you can
            contact the Complaint Assistance Unit of the Division of Consumer
            Services of the California Department of Consumer Affairs in writing
            at 1625 North Market Blvd., Suite N 112, Sacramento, California
            95834 or by telephone at (800) 952-5210 or (916) 445-1254.
          </p>
        </section>
        <section id="miscellaneous">
          <h2 className="compliance__title-small">22. MISCELLANEOUS</h2>
          <p className="compliance__par">
            These Legal Terms and any policies or operating rules posted by us
            on the Services or in respect to the Services constitute the entire
            agreement and understanding between you and us. Our failure to
            exercise or enforce any right or provision of these Legal Terms
            shall not operate as a waiver of such right or provision. These
            Legal Terms operate to the fullest extent permissible by law. We may
            assign any or all of our rights and obligations to others at any
            time. We shall not be responsible or liable for any loss, damage,
            delay, or failure to act caused by any cause beyond our reasonable
            control. If any provision or part of a provision of these Legal
            Terms is determined to be unlawful, void, or unenforceable, that
            provision or part of the provision is deemed severable from these
            Legal Terms and does not affect the validity and enforceability of
            any remaining provisions. There is no joint venture, partnership,
            employment or agency relationship created between you and us as a
            result of these Legal Terms or use of the Services. You agree that
            these Legal Terms will not be construed against us by virtue of
            having drafted them. You hereby waive any and all defences you may
            have based on the electronic form of these Legal Terms and the lack
            of signing by the parties hereto to execute these Legal Terms.
          </p>
        </section>
        <section id="contact-us">
          <h2 className="compliance__title-small">23. CONTACT US</h2>
          <p className="compliance__par">
            In order to resolve a complaint regarding the Services or to receive
            further information regarding use of the Services, please contact us
            at:
          </p>
          <ul className="compliance__list compliance__list--with-dots">
            <li>
              <p className="compliance__par">
                Online Contact Form:&nbsp;
                <NextLink className="compliance__link" href="/contact">
                  https://aristobyte.com/contact
                </NextLink>
              </p>
            </li>
            <li>
              <p className="compliance__par">
                Email:&nbsp;
                <NextLink
                  className="compliance__link"
                  href="tel:info@aristobyte.com"
                  target="_blank"
                >
                  info@aristobyte.com
                </NextLink>
              </p>
            </li>
            <li>
              <p className="compliance__par">
                Phone:&nbsp;
                <NextLink
                  className="compliance__link"
                  href="tel:+48-451-652-749"
                  target="_blank"
                >
                  (+48) 451 652 749
                </NextLink>
              </p>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </div>
);
