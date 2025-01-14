import type { HeadingNode, ListNode, ParagraphNode, QuoteNode } from '@prezly/slate-types';
import {
    isHeadingNode,
    isListNode,
    isParagraphNode,
    isQuoteNode,
    isTableNode,
    isTableRowNode,
    isTableCellNode,
} from '@prezly/slate-types';
import type { Node } from 'slate';

export type RichFormattedTextElement = ParagraphNode | HeadingNode | QuoteNode | ListNode;
export type Formatting = RichFormattedTextElement['type'] | 'multiple';

export function isRichFormattedTextElement(node: Node): node is RichFormattedTextElement {
    return (
        isParagraphNode(node) ||
        isHeadingNode(node) ||
        isQuoteNode(node) ||
        isListNode(node) ||
        isTableNode(node) ||
        isTableRowNode(node) ||
        isTableCellNode(node)
    );
}
