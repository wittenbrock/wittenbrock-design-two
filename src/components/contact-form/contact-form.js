import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import tw, { styled, css } from 'twin.macro';

import FormField from './form-field';
import SubmitButton from './submit-button';

// TO-DO: Make sure that the onSubmit section is using "" not '

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

// A helper function to encode the form's submission the way Netlify expects it
const netlifyEncode = data => {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)} = ${encodeURIComponent(data[key])}`)
    .join('&');
};

// Contact form component
export default () => {
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        message: '',
      }}
      validationSchema={Yup.object({
        name: Yup.string().required(`Please enter your name.`),
        email: Yup.string()
          .email(`Please enter a valid email address.`)
          .required(`Please enter your email address.`),
        message: Yup.string().required(`Please enter a message.`),
      })}
      onSubmit={(values, actions) => {
        fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: netlifyEncode({ 'form-name': 'contact-demo', ...values }),
        })
          .then(() => {
            alert(`Your message was sent successfully. Thank you!`);
            actions.resetForm();
          })
          .catch(() => {
            alert(
              `Oops! An error occurred while submitting the form. Please refresh the page and try again.`
            );
          })
          .finally(() => actions.setSubmitting(false));
      }}
    >
      {props => (
        <StyledDiv>
          <Form
            name="contact-demo"
            data-netlify={true}
            css={[
              tw`bg-white w-full max-w-sm sm:max-w-md xl:max-w-lg px-10 pt-10 sm:px-12 sm:pt-12 xl:px-16 xl:pt-16 mx-4 mb-4 text-indigo-darkest text-sm lg:text-base`,
              formStyles,
            ]}
          >
            <h3 tw="sr-only">Contact William Wittenbrock.</h3>
            <FormField
              type="text"
              name="name"
              label="Your name:"
              placeholder="Name"
            />
            <FormField
              type="email"
              name="email"
              label="Your email:"
              placeholder="Email"
            />
            <FormField
              type="textarea"
              name="message"
              label="Your message:"
              placeholder="Message"
              rows="5"
            />
            <SubmitButton disabled={!(props.isValid && props.dirty)} />
          </Form>
        </StyledDiv>
      )}
    </Formik>
  );
};
