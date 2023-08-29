import * as yup from 'yup';

export const performanceAssessmentValidationSchema = yup.object().shape({
  assessment_date: yup.date().required(),
  performance_score: yup.number().integer().required(),
  demand_score: yup.number().integer().required(),
  vehicle_id: yup.string().nullable().required(),
});
