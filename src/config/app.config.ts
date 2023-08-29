interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Vehicle Owner'],
  customerRoles: [],
  tenantRoles: ['Administrator', 'Vehicle Owner'],
  tenantName: 'Organization',
  applicationName: 'AIR Track',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
