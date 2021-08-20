import { ApiService } from "@core/providers/api.service";
import { of } from "rxjs/internal/observable/of";

export const mockApiService = jasmine.createSpyObj('ApiService', {
  get: of( { data: [{ }] } ),
  put: of({ }),
  post: of({ }),
  delete: of({ }),
  export: of({ }),
}) as ApiService;
