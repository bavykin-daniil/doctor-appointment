import { memo, useMemo, useState, useCallback, type FC } from "react";
// hooks
import useCitiesHook from "@root/hooks/use-cities.hook";
import useDoctorsHook from "@root/hooks/use-doctors-hook";
import useSpecialitiesHook from "@root/hooks/use-specialities-hook";
// components
import BlockWrapper from "@root/components/block-wrapper";
import AppointmentForm from "@root/components/appointment-form";
// constants
import { APPOINTMENT_FORM_VALUES } from "@root/constants/appointment-form-values.constants";
// utils
import { filterDoctors } from "@root/utils/doctors.utils";
import { filterSpecialities } from "@root/utils/speciality.utils";
import {
  mapCitiesToOptions,
  mapDoctorsToOptions,
  mapSpecialitiesToOptions,
} from "@root/utils/select-options.utils";
// types
import type { AppointmentFormValues } from "@root/types/appointment-form-values.types";

const AppointmentFormContainer: FC = () => {
  const { data: citiesData, isLoading: citiesLoading } = useCitiesHook();
  const { data: doctorsData, isLoading: doctorsLoading } = useDoctorsHook();
  const { data: specialitiesData, isLoading: specialitiesLoading } =
    useSpecialitiesHook();

  const [values, setValues] = useState<AppointmentFormValues>(
    APPOINTMENT_FORM_VALUES
  );

  const handleChangeValues = useCallback((data: AppointmentFormValues) => {
    setValues((prevState) => ({ ...prevState, ...data }));
  }, []);
  const handleChangeDoctor = useCallback(
    (doctorFullName: string) => {
      const doctor = doctorsData?.filter((doctor) => {
        const fullName = doctor.name + " " + doctor.surname;
        return fullName === doctorFullName;
      })[0];
      const city = citiesData?.filter((city) => city.id === doctor?.cityId)[0]
        .name;
      const speciality = specialitiesData?.filter(
        (speciality) => speciality.id === doctor?.specialityId
      )[0].name;

      return { city, speciality };
    },
    [citiesData, doctorsData, specialitiesData]
  );

  const sexOptions = useMemo(
    () => [
      { id: "Male", name: "Male", value: "Male" },
      { id: "Female", name: "Female", value: "Female" },
    ],
    []
  );
  const cityOptions = useMemo(
    () => mapCitiesToOptions(citiesData),
    [citiesData]
  );
  const doctorsOptions = useMemo(() => {
    return mapDoctorsToOptions(
      filterDoctors({
        cities: citiesData,
        doctors: doctorsData,
        cityName: values.city,
        birthdate: values.birthday,
        specialities: specialitiesData,
        specialityName: values.speciality,
      })
    );
  }, [values, citiesData, doctorsData, specialitiesData]);
  const specialityOptions = useMemo(() => {
    return mapSpecialitiesToOptions(
      filterSpecialities(values.sex, specialitiesData)
    );
  }, [specialitiesData, values.sex]);

  return (
    <BlockWrapper
      size="xs"
      title="Doctor Appointment"
      isLoading={citiesLoading || doctorsLoading || specialitiesLoading}
      isDisableGutters
    >
      <AppointmentForm
        sexOptions={sexOptions}
        cityOptions={cityOptions}
        defaultValues={values}
        doctorsOptions={doctorsOptions}
        specialityOptions={specialityOptions}
        onChangeDoctor={handleChangeDoctor}
        onChangeValues={handleChangeValues}
      />
    </BlockWrapper>
  );
};

export default memo(AppointmentFormContainer);
