import { privacyPolicyBulletPoints, privacyPolicyTwo } from "@/constants";

const PrivacyPolicyComp = () => {
  return (
    <div className="w-[90%] mx-auto p-2">
      <h1 className="text-center text-2xl lg:text-5xl font-semibold my-4">
        Privacy and Policy
      </h1>
      <p className="lg:my-10 my-4 text-xl">
        At Hubnex Skillup, we prioritize the protection and confidentiality of
        your personal data. Our goal is to ensure that you have a clear
        understanding of how your information is collected, used, and
        safeguarded when you interact with our platform. This Privacy Policy is
        designed to give you a comprehensive outline of our practices and to
        empower you with the knowledge to make informed decisions regarding your
        data.
      </p>
      <p className="lg:my-10 my-4 text-xl">
        We strongly advise you to read this policy thoroughly. By using our
        services, you agree to the terms set forth in this document.
      </p>

      {privacyPolicyBulletPoints.map((data) => (
        <div key={data.heading}>
          <h1 className="text-center text-2xl lg:text-5xl font-semibold my-4">
            {data.heading}
          </h1>
          {data.children.map((data) => (
            <div className="" key={data.heading}>
              <h1 className="text-2xl my-4 font-semibold">{data.heading}</h1>
              <h2 className="text-xl my-3 leading-7">{data.about}</h2>
              {data.children.map((data) => (
                <ul className="text-lg ml-10" key={data.heading}>
                  <li className="leading-8 list-disc">
                    <b className="text-xl">{data.heading}:</b>
                    {data.description}
                  </li>
                </ul>
              ))}
            </div>
          ))}
        </div>
      ))}
      {privacyPolicyTwo.map((data) => (
        <div key={data.heading}>
          <h1 className="text-center text-2xl lg:text-5xl font-semibold my-4">
            {data.heading}
          </h1>
          <p className="text-xl font-medium text-center underline">
            {data.about}
          </p>
          {data.children.map((data) => (
            <ul className="text-xl tracking-wide ml-10" key={data.heading}>
              <li className="leading-8 list-disc my-3">
                <b className="text-xl mr-2">{data.heading}:</b>
                {data.description}
              </li>
            </ul>
          ))}
        </div>
      ))}

      <h1 className=" text-2xl lg:text-3xl text-left mt-4 font-semibold">
        Third-Party Links and Services
      </h1>
      <p className="lg:mb-4 my-4 text-xl">
        Our platform may contain links to third-party websites or services.
        These links are provided for your convenience, and we do not control or
        endorse these external sites. We recommend that you review the privacy
        policies of any third-party sites you visit, as they may have different
        practices regarding the collection and use of your information.
      </p>
      <p className="lg:my-4  my-4 text-xl">
        Hubnex Skillup is not responsible for the content or privacy practices
        of these third-party websites. If you choose to access these sites, you
        do so at your own risk.
      </p>
      <h1 className=" text-2xl lg:text-3xl mt-10 text-left font-semibold">
        Children's Privacy
      </h1>
      <p className="lg:my-4  my-4 text-xl">
        Hubnex Skillup is committed to protecting the privacy of children. Our
        services are not intended for individuals under the age of 16. We do not
        knowingly collect personal data from minors without parental consent. If
        we become aware that we have collected personal information from a child
        under 16 without such consent, we will take immediate steps to delete
        that information.
      </p>
      <p className="lg:my-4  my-4 text-xl">
        If you are a parent or guardian and believe your child has provided us
        with personal data, please contact us using the information below.
      </p>
      <h1 className=" text-2xl lg:text-3xl mt-10 text-left font-semibold">
        International Data Transfers
      </h1>
      <p className="lg:my-4  my-4 text-xl">
        Your personal data may be transferred to and processed in countries
        outside of your own. When we transfer personal data internationally, we
        ensure that appropriate safeguards are in place to protect your
        information. We comply with applicable data protection laws, including
        the General Data Protection Regulation (GDPR) and other relevant
        regulations.
      </p>
      <p className="lg:my-4  my-4 text-xl">
        If you are located in the European Economic Area (EEA), you should be
        aware that your data may be transferred to countries that do not have
        the same level of data protection as your home country. We take steps to
        ensure that your data is treated securely and in accordance with this
        Privacy Policy
      </p>
      <h1 className=" text-2xl lg:text-3xl mt-10 text-left font-semibold">
        Changes to This Privacy Policy
      </h1>
      <p className="lg:my-4  my-4 text-xl">
        Hubnex Skillup reserves the right to modify this Privacy Policy at any
        time. If we make significant changes to how we handle your personal
        information, we will notify you through the email address associated
        with your account or through a notice on our website prior to the
        changes taking effect
      </p>
      <p className="lg:my-4  my-4 text-xl">
        We encourage you to review this Privacy Policy periodically to stay
        informed about our practices. Your continued use of our services after
        any modifications indicates your acceptance of the updated policy.
      </p>
      <h1 className=" text-2xl lg:text-3xl mt-10 text-left font-semibold">
        Contact Us
      </h1>
      <p className="lg:my-4  my-4 text-xl">
        If you have any questions, concerns, or requests regarding this Privacy
        Policy or our privacy practices, please contact us:
      </p>
      <ul className="text-xl ml-10 list-disc">
        <li>
          <b>Email:</b> support@hubnexskillup.com{" "}
        </li>
        <li>
          <b>Phone:</b>[Insert Phone Number]{" "}
        </li>
        <li>
          <b>Address:</b>[Insert Address]{" "}
        </li>
      </ul>
      <p className="lg:my-4  my-4 text-xl">
        We value your privacy and are committed to addressing any inquiries or
        issues you may have.
      </p>

      <h1 className=" text-2xl lg:text-3xl mt-10 text-left font-semibold">
        Governing Law
      </h1>
      <p className="lg:my-4  my-4 text-xl">
        This Privacy Policy and any disputes arising from or related to it shall
        be governed by and construed in accordance with the laws of [Insert
        Jurisdiction]. Any legal action or proceeding arising out of or relating
        to this policy shall be brought exclusively in the courts located in
        [Insert Jurisdiction].
      </p>

      <h1 className=" text-2xl lg:text-3xl mt-10 text-left font-semibold">
        Your Consent
      </h1>
      <p className="lg:my-4  my-4 text-xl">
        By using Hubnex Skillup’s services, you signify your consent to this
        Privacy Policy. If you do not agree to this policy, please refrain from
        using our services.
      </p>

      <h1 className=" text-2xl lg:text-3xl mt-10 text-left font-semibold">
        Additional Considerations
      </h1>
      <ul className="text-xl ml-10 list-disc">
        <li>
          <b>Updates on Security Practices:</b> We continually assess and
          improve our security practices to safeguard your personal data.
          Regular training for our employees regarding data protection and
          cybersecurity is a vital part of our commitment to your privacy.
        </li>
        <li>
          <b>Data Anonymization:</b>Whenever possible, we use anonymization
          techniques to process data without identifying individual users. This
          allows us to analyze trends and usage patterns without compromising
          your privacy.
        </li>
      </ul>

      <h1 className=" text-2xl lg:text-3xl mt-10 text-left font-semibold">
        Marketing Communications
      </h1>
      <p className="lg:my-4  my-4 text-xl">
        By opting into our marketing communications, you agree to receive
        updates and promotional content from Hubnex Skillup. You may withdraw
        your consent at any time by following the unsubscribe instructions
        included in each communication.
      </p>

      <h1 className=" text-2xl lg:text-3xl mt-10 text-left font-semibold">
        Data Breach Policy
      </h1>
      <p className="lg:my-4  my-4 text-xl">
        In the unlikely event of a data breach, we will promptly notify affected
        users and take necessary actions to mitigate any potential harm. We will
        also comply with all legal obligations regarding data breach
        notifications.
      </p>

      <h1 className=" text-2xl lg:text-3xl mt-10 text-left font-semibold">
        User Feedback and Complaints
      </h1>
      <p className="lg:my-4  my-4 text-xl">
        We value your feedback and encourage you to provide us with insights
        regarding our privacy practices. If you have a complaint about our
        handling of your personal data, please contact us directly. We will
        investigate any reported issues thoroughly and respond to your concerns
        promptly.
      </p>

      <h1 className=" text-2xl lg:text-3xl mt-10 text-left font-semibold">
        Final Notes
      </h1>
      <p className="lg:my-4  my-4 text-xl">
        This Privacy Policy is designed to ensure transparency and
        accountability regarding the handling of your personal information. At
        Hubnex Skillup, your trust is our priority, and we are dedicated to
        maintaining the confidentiality and security of your data throughout
        your educational journey.
      </p>
    </div>
  );
};

export default PrivacyPolicyComp;
