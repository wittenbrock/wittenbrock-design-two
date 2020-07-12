import React from 'react';
import tw, { css } from 'twin.macro';
import { useField } from 'formik';
import { keyframes } from '@emotion/core';

const pulsateBackGentleKeyframe = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.98);
  }
  100% {
    transform: scale(1);
  }
`;

export const pulsateBackGentle = css`
  &:active,
  &:focus {
    animation: ${pulsateBackGentleKeyframe} 0.3s ease-in-out both;
  }
`;

const fieldStyles = [
  tw`bg-gray-lighter px-3 py-2 sm:py-3 w-full shadow-none rounded-none appearance-none focus:outline-none font-body font-normal`,

  css`
    ::placeholder {
      color: #4b5563;
    }

    &:hover {
      color: #6574cd;
      ::placeholder {
        color: inherit;
      }
    }

    &:focus,
    &:active {
      color: #fff;
      background-color: #00c1e6;
      ::placeholder {
        color: #fff;
      }
    }
  `,
];

const invalidStyles = css`
  background-color: #fed7d7;
  ::placeholder {
    color: #c53030;
  }

  &:hover {
    color: #c53030;
  }
`;

// Creates an input or textarea field with a label and error message
const FormField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const { type } = props;
  const fieldValidationError = meta.touched && meta.error;

  return (
    <p tw="pb-6 sm:pb-8 relative">
      <label tw="sr-only" htmlFor={props.id || props.name}>
        {label}
      </label>

      {/* Create an input if type="text" or type="email" */}
      {(type === 'text' || type === 'email') && (
        <input
          css={[
            fieldStyles,
            pulsateBackGentle,
            fieldValidationError && invalidStyles,
          ]}
          {...field}
          {...props}
        />
      )}

      {/* Create a textarea if type="textarea" */}
      {type === 'textarea' && (
        <textarea
          css={[
            tw`block`,
            fieldStyles,
            pulsateBackGentle,
            fieldValidationError && invalidStyles,
          ]}
          {...field}
          {...props}
        ></textarea>
      )}

      {/* Create an error message */}
      {fieldValidationError ? (
        <div tw="absolute bottom-6 lg:bottom-10 text-xs lg:text-sm text-red font-body font-normal">
          {meta.error}
        </div>
      ) : null}
    </p>
  );
};

export default FormField;
