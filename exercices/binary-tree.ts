interface NodeTree {
  value: number | undefined
  left: NodeTree | undefined
  right: NodeTree | undefined
}

class BinaryTree {
  public root: NodeTree = this.create()

  private create(value?: number): NodeTree {
    return {
      value,
      left: undefined,
      right: undefined,
    }
  }

  private get(value: number, node: NodeTree): NodeTree {
    return node?.value === undefined || value === node.value
      ? node
      : value > node.value && node.right
      ? this.get(value, node.right)
      : value < node.value && node.left
      ? this.get(value, node.left)
      : node
  }

  private _find(value: number, node: NodeTree | undefined): NodeTree | null {
    return node?.value === undefined
      ? null
      : value === node.value
      ? node
      : this._find(value, value > node.value ? node.right : node.left)
  }

  find(value: number): NodeTree | null {
    return this._find(value, this.root)
  }

  insert(value: number): void {
    const node = this.get(value, this.root)

    if (node.value === undefined) {
      node.value = value
    } else if (value > node.value) {
      node.right = this.create(value)
    } else if (value < node.value) {
      node.left = this.create(value)
    }
  }
}

function main(): void {
  const tree = new BinaryTree()

  const insertList = [
    -8, 19, -12, 5, -25, 11, 28, -15, 3, 22, -7, 9, -18, 16, -29, 2, 26, -20,
    14, -6, 27, -17, 7, -24, 1, 30, -13, 10, -23, 4,
  ]

  for (const i of insertList) {
    tree.insert(i)
  }

  console.log(tree.root)
  console.log(tree.find(1))
}

main()
