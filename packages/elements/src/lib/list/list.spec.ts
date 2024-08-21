import {ListItem} from './list-item'
import {OrderedList} from './ordered-list'
import {UnorderedList} from './unordered-list'

describe('list', () => {
  it('should create instance', () => {
    const element = new ListItem()

    expect(element).toBeInstanceOf(ListItem)
  })

  it('should create ordered list instance', () => {
    const element = new OrderedList()

    expect(element).toBeInstanceOf(OrderedList)
  })

  it('should create unordered list instance', () => {
    const element = new UnorderedList()

    expect(element).toBeInstanceOf(UnorderedList)
  })
})
