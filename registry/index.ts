import { block } from './registry-blocks'
import { plugin } from './registry-plugins'
import type { Registry } from './schema'

export const registry: Registry = [...block, ...plugin]
