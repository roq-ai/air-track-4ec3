import * as yup from 'yup';

export const usageTrackingValidationSchema = yup.object().shape({
  date: yup.date().required(),
  usage_hours: yup.number().integer().required(),
  vehicle_id: yup.string().nullable().required(),
});
