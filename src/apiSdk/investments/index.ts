import axios from 'axios';
import queryString from 'query-string';
import { InvestmentInterface, InvestmentGetQueryInterface } from 'interfaces/investment';
import { GetQueryInterface } from '../../interfaces';

export const getInvestments = async (query?: InvestmentGetQueryInterface) => {
  const response = await axios.get(`/api/investments${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createInvestment = async (investment: InvestmentInterface) => {
  const response = await axios.post('/api/investments', investment);
  return response.data;
};

export const updateInvestmentById = async (id: string, investment: InvestmentInterface) => {
  const response = await axios.put(`/api/investments/${id}`, investment);
  return response.data;
};

export const getInvestmentById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/investments/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteInvestmentById = async (id: string) => {
  const response = await axios.delete(`/api/investments/${id}`);
  return response.data;
};
