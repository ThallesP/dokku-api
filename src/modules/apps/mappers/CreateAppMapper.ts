import { ICreateAppDTO } from '../dtos/ICreateAppDTO';

export class CreateAppMapper {
  static toMapper({ name }: ICreateAppDTO) {
    return { name };
  }
}
