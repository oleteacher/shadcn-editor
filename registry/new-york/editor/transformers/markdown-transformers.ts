import {
  CHECK_LIST,
  ELEMENT_TRANSFORMERS,
  MULTILINE_ELEMENT_TRANSFORMERS,
  TEXT_FORMAT_TRANSFORMERS,
  TEXT_MATCH_TRANSFORMERS,
  Transformer,
} from '@lexical/markdown'

import { EMOJI } from '@/registry/new-york/editor/transformers/markdown-emoji-transformer'
import { EQUATION } from '@/registry/new-york/editor/transformers/markdown-equation-transofrmer'
import { HR } from '@/registry/new-york/editor/transformers/markdown-hr-transformer'
import { IMAGE } from '@/registry/new-york/editor/transformers/markdown-image-transformer'
import { TABLE } from '@/registry/new-york/editor/transformers/markdown-table-transformer'
import { TWEET } from '@/registry/new-york/editor/transformers/markdown-tweet-transformer'

export const MARKDOWN_TRANSFORMERS: Array<Transformer> = [
  TABLE,
  HR,
  IMAGE,
  EMOJI,
  EQUATION,
  TWEET,
  CHECK_LIST,
  ...ELEMENT_TRANSFORMERS,
  ...MULTILINE_ELEMENT_TRANSFORMERS,
  ...TEXT_FORMAT_TRANSFORMERS,
  ...TEXT_MATCH_TRANSFORMERS,
]
