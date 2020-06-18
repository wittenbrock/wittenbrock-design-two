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

const fieldStyles = css`
  ${tw`bg-gray-lighter px-3 py-2 sm:py-3 w-full shadow-none placeholder-gray-darker rounded-none focus:bg-blue-lighter active:bg-blue-lighter focus:text-white active:text-white focus:placeholder-white active:placeholder-white appearance-none focus:outline-none`}
`;

// Creates an input or textarea field with a label and error message
const FormField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const { type } = props;
  return (
    <p tw="pb-6 sm:pb-8 relative">
      <label tw="sr-only" htmlFor={props.id || props.name}>
        {label}
      </label>

      {/* Create an input if type="text" or type="email" */}
      {(type === 'text' || type === 'email') && (
        <input css={[fieldStyles, pulsateBackGentle]} {...field} {...props} />
      )}

      {/* Create a textarea if type="textarea" */}
      {type === 'textarea' && (
        <textarea
          css={[tw`block`, fieldStyles, pulsateBackGentle]}
          {...field}
          {...props}
        ></textarea>
      )}

      {/* Create an error message */}
      {meta.touched && meta.error ? (
        <div tw="absolute bottom-6 lg:bottom-10 text-xs lg:text-sm">
          {meta.error}
        </div>
      ) : null}
    </p>
  );
};

export default FormField;
