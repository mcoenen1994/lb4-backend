import {DefaultCrudRepository} from '@loopback/repository';
import {Partner, PartnerRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PartnerRepository extends DefaultCrudRepository<
  Partner,
  typeof Partner.prototype.id,
  PartnerRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Partner, dataSource);
  }
}
