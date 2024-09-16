import { CarEntity } from '../../../database/entities/car.entity';
import { CarResDto } from '../dto/res/car.res.dto';

export class CarMapper {
  public static toResponseDTO(entity: CarEntity): CarResDto {
    return {
      id: entity.id,
      brand: entity.brand,
      model: entity.model,
      year: entity.year,
      description: entity.description,
      photo: entity.photo, //todo
      region: entity.region,
      price: entity.price,
      currency: entity.currency,
      status: entity.status,
      created: entity.created,
      updated: entity.updated,
    };
  }
}
