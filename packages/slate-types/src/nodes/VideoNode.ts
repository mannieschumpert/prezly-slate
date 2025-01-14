import type { OEmbedInfo } from '@prezly/sdk';

import { isOEmbedInfo } from '../sdk';

import type { ElementNode } from './ElementNode';
import { isElementNode } from './ElementNode';
import { isNonEmptyString, isObject, isUuid } from './validation';

export const VIDEO_NODE_TYPE = 'video';

export interface VideoNode extends ElementNode {
    type: typeof VIDEO_NODE_TYPE;
    uuid: string;
    url: string;
    oembed: OEmbedInfo;
}

export function isVideoNode(value: any): value is VideoNode {
    return isElementNode<ElementNode>(value, VIDEO_NODE_TYPE);
}

export function validateVideoNode(node: Partial<VideoNode> | undefined): node is VideoNode {
    return (
        isObject(node) &&
        node.type === VIDEO_NODE_TYPE &&
        isUuid(node.uuid) &&
        isNonEmptyString(node.url) &&
        isOEmbedInfo(node.oembed)
    );
}
