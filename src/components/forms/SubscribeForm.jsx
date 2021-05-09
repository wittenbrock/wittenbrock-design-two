import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import tw, { styled } from 'twin.macro';
import addToMailchimp from 'gatsby-plugin-mailchimp';

import FormField from './FormField';
import { SubmitButton } from '../Buttons';

const StyledDiv = styled.div`
  flex-basis: 50%;
  display: flex;
  justify-content: center;
`;

export default function SubscribeForm() {
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      validationSchema={Yup.object({
        firstName: Yup.string().required(`Please enter your first name.`),
        lastName: Yup.string().required(`Please enter your last name.`),
        email: Yup.string()
          .email(`Please enter a valid email address.`)
          .required(`Please enter your email address.`),
      })}
      onSubmit={(formValues, actions) => {
        addToMailchimp(formValues.email, {
          FNAME: formValues.firstName,
          LNAME: formValues.lastName,
        })
          .then(data => {
            // If Mail Chimp responds with success, notify the user
            if (data.result === 'success') {
              // eslint-disable-next-line no-alert
              alert('Thank you for subscribing!');
              return;
            }
            // If Mail Chimp responds that the user has already subscribed, notify them
            if (data.msg.includes('is already subscribed')) {
              // eslint-disable-next-line no-alert
              alert("It looks like you're already subscribed.");
              return;
            }
            // If Mail Chimp resonds with an error, notify the user
            if (data.result === 'error') {
              // eslint-disable-next-line no-alert
              alert(
                'An error occured during the sign up process. Please refresh the page and try again. If this error persists, please send me a message: wittenbrockdesign.com/contact.'
              );
            }
          })
          // Handle the edge case where browser extensions prevent posting to Mail Chimp
          .catch(() => {
            // eslint-disable-next-line no-alert
            alert(
              'An error occured during the sign up process. The form did not submit successfully. This could be caused by privacy related browser extensions. Please disable these extensions or try again in a different browser.'
            );
          })
          // Clear the form's inputs
          .finally(() => actions.resetForm());
      }}
    >
      {({ isValid, dirty }) => (
        <StyledDiv>
          <Form
            name="newsletter-signup"
            css={[
              tw`bg-white w-full max-w-sm sm:max-w-md xl:max-w-lg px-10 py-14 sm:py-12 sm:py-16 xl:px-16 xl:py-20 mb-4 text-indigo-darkest text-sm lg:text-base`,
            ]}
          >
            <h2 tw="sr-only">
              Subscribe to the Wittenbrock Design newsletter.
            </h2>
            <FormField
              type="text"
              name="firstName"
              id="firstName"
              label="Your first name:"
              placeholder="First name"
            />
            <FormField
              type="text"
              name="lastName"
              id="lastName"
              label="Your last name:"
              placeholder="Last name"
            />
            <FormField
              type="email"
              name="email"
              id="email"
              label="Your email:"
              placeholder="Email"
            />
            <SubmitButton disabled={!(isValid && dirty)} />
          </Form>
        </StyledDiv>
      )}
    </Formik>
  );
}
