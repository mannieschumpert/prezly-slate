import type { Editor, Path, Node, NodeEntry } from 'slate';

export type HierarchyNodeQuery = (node: Node, path: Path, editor: Editor) => boolean;
export type HierarchyNormalizer = (editor: Editor, path: Path) => boolean;
export type HierarchyFixer = (editor: Editor, entry: NodeEntry) => boolean;

export const EDITOR_NODE_TYPE = Symbol('EDITOR');
export const TEXT_NODE_TYPE = Symbol('TEXT');

export type NodesHierarchySchema = {
    [EDITOR_NODE_TYPE]: HierarchyNormalizer[];
    [TEXT_NODE_TYPE]: HierarchyNormalizer[];
} & Record<string, HierarchyNormalizer[]>;
