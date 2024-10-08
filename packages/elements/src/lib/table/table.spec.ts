import {TableHeaderCell} from './table-header-cell'
import {TableHead} from './table-head'
import {TableBody} from './table-body'
import {TableCell} from './table-cell'
import {TableRow} from './table-row'
import {Table} from './table'

describe('table', () => {
  it('should create instance', () => {
    const element = new Table()

    expect(element).toBeInstanceOf(Table)
  })

  it('should create table-head instance', () => {
    const element = new TableHead()

    expect(element).toBeInstanceOf(TableHead)
  })

  it('should create table-body instance', () => {
    const element = new TableBody()

    expect(element).toBeInstanceOf(TableBody)
  })

  it('should create table-row instance', () => {
    const element = new TableRow()

    expect(element).toBeInstanceOf(TableRow)
  })

  it('should create table-cell instance', () => {
    const element = new TableCell()

    expect(element).toBeInstanceOf(TableCell)
  })

  const element = new TableHeaderCell()

  expect(element).toBeInstanceOf(TableHeaderCell)
})
