import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Partner} from '../models';
import {PartnerRepository} from '../repositories';

export class PartnerController {
  constructor(
    @repository(PartnerRepository)
    public partnerRepository : PartnerRepository,
  ) {}

  @post('/partners', {
    responses: {
      '200': {
        description: 'Partner model instance',
        content: {'application/json': {schema: getModelSchemaRef(Partner)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Partner, {
            title: 'NewPartner',
            
          }),
        },
      },
    })
    partner: Partner,
  ): Promise<Partner> {
    return this.partnerRepository.create(partner);
  }

  @get('/partners/count', {
    responses: {
      '200': {
        description: 'Partner model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Partner) where?: Where<Partner>,
  ): Promise<Count> {
    return this.partnerRepository.count(where);
  }

  @get('/partners', {
    responses: {
      '200': {
        description: 'Array of Partner model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Partner, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Partner) filter?: Filter<Partner>,
  ): Promise<Partner[]> {
    return this.partnerRepository.find(filter);
  }

  @patch('/partners', {
    responses: {
      '200': {
        description: 'Partner PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Partner, {partial: true}),
        },
      },
    })
    partner: Partner,
    @param.where(Partner) where?: Where<Partner>,
  ): Promise<Count> {
    return this.partnerRepository.updateAll(partner, where);
  }

  @get('/partners/{id}', {
    responses: {
      '200': {
        description: 'Partner model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Partner, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Partner, {exclude: 'where'}) filter?: FilterExcludingWhere<Partner>
  ): Promise<Partner> {
    return this.partnerRepository.findById(id, filter);
  }

  @patch('/partners/{id}', {
    responses: {
      '204': {
        description: 'Partner PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Partner, {partial: true}),
        },
      },
    })
    partner: Partner,
  ): Promise<void> {
    await this.partnerRepository.updateById(id, partner);
  }

  @put('/partners/{id}', {
    responses: {
      '204': {
        description: 'Partner PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() partner: Partner,
  ): Promise<void> {
    await this.partnerRepository.replaceById(id, partner);
  }

  @del('/partners/{id}', {
    responses: {
      '204': {
        description: 'Partner DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.partnerRepository.deleteById(id);
  }
}
