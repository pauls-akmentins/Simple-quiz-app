import { MOCK_DATA } from '../mocks/mockData/mock-data';
import { MockData } from '../interfaces';

export const MockApi = () =>
  new Promise<MockData>((resolve) =>
    setTimeout(() => {
      resolve(MOCK_DATA);
    }, 100)
  );
