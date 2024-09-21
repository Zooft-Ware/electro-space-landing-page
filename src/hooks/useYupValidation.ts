import { useCallback } from "react";
import { ObjectSchema, ValidationError } from "yup";

const useYupValidationResolver = <TIn = {}, TContext = any, TDefault = any>(
  validationSchema: ObjectSchema<any, TContext, TDefault, any>
) =>
  useCallback(
    async (data: TIn) => {
      try {
        const values = await validationSchema.validate(data, {
          abortEarly: false,
        });

        return {
          values,
          errors: {},
        };
      } catch (errors) {
        return {
          values: {},
          errors: (errors as ValidationError).inner.reduce(
            (allErrors, currentError) => ({
              ...allErrors,
              [currentError.path!]: {
                type: currentError.type ?? "validation",
                message: currentError.message,
              },
            }),
            {}
          ),
        };
      }
    },
    [validationSchema]
  );

export default useYupValidationResolver;
