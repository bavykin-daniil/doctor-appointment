// types
import type { SelectOption } from "@root/types/select-option.types";
import type { AppointmentFormValues } from "@root/types/appointment-form-values.types";

export interface AppointmentFormProps {
  sexOptions: SelectOption[];
  cityOptions: SelectOption[];
  defaultValues: AppointmentFormValues;
  doctorsOptions: SelectOption[];
  specialityOptions: SelectOption[];
  onChangeValues: (data: AppointmentFormValues) => void;
  onChangeDoctor: (doctorFullName: string) => {
    city?: string;
    speciality?: string;
  };
}
