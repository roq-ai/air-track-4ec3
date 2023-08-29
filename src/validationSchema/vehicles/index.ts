import * as yup from 'yup';

export const vehicleValidationSchema = yup.object().shape({
  name: yup.string().required(),
  model: yup.string().required(),
  manufacturer: yup.string().required(),
  year_of_manufacture: yup.number().integer().required(),
  capacity: yup.number().integer().required(),
  organization_id: yup.string().nullable().required(),
});
