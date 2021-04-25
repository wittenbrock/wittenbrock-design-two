import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import tw, { styled, css } from 'twin.macro';
import addToMailchimp from 'gatsby-plugin-mailchimp';

import FormField from './FormField';
import { SubmitButton } from '../Buttons';

const StyledDiv = styled.div`
  flex-basis: 50%;
  display: flex;
  justify-content: center;
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
        }).then(data => {
          if (data.result === 'error') {
            alert('error: likely a duplicate email');
          } else {
            alert('success');
            actions.resetForm();
          }
        });
      }}
    >
      {({ isValid, dirty }) => (
        <StyledDiv>
          <Form
            name="newsletter-signup"
            css={[
              tw`bg-white w-full max-w-sm sm:max-w-md xl:max-w-lg px-10 pt-10 sm:px-12 sm:pt-12 xl:px-16 xl:pt-16 mb-4 text-indigo-darkest text-sm lg:text-base`,
              formStyles,
            ]}
          >
            <h3 tw="sr-only">
              Subscribe to the Wittenbrock Design newsletter.
            </h3>
            <Field type="hidden" name="form-name" value="newsletter-signup" />
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
