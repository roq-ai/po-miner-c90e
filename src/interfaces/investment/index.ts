import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface InvestmentInterface {
  id?: string;
  amount: number;
  interest_rate: number;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;

  organization?: OrganizationInterface;
  _count?: {};
}

export interface InvestmentGetQueryInterface extends GetQueryInterface {
  id?: string;
  organization_id?: string;
}
