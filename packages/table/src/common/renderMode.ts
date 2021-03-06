/**
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved. Licensed
 * under the BSD-3 License as modified (the “License”); you may obtain a copy of
 * the license at https://github.com/palantir/blueprint/blob/master/LICENSE and
 * https://github.com/palantir/blueprint/blob/master/PATENTS
 */

export enum RenderMode {
    /**
     * Renders cells in batches across multiple animation frames. This improves
     * performance by spreading out work to keep a high FPS and avoid blocking
     * the UI, but it also introduces a noticeable scan-line rendering artifact
     * as successive batches of cells finish rendering.
     */
    BATCH,

    /**
     * Renders all cells synchronously on initial mount, then renders cells in
     * batches on successive updates (e.g. during scrolling). This helps to
     * remove visual rendering artifacts when the table is first rendered,
     * wihout slowing scrolling performance to a crawl.
     */
    BATCH_ON_UPDATE,

    /**
     * Disables the batch-rendering behavior, rendering all cells synchronously
     * at once. This may result in degraded performance on large tables and/or
     * on tables with complex cells.
     */
    NONE,
}
