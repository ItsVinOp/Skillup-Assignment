const RefundPolicyComp = () => {
  return (
    <div className="w-[90%] mx-auto p-2">
      <h1 className="text-center text-2xl lg:text-5xl font-semibold my-4">
        Refund Policy
      </h1>
      <p className="lg:my-10 my-4 text-xl">
        At Hubnex Skillup, we are committed to providing an enriching learning
        experience and understand that there may be instances where a
        participant may need to cancel their enrollment. Our refund policy
        ensures that both our learners and our team are treated fairly in such
        circumstances.
      </p>
      
      <h1 className="text-left text-2xl lg:text-3xl my-3 font-semibold">
        Refund Eligibility
      </h1>
      <ul className=" ml-5 text-xl list-disc">
        <li>
          <b>Full Refunds: </b>A full refund will be granted for any cancellation requests made up to <b> 7
          days before </b>the start date of the program or workshop. The refund will be processed
          using the same payment method used during the original purchase.
        </li>
      </ul>
      <h1 className="text-left text-2xl lg:text-3xl my-3 font-semibold">
        Non-Refundable Conditions
      </h1>
      <ul className=" ml-5 text-xl list-disc">
        <li>
          If a request for a refund is made <b> less than 7 days before</b> the
          program's start date, we will be unable to process a refund except in
          cases of exceptional circumstances (see section 3 below).
        </li>
        <li>
          <b>After the program/workshop has commenced </b>, refunds will no
          longer be issued. This applies regardless of the reason for
          cancellation once the workshop materials have been distributed or the
          session has started.
        </li>
      </ul>
      <h1 className="text-left text-2xl lg:text-3xl my-3 font-semibold">
        Refund Request Process
      </h1>
      <ul className=" ml-5 text-xl list-disc">
        <li>
          To request a refund, participants must submit a written request to our
          support team at <b> support@hubnexskillup.com</b> with the subject
          line “Refund Request - [Program Name]”.
        </li>
        <li>
          Please include:
          <ul className="ml-5 text-xl list-circle">
            <li>Your Name</li>
            <li>Program or workshop name</li>
            <li>Date of Registration</li>
            <li>
              Reason for requesting the refund (and relevant documentation, if
              applicable)
            </li>
          </ul>
        </li>
        <li>
          We will process your request within 5-7 business days of receiving the
          necessary information.
        </li>
      </ul>
      <h1 className="text-left text-2xl lg:text-3xl my-3 font-semibold">
        Processing Refunds
      </h1>
      <ul className="ml-5 text-xl list-disc">
        <li>
          Refunds will typically be processed within <b> 14 business days</b> of
          approval.
        </li>
        <li>
          Refunds will be issued back to the original method of payment used at
          the time of purchase
        </li>
      </ul>
      <h1 className="text-left text-2xl lg:text-3xl my-3 font-semibold">
        Program Changes or Cancellations by Hubnex Skillup
      </h1>
      <ul className="ml-5 text-xl list-disc">
        <li>
          In the unlikely event that Hubnex Skillup cancels a program, workshop
          participants will be eligible for a <b> full refund</b> regardless of
          the date of cancellation.
        </li>
        <li>
          If a program’s schedule is altered, participants will have the option
          to either receive a refund or transfer their registration to the new
          dates.
        </li>
      </ul>

      <h1 className="text-left text-2xl lg:text-3xl my-3 font-semibold">
        Transfer of Registration
      </h1>
      <ul className="ml-5 text-xl list-disc">
        <li>
          As an alternative to a refund, participants may request to transfer
          their registration to another program or workshop. This must be done
          within <b> 10 days</b> of the original program's start date and is
          subject to availability.
        </li>
      </ul>
    </div>
  );
};

export default RefundPolicyComp;
