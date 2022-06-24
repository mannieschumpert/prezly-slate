import { type Location, Path, Transforms } from 'slate';
import { ReactEditor } from 'slate-react';

import { Traverse } from '../core';
import { TableRowNode, TableCellNode } from '../nodes';
import type { TablesEditor } from '../TablesEditor';
import type { VerticalSides } from '../utils/types';

export function insertRow(
    editor: TablesEditor,
    location: Location | undefined = editor.selection ?? undefined,
    side: VerticalSides,
) {
    if (!location) {
        return false;
    }

    const traverse = Traverse.create(editor, location);

    if (!traverse) {
        return false;
    }

    const { activeRow } = traverse;
    const anchorRow = side === 'above' ? activeRow : activeRow.rowBelow ?? activeRow;

    const cellsToAdd = anchorRow.cells.reduce((acc, c) => {
        if (c.isVirtual && TableCellNode.getCellRowspan(c.node) > 1) {
            return acc;
        } else {
            return acc + 1;
        }
    }, 0);

    const newRow = TableRowNode.createTableRow(editor, { children: cellsToAdd });

    const at = side === 'bellow' ? Path.next(anchorRow.path) : anchorRow.path;
    Transforms.insertNodes(editor, newRow, { at });

    ReactEditor.focus(editor);

    return true;
}