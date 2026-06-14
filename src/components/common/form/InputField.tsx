"use client";

import { Field } from "formik";
import type { FieldProps } from "formik";
import type { InputFieldProps } from "./types";

const inputClassName =
  "w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all";

export function InputField({ name, label, type = "text", placeholder, required }: InputFieldProps) {
  return (
    <Field name={name}>
      {({ field, meta }: FieldProps) => (
        <div>
          {label && (
            <label htmlFor={name} className="block text-sm font-extralight text-gray-700 mb-2">
              {label}
            </label>
          )}
          <input
            id={name}
            type={type}
            placeholder={placeholder}
            required={required}
            {...field}
            className={inputClassName}
            aria-invalid={meta.touched && !!meta.error}
            aria-describedby={meta.touched && meta.error ? `${name}-error` : undefined}
          />
          {meta.touched && meta.error && (
            <span id={`${name}-error`} role="alert" className="mt-1 block text-sm text-red-600">
              {meta.error}
            </span>
          )}
        </div>
      )}
    </Field>
  );
}
