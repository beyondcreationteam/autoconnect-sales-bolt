"use client";

import { Field } from "formik";
import type { FieldProps } from "formik";
import type { SelectFieldProps } from "./types";

const selectClassName =
  "w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all [&>option]:text-black";

export function SelectField({ name, label, options, placeholder, required }: SelectFieldProps) {
  return (
    <Field name={name}>
      {({ field, meta }: FieldProps) => (
        <div>
          {label && (
            <label htmlFor={name} className="block text-sm font-extralight text-gray-300 mb-2">
              {label}
            </label>
          )}
          <select
            id={name}
            required={required}
            {...field}
            className={selectClassName}
            aria-invalid={meta.touched && !!meta.error}
            aria-describedby={meta.touched && meta.error ? `${name}-error` : undefined}
          >
            {placeholder && <option value="">{placeholder}</option>}
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
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
