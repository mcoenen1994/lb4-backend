import {Entity, model, property} from '@loopback/repository';

@model()
export class Partner extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  image: string;

  @property({
    type: 'string',
    required: true,
  })
  subphase: string;


  constructor(data?: Partial<Partner>) {
    super(data);
  }
}

export interface PartnerRelations {
  // describe navigational properties here
}

export type PartnerWithRelations = Partner & PartnerRelations;
