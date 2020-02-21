import React from 'react';
import { useForm } from 'react-hook-form';

import FieldsTabellenmiete from './fieldsets/fieldsTabellenmiete';
import FieldsAdresse from './fieldsets/fieldsAdresse';
import StepFooter from './steps/footer';
import useFormData from './formData/useFormData';

export default ({ isFirstStep, isLastStep, onSubmit, previous }) => {
  const [state] = useFormData();
  const {
    register,
    handleSubmit,
    errors,
    setError,
    setValue,
    clearError
  } = useForm({
    defaultValues: state.data
  });

  return (
    <form
      onSubmit={handleSubmit(data => {
        onSubmit(errors, data);
      })}
    >
      <FieldsAdresse
        register={register}
        setValue={setValue}
        setError={setError}
        clearError={clearError}
        errors={errors}
      />
      <FieldsTabellenmiete register={register} />

      <StepFooter
        isFirstStep={isFirstStep}
        isLastStep={isLastStep}
        previous={previous}
      />
    </form>
  );
};
