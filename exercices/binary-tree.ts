export interface NodeTree {
  value: number | undefined
  left?: NodeTree | undefined
  right?: NodeTree | undefined
}

export class BinaryTree {
  public root: NodeTree = this.create()

  private create(value?: number): NodeTree {
    return { value }
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
