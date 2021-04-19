import React from 'react';
import PropTypes from 'prop-types';
import tw, { css } from 'twin.macro';
import { useField } from 'formik';
import { keyframes } from '@emotion/react';

import tailwindColors from '../../../tailwind-colors';

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
  tw`bg-gray-200 px-3 py-2 sm:py-3 w-full shadow-none rounded-none appearance-none focus:outline-none font-body font-normal`,

  css`
    ::placeholder {
      color: ${tailwindColors.gray[600]};
    }

    &:hover {
      color: ${tailwindColors.indigo.DEFAULT};
      ::placeholder {
        color: inherit;
      }
    }

    &:focus,
    &:active {
      color: ${tailwindColors.white};
      background-color: ${tailwindColors.blue.lighter};
      ::placeholder {
        color: ${tailwindColors.white};
      }
    }
  `,
];

const invalidStyles = css`
  background-color: ${tailwindColors.red.lightest};
  ::placeholder {
    color: ${tailwindColors.red.darker};
  }

  &:hover {
    color: ${tailwindColors.red.darker};
  }
`;

// Creates an input or textarea field with a label and error message
export default function FormField({ label, ...props }) {
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
        <span tw="block absolute bottom-6 lg:bottom-10 text-xs lg:text-sm text-red font-body font-normal">
          {meta.error}
        </span>
      ) : null}
    </p>
  );
}

FormField.propTypes = {
  type: PropTypes.oneOf(['text', 'hidden', 'email', 'textarea']).isRequired,
  id: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string.isRequired,
};
