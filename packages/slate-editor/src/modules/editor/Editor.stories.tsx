import type { CSSProperties } from 'react';
import React, { useState } from 'react';

import type { FileAttachmentExtensionParameters } from '#extensions/file-attachment';
import type { Settings as FloatingAddMenuExtensionParameters } from '#extensions/floating-add-menu';
import type { PlaceholderMentionsExtensionParameters } from '#extensions/placeholder-mentions';

import Editor from './Editor';
import { createEmptyValue } from './lib/createEmptyValue';
import type { Value } from './types';

export default {
    title: 'Components/Editor',
    component: Editor,
};

interface IBaseProps {
    className: string;
    style: CSSProperties;
    withAlignmentControls: boolean;
    withAutoformat: boolean;
    withCursorInView?: {
        minBottom: number;
        minTop: number;
    };
    withAttachments?: FileAttachmentExtensionParameters;
    withRichFormatting?: {
        menu?: boolean;
        blocks?: boolean;
        links?: boolean;
        withNewTabOption?: boolean;
    };
    withFloatingAddMenu?: FloatingAddMenuExtensionParameters;
}

const BaseTemplate = (args: IBaseProps) => {
    const [value, setValue] = useState<Value>(createEmptyValue());

    return (
        <Editor
            {...args}
            placeholder="Start typing..."
            availableWidth={680}
            onChange={setValue}
            value={value}
        />
    );
};

export const Base = BaseTemplate.bind({}) as any;
Base.args = {
    className: '',
    withAlignmentControls: true,
    withAutoformat: true,
    style: { marginLeft: '3rem' },
    withCursorInView: undefined,
    withRichFormatting: {
        blocks: true,
        links: true,
        menu: true,
        withNewTabOption: undefined,
    },
    withFloatingAddMenu: {
        tooltip: {
            placement: 'left',
            title: 'Add content to your story',
        },
    },
    withAttachments: {
        styled: true,
    },
} as IBaseProps;

const WithPlaceholdersTemplate = (
    args: IBaseProps & { withPlaceholders: PlaceholderMentionsExtensionParameters },
) => {
    const [value, setValue] = useState<Value>(createEmptyValue());

    return (
        <Editor
            {...args}
            placeholder="Start typing..."
            availableWidth={680}
            onChange={setValue}
            value={value}
        />
    );
};

export const WithPlaceholders = WithPlaceholdersTemplate.bind({}) as any;
WithPlaceholders.args = {
    className: '',
    withAlignmentControls: true,
    withAutoformat: true,
    style: { marginLeft: '3rem' },
    withCursorInView: undefined,
    withRichFormatting: {
        blocks: true,
        links: true,
        menu: true,
    },
    withFloatingAddMenu: {
        tooltip: {
            placement: 'left',
            title: 'Add content to your story',
        },
    },
    withAttachments: {
        styled: true,
    },
    withPlaceholders: {
        placeholders: [
            {
                key: 'contact.firstname',
                text: 'First name',
            },
            {
                key: 'contact.lastname',
                text: 'Last name',
            },
            {
                key: 'contact.fullname',
                text: 'Full name',
            },
            {
                key: 'release.url',
                text: 'Link to story',
            },
            {
                key: 'release.shorturl',
                text: 'Short link to story',
            },
        ],
    },
} as IBaseProps & { withPlaceholders?: PlaceholderMentionsExtensionParameters };