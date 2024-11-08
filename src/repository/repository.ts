import { DbClient } from '../db';
import format from 'pg-format';

export abstract class Repository<T> {
  private readonly client;
  protected abstract tableName: string;

  constructor(client: DbClient) {
    this.client = client;
  }

  protected abstract toEntity(item: any): T

  async read(limit?: number, offset?: number) {
    const sql = format(
      'SELECT * FROM %I LIMIT $1 OFFSET $2',
      this.tableName
    )
    const rows = await this.client.query(sql, [limit, offset])
    return Array.isArray(rows) 
      ? rows.map(this.toEntity) 
      : this.toEntity(rows)
  }
}