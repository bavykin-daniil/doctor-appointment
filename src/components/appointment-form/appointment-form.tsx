import { memo, useEffect, useCallback, type FC } from "react";
// hooks
import { useForm } from "react-hook-form";
// components
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import FormSelect from "@root/components/form-select/form-select";
import FormTextField from "@root/components/form-text-field";
import FormDatePicker from "@root/components/form-date-picker";
// constants
import { DATE_FORMATS } from "@root/constants/date-formats.constants";
// schemas
import { AppointmentFormValuesSchema } from "@root/schemas/appointment-form-values.schema";
// utils
import { yupResolver } from "@hookform/resolvers/yup";
import { currentDate, hundredYearsAgo } from "@root/utils/date.utils";
// types
import type { AppointmentFormProps } from "./appointment-form.interface";
import type { AppointmentFormValues } from "@root/types/appointment-form-values.types";
// styles
import { FormWrapper } from "./appointment-form.styled";
import { SelectChangeEvent } from "@mui/material";

const AppointmentForm: FC<AppointmentFormProps> = ({
  sexOptions,
  cityOptions,
  defaultValues,
  doctorsOptions,
  specialityOptions,
  onChangeValues,
  onChangeDoctor,
}) => {
  const {
    control,
    formState: { errors, isValid },
    watch,
    reset,
    setValue,
    handleSubmit,
  } = useForm<AppointmentFormValues>({
    defaultValues,
    resolver: yupResolver(AppointmentFormValuesSchema),
    mode: "onBlur",
  });

  const watchAllFields = watch();

  useEffect(() => {
    if (JSON.stringify(watchAllFields) !== JSON.stringify(defaultValues)) {
      onChangeValues(watchAllFields);
    }
  }, [onChangeValues, watchAllFields]);

  const handleFormSubmit = useCallback((data: AppointmentFormValues) => {
    alert(JSON.stringify(data, null, 2));
    reset();
  }, []);
  const handleChangeDoctor = useCallback((event: SelectChangeEvent<string>) => {
    const value = event.target.value;

    setValue("doctorFullName", value);

    if (value) {
      const { city, speciality } = onChangeDoctor(value);

      setValue("city", city || "");
      setValue("speciality", speciality || "");
    } else {
      setValue("city", "");
      setValue("speciality", "");
    }
  }, []);

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <Stack gap={4}>
          <Stack gap={3}>
            <FormTextField
              name="name"
              label="Name"
              control={control}
              errorMessage={errors?.name?.message}
              hasError={!!errors?.name?.message}
            />
            <FormDatePicker
              name="birthday"
              label="Birthday"
              control={control}
              maxDate={currentDate}
              minDate={hundredYearsAgo}
              format={DATE_FORMATS.DAY_MONTH_YEAR}
              errorMessage={errors.birthday?.message}
              hasError={!!errors.birthday?.message}
            />
            <FormSelect
              name="sex"
              label="Sex"
              control={control}
              options={sexOptions}
              errorMessage={errors.sex?.message}
              hasError={!!errors.sex?.message}
            />
            <FormSelect
              name="city"
              label="City"
              control={control}
              options={cityOptions}
              errorMessage={errors.city?.message}
              hasError={!!errors.city?.message}
            />
            <FormSelect
              name="speciality"
              label="Speciality"
              control={control}
              options={specialityOptions}
              errorMessage={errors.speciality?.message}
              hasError={!!errors.speciality?.message}
            />
            <FormSelect
              name="doctorFullName"
              label="Doctor Full Name"
              control={control}
              options={doctorsOptions}
              errorMessage={errors.doctorFullName?.message}
              hasError={!!errors.doctorFullName?.message}
              onChange={handleChangeDoctor}
            />
            <FormTextField
              name="email"
              label="Email address"
              control={control}
              errorMessage={errors?.email?.message}
              hasError={!!errors?.email?.message}
            />
            <FormTextField
              name="mobile"
              label="Phone number"
              control={control}
              errorMessage={errors?.mobile?.message}
              hasError={!!errors?.mobile?.message}
            />
          </Stack>
          <Button type="submit" variant="contained" disabled={!isValid}>
            Submit
          </Button>
        </Stack>
      </form>
    </FormWrapper>
  );
};

export default memo(AppointmentForm);
