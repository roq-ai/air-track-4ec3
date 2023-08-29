import { PerformanceAssessmentInterface } from 'interfaces/performance-assessment';
import { ReservationInterface } from 'interfaces/reservation';
import { UsageTrackingInterface } from 'interfaces/usage-tracking';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface VehicleInterface {
  id?: string;
  name: string;
  model: string;
  manufacturer: string;
  year_of_manufacture: number;
  capacity: number;
  organization_id: string;
  created_at?: any;
  updated_at?: any;
  performance_assessment?: PerformanceAssessmentInterface[];
  reservation?: ReservationInterface[];
  usage_tracking?: UsageTrackingInterface[];
  organization?: OrganizationInterface;
  _count?: {
    performance_assessment?: number;
    reservation?: number;
    usage_tracking?: number;
  };
}

export interface VehicleGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  model?: string;
  manufacturer?: string;
  organization_id?: string;
}
