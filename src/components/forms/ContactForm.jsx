import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import tw, { styled, css } from 'twin.macro';

import FormField from './FormField';
import { SubmitButton } from '../Buttons';

const StyledDiv = styled.div`
  flex-basis: 50%;
  display: flex;
  justify-content: center;
  flex-shrink: 0;
`;

const formStyles = css`
  height: 24rem;

  @media screen and (min-width: 640px) {
    height: 28rem;
  }

  @media screen and (min-width: 1280px) {
    height: 32rem;
  }
`;

// A helper function to encode the form's submission the way Netlify expects it
const encode = data => {
  return Object.keys(data)
    // eslint-disable-next-line prefer-template
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

// Contact form component
// Formik components: https://formik.org/docs/overview
// Yup for client side validation: https://github.com/jquense/yup
export default function ContactForm() {
  return (
    <Formik
      initialValues={{
        'form-name': `contact-william`,
        'voight-kampff-test': ``,
        name: ``,
        email: ``,
        message: ``,
      }}
      validationSchema={Yup.object({
        name: Yup.string().required(`Please enter your name.`),
        email: Yup.string()
          .email(`Please enter a valid email address.`)
          .required(`Please enter your email address.`),
        message: Yup.string().required(`Please enter a message.`),
      })}
      onSubmit={(values, actions) => {
        fetch("/?no-cache=1", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "contact-william", ...values })
        })
          .then(() => {
            // eslint-disable-next-line no-alert
            alert(`Your message was sent successfully. Thank you!`);
            actions.resetForm();
          })
          .catch(error => {
            // eslint-disable-next-line no-alert
            alert(
              `Oops! An error occurred while submitting the form. Please refresh the page and try again.
              
              ${error}`
            );
          })
          .finally(() => actions.setSubmitting(false));
      }}
    >
      {({ isValid, dirty }) => (
        <StyledDiv>
          <Form
            name="contact-william"
            data-netlify="true"
            date-netlify-honeypot="voight-kampff-test"
            css={[
              tw`bg-white w-full max-w-sm sm:max-w-md xl:max-w-lg px-10 pt-10 sm:px-12 sm:pt-12 xl:px-16 xl:pt-16 mb-4 text-indigo-darkest text-sm lg:text-base`,
              formStyles,
            ]}
          >
            <h2 tw="sr-only">Contact William Wittenbrock.</h2>
            <Field type="hidden" name="form-name" value="contact-william" />
            <Field type="hidden" name="voight-kampff-test" />
            <FormField
              type="text"
              name="name"
              id="name"
              label="Your name:"
              placeholder="Name"
            />
            <FormField
              type="email"
              name="email"
              id="email"
              label="Your email:"
              placeholder="Email"
            />
            <FormField
              type="textarea"
              name="message"
              id="message"
              label="Your message:"
              placeholder="Message"
              rows="5"
            />
            <SubmitButton disabled={!(isValid && dirty)} />
          </Form>
        </StyledDiv>
      )}
    </Formik>
  );
}
