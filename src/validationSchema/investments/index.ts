import * as yup from 'yup';

export const investmentValidationSchema = yup.object().shape({
  amount: yup.number().integer().required(),
  interest_rate: yup.number().integer().required(),
  organization_id: yup.string().nullable(),
});
