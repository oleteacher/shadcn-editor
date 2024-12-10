/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import * as React from 'react'

import { BookOpenIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'

export function DocsPlugin(): JSX.Element {
  return (
    <a target="__blank" href="/docs" className="absolute right-3 top-3 z-20">
      <Button size="icon" variant="default">
        <BookOpenIcon className="size-4" />
      </Button>
    </a>
  )
}
