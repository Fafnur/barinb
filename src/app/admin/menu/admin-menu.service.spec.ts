import { ADMIN_MENU_LINKS, AdminMenuService } from './admin-menu.service';

describe('AdminMenuService', () => {
  let service: AdminMenuService;

  beforeEach(async () => {
    service = new AdminMenuService();
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should create', () => {
    expect(service.links()).toEqual(ADMIN_MENU_LINKS);
  });
});
