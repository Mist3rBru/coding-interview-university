import { BinaryTree, NodeTree } from './binary-tree'

describe('BinaryTree', () => {
  it('should add lower value to the left', () => {
    const sut = new BinaryTree()

    sut.insert(0)
    sut.insert(-1)

    expect(sut.root).toStrictEqual<NodeTree>({
      value: 0,
      left: {
        value: -1,
      },
    })
  })

  it('should add higher value to the right', () => {
    const sut = new BinaryTree()

    sut.insert(0)
    sut.insert(1)

    expect(sut.root).toStrictEqual<NodeTree>({
      value: 0,
      right: {
        value: 1,
      },
    })
  })

  it('should add higher value to the right and balance', () => {
    const sut = new BinaryTree()

    sut.insert(0)
    sut.insert(1)
    sut.insert(2)

    expect(sut.root).toStrictEqual<NodeTree>({
      value: 0,
      right: {
        value: 1,
        right: {
          value: 2,
        },
      },
    })
  })
})
