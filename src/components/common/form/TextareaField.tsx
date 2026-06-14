"use client";

import { Field } from "formik";
import type { FieldProps } from "formik";
import type { TextareaFieldProps } from "./types";

const textareaClassName =
  "w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all resize-none";

export function TextareaField({ name, label, placeholder, rows = 4 }: TextareaFieldProps) {
  return (
    <Field name={name}>
      {({ field, meta }: FieldProps) => (
        <div>
          {label && (
            <label htmlFor={name} className="block text-sm font-extralight text-gray-300 mb-2">
              {label}
            </label>
          )}
          <textarea
            id={name}
            rows={rows}
            placeholder={placeholder}
            {...field}
            className={textareaClassName}
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
