import { VehicleInterface } from 'interfaces/vehicle';
import { GetQueryInterface } from 'interfaces';

export interface PerformanceAssessmentInterface {
  id?: string;
  assessment_date: any;
  performance_score: number;
  demand_score: number;
  vehicle_id: string;
  created_at?: any;
  updated_at?: any;

  vehicle?: VehicleInterface;
  _count?: {};
}

export interface PerformanceAssessmentGetQueryInterface extends GetQueryInterface {
  id?: string;
  vehicle_id?: string;
}
