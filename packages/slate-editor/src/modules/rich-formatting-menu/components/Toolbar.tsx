import { Alignment } from '@prezly/slate-types';
import React from 'react';

import { Menu } from '#components';
import {
    AlignCenter,
    AlignLeft,
    AlignRight,
    FormatBold,
    FormatItalic,
    FormatStyleNormal,
    FormatStyleSubscript,
    FormatStyleSuperscript,
    FormatUnderline,
    Link,
} from '#icons';

import type { Formatting } from '../types';

import { FormattingDropdown } from './FormattingDropdown';

interface Props {
    // state
    alignment: Alignment[];
    formatting: Formatting | null;
    isBold: boolean;
    isItalic: boolean;
    isUnderline: boolean;
    isSubScript: boolean;
    isSuperScript: boolean;
    isLink: boolean;
    // callbacks
    onAlignment: (align: Alignment) => void;
    onBold: () => void;
    onItalic: () => void;
    onUnderline: () => void;
    onSubSuperScript: () => void;
    onLink: () => void;
    onFormatting: (formatting: Formatting) => void;
    // features
    withAlignment: boolean;
    withBoldFormat: boolean;
    withBlockquotes: boolean;
    withHeadings: boolean;
    withInlineLinks: boolean;
    withLists: boolean;
    withParagraphs: boolean;
}

export function Toolbar({
    // state
    alignment,
    isBold,
    isItalic,
    isUnderline,
    isSubScript,
    isSuperScript,
    isLink,
    formatting,
    // callbacks
    onAlignment,
    onBold,
    onItalic,
    onUnderline,
    onSubSuperScript,
    onLink,
    onFormatting,
    // features
    withAlignment,
    withBoldFormat = true,
    withBlockquotes,
    withInlineLinks,
    withHeadings,
    withLists,
    withParagraphs,
}: Props) {
    return (
        <>
            <Menu.ButtonGroup>
                {withBoldFormat && (
                    <Menu.Button active={isBold} onClick={onBold}>
                        <Menu.Icon icon={FormatBold} />
                    </Menu.Button>
                )}
                <Menu.Button active={isItalic} onClick={onItalic}>
                    <Menu.Icon icon={FormatItalic} />
                </Menu.Button>
                <Menu.Button active={isUnderline} onClick={onUnderline}>
                    <Menu.Icon icon={FormatUnderline} />
                </Menu.Button>

                <Menu.Button active={isSubScript || isSuperScript} onMouseDown={onSubSuperScript}>
                    {isSubScript && <Menu.Icon icon={FormatStyleSubscript} />}
                    {isSuperScript && <Menu.Icon icon={FormatStyleSuperscript} />}
                    {!(isSubScript || isSuperScript) && <Menu.Icon icon={FormatStyleNormal} />}
                </Menu.Button>
            </Menu.ButtonGroup>

            {withAlignment && (
                <Menu.ButtonGroup>
                    <Menu.Button
                        active={alignment.includes(Alignment.LEFT)}
                        onClick={() => onAlignment(Alignment.LEFT)}
                    >
                        <Menu.Icon icon={AlignLeft} />
                    </Menu.Button>
                    <Menu.Button
                        active={alignment.includes(Alignment.CENTER)}
                        onClick={() => onAlignment(Alignment.CENTER)}
                    >
                        <Menu.Icon icon={AlignCenter} />
                    </Menu.Button>
                    <Menu.Button
                        active={alignment.includes(Alignment.RIGHT)}
                        onClick={() => onAlignment(Alignment.RIGHT)}
                    >
                        <Menu.Icon icon={AlignRight} />
                    </Menu.Button>
                </Menu.ButtonGroup>
            )}

            {withInlineLinks && (
                <Menu.ButtonGroup>
                    <Menu.Button active={isLink} onClick={onLink}>
                        <Menu.Icon icon={Link} />
                    </Menu.Button>
                </Menu.ButtonGroup>
            )}

            {(withBlockquotes || withHeadings || withLists || withParagraphs) && (
                <FormattingDropdown
                    onChange={onFormatting}
                    value={formatting}
                    withBlockquotes={withBlockquotes}
                    withHeadings={withHeadings}
                    withLists={withLists}
                    withParagraphs={withParagraphs}
                />
            )}
        </>
    );
}
